<template>
  <view :style="'height: ' + scrollHeight + 'px;'">
    <!-- 消息列表 开始 -->
    <template v-if="dataList.length > 0">
      <block v-for="(item, index) in dataList" :key="index">
        <msg-list :item="item" :index="index"></msg-list>
      </block>
    </template>
    <template v-else>
      <no-data></no-data>
    </template>
    <!-- 消息列表 结束 -->

    <!-- 弹出层 开始 -->
    <uni-popup ref="popup" type="top">
      <view class="bg-white">
        <view class="flex align-center justify-center p-2" @click.stop="toggle('friend')">
          <text class="iconfont icon-sousuo"></text>
          <text class="ml-2">添加好友</text>
        </view>
        <view class="border-bottom border-light-secondary"></view>
        <view class="flex align-center justify-center p-2" @click.stop="toggle('clear')">
          <text class="iconfont icon-shanchu"></text>
          <text class="ml-2">清空列表</text>
        </view>
      </view>
    </uni-popup>
    <!-- 弹出层 结束 -->
  </view>
</template>

<script>
import msgList from '@/components/common/msg-list'
import uniPopup from '@/components/uni-ui/uni-popup/uni-popup'
let demo = [
  {
    avatar: '/static/default.jpg',
    username: '煎蛋',
    created_at: '1591851583',
    content: '内容内容内容内容内容内容内容内容内',
    unread: 1,
  },
  {
    avatar: '/static/default.jpg',
    username: '鸽子',
    created_at: '1598451583',
    content: '咕咕咕咕咕咕咕咕咕',
    unread: 10,
  },
  {
    avatar: '/static/default.jpg',
    username: '麻花藤',
    created_at: '1593851583',
    content: '麻花藤麻花藤麻花藤',
    unread: 5,
  },
  {
    avatar: '/static/default.jpg',
    username: '川普',
    created_at: '1598851817',
    content: 'CHINA!',
    unread: 5,
  },
]
export default {
  components: {
    msgList,
    uniPopup,
  },
  data() {
    return {
      scrollHeight: 600,
      dataList: [],
    }
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight
    this.initData()
  },
  onPullDownRefresh() {
    this.dataList = []
    setTimeout(() => {
      uni.stopPullDownRefresh()
      this.initData()
    }, 500)
  },
  onNavigationBarButtonTap(e) {
    switch (e.index) {
      case 0: // 左边按钮
        this.$refs.popup.close()
        uni.navigateTo({
          url: '../friend-list/friend-list',
        })
        break
      case 1: // 右边按钮
        this.$refs.popup.open()
        break
    }
  },
  methods: {
    initData() {
      this.dataList = demo
    },
    toggle(e) {
      switch (e) {
        case 'friend':
          console.log('添加好友')
          break
        case 'clear':
          console.log('清空列表')
          break
      }
      this.$refs.popup.close()
    },
  },
}
</script>

<style scoped></style>
