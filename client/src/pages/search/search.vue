<template>
  <view>
    <!-- #ifdef MP -->
    <!-- 自定义导航栏 开始 -->
    <view class="fixed-top flex align-center justify-between w-100" style="height: 80rpx;">
      <input
        class="flex-fill bg-light rounded ml-2 px-2"
        style="height: 80%;"
        placeholder-class="iconfont text-center text-light-muted"
        :placeholder="placeholder"
      />
      <view class="flex-shrink-0 text-center mx-1" style="width: 44px;color: #333333;">
        <text class="font">搜索</text>
      </view>
    </view>
    <view style="height: 80rpx;"></view>
    <!-- 自定义导航栏 结束 -->
    <!-- #endif -->

    <!-- 搜索历史 开始 -->
    <view v-if="dataList.length === 0" class="px-2">
      <view class="py-1 font-md text-muted">搜索历史</view>
      <view class="flex flex-wrap">
        <view
          class="border rounded font-sm"
          hover-class="bg-light"
          style="margin: 0 10px 10px 0;"
          v-for="(item, index) in history"
          :key="index"
          @click.stop="getHistory(item.keyword)"
        >
          <text class="px-2 text-muted">{{ item.keyword }}</text>
        </view>
      </view>
    </view>
    <!-- 搜索历史 结束 -->

    <!-- 搜索结果 -->
    <block v-else v-for="(item, index) in dataList" :key="index">
      <template v-if="type === 'post'">
        <post-list :item="item" :index="index"></post-list>
        <view class="divider"></view>
      </template>
      <template v-else-if="type === 'topic'">
        <topic-list :item="item" :index="index"></topic-list>
      </template>
      <template v-else-if="type === 'user'">
        <user-list :item="item" :index="index"></user-list>
      </template>
    </block>
  </view>
</template>

<script>
import demo from './demo'
import postList from '@/components/common/post-list'
import topicList from '@/components/common/topic-list'
import userList from '@/components/common/user-list'

export default {
  components: {
    postList,
    topicList,
    userList,
  },
  data() {
    return {
      placeholder: '',
      // 关键字
      keyword: '',
      // 搜索历史
      history: [],
      // 搜索结果
      dataList: [],
      // 当前搜索类型
      type: 'post',
    }
  },
  onLoad(e) {
    this.initData()
    // 修改搜索框占位符
    e.type && (this.type = e.type)
    switch (this.type) {
      case 'post':
        this.placeholder = '帖子'
        break
      case 'topic':
        this.placeholder = '话题'
        break
      case 'user':
        this.placeholder = '用户'
        break
    }
    // #ifdef MP
    this.placeholder = '\ue606 搜索' + this.placeholder
    // #endif

    // #ifdef APP-PLUS
    const page = this.$scope.$getAppWebview()
    const tn = page.getStyle().titleNView
    tn.searchInput.placeholder = '搜索' + this.placeholder
    page.setStyle({
      titleNView: tn,
    })
    // #endif
  },
  onNavigationBarButtonTap(e) {
    e.index === 0 && this.search()
  },
  onNavigationBarSearchInputChanged(e) {
    this.keyword = e.text
  },
  // 监听原生标题栏搜索输入框搜索事件，用户点击软键盘上的“搜索”按钮时触发。
  onNavigationBarSearchInputConfirmed(e) {
    this.keyword = e.text
    this.search()
  },
  methods: {
    initData() {
      this.history = demo.history.map((v) => {
        return { ...v }
      })
    },
    search() {
      if (!this.keyword) {
        return uni.showToast({
          title: '请输入关键字',
          icon: 'none',
          position: 'top',
        })
      }
      // 收起键盘
      uni.hideKeyboard()
      // 搜索请求
      uni.showLoading({ title: '加载中' })
      setTimeout(() => {
        this.dataList = demo[this.type].map((v) => {
          return { ...v }
        })
        uni.hideLoading()
      }, 1000)
    },
    getHistory(keyword) {
      this.keyword = keyword
      this.search()
    },
  },
}
</script>

<style scoped></style>
