<template>
  <view>
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
          <template v-if="list.length > 0">
            <block v-for="(item, index) in list" :key="index">
              <common-list :item="item" :index="index" @follow="follow" @support="support"></common-list>
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

      <!-- 话题 -->
      <swiper-item>
        <scroll-view scroll-y style="height: 100%;">
          <template v-if="list.length > 0"> </template>
          <template v-else>
            <!-- 无数据提示 -->
            <no-data></no-data>
          </template>
        </scroll-view>
      </swiper-item>
    </swiper>
    <!-- 内容区 结束 -->
  </view>
</template>

<script>
import common from '@/common/mixins/common'
import commonList from '@/components/common/common-list'
import loadMore from '@/components/common/load-more'
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar'
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
    uniNavBar,
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
      list: [],
    }
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight - res.statusBarHeight - 44
    this.list = demo
  },
  methods: {
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
          this.list = [...this.list, ...this.list]
          this.load.type = 0
        }, 250)
      }
    },
    // 关注 | 取消关注
    follow(index) {
      let item = this.list[index]
      item.isFollow = !item.isFollow
      return uni.showToast({
        title: item.isFollow ? '关注成功' : '已取消关注',
        icon: 'none',
      })
    },
    // 赞 | 踩
    support(e) {
      // 拿到当前操作的对象
      let item = this.list[e.index]
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

<style></style>
