<template>
  <view class="px-2" @click.stop="open">
    <view class="flex align-center py-2 border-bottom border-light-secondary">
      <image class="rounded-circle flex-shrink-0" style="width: 80rpx; height: 80rpx;" :src="item.avatar" />
      <view class="ml-2 flex-fill flex flex-column" style="line-height: 1.5;">
        <view class="flex align-center justify-between">
          <text class="font-md">{{ item.username }}</text>
          <text class="text-light-muted">{{ item.created_at | formatTime }}</text>
        </view>
        <view class="flex align-center justify-between">
          <text class="text-muted text-ellipsis" style="max-width: 500rpx;">{{ item.content }}</text>
          <uni-badge v-if="!item.isRead" :text="item.unread" type="error" @click="$emit('mark', index)"></uni-badge>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import common from '@/common/mixins/common'
import uniBadge from '@/components/uni-ui/uni-badge/uni-badge'
export default {
  components: {
    uniBadge,
  },
  mixins: [common],
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    // 打开聊天页
    open() {
      uni.navigateTo({
        url: '../../pages/user-chat/user-chat',
      })
    },
  },
}
</script>

<style scoped></style>
