<template>
  <view>
    <uni-status-bar></uni-status-bar>
    <!-- 顶部关闭按钮 开始 -->
    <view
      class="flex align-center justify-center animated"
      hover-class="text-main pulse"
      style="width: 80rpx; height: 80rpx;"
      @click.stop="back()"
    >
      <text class="iconfont icon-guanbi font-lg"></text>
    </view>
    <!-- 顶部关闭按钮 结束 -->

    <view
      class="text-center font-weight-bold"
      style="font-size: 50rpx; padding: 80rpx 0 50rpx; letter-spacing: 10rpx;"
      >{{ formType === 'login' ? (phoneLogin ? '手机登入' : '普通登入') : '注册' }}</view
    >
    <!-- 表单 开始 -->
    <view class="p-2">
      <view class="flex align-center justify-center my-3">
        <!-- 手机登入时才显示 -->
        <text
          v-if="formType === 'login' && phoneLogin"
          class="flex-shrink-0 flex align-center bg-light px-2 border-right"
          style="height: 80rpx;"
          >+86</text
        >
        <input
          class="bg-light rounded px-2 flex-fill"
          style="height: 80rpx;"
          :placeholder="phoneLogin ? '手机号' : '用户名/邮箱'"
          placeholder-class="text-light-muted font"
          v-model="username"
        />
      </view>
      <!-- 手机登入验证码框 -->
      <view v-if="formType === 'login' && phoneLogin" class="flex align-center my-3">
        <input
          class="bg-light rounded px-2 flex-fill"
          style="height: 80rpx;"
          placeholder="请输入短信验证码"
          placeholder-class="text-light-muted font"
          :password="true"
          v-model="smscode"
        />
        <view
          class="rounded-right flex-shrink-0 flex align-center justify-center"
          :class="smsTime > 0 ? 'bg-disabled-main' : 'bg-main'"
          style="width: 160rpx; height: 80rpx;"
          @click.stop="getSmscode"
        >
          <text class="text-white">{{ smsTime > 0 ? smsTime + 's' : '获取验证码' }}</text>
        </view>
      </view>

      <!-- 普通登入密码框 -->
      <view v-else class="flex align-center position-relative my-3">
        <input
          class="bg-light rounded px-2 flex-fill"
          style="height: 80rpx;"
          placeholder="请输入密码"
          placeholder-class="text-light-muted font"
          :password="true"
          v-model="password"
        />
        <!-- 普通登入时才显示 -->
        <text
          v-if="formType === 'login' && !phoneLogin"
          class="bg-light position-absolute right-0 text-light-muted font-sm"
          style="letter-spacing: 4rpx; z-index: 100;"
          @click.stop="forget"
          >忘记密码？</text
        >
      </view>

      <!-- 注册时才显示 -->
      <input
        v-if="formType === 'reg'"
        class="bg-light rounded px-2 my-3"
        style="height: 80rpx;"
        placeholder="请输入确认密码"
        placeholder-class="text-light-muted font"
        :password="true"
        v-model="repassword"
      />
    </view>
    <view class="px-4">
      <button
        type="primary"
        class="border-0 text-white"
        style="border-radius: 50rpx; letter-spacing: 6rpx;"
        :class="disabled || loading ? 'bg-disabled-main' : 'bg-main'"
        :disabled="disabled || loading"
        @click.stop="submit()"
      >
        {{ formType === 'login' ? '登入' : '注册' }}
      </button>
    </view>
    <!-- 表单 结束 -->

    <!-- 切换表单 开始 -->
    <view class="flex px-4 mt-4 text-light-muted">
      <text v-if="formType === 'login'" class="flex-fill px-2 text-left" @click.stop="changeLoginType">{{
        phoneLogin ? '普通登入' : '手机登入'
      }}</text>
      <text class="flex-fill px-2 text-right" @click.stop="changeType">
        {{ formType === 'login' ? '还没账号？' : '已有账号，'
        }}<text class="text-main">{{ formType === 'login' ? '去注册' : '去登入' }}</text>
      </text>
    </view>
    <!-- 切换表单 结束 -->

    <!-- 社交登入按钮 开始 -->
    <social-login @social="socialLogin"></social-login>
    <!-- 社交登入按钮 结束 -->
  </view>
</template>

<script>
const phoneRegex = /^1[345789]\d{9}$/
import common from '@/common/mixins/common'
import socialLogin from '@/components/common/social-login'
import uniStatusBar from '@/components/uni-ui/uni-status-bar/uni-status-bar'
export default {
  components: {
    socialLogin,
    uniStatusBar,
  },
  mixins: [common],
  data() {
    return {
      loading: false,
      formType: 'login',
      phoneLogin: false,
      username: '',
      password: '',
      repassword: '',
      smscode: '',
      smsTime: 0,
    }
  },
  computed: {
    disabled() {
      if (this.formType === 'reg') {
        return !this.username || !this.password || !this.repassword
      } else {
        if (this.phoneLogin) {
          return !this.username || !this.smscode || !this.validate()
        } else {
          return !this.username || !this.password
        }
      }
    },
  },
  methods: {
    // 初始化表单
    initForm() {
      this.username = ''
      this.password = ''
      this.repassword = ''
      this.smscode = ''
    },
    // 切换表单
    changeType() {
      this.phoneLogin = false
      this.formType = this.formType === 'login' ? 'reg' : 'login'
      this.initForm()
    },
    // 切换登入类型
    changeLoginType() {
      this.phoneLogin = !this.phoneLogin
      this.initForm()
    },
    // 获取短信验证码
    getSmscode() {
      if (!this.validate()) {
        return uni.showToast({
          title: '手机号码格式不正确',
          icon: 'none',
          position: 'top',
        })
      }
      if (this.formType === 'login' && this.smsTime === 0) {
        this.smsTime = 60
        let timer = setInterval(() => {
          if (this.smsTime > 0) {
            this.smsTime--
          } else {
            clearInterval(timer)
            this.smsTime = 0
          }
        }, 1000)
      }
    },
    // 第三方登入
    socialLogin(e) {
      console.log(e)
    },
    // 验证
    validate() {
      if (this.formType === 'reg') {
        if (this.password !== this.repassword) {
          uni.showToast({
            title: '两次输入的密码不一致',
            icon: 'none',
            position: 'top',
          })
          return false
        }
      } else {
        // 手机格式验证
        if (this.phoneLogin) return phoneRegex.test(this.username)
      }
      return true
    },
    // 注册||登入
    submit() {
      // 表单验证
      if (!this.validate()) return
      // 模拟提交后端
      let msg = this.formType === 'reg' ? '注册' : '登入'
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
      // 成功处理
      uni.showToast({
        title: msg + '成功',
        icon: 'none',
      })
    },
    forget() {
      uni.showToast({
        title: '忘记密码',
        icon: 'none',
      })
    },
  },
}
</script>

<style scoped></style>
