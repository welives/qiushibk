<template>
  <view @touchmove.stop.prevent="() => {}">
    <!-- #ifdef MP -->
    <!-- 微信小程序端生效 -->
    <!-- 自定义导航栏 开始 -->
    <view class="fixed-top bg-white flex align-center justify-between w-100" style="height: 40px;">
      <view
        class="flex-fill flex align-center justify-center rounded ml-1"
        style="background-color: #f5f4f2;color: #6d6c67;"
        @click.stop="navigateTo('search')"
      >
        <text class="iconfont icon-sousuo font-md"></text>
        <text class="ml-1">搜索帖子</text>
      </view>
      <view
        class="flex-shrink-0 text-center mx-1"
        style="width: 44px;color: #333333;"
        @click.stop="navigateTo('add-posts')"
      >
        <text class="iconfont font-lg">&#xe668;</text>
      </view>
    </view>
    <view style="height: 40px;"></view>
    <!-- 自定义导航栏 结束 -->
    <!-- #endif -->

    <!-- 顶部选项卡 开始 -->
    <scroll-view
      scroll-x
      class="scroll-row border-bottom border-light-secondary"
      style="height: 40px;"
      :scroll-into-view="scrollInto"
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
              <common-list :item="list" :index="idx" @follow="follow" @support="support"></common-list>
              <view class="divider"></view>
            </block>
            <!-- 上拉加载 -->
            <load-more :loadText="load.text[load.type]"></load-more>
          </template>
          <template v-else>
            <!-- 无数据提示 -->
            <no-data></no-data>
          </template>
        </scroll-view>
      </swiper-item>
    </swiper>
    <!-- 滑动内容区 结束 -->
  </view>
</template>

<script>
import common from '@/common/mixins/common'
import commonList from '@/components/common/common-list'
import loadMore from '@/components/common/load-more'
let demo = [
  {
    username: '煎蛋',
    avatar: '/static/default.jpg',
    created_at: '2020-08-28 19:36',
    isFollow: false,
    title: '测试标题',
    cover: '/static/demo/datapic/11.jpg',
    support: {
      type: 'praise',
      praise_count: 10,
      blame_count: 10,
    },
    comment_count: 0,
    share_count: 0,
  },
  {
    username: '咸鱼',
    avatar: '/static/default.jpg',
    created_at: '2020-08-28 19:36',
    isFollow: true,
    title: '测试标题',
    cover: '/static/demo/datapic/12.jpg',
    support: {
      type: 'blame',
      praise_count: 10,
      blame_count: 10,
    },
    comment_count: 0,
    share_count: 0,
  },
  {
    username: '绿师',
    avatar: '/static/default.jpg',
    created_at: '2020-08-28 19:36',
    isFollow: true,
    title: '测试标题',
    cover: '/static/demo/datapic/2.jpg',
    support: {
      type: '',
      praise_count: 0,
      blame_count: 0,
    },
    comment_count: 0,
    share_count: 0,
  },
]
export default {
  components: {
    commonList,
    loadMore,
  },
  mixins: [common],
  data() {
    return {
      // 顶部选项卡
      tabIndex: 0,
      tabBars: [
        {
          id: 1,
          name: '关注',
        },
        {
          id: 2,
          name: '推荐',
        },
        {
          id: 3,
          name: '体育',
        },
        {
          id: 4,
          name: '热点',
        },
        {
          id: 5,
          name: '财经',
        },
        {
          id: 6,
          name: '娱乐',
        },
        {
          id: 7,
          name: '军事',
        },
        {
          id: 8,
          name: '历史',
        },
        {
          id: 9,
          name: '本地',
        },
      ],
      scrollInto: '',
      dataList: [],
      scrollHeight: 600,
    }
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    // #ifdef MP
    // 微信小程序端生效 内容区高度 = 可用高度 - 自定义导航栏 - 选项卡
    this.scrollHeight = res.windowHeight - 40 - 40
    // #endif

    // #ifndef MP
    // 非微信小程序端生效 内容区高度 = 可用高度 - 选项卡
    this.scrollHeight = res.windowHeight - 40
    // #endif
    this.initData()
  },
  onNavigationBarSearchInputClicked(e) {
    this.navigateTo('search')
  },
  onNavigationBarButtonTap(e) {
    e.index === 0 && this.navigateTo('add-posts')
  },
  methods: {
    // 初始化数据
    initData() {
      let arr = []
      this.tabBars.forEach((v, index) => {
        if (index < 3) {
          arr.push({ list: demo })
        } else {
          arr.push({ list: [] })
        }
      })

      this.dataList = arr
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
      // 滚动到指定元素
      this.scrollInto = 'tab_' + this.tabBars[index].id
    },
    // swiper组件左右切换
    changeSwiper(e) {
      this.changeTab(e.detail.current)
    },
    // 关注 | 取消关注
    follow(index) {
      let item = this.dataList[this.tabIndex].list[index]
      item.isFollow = !item.isFollow
      return uni.showToast({
        title: item.isFollow ? '关注成功' : '已取消关注',
        icon: 'none',
      })
    },
    // 赞 | 踩
    support(e) {
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
