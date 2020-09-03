<template>
  <view>
    <view class="p-2">
      <input
        class="rounded bg-light px-2 my-3"
        style="height: 80rpx;"
        type="password"
        placeholder="输入旧密码"
        placeholder-class="text-light-muted"
        v-model="old_password"
      />
      <input
        class="rounded bg-light px-2 my-3"
        style="height: 80rpx;"
        type="password"
        placeholder="输入新密码"
        placeholder-class="text-light-muted"
        v-model="new_password"
      />
      <input
        class="rounded bg-light px-2 my-3"
        style="height: 80rpx;"
        type="password"
        placeholder="确认新密码"
        placeholder-class="text-light-muted"
        v-model="re_newpass"
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
        确认修改
      </button>
    </view>
  </view>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      old_password: '',
      new_password: '',
      re_newpass: '',
    }
  },
  computed: {
    disabled() {
      return !this.old_password || !this.new_password || !this.re_newpass
    },
  },
  methods: {
    check() {
      if (this.new_password !== this.re_newpass) {
        uni.showToast({
          title: '两次输入的密码不一致',
          icon: 'none',
        })
        return false
      }
      return true
    },
    submit() {
      if (!this.check()) return
      uni.showToast({
        title: '修改成功',
        icon: 'none',
      })
    },
  },
}
</script>

<style scoped></style>
