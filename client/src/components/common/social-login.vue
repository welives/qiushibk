<template>
  <view>
    <view class="flex align-center justify-center py-5">
      <view style="width: 100rpx; height: 2rpx; background-color: #e3e1dd;"></view>
      <view class="text-muted mx-2">社交账号登入</view>
      <view style="width: 100rpx; height: 2rpx; background-color: #e3e1dd;"></view>
    </view>
    <view class="flex px-2 text-white">
      <block v-for="(item, index) in providerList" :key="index">
        <view v-if="item.icon" class="flex-fill flex align-center justify-center">
          <view
            class="rounded-circle flex align-center justify-center animated"
            :class="item.bgColor"
            hover-class="pulse"
            style="width: 100rpx; height: 100rpx;"
            @click.stop="onSocialLogin(item.id)"
          >
            <text class="uni-icon" :class="item.icon" style="font-size: 50rpx;"></text>
          </view>
        </view>
      </block>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      providerList: [],
    }
  },
  created() {
    uni.getProvider({
      service: 'oauth',
      success: (result) => {
        this.providerList = result.provider.map((value) => {
          let providerName = ''
          let icon = ''
          let bgColor = ''
          switch (value) {
            case 'weixin':
              providerName = '微信登录'
              icon = 'uni-icon-weixin'
              bgColor = 'bg-success'
              break
            case 'qq':
              providerName = 'QQ登录'
              icon = 'uni-icon-qq'
              bgColor = 'bg-primary'
              break
            case 'sinaweibo':
              providerName = '新浪微博登录'
              icon = 'uni-icon-weibo'
              bgColor = 'bg-danger'
              break
          }
          return {
            name: providerName,
            icon,
            bgColor,
            id: value,
          }
        })
      },
    })
  },
  methods: {
    // 第三方登入
    onSocialLogin(type) {
      this.$emit('social', type)
    },
  },
}
</script>

<style scoped></style>
