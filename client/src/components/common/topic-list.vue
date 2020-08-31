<template>
  <view class="p-2 flex align-center justify-center" @click.stop="open">
    <image class="rounded flex-shrink-0" :src="item.cover" mode="aspectFill" style="width: 150rpx; height: 150rpx;" />
    <view class="ml-2 flex-fill flex flex-column text-light-muted" style="line-height: 1.5;">
      <text class="text-body font-md">#{{ item.title }}#</text>
      <text>{{ item.desc }}</text>
      <view class="flex align-center">
        <text>动态:{{ item.news_count }}</text>
        <text class="ml-2">今日:{{ item.today_count }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    open() {
      uni.navigateTo({
        url: '../../pages/topic-detail/topic-detail?detail=' + encodeURIComponent(JSON.stringify(this.item)),
      })
    },
  },
}
</script>

<style scoped></style>
