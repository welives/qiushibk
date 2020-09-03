<template>
  <view>
    <!-- 顶部关闭按钮 开始 -->
    <view :style="'height:' + statusBarHeight + 'px;'"></view>
    <view
      class="flex align-center justify-center animate__animated"
      hover-class="text-main animate__pulse"
      style="width: 80rpx; height: 80rpx;"
      @click.stop="back()"
    >
      <text class="iconfont icon-guanbi font-lg"></text>
    </view>
    <!-- 顶部关闭按钮 结束 -->

    <!-- 表单 开始 -->
    <view class="flex align-center justify-center font-lg font-weight-bold my-5">欢迎回来</view>
    <view class="p-2">
      <input
        type="text"
        class="font bg-light rounded px-2 my-3"
        style="height: 80rpx;"
        placeholder="手机号/用户名/邮箱"
        placeholder-class="text-light-muted"
        v-model="form.username"
      />
      <input
        type="password"
        class="font bg-light rounded px-2 my-3"
        style="height: 80rpx;"
        placeholder="请输入密码"
        placeholder-class="text-light-muted"
        v-model="form.password"
      />
      <input
        v-if="type === 'reg'"
        type="password"
        class="font bg-light rounded px-2 my-3"
        style="height: 80rpx;"
        placeholder="请输入确认密码"
        placeholder-class="text-light-muted"
        v-model="form.repassword"
      />
    </view>
    <view class="px-3">
      <button
        type="primary"
        class="border-0 bg-main text-white"
        style="border-radius: 50rpx; letter-spacing: 6rpx;"
        @click.stop="navigateTo('login')"
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
          class="rounded-circle bg-success flex align-center justify-center"
          style="width: 100rpx; height: 100rpx;"
          @click="socialLogin('wechat')"
        >
          <text class="iconfont icon-weixin font-lg"></text>
        </view>
      </view>
      <view class="flex-fill flex align-center justify-center">
        <view
          class="rounded-circle bg-primary flex align-center justify-center"
          style="width: 100rpx; height: 100rpx;"
          @click="socialLogin('qq')"
        >
          <text class="iconfont icon-QQ font-lg"></text>
        </view>
      </view>
      <view class="flex-fill flex align-center justify-center">
        <view
          class="rounded-circle bg-danger flex align-center justify-center"
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
  onLoad() {
    this.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
  },
  methods: {
    changeType() {
      this.type = this.type === 'login' ? 'reg' : 'login'
      this.form = { username: '', password: '', repassword: '' }
    },
    // 第三方登入
    socialLogin(type) {
      console.log(type)
    },
  },
}
</script>

<style scoped></style>
