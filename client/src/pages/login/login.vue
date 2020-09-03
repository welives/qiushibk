<template>
  <view>
    <!-- 顶部关闭按钮 开始 -->
    <view
      class="fixed-top left-0 flex align-center justify-center animate__animated"
      hover-class="text-main animate__pulse"
      style="width: 80rpx; height: 80rpx;"
      :style="'top: ' + statusBarHeight + 'px;'"
      @click.stop="back()"
    >
      <text class="iconfont icon-guanbi font-lg"></text>
    </view>
    <!-- 顶部关闭按钮 结束 -->

    <view class="flex align-center justify-center font-lg font-weight-bold" style="padding: 100rpx 0 80rpx;"
      >欢迎回来</view
    >
    <!-- 表单 开始 -->
    <view class="p-2">
      <input
        class="bg-light rounded px-2 my-3"
        style="height: 80rpx;"
        placeholder="手机号/用户名/邮箱"
        placeholder-class="text-light-muted font"
        v-model="form.username"
      />
      <input
        class="bg-light rounded px-2 my-3"
        style="height: 80rpx;"
        placeholder="请输入密码"
        placeholder-class="text-light-muted font"
        :password="true"
        v-model="form.password"
      />
      <input
        v-if="type === 'reg'"
        class="bg-light rounded px-2 my-3"
        style="height: 80rpx;"
        placeholder="请输入确认密码"
        placeholder-class="text-light-muted font"
        :password="true"
        v-model="form.repassword"
      />
    </view>
    <view class="px-4">
      <button
        type="primary"
        class="border-0 text-white"
        style="border-radius: 50rpx; letter-spacing: 6rpx;"
        :class="disabled ? 'bg-disabled-main' : 'bg-main'"
        :disabled="disabled"
        @click.stop="submit()"
      >
        {{ type === 'login' ? '登入' : '注册' }}
      </button>
    </view>
    <!-- 表单 结束 -->

    <!-- 切换表单 开始 -->
    <view class="flex px-4 mt-4">
      <text class="ml-auto px-2 text-light-muted" @click.stop="changeType">
        {{ type === 'login' ? '还没账号？' : '已有账号，'
        }}<text class="text-main">{{ type === 'login' ? '去注册' : '去登入' }}</text>
      </text>
    </view>
    <!-- 切换表单 结束 -->

    <!-- 设计登入按钮 开始 -->
    <view class="flex align-center justify-center py-5">
      <view style="width: 100rpx; height: 2rpx; background-color: #e3e1dd;"></view>
      <view class="text-muted mx-2">社交账号登入</view>
      <view style="width: 100rpx; height: 2rpx; background-color: #e3e1dd;"></view>
    </view>
    <view class="flex px-2 text-white">
      <view class="flex-fill flex align-center justify-center">
        <view
          class="rounded-circle bg-success flex align-center justify-center animate__animated"
          hover-class="animate__pulse"
          style="width: 100rpx; height: 100rpx;"
          @click="socialLogin('wechat')"
        >
          <text class="iconfont icon-weixin font-lg"></text>
        </view>
      </view>
      <view class="flex-fill flex align-center justify-center">
        <view
          class="rounded-circle bg-primary flex align-center justify-center animate__animated"
          hover-class="animate__pulse"
          style="width: 100rpx; height: 100rpx;"
          @click="socialLogin('qq')"
        >
          <text class="iconfont icon-QQ font-lg"></text>
        </view>
      </view>
      <view class="flex-fill flex align-center justify-center">
        <view
          class="rounded-circle bg-danger flex align-center justify-center animate__animated"
          hover-class="animate__pulse"
          style="width: 100rpx; height: 100rpx;"
          @click="socialLogin('sina')"
        >
          <text class="iconfont icon-xinlangweibo font-lg"></text>
        </view>
      </view>
    </view>
    <!-- 设计登入按钮 结束 -->
  </view>
</template>

<script>
import common from '@/common/mixins/common'
export default {
  components: {},
  mixins: [common],
  data() {
    return {
      type: 'login',
      statusBarHeight: 0,
      form: { username: '', password: '', repassword: '' },
    }
  },
  computed: {
    disabled() {
      if (this.type === 'reg') {
        return !this.form.username || !this.form.password || !this.form.repassword
      } else {
        return !this.form.username || !this.form.password
      }
    },
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.statusBarHeight = res.statusBarHeight
  },
  methods: {
    // 切换表单
    changeType() {
      this.type = this.type === 'login' ? 'reg' : 'login'
      this.form = { username: '', password: '', repassword: '' }
    },
    // 第三方登入
    socialLogin(type) {
      console.log(type)
    },
    // 验证
    check() {
      if (this.type === 'reg') {
        if (this.form.password !== this.form.repassword) {
          uni.showToast({
            title: '两次输入的密码不一致',
            icon: 'none',
          })
          return false
        }
      } else {
      }
      return true
    },
    // 注册||登入
    submit() {
      if (!this.check()) return
      let msg = this.type === 'reg' ? '注册' : '登入'
      uni.showToast({
        title: msg + '成功',
        icon: 'none',
      })
      // this.$req.post('/' + this.type, this.form).then((res) => {
      //   if (this.type === 'reg') {
      //     this.changeType()
      //   } else {
      //     this.$store.dispatch('user/login', res)
      //     this.back()
      //   }
      //   uni.showToast({
      //     title: msg + '成功',
      //     icon: 'none',
      //   })
      // })
    },
  },
}
</script>

<style scoped></style>
