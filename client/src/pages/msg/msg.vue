<template>
  <view :style="'height: ' + scrollHeight + 'px;'">
    <!-- #ifdef MP -->
    <!-- 微信小程序端生效 -->
    <!-- 自定义导航 开始 -->
    <uni-nav-bar title="消息" :border="false" statusBar fixed>
      <view slot="left" class="flex align-center w-100">
        <view class="flex-fill text-center iconfont icon-haoyou font-lg" @click.stop="toFriendList"></view>
        <view class="flex-fill text-center iconfont icon-caidan font-lg" @click.stop="openPopup"></view>
      </view>
    </uni-nav-bar>
    <!-- 自定义导航 结束 -->
    <!-- #endif -->

    <!-- 消息列表 开始 -->
    <template v-if="dataList.length > 0">
      <block v-for="(item, index) in dataList" :key="index">
        <msg-list :item="item" :index="index"></msg-list>
      </block>
      <load-more :loadText="load.text[load.type]"></load-more>
    </template>
    <template v-else>
      <no-data></no-data>
    </template>
    <!-- 消息列表 结束 -->

    <!-- 弹出层 开始 -->
    <uni-popup ref="popup" type="top">
      <!-- #ifdef MP -->
      <!-- 微信小程序端生效 -->
      <view class="bg-white position-absolute left-0 right-0" style="top: 64px;">
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
      <!-- #endif -->

      <!-- #ifndef MP -->
      <!-- 其他端生效 -->
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
      <!-- #endif -->
    </uni-popup>
    <!-- 弹出层 结束 -->
  </view>
</template>

<script>
import common from '@/common/mixins/common'
import loadMore from '@/components/common/load-more'
import msgList from '@/components/common/msg-list'
import uniPopup from '@/components/uni-ui/uni-popup/uni-popup'
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar'
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
    loadMore,
    msgList,
    uniPopup,
    uniNavBar,
  },
  mixins: [common],
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
    setTimeout(() => {
      uni.stopPullDownRefresh()
      this.initData()
    }, 500)
  },
  onReachBottom() {
    if (this.load.type !== 2) {
      if (this.load.type === 1) return
      let list = this.dataList
      // 模拟请求
      setTimeout(() => {
        this.load.type = 1
        this.dataList = [...list, ...list]
        this.load.type = 0
      }, 500)
    }
  },
  // #ifndef MP
  onNavigationBarButtonTap(e) {
    switch (e.index) {
      case 0: // 左边按钮
        this.toFriendList()
        break
      case 1: // 右边按钮
        this.$refs.popup.open()
        break
    }
  },
  // #endif
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
    toFriendList() {
      this.$refs.popup.close()
      uni.navigateTo({
        url: '../friend-list/friend-list',
      })
    },
    // #ifdef MP
    openPopup() {
      this.$refs.popup.open()
    },
    // #endif
  },
}
</script>

<style scoped></style>
