<template>
  <view>
    <!-- 帖子内容 开始 -->
    <post-list :item="detail" isDetail @comment="doComment" @follow="doFollow" @support="doSupport" @share="doShare">
      <view class="py-1">{{ detail.content }}</view>
      <block v-for="(item, index) in imageList" :key="index">
        <image
          class="rounded w-100"
          style="height: 350rpx;"
          :src="item"
          mode="aspectFill"
          @click.stop="preview(index)"
        />
      </block>
    </post-list>
    <view class="divider"></view>
    <!-- 帖子内容 结束 -->

    <!-- 评论列表 开始 -->
    <view class="p-2 font-md font-weight-bold">最新评论</view>
    <view class="uni-comment-list px-2">
      <view class="uni-comment-face">
        <image style="width: 80rpx; height: 80rpx;" :src="$conf.ossUrl + '/userpic/14.jpg'" mode="aspectFill" />
      </view>
      <view class="uni-comment-body">
        <view class="uni-comment-top"><text>小猫咪</text></view>
        <view class="uni-comment-content">测试内容</view>
        <view class="uni-comment-date">
          <view>2020-09-01</view>
        </view>
      </view>
    </view>
    <!-- 评论列表 结束 -->

    <!-- 底部操作条 开始 -->
    <bottom-input @submit="doSubmit"></bottom-input>
    <view style="height: 50px;"></view>
    <!-- 底部操作条 结束 -->

    <share-icon ref="share"></share-icon>
  </view>
</template>

<script>
import demo from './demo'
import postList from '@/components/common/post-list'
import bottomInput from '@/components/common/bottom-input'
import shareIcon from '@/components/common/share-icon'

export default {
  components: {
    postList,
    bottomInput,
    shareIcon,
  },
  data() {
    return {
      $conf: this.$conf,
      detail: {},
    }
  },
  computed: {
    imageList() {
      return this.detail.imageList ? this.detail.imageList.map((v) => v.url) : []
    },
  },
  onLoad(e) {
    e.detail && (this.detail = JSON.parse(decodeURIComponent(e.detail)))
    uni.setNavigationBarTitle({
      title: this.detail.title,
    })
    this.initData()
  },
  onNavigationBarButtonTap(e) {
    this.$refs.share.open()
  },
  onBackPress() {
    this.$refs.share.close()
  },
  methods: {
    initData() {
      this.detail.imageList = demo.imageList.map((v) => {
        return { ...v }
      })
    },
    // 打开评论
    doComment() {},
    // 发表评论
    doSubmit() {},
    // 关注 | 取消关注
    doFollow(index) {
      this.detail.isFollow = !this.detail.isFollow
      return uni.showToast({
        title: this.detail.isFollow ? '关注成功' : '已取消关注',
        icon: 'none',
      })
    },
    // 赞 | 踩
    doSupport(e) {
      // 拿到当前操作的对象
      let item = this.detail
      // 之前没赞也没踩
      if (item.support.type === '') {
        item.support.type = e.type
        item.support[`${e.type}_count`]++
        return
      }
      // 之前赞过了
      if (item.support.type === 'praise' && e.type === 'blame') {
        // 赞-1
        item.support.praise_count--
        // 踩+1
        item.support.blame_count++
      }
      // 之前踩过了
      else if (item.support.type === 'blame' && e.type === 'praise') {
        // 赞+1
        item.support.praise_count++
        // 踩-1
        item.support.blame_count--
      }
      item.support.type = e.type
    },
    // 图片预览
    preview(index) {
      uni.previewImage({
        current: index,
        urls: this.imageList,
      })
    },
    // 分享
    doShare() {
      this.$refs.share.open()
    },
  },
}
</script>

<style scoped></style>
