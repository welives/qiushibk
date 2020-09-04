<template>
  <view
    class="fixed-bottom flex align-center justify-between bg-white px-2 border-top border-light-secondary"
    style="height: 100rpx;"
  >
    <view class="flex-fill flex align-center rounded" style="height: 80rpx; ">
      <input
        class="px-2 w-100 bg-light rounded"
        style="height: 100%;"
        placeholder="文明发言"
        placeholder-class="text-light-muted"
        v-model="content"
        @confirm="onSubmit"
      />
    </view>
    <view
      class="flex-shrink-0 text-center text-main animated"
      hover-class="pulse"
      style="width: 50px;"
      @touchend.stop.prevent="onSubmit"
    >
      <text class="iconfont icon-fabu" style="font-size: 50rpx;"></text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      content: '',
    }
  },
  methods: {
    onSubmit() {
      if (!this.content) return
      this.$emit('submit', this.content)
      this.content = ''
    },
  },
}
</script>

<style scoped></style>
