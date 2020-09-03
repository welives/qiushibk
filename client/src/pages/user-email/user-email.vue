<template>
  <view>
    <view class="p-2">
      <input
        class="rounded bg-light px-2 my-3"
        style="height: 80rpx;"
        type="text"
        placeholder="请输入您要绑定的邮箱"
        placeholder-class="text-light-muted"
        v-model="email"
      />
    </view>
    <view class="px-4 py-2">
      <button
        type="primary"
        class="border-0 text-white"
        style="border-radius: 50rpx; letter-spacing: 6rpx;"
        :class="disabled ? 'bg-disabled-main' : 'bg-main'"
        :disabled="disabled"
        @click.stop="submit"
      >
        绑定
      </button>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      email: '',
    }
  },
  computed: {
    disabled() {
      return !this.email
    },
  },
  methods: {
    check() {
      let regexp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
      if (!regexp.test(this.email)) {
        uni.showToast({
          title: '邮箱格式不正确',
          icon: 'none',
        })
        return false
      }
      return true
    },
    submit() {
      if (!this.check()) return
      uni.showToast({
        title: '绑定成功',
        icon: 'none',
      })
    },
  },
}
</script>

<style scoped></style>
