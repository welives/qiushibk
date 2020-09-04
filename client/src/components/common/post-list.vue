<template>
  <!-- 列表样式 -->
  <view class="p-2 animated fadeIn">
    <view class="flex align-center justify-between">
      <view class="flex align-center flex-fill">
        <!-- 头像 -->
        <image
          class="rounded-circle flex-shrink-0"
          style="width: 65rpx; height: 65rpx;"
          :src="item.avatar"
          mode="aspectFill"
          lazy-load
          @click.stop="openSpace"
        />
        <!-- 昵称 | 发布时间 -->
        <view class="flex-fill flex flex-column line-h px-2">
          <view class="font">{{ item.username }}</view>
          <text class="text-light-muted font-small">{{ item.created_at || 0 | formatTime }}</text>
        </view>
      </view>
      <!-- 关注按钮 -->
      <view
        class="rounded flex-shrink-0 animated"
        :class="item.isFollow ? 'bg-light text-dark' : 'bg-main text-white'"
        :hover-class="item.isFollow ? 'bg-hover-light pulse' : 'bg-hover-main pulse'"
        @click.stop="$emit('follow', index)"
      >
        <text class="px-3 py-1">{{ item.isFollow ? '取消关注' : '关注' }}</text>
      </view>
    </view>
    <view @click.stop="openDetail">
      <!-- 标题 -->
      <view class="my-1 font-md">{{ item.title }}</view>
      <!-- 默认插槽 -->
      <slot>
        <!-- 内容 -->
        <image v-if="item.cover" class="rounded w-100" style="height: 350rpx;" :src="item.cover" mode="aspectFill" />
      </slot>
    </view>
    <view class="flex align-center py-1">
      <!-- 赞 -->
      <view
        class="flex-fill flex align-center justify-center animated"
        hover-class="pulse"
        :class="item.support.type === 'praise' ? 'text-main' : ''"
        @click.stop="onSupport('praise')"
      >
        <text class="iconfont icon-dianzan2"></text>
        <text class="ml-1">{{ item.support.praise_count > 0 ? item.support.praise_count : '赞' }}</text>
      </view>
      <!-- 踩 -->
      <view
        class="flex-fill flex align-center justify-center animated"
        hover-class="pulse"
        :class="item.support.type === 'blame' ? 'text-main' : ''"
        @click.stop="onSupport('blame')"
      >
        <text class="iconfont icon-cai"></text>
        <text class="ml-1">{{ item.support.blame_count > 0 ? item.support.blame_count : '踩' }}</text>
      </view>
      <!-- 评论 -->
      <view
        class="flex-fill flex align-center justify-center animated"
        hover-class="pulse text-main"
        @click.stop="onComment"
      >
        <text class="iconfont icon-pinglun2"></text>
        <text class="ml-1">{{ item.comment_count > 0 ? item.comment_count : '评论' }}</text>
      </view>
      <!-- 分享 -->
      <view
        class="flex-fill flex align-center justify-center animated"
        hover-class="pulse text-main"
        @click.stop="onShare"
      >
        <text class="iconfont icon-zhuanfa1"></text>
        <text class="ml-1">{{ item.share_count > 0 ? item.share_count : '分享' }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import common from '@/common/mixins/common'
export default {
  props: {
    item: Object,
    index: {
      type: Number,
      default: -1,
    },
    isDetail: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [common],
  data() {
    return {}
  },
  methods: {
    openSpace() {
      console.log('打开个人中心')
    },
    openDetail() {
      // 不是详情页才跳转
      !this.isDetail &&
        uni.navigateTo({
          url: '../../pages/post-detail/post-detail?detail=' + encodeURIComponent(JSON.stringify(this.item)),
        })
    },
    onSupport(type) {
      this.$emit('support', {
        type,
        index: this.index,
      })
    },
    onComment() {
      // 不是详情页才跳转
      this.openDetail()
      this.isDetail && this.$emit('comment')
    },
    onShare() {
      this.$emit('share')
    },
  },
}
</script>

<style scoped></style>
