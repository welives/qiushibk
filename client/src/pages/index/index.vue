<template>
  <view>
    <!-- #ifdef MP -->
    <!-- 自定义导航栏 开始 -->
    <uni-nav-bar :border="false" fixed statusBar @clickLeft="navigateTo('add-posts')">
      <view slot="left" class="px-3 iconfont icon-fatie_icon font-lg"></view>
      <view class="flex align-center w-100" style="margin-left: -30px;">
        <view
          class="flex-fill text-center text-secondary py-1 bg-light rounded"
          @click.stop="navigateTo('search', 'type=post')"
        >
          <text class="iconfont icon-sousuo"></text>
          <text class="ml-1">搜索帖子</text>
        </view>
      </view>
    </uni-nav-bar>
    <!-- 自定义导航栏 结束 -->
    <!-- #endif -->

    <!-- 顶部选项卡 开始 -->
    <scroll-view
      scroll-x
      class="scroll-row border-bottom border-light-secondary"
      style="height: 80rpx;"
      :scroll-into-view="scrollTabInto"
      scroll-with-animation
    >
      <view
        class="scroll-row-item px-2 py-1"
        :class="tabIndex === index ? 'text-main font' : ''"
        :id="'tab_' + item.id"
        v-for="(item, index) in tabBars"
        :key="index"
        @click.stop="changeTab(index)"
      >
        <text
          class="pb-1 px-1"
          :class="tabIndex === index ? 'border-bottom border-main' : ''"
          style="border-width: 5rpx;"
          >{{ item.name }}</text
        >
      </view>
    </scroll-view>
    <!-- 顶部选项卡 结束 -->

    <!-- 滑动内容区 开始 -->
    <swiper :current="tabIndex" :duration="150" :style="'height: ' + scrollHeight + 'px;'" @change="changeSwiper">
      <swiper-item v-for="(item, index) in dataList" :key="index">
        <scroll-view scroll-y style="height: 100%;" @scrolltolower="loadMore(index)">
          <template v-if="item.list.length > 0">
            <block v-for="(list, idx) in item.list" :key="idx">
              <post-list :item="list" :index="idx" @follow="doFollow" @support="doSupport" @share="doShare"></post-list>
              <view class="divider"></view>
            </block>
            <!-- 上拉加载 -->
            <load-more :loadText="item.list.length > limit ? load.text[load.type] : load.text[2]"></load-more>
          </template>
          <template v-else>
            <!-- 无数据提示 -->
            <no-data></no-data>
          </template>
        </scroll-view>
      </swiper-item>
    </swiper>
    <!-- 滑动内容区 结束 -->
    <share-icon ref="share"></share-icon>
  </view>
</template>

<script>
import demo from './demo'
import common from '@/common/mixins/common'
import postList from '@/components/common/post-list'
import loadMore from '@/components/common/load-more'
import shareIcon from '@/components/common/share-icon'
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar'

export default {
  components: {
    postList,
    loadMore,
    shareIcon,
    uniNavBar,
  },
  mixins: [common],
  data() {
    return {
      scrollHeight: 600,
      // 顶部选项卡
      tabIndex: 0,
      tabBars: [],
      scrollTabInto: '',
      dataList: [],
    }
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    // #ifdef MP
    // 小程序端生效 内容区高度 = 可用高度 - 自定义导航栏 - 选项卡
    this.scrollHeight = res.windowHeight - 64 - uni.upx2px(80)
    // #endif

    // #ifndef MP
    // 非小程序端生效 内容区高度 = 可用高度 - 选项卡
    this.scrollHeight = res.windowHeight - uni.upx2px(80)
    // #endif
    this.initData()
  },
  // #ifndef MP
  // 原生导航栏输入框点击事件
  onNavigationBarSearchInputClicked() {
    this.navigateTo('search', 'type=post')
  },
  // 原生导航栏按钮点击事件
  onNavigationBarButtonTap() {
    this.navigateTo('add-posts')
  },
  // #endif
  // 监听刷新事件
  onPullDownRefresh() {
    setTimeout(() => {
      this.initData()
      uni.stopPullDownRefresh()
    }, 1000)
  },
  // 监听底部原生tabbar点击事件
  onTabItemTap() {
    this.doRefresh()
  },
  methods: {
    // 初始化数据
    initData() {
      this.tabBars = demo.tabBars.map((v) => {
        return { ...v }
      })
      this.load.type = 0
      this.dataList = this.tabBars.map((v, i) => {
        if (i < 3) {
          return {
            list: demo.dataList.map((item) => {
              return { ...item }
            }),
          }
        } else {
          return { list: [] }
        }
      })
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
    // 切换选项卡
    changeTab(index) {
      if (this.tabIndex === index) return
      this.tabIndex = index
      // 滚动到指定选项卡位置
      this.scrollTabInto = 'tab_' + this.tabBars[index].id
    },
    // swiper组件左右切换
    changeSwiper(e) {
      this.changeTab(e.detail.current)
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
    // 分享
    doShare() {
      this.$refs.share.open()
    },
  },
}
</script>

<style scoped></style>
