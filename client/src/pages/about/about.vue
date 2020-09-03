<template>
  <view>
    <view class="flex align-center justify-center flex-column py-4">
      <image class="rounded-circle" style="width: 100px; height: 100px;" src="/static/nothing.png" mode="aspectFill" />
      <text class="font text-muted mt-2">version: 1.0.0</text>
    </view>
    <uni-list-item title="版本更新"></uni-list-item>
    <uni-list-item title="社区用户协议"></uni-list-item>
  </view>
</template>

<script>
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
export default {
  components: {
    uniListItem,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
