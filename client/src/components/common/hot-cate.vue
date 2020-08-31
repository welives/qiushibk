<template>
  <view class="px-2 border-bottom border-light-secondary">
    <view class="flex align-center justify-between">
      <text class="font-md">热门分类</text>
      <navigator url="../../pages/topic-nav/topic-nav" hover-class="bg-transparent">
        <view class="flex align-center text-light-muted">
          <text class="mr-1">更多</text>
          <text class="iconfont icon-jinru"></text>
        </view>
      </navigator>
    </view>
    <view class="flex align-center justify-center py-2">
      <view
        class="flex-shrink-0 border rounded bg-light font mx-1 animate__animated"
        hover-class="animate__pulse"
        v-for="(item, index) in hotCate"
        :key="index"
      >
        <text class="px-2">{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['hotCate'],
}
</script>

<style scoped></style>
