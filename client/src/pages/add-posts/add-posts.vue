<template>
  <view @touchmove.stop.prevent="() => {}">
    <!-- 自定义导航栏 开始 -->
    <uni-nav-bar left-icon="back" :border="false" fixed statusBar @clickLeft="back">
      <view class="flex align-center justify-center w-100">
        <text class="mr-2 font">所有人可见</text>
        <text class="iconfont icon-shezhi"></text>
      </view>
    </uni-nav-bar>
    <!-- 自定义导航栏 结束 -->

    <!-- 内容区 开始 -->
    <view :style="'height:' + scrollHeight + 'px;'">
      <textarea
        class="px-2 uni-textarea"
        placeholder="说点什么吧..."
        placeholder-class="text-light-muted"
        v-model="content"
      />
      <!-- 多图上传 -->
      <upload-image :isShow="showImage" ref="uploadImage" :list="imageList" @change="changeImage"></upload-image>
    </view>
    <!-- 内容区 结束 -->

    <!-- 底部操作条 开始 -->
    <view class="fixed-bottom bg-white flex align-center justify-between w-100" style="height: 50px;">
      <view class="flex-fill flex align-center ml-2 animate__animated">
        <view class="animate__animated" hover-class="animate__pulse">
          <text class="iconfont icon-caidan font-lg"></text>
        </view>
        <view class="animate__animated" hover-class="animate__pulse">
          <text class="iconfont icon-huati font-lg mx-3"></text>
        </view>
        <view class="animate__animated" hover-class="animate__pulse" @click.stop="iconClickEvent('uploadImage')">
          <text class="iconfont icon-tupian font-lg"></text>
        </view>
      </view>
      <view
        class="flex-shrink-0 mr-2 bg-main rounded animate__animated"
        hover-class="animate__pulse"
        @click.stop="post"
      >
        <text class="text-white px-3 py font-md">发帖</text>
      </view>
    </view>
    <!-- 底部操作条 结束 -->
  </view>
</template>

<script>
import common from '@/common/mixins/common'
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar'
import uploadImage from '@/components/common/upload-image'

export default {
  components: {
    uniNavBar,
    uploadImage,
  },
  mixins: [common],
  data() {
    return {
      scrollHeight: 600,
      content: '',
      imageList: [],
      // 是否提示过保存草稿
      isShow: false,
    }
  },
  computed: {
    showImage() {
      return this.imageList.length > 0
    },
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight - res.statusBarHeight - 44 - 50
    uni.getStorage({
      key: 'add-posts',
      success: (res) => {
        let result
        res.data && (result = JSON.parse(res.data))
        this.content = result.content
        this.imageList = result.imageList
      },
    })
    // #ifdef APP-PLUS
    // 取消iOS端的侧滑返回行为
    this.$scope.$getAppWebview().setStyle({ popGesture: 'none' })
    // #endif
  },
  // 监听返回
  onBackPress(e) {
    // 如果有内容或图片则阻止默认的页面返回行为
    if ((this.content !== '' || this.imageList.length > 0) && !this.isShow) {
      uni.showModal({
        content: '是否要保存到草稿？',
        cancelText: '不保存',
        confirmText: '保存',
        success: (res) => {
          res.confirm ? this.saveDraft() : uni.removeStorageSync('add-posts')
          // 手动执行返回
          uni.navigateBack({ delta: 1 })
        },
      })
      this.isShow = true
      return true
    }
  },
  methods: {
    // 返回上一页
    back() {
      // #ifdef MP
      // 解决微信小程序中 onBackPress 无效的问题
      if ((this.content !== '' || this.imageList.length > 0) && !this.isShow) {
        uni.showModal({
          content: '是否要保存到草稿？',
          cancelText: '不保存',
          confirmText: '保存',
          success: (res) => {
            res.confirm ? this.saveDraft() : uni.removeStorageSync('add-posts')
            // 手动执行返回
            uni.navigateBack({ delta: 1 })
          },
        })
        this.isShow = true
      } else {
        uni.navigateBack({ delta: 1 })
      }
      // #endif

      // #ifndef MP
      // 其他端的返回处理
      uni.navigateBack({ delta: 1 })
      // #endif
    },
    // 选中图片
    changeImage(data) {
      this.imageList = data
    },
    // 保存草稿
    saveDraft() {
      let draft = {
        content: this.content,
        imageList: this.imageList,
      }
      uni.setStorageSync('add-posts', JSON.stringify(draft))
    },
    // 底部操作条图标点击事件
    iconClickEvent(e) {
      switch (e) {
        case 'uploadImage':
          this.$refs.uploadImage.chooseImage()
          break
      }
    },
    post() {
      console.log('发帖')
    },
  },
}
</script>

<style scoped></style>
