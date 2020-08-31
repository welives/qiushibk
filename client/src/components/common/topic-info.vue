<template>
  <view>
    <view class="position-relative">
      <image class="w-100" style="height: 300rpx; filter: blur(7px);" :src="detail.cover" mode="aspectFill" />
    </view>
    <view class="position-relative px-2 bg-white" style="z-index: 10;">
      <view class="flex">
        <image
          class="rounded flex-shrink-0"
          style="width: 150rpx; height: 150rpx; margin-top: -75rpx;"
          :src="detail.cover"
          mode="aspectFill"
        />
        <text class="font-md ml-2 mt-1">#{{ detail.title }}#</text>
      </view>
      <view class="flex align-center text-light-muted my-1">
        <text>动态:{{ detail.news_count }}</text>
        <text class="ml-2">今日:{{ detail.today_count }}</text>
      </view>
      <view class="text-light-muted my-1 font">{{ detail.desc }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['detail'],
}
</script>

<style scoped></style>
