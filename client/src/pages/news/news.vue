<template>
  <view @touchmove.stop.prevent="() => {}">
    <!-- 自定义导航栏 开始 -->
    <uni-nav-bar
      :border="false"
      statusBar
      fixed
      @clickLeft="navigateTo('add-posts')"
      @clickRight="navigateTo('add-posts')"
    >
      <!-- #ifdef MP -->
      <text slot="left" class="px-3 iconfont icon-fatie_icon font-lg"></text>
      <!-- #endif -->
      <view class="flex align-center justify-center font-weight-bold w-100">
        <block v-for="(item, index) in tabBars" :key="index">
          <view
            class="mx-2"
            :class="tabIndex === index ? 'text-main font-lg' : 'text-muted font-md'"
            @click.stop="tabIndex = index"
            >{{ item.name }}</view
          >
        </block>
      </view>
      <!-- #ifndef MP -->
      <text slot="right" class="iconfont icon-fatie_icon font-lg"></text>
      <!-- #endif -->
    </uni-nav-bar>
    <!-- 自定义导航栏 结束 -->

    <!-- 内容区 开始 -->
    <swiper :current="tabIndex" :duration="150" :style="'height: ' + scrollHeight + 'px;'" @change="changeSwiper">
      <!-- 关注 -->
      <swiper-item>
        <scroll-view scroll-y style="height: 100%;" @scrolltolower="loadMore">
          <template v-if="dataList.length > 0">
            <block v-for="(item, index) in dataList" :key="index">
              <post-list :item="item" :index="index" @follow="follow" @support="support"></post-list>
              <view class="divider"></view>
            </block>
            <!-- 上拉加载 -->
            <load-more :loadText="dataList.length > limit ? load.text[load.type] : load.text[2]"></load-more>
          </template>
          <template v-else>
            <!-- 无数据提示 -->
            <no-data></no-data>
          </template>
        </scroll-view>
      </swiper-item>

      <!-- 话题 -->
      <swiper-item>
        <scroll-view scroll-y style="height: 100%;">
          <!-- 热门分类 -->
          <hot-cate :hotCate="hotCate"></hot-cate>
          <!-- 搜索框 -->
          <view class="px-2 my-2">
            <view
              class="bg-light rounded py-1 flex align-center justify-center text-secondary"
              @click.stop="navigateTo('search', 'type=topic')"
            >
              <text class="iconfont icon-sousuo"></text>
              <text class="ml-2">搜索话题</text>
            </view>
          </view>
          <!-- 轮播图 -->
          <swiper class="px-2 my-2" indicator-dots autoplay :interval="3000" :duration="1000">
            <swiper-item v-for="(item, index) in carousel" :key="index">
              <image class="w-100 rounded" style="height: 300rpx;" :src="item.cover" mode="aspectFill" />
            </swiper-item>
          </swiper>
          <view class="divider"></view>
          <!-- 最新更新 -->
          <view class="px-2 mt-2 font-md">最近更新</view>
          <block v-for="(item, index) in topicList" :key="index">
            <topic-list :item="item" :index="index"></topic-list>
          </block>
        </scroll-view>
      </swiper-item>
    </swiper>
    <!-- 内容区 结束 -->
  </view>
</template>

<script>
const demo = [
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
import common from '@/common/mixins/common'
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar'
import postList from '@/components/common/post-list'
import loadMore from '@/components/common/load-more'
import hotCate from '@/components/common/hot-cate'
import topicList from '@/components/common/topic-list'

export default {
  components: {
    uniNavBar,
    postList,
    loadMore,
    hotCate,
    topicList,
  },
  mixins: [common],
  data() {
    return {
      scrollHeight: 600,
      tabIndex: 0,
      tabBars: [
        { id: 1, name: '关注' },
        { id: 2, name: '话题' },
      ],
      dataList: [],
      hotCate: [
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
      ],
      carousel: [
        {
          cover: '/static/demo/banner1.jpg',
        },
        {
          cover: '/static/demo/banner2.jpg',
        },
        {
          cover: '/static/demo/banner3.jpg',
        },
      ],
      topicList: [
        {
          cover: '/static/demo/topicpic/1.jpeg',
          title: '话题名称1',
          desc: '话题描述1',
          news_count: 10,
          today_count: 10,
        },
        {
          cover: '/static/demo/topicpic/2.jpeg',
          title: '话题名称2',
          desc: '话题描述2',
          news_count: 10,
          today_count: 10,
        },
        {
          cover: '/static/demo/topicpic/3.jpeg',
          title: '话题名称3',
          desc: '话题描述3',
          news_count: 10,
          today_count: 10,
        },
        {
          cover: '/static/demo/topicpic/4.jpeg',
          title: '话题名称4',
          desc: '话题描述4',
          news_count: 10,
          today_count: 10,
        },
      ],
    }
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight - res.statusBarHeight - 44
    this.initData()
  },
  // 监听刷新事件
  onPullDownRefresh() {
    setTimeout(() => {
      uni.stopPullDownRefresh()
    }, 1000)
  },
  // 监听底部原生tabbar点击事件
  onTabItemTap() {
    this.doRefresh()
  },
  methods: {
    initData() {
      this.dataList = demo.map((v) => {
        return { ...v }
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
        setTimeout(() => {
          this.load.type = 1
          this.dataList = [...this.dataList, ...this.dataList]
          this.load.type = 0
        }, 500)
      }
    },
    // 关注 | 取消关注
    follow(index) {
      let item = this.dataList[index]
      item.isFollow = !item.isFollow
      return uni.showToast({
        title: item.isFollow ? '关注成功' : '已取消关注',
        icon: 'none',
      })
    },
    // 赞 | 踩
    support(e) {
      // 拿到当前操作的对象
      let item = this.dataList[e.index]
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
