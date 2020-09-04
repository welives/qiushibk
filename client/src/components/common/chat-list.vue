<template>
  <view>
    <!-- 时间 -->
    <view v-if="chatTime" class="py-1 flex align-center justify-center font-sm text-light-muted">{{ chatTime }}</view>
    <!-- 消息气泡 开始 -->
    <view class="flex align-start p-2" :style="isSelf ? 'flex-direction: row-reverse' : ''">
      <image class="rounded-circle" style="width: 80rpx; height: 80rpx;" :src="item.avatar" mode="aspectFill" />
      <view
        class="position-relative rounded p-2 mx-3 bubble-width"
        :class="isSelf ? 'bubble-bg-right' : 'bubble-bg-left'"
      >
        <text class="text-wrap" :class="isSelf ? 'bubble-right' : 'bubble-left'">{{ item.content }}</text>
      </view>
    </view>
    <!-- 消息气泡 结束 -->
  </view>
</template>

<script>
import $T from '@/common/js/time'
export default {
  props: {
    item: Object,
    index: Number,
    prevTime: [Number, String],
  },
  data() {
    return {
      user_id: 1,
    }
  },
  computed: {
    isSelf() {
      return this.item.user_id === this.user_id
    },
    chatTime() {
      return $T.getChatTime(this.item.created_at, this.prevTime)
    },
  },
}
</script>

<style scoped>
.bubble-width {
  max-width: 400rpx;
}
.bubble-bg-left {
  background-color: rgba(0, 0, 0, 0.05);
}
.bubble-bg-right {
  background-color: rgba(4, 190, 2, 0.7);
}
.bubble-left:after {
  content: '';
  position: absolute;
  right: 100%;
  top: 15rpx;
  width: 0;
  height: 0;
  border-width: 18rpx;
  border-style: solid;
  border-color: transparent rgba(0, 0, 0, 0.05) transparent transparent;
}
.bubble-right:after {
  content: '';
  position: absolute;
  left: 100%;
  top: 15rpx;
  width: 0;
  height: 0;
  border-width: 18rpx;
  border-style: solid;
  border-color: transparent transparent transparent rgba(4, 190, 2, 0.7);
}
</style>
