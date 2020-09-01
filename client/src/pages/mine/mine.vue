<template>
  <view>mine</view>
</template>

<script>
import common from '@/common/mixins/common'
export default {
  mixins: [common],
  data() {
    return {}
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
