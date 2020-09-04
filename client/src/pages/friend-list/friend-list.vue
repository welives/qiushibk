<template>
  <view>
    <!-- #ifdef MP -->
    <!-- 自定义导航栏 开始 -->
    <uni-nav-bar left-icon="back" :border="false" fixed statusBar @clickLeft="back()">
      <view class="flex align-center w-100" style="margin-left: -30px;">
        <view
          class="flex-fill text-center text-secondary py-1 bg-light rounded"
          @click.stop="navigateTo('search', 'type=user')"
        >
          <text class="iconfont icon-sousuo"></text>
          <text class="ml-1">搜索用户</text>
        </view>
      </view>
    </uni-nav-bar>
    <!-- 自定义导航栏 结束 -->
    <!-- #endif -->

    <!-- 选项卡 开始 -->
    <view class="flex align-center w-100" style="height: 80rpx;">
      <block v-for="(item, index) in tabBars" :key="index">
        <view
          class="flex-fill text-center font-weight-bold"
          :class="tabIndex === index ? 'text-main font-lg' : 'font-md'"
          style="height: 100%;"
          @click.stop="tabIndex = index"
          >{{ item.name }}<text v-if="item.count > 0" class="ml-1 font-sm text-muted">{{ item.count }}</text></view
        >
      </block>
    </view>
    <!-- 选项卡 结束 -->

    <!-- 滑动内容区 开始 -->
    <swiper :current="tabIndex" :duration="150" :style="'height: ' + scrollHeight + 'px;'" @change="changeSwiper">
      <swiper-item v-for="(item, index) in dataList" :key="index">
        <scroll-view scroll-y style="height: 100%;" @scrolltolower="loadMore(index)">
          <template v-if="item.list.length > 0">
            <block v-for="(list, idx) in item.list" :key="idx">
              <user-list :item="list" :index="index"></user-list>
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
  </view>
</template>

<script>
const demo = [
  {
    avatar: 'http://qfjny782p.hn-bkt.clouddn.com/demo/userpic/14.jpg',
    username: '靓女',
    sex: 2, // 0保密, 1男, 2女
    age: 18,
    isFollow: true,
  },
  {
    avatar: 'http://qfjny782p.hn-bkt.clouddn.com/demo/userpic/10.jpg',
    username: '靓仔',
    sex: 1,
    age: 23,
    isFollow: false,
  },
  {
    avatar: 'http://qfjny782p.hn-bkt.clouddn.com/demo/default.jpg',
    username: '煎蛋',
    sex: 0,
    age: 30,
    isFollow: true,
  },
  {
    avatar: 'http://qfjny782p.hn-bkt.clouddn.com/demo/userpic/8.jpg',
    username: '川普',
    sex: 1,
    age: 66,
    isFollow: false,
  },
]
import common from '@/common/mixins/common'
import userList from '@/components/common/user-list'
import loadMore from '@/components/common/load-more'
import uniBadge from '@/components/uni-ui/uni-badge/uni-badge'
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar'

export default {
  components: {
    userList,
    loadMore,
    uniBadge,
    uniNavBar,
  },
  mixins: [common],
  data() {
    return {
      scrollHeight: 600,
      tabIndex: 0,
      tabBars: [
        { id: 1, name: '关注', key: 'follow', count: 5 },
        { id: 2, name: '粉丝', key: 'fans', count: 10 },
        { id: 3, name: '互关', key: 'eachOther', count: 0 },
      ],
      dataList: [],
    }
  },
  computed: {},
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight - uni.upx2px(80)
    this.initData()
  },
  onNavigationBarSearchInputClicked() {
    this.navigateTo('search', 'type=user')
  },
  onNavigationBarButtonTap(e) {
    uni.navigateBack({ delta: 1 })
  },
  methods: {
    // 初始化数据
    initData() {
      let arr = []
      this.tabBars.forEach((v, index) => {
        if (index < 2) {
          arr.push({ list: demo })
        } else {
          arr.push({ list: [] })
        }
      })

      this.dataList = arr
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
  },
}
</script>

<style scoped></style>
