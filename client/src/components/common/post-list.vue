<template>
  <!-- 列表样式 -->
  <view class="p-2">
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
          <text class="text-light-muted font-small">{{ item.created_at }}</text>
        </view>
      </view>
      <!-- 关注按钮 -->
      <view
        class="rounded flex-shrink-0 animate__animated"
        :class="item.isFollow ? 'bg-light text-dark' : 'bg-main text-white'"
        :hover-class="item.isFollow ? 'bg-hover-light animate__pulse' : 'bg-hover-main animate__pulse'"
        @click.stop="follow"
      >
        <text class="px-3 py-1">{{ item.isFollow ? '取消关注' : '关注' }}</text>
      </view>
    </view>
    <view @click.stop="openDetail">
      <!-- 标题 -->
      <view class="my-1 font-md">{{ item.title }}</view>
      <!-- 内容 -->
      <image v-if="item.cover" class="rounded w-100" style="height: 350rpx;" :src="item.cover" mode="aspectFill" />
    </view>
    <view class="flex align-center py-1">
      <!-- 赞 -->
      <view
        class="flex-fill flex align-center justify-center animate__animated"
        hover-class="animate__pulse"
        :class="item.support.type === 'praise' ? 'text-main' : ''"
        @click.stop="support('praise')"
      >
        <text class="iconfont icon-dianzan2"></text>
        <text class="ml-1">{{ item.support.praise_count > 0 ? item.support.praise_count : '赞' }}</text>
      </view>
      <!-- 踩 -->
      <view
        class="flex-fill flex align-center justify-center animate__animated"
        hover-class="animate__pulse"
        :class="item.support.type === 'blame' ? 'text-main' : ''"
        @click.stop="support('blame')"
      >
        <text class="iconfont icon-cai"></text>
        <text class="ml-1">{{ item.support.blame_count > 0 ? item.support.blame_count : '踩' }}</text>
      </view>
      <!-- 评论 -->
      <view
        class="flex-fill flex align-center justify-center animate__animated"
        hover-class="animate__pulse text-main"
        @click.stop="openDetail"
      >
        <text class="iconfont icon-pinglun2"></text>
        <text class="ml-1">{{ item.comment_count > 0 ? item.comment_count : '评论' }}</text>
      </view>
      <!-- 分享 -->
      <view
        class="flex-fill flex align-center justify-center animate__animated"
        hover-class="animate__pulse text-main"
        @click.stop="share"
      >
        <text class="iconfont icon-zhuanfa1"></text>
        <text class="ml-1">{{ item.share_count > 0 ? item.share_count : '分享' }}</text>
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
  data() {
    return {}
  },
  methods: {
    openSpace() {
      console.log('打开个人中心')
    },
    openDetail() {
      console.log('进入详情页')
    },
    follow() {
      this.$emit('follow', this.index)
    },
    support(type) {
      this.$emit('support', {
        type,
        index: this.index,
      })
    },
    share() {
      console.log('分享')
    },
  },
}
</script>

<style scoped></style>
