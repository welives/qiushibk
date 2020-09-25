<template>
  <view>
    <!-- #ifdef MP -->
    <!-- 自定义导航 开始 -->
    <uni-nav-bar :border="false" statusBar fixed @clickLeft="toFriendList">
      <view slot="left" class="px-3 text-center iconfont icon-haoyou font-lg"></view>
      <view class="flex align-center justify-center w-100">
        <text class="font">消息</text>
        <view class="px-2 text-center iconfont icon-caidan font-lg" @click.stop="openPopup"></view>
      </view>
    </uni-nav-bar>
    <!-- 自定义导航 结束 -->
    <!-- #endif -->

    <!-- 消息列表 开始 -->
    <template v-if="dataList.length > 0">
      <block v-for="(item, index) in dataList" :key="index">
        <msg-list :item="item" :index="index" @mark="markAsRead"></msg-list>
      </block>
      <load-more :loadText="dataList.length > limit ? load.text[load.type] : load.text[2]"></load-more>
    </template>
    <template v-else>
      <no-data></no-data>
    </template>
    <!-- 消息列表 结束 -->

    <!-- 弹出层 开始 -->
    <uni-popup ref="popup" type="top">
      <!-- #ifdef MP -->
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
      <view class="bg-white">
        <view class="flex align-center justify-center p-2" @click.stop="toggle('friend')">
          <text class="iconfont icon-sousuo"></text>
          <text class="ml-2 font">添加好友</text>
        </view>
        <view class="border-bottom border-light-secondary"></view>
        <view class="flex align-center justify-center p-2" @click.stop="toggle('clear')">
          <text class="iconfont icon-shanchu"></text>
          <text class="ml-2 font">清空列表</text>
        </view>
      </view>
      <!-- #endif -->
    </uni-popup>
    <!-- 弹出层 结束 -->
  </view>
</template>

<script>
import demo from './demo'
import common from '@/common/mixins/common'
import loadMore from '@/components/common/load-more'
import msgList from '@/components/common/msg-list'
import uniPopup from '@/components/uni-ui/uni-popup/uni-popup'
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar'

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
      dataList: [],
    }
  },
  onLoad() {
    this.initData()
  },
  // 监听刷新事件
  onPullDownRefresh() {
    setTimeout(() => {
      uni.stopPullDownRefresh()
      this.initData()
    }, 500)
  },
  // 监听底部原生tabbar点击事件
  onTabItemTap() {
    this.doRefresh()
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
      this.dataList = demo.dataList.map((v) => {
        return { ...v }
      })
    },
    toggle(e) {
      switch (e) {
        case 'friend':
          this.navigateTo('search', 'type=user')
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
    // 标记为已读
    markAsRead(e) {
      this.dataList[e].isRead = true
    },
  },
}
</script>

<style scoped></style>
