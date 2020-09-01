<template>
  <view
    class="fixed-bottom flex align-center justify-between bg-white px-2 border-top border-light-secondary"
    style="height: 50px;"
  >
    <view class="flex-fill py-1 rounded" style="background-color: rgba(0, 0, 0, 0.05);">
      <input
        type="text"
        class="px-2"
        placeholder="文明发言"
        placeholder-class="text-light-muted"
        v-model="content"
        @confirm="onSubmit"
      />
    </view>
    <view
      class="flex-shrink-0 text-center text-main animate__animated"
      hover-class="animate__pulse"
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
