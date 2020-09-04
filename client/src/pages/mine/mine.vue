<template>
  <view>
    <!-- 用户信息 开始 -->
    <view class="flex align-center p-2">
      <image
        class="rounded-circle flex-shrink-0"
        style="width: 100rpx; height: 100rpx;"
        :src="userData.avatar || '/static/default.jpg'"
        mode="aspectFill"
        @click.stop="navigateTo('user-space')"
      />
      <view class="mx-2 flex-fill flex flex-column">
        <text class="font-md">{{ userData.name }}</text>
        <view class="flex align-center text-light-muted font-sm">
          <text>总帖子 {{ userData.total_count }}</text>
          <text class="ml-2">今日发帖 {{ userData.today_count }}</text>
        </view>
      </view>
      <text class="flex-shrink-0 iconfont icon-jinru font-md px-2"></text>
    </view>
    <view class="flex align-center p-2">
      <view class="flex-fill flex align-center flex-column" v-for="(item, index) in userData.list" :key="index">
        <text class="font-lg font-weight-bold">{{ item.count }}</text>
        <text class="text-muted">{{ item.title }}</text>
      </view>
    </view>
    <!-- 用户信息 结束 -->

    <view class="px-4 py-2">
      <image
        class="w-100 rounded"
        style="height: 170rpx;"
        src="http://qfjny782p.hn-bkt.clouddn.com/qiushibk/demo/banner1.jpg"
        mode="aspectFill"
      />
    </view>

    <!-- 按钮列表 开始 -->
    <uni-list-item title="流量历史" :showExtraIcon="true">
      <text slot="icon" class="iconfont icon-liulan"></text>
    </uni-list-item>
    <uni-list-item title="社区认证" :showExtraIcon="true">
      <text slot="icon" class="iconfont icon-huiyuanvip"></text>
    </uni-list-item>
    <uni-list-item title="审核帖子" :showExtraIcon="true">
      <text slot="icon" class="iconfont icon-keyboard"></text>
    </uni-list-item>
    <!-- #ifdef MP -->
    <uni-list-item title="我的设置" :showExtraIcon="true" @click="navigateTo('user-set')">
      <text slot="icon" class="iconfont icon-shezhi"></text>
    </uni-list-item>
    <!-- #endif -->
    <!-- 按钮列表 结束 -->
  </view>
</template>

<script>
import common from '@/common/mixins/common'
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
export default {
  components: {
    uniListItem,
  },
  mixins: [common],
  data() {
    return {
      userData: {
        id: 1,
        name: '煎蛋',
        avatar: 'http://qfjny782p.hn-bkt.clouddn.com/qiushibk/demo/default.jpg',
        total_count: 1,
        today_count: 0,
        list: [
          {
            title: '帖子',
            count: 1,
          },
          {
            title: '动态',
            count: 2,
          },
          {
            title: '评论',
            count: 3,
          },
          {
            title: '粉丝',
            count: 4,
          },
        ],
      },
    }
  },
  onNavigationBarButtonTap() {
    this.navigateTo('user-set')
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
  methods: {},
}
</script>
<style scoped></style>
