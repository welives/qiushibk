<template>
  <view>
    <uni-list-item title="账号与安全" :showExtraIcon="true" @click="navigateTo('user-password')">
      <text slot="icon" class="iconfont icon-shezhi"></text>
    </uni-list-item>
    <uni-list-item title="绑定邮箱" :showExtraIcon="true" @click="navigateTo('user-email')">
      <text slot="icon" class="uni-icon uni-icon-email font"></text>
    </uni-list-item>
    <uni-list-item title="资料编辑" :showExtraIcon="true" @click="navigateTo('user-userinfo')">
      <text slot="icon" class="iconfont icon-bianji1"></text>
    </uni-list-item>
    <uni-list-item title="清除缓存" :showExtraIcon="true" :showArrow="false" @click="clear">
      <text slot="icon" class="iconfont icon-qingchu"></text>
      <text slot="right">{{ currentSize | formatCache }}</text>
    </uni-list-item>
    <uni-list-item title="意见反馈" :showExtraIcon="true" @click="navigateTo('feedback')">
      <text slot="icon" class="iconfont icon-guanyuwomen"></text>
    </uni-list-item>
    <uni-list-item title="关于社区" :showExtraIcon="true" @click="navigateTo('about')">
      <text slot="icon" class="iconfont icon-yiwen"></text>
    </uni-list-item>
    <view class="px-4 pt-5">
      <button
        type="primary"
        class="border-0 bg-main text-white"
        style="border-radius: 50rpx; letter-spacing: 6rpx;"
        @click.stop="navigateTo('login')"
      >
        退出登入
      </button>
    </view>
  </view>
</template>

<script>
import common from '@/common/mixins/common'
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
export default {
  components: {
    uniListItem,
  },
  mixins: [common],
  filters: {
    formatCache(value) {
      return value > 1024 ? (value / 1024).toFixed(2) + ' MB' : value.toFixed(2) + ' KB'
    },
  },
  data() {
    return {
      currentSize: 0,
    }
  },
  onLoad() {
    this.getStorageInfo()
  },
  methods: {
    // 获取缓存信息
    getStorageInfo() {
      let res = uni.getStorageInfoSync()
      this.currentSize = res.currentSize
    },
    // 清除缓存
    clear() {
      uni.showModal({
        title: '提示',
        content: '是否要清除所有缓存？',
        confirmText: '清除',
        confirmColor: '#ff0000',
        success: (res) => {
          if (res.confirm) {
            uni.clearStorageSync()
            this.getStorageInfo()
            uni.showToast({
              title: '清除成功',
              icon: 'none',
            })
          }
        },
      })
    },
  },
}
</script>

<style scoped></style>
