<template>
  <view class="flex flex-column align-center justify-center pt-5">
    <image :src="$conf.ossUrl + '/nothing.png'" mode="aspectFill" style="width: 300rpx; height: 300rpx;" />
    <text class="text-light-muted">
      什么都没有...
    </text>
  </view>
</template>

<script>
import $conf from '@/common/config'
export default {}
</script>

<style scoped></style>
