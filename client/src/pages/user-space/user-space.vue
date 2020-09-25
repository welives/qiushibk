<template>
  <view>
    <!-- 头部 开始 -->
    <view class="flex align-center justify-center p-2 border-bottom border-light-secondary" style="height: 250rpx;">
      <image class="rounded-circle flex-shrink-0" style="width: 150rpx; height: 150rpx;" src="/static/default.jpg" />
      <view class="flex-fill flex-column flex" style="height: 100%;">
        <view class="flex align-center mb-1">
          <view class="flex-fill flex-column flex align-center">
            <text class="font-md font-weight-bold">1</text>
            <text class="text-muted">获赞</text>
          </view>
          <view class="flex-fill flex-column flex align-center">
            <text class="font-md font-weight-bold">2</text>
            <text class="text-muted">关注</text>
          </view>
          <view class="flex-fill flex-column flex align-center">
            <text class="font-md font-weight-bold">3</text>
            <text class="text-muted">粉丝</text>
          </view>
        </view>
        <view class="flex align-center justify-center">
          <view class="bg-main text-white rounded text-center py-1" style="width: 80%;">关注</view>
        </view>
      </view>
    </view>
    <!-- 头部 结束 -->

    <!-- 选项卡 开始 -->
    <view class="flex align-center w-100" style="height: 80rpx;">
      <block v-for="(item, index) in tabBars" :key="index">
        <view
          class="flex-fill text-center font-weight-bold"
          :class="tabIndex === index ? 'text-main font-lg' : 'font-md'"
          style="height: 100%;"
          @click.stop="tabIndex = index"
          >{{ item.name }}</view
        >
      </block>
    </view>
    <!-- 选项卡 结束 -->

    <!-- 滑动内容区 开始 -->
    <swiper :current="tabIndex" :duration="150" :style="'height: ' + scrollHeight + 'px;'" @change="changeSwiper">
      <swiper-item v-for="(item, index) in dataList" :key="index">
        <template v-if="item.key === 'home'">
          <view class="p-2 border-bottom">
            <view class="font-md pb-2">账号信息</view>
            <view class="text-muted">账号年龄：12个月</view>
            <view class="text-muted">UID：1</view>
          </view>
          <view class="p-2 border-bottom">
            <view class="font-md pb-2">个人信息</view>
            <view class="text-muted">星座：双子座</view>
            <view class="text-muted">职业：码农</view>
            <view class="text-muted">故乡：南宁</view>
            <view class="text-muted">情感：未婚</view>
          </view>
        </template>
        <template v-else>
          <scroll-view scroll-y style="height: 100%;" @scrolltolower="loadMore(index)">
            <template v-if="item.list.length > 0">
              <block v-for="(list, idx) in item.list" :key="idx">
                <post-list :item="list" :index="idx" @follow="doFollow" @support="doSupport"></post-list>
              </block>
              <!-- 上拉加载 -->
              <load-more :loadText="item.list.length > limit ? load.text[load.type] : load.text[2]"></load-more>
            </template>
            <template v-else>
              <!-- 无数据提示 -->
              <no-data></no-data>
            </template>
          </scroll-view>
        </template>
      </swiper-item>
    </swiper>
    <!-- 滑动内容区 结束 -->

    <uni-popup ref="popup" type="top">
      <view class="bg-white">
        <view class="flex align-center justify-center p-2" @click.stop="toggle('black')">
          <text class="iconfont icon-kulian"></text>
          <text class="ml-2 font">加入黑名单</text>
        </view>
        <view class="border-bottom border-light-secondary"></view>
        <view class="flex align-center justify-center p-2" @click.stop="toggle('chat')">
          <text class="iconfont icon-xiaoxi"></text>
          <text class="ml-2 font">聊天</text>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import demo from './demo'
import common from '@/common/mixins/common'
import postList from '@/components/common/post-list'
import uniPopup from '@/components/uni-ui/uni-popup/uni-popup'
import loadMore from '@/components/common/load-more'

export default {
  components: {
    postList,
    uniPopup,
    loadMore,
  },
  mixins: [common],
  data() {
    return {
      scrollHeight: 600,
      tabIndex: 0,
      tabBars: [
        { id: 1, name: '主页', key: 'home' },
        { id: 2, name: '帖子', key: 'post' },
        { id: 3, name: '动态', key: 'news' },
      ],
      dataList: [],
    }
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight - uni.upx2px(250 + 80)
    this.initData()
  },
  onNavigationBarButtonTap() {
    this.$refs.popup.open()
  },
  onBackPress() {
    this.$refs.popup.close()
  },
  methods: {
    // 初始化数据
    initData() {
      this.dataList = this.tabBars.map((v) => {
        let list = []
        if (v.key !== 'home') {
          list = demo.dataList.map((item) => {
            return { ...item }
          })
        }
        return {
          ...v,
          list,
        }
      })
    },
    // swiper组件左右切换
    changeSwiper(e) {
      this.tabIndex = e.detail.current
    },
    // scroll-view组件触底事件
    loadMore(index) {
      if (this.load.type !== 2) {
        if (this.load.type === 1) return
        let list = this.dataList[index].list
        setTimeout(() => {
          this.load.type = 1
          this.dataList[index].list = [...list, ...list]
          this.load.type = 0
        }, 500)
      }
    },
    // 点击弹出层选项
    toggle(e) {
      switch (e) {
        case 'black':
          uni.showToast({
            title: '加入黑名单',
            icon: 'none',
          })
          break
        case 'chat':
          this.navigateTo('user-chat')
          break
      }
      this.$refs.popup.close()
    },
    // 关注 | 取消关注
    doFollow(index) {
      let item = this.dataList[this.tabIndex].list[index]
      item.isFollow = !item.isFollow
      return uni.showToast({
        title: item.isFollow ? '关注成功' : '已取消关注',
        icon: 'none',
      })
    },
    // 赞 | 踩
    doSupport(e) {
      // 拿到当前操作的对象
      let item = this.dataList[this.tabIndex].list[e.index]
      // 之前没赞也没踩
      if (item.support.type === '') {
        item.support.type = e.type
        item.support[`${e.type}_count`]++
        return
      }
      // 之前赞过了
      if (item.support.type === 'praise' && e.type === 'blame') {
        // 赞-1
        item.support.praise_count--
        // 踩+1
        item.support.blame_count++
      }
      // 之前踩过了
      else if (item.support.type === 'blame' && e.type === 'praise') {
        // 赞+1
        item.support.praise_count++
        // 踩-1
        item.support.blame_count--
      }
      item.support.type = e.type
    },
  },
}
</script>

<style scoped></style>
