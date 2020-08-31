<template>
  <view class="px-2" hover-class="bg-light">
    <view class="flex align-center py-2 border-bottom border-light-secondary">
      <image class="rounded-circle flex-shrink-0" style="width: 80rpx; height: 80rpx;" :src="item.avatar" mode="" />
      <view class="mx-2 flex-fill flex flex-column" style="line-height: 1.5;">
        <text class="font-md">{{ item.username }}</text>
        <uni-badge
          :text="item.age"
          :type="item.sex ? (item.sex === 1 ? 'primary' : 'error') : 'warning'"
          size="small"
          :width="item.sex ? '40' : ''"
        >
          <text v-if="item.sex" class="iconfont font-sm mr-1" :class="item.sex === 1 ? 'icon-nan' : 'icon-nv'"></text>
        </uni-badge>
      </view>
      <view class="flex-shrink-0 m-1">
        <text
          class="uni-icon uni-icon-checkbox-filled"
          :class="item.isFollow ? 'text-main' : 'text-light-muted'"
        ></text>
      </view>
    </view>
  </view>
</template>

<script>
import uniBadge from '@/components/uni-ui/uni-badge/uni-badge'
export default {
  props: {
    item: Object,
    index: Number,
  },
  components: {
    uniBadge,
  },
}
</script>

<style scoped></style>
