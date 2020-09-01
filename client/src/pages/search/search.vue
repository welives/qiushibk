<template>
  <view :style="'height:' + scrollHeight + 'px;'">
    <!-- #ifdef MP -->
    <!-- 微信小程序端生效 -->
    <!-- 自定义导航栏 开始 -->
    <view class="fixed-top bg-white flex align-center justify-between w-100" style="height: 40px;">
      <input
        type="text"
        class="flex-fill rounded ml-2 px-2"
        style="background-color: #f5f4f2; height: 80%;"
        :placeholder="placeholder"
        placeholder-class="iconfont text-center font"
        placeholder-style="color: #6d6c67;"
      />
      <view class="flex-shrink-0 text-center mx-1" style="width: 44px;color: #333333;">
        <text class="font">搜索</text>
      </view>
    </view>
    <view style="height: 40px;"></view>
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
// 测试数据
const demo = {
  // 帖子
  post: [
    {
      username: '煎蛋',
      avatar: '/static/default.jpg',
      created_at: '2020-08-28 19:36',
      isFollow: false,
      title: '测试标题',
      cover: '/static/demo/datapic/11.jpg',
      support: {
        type: 'praise',
        praise_count: 10,
        blame_count: 10,
      },
      comment_count: 0,
      share_count: 0,
    },
    {
      username: '咸鱼',
      avatar: '/static/default.jpg',
      created_at: '2020-08-28 19:36',
      isFollow: true,
      title: '测试标题',
      cover: '/static/demo/datapic/12.jpg',
      support: {
        type: 'blame',
        praise_count: 10,
        blame_count: 10,
      },
      comment_count: 0,
      share_count: 0,
    },
    {
      username: '绿师',
      avatar: '/static/default.jpg',
      created_at: '2020-08-28 19:36',
      isFollow: true,
      title: '测试标题',
      cover: '/static/demo/datapic/2.jpg',
      support: {
        type: '',
        praise_count: 0,
        blame_count: 0,
      },
      comment_count: 0,
      share_count: 0,
    },
  ],
  // 话题
  topic: [
    {
      cover: '/static/demo/topicpic/1.jpeg',
      title: '话题名称1',
      desc: '话题描述1',
      news_count: 10,
      today_count: 10,
    },
    {
      cover: '/static/demo/topicpic/2.jpeg',
      title: '话题名称2',
      desc: '话题描述2',
      news_count: 10,
      today_count: 10,
    },
    {
      cover: '/static/demo/topicpic/3.jpeg',
      title: '话题名称3',
      desc: '话题描述3',
      news_count: 10,
      today_count: 10,
    },
    {
      cover: '/static/demo/topicpic/4.jpeg',
      title: '话题名称4',
      desc: '话题描述4',
      news_count: 10,
      today_count: 10,
    },
  ],
  // 用户
  user: [
    {
      avatar: '/static/default.jpg',
      username: '靓女',
      sex: 2, // 0保密, 1男, 2女
      age: 18,
      isFollow: true,
    },
    {
      avatar: '/static/default.jpg',
      username: '靓仔',
      sex: 1,
      age: 23,
      isFollow: false,
    },
    {
      avatar: '/static/default.jpg',
      username: '煎蛋',
      sex: 0,
      age: 30,
      isFollow: true,
    },
    {
      avatar: '/static/default.jpg',
      username: '川普',
      sex: 1,
      age: 66,
      isFollow: false,
    },
  ],
}
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
      scrollHeight: 600,
      placeholder: '',
      // 关键字
      keyword: '',
      // 搜索历史
      history: [
        {
          keyword: 'ThinkPHP5.1',
        },
        {
          keyword: 'layuiAdmin',
        },
        {
          keyword: 'Vue实战项目',
        },
        {
          keyword: 'uni-app实战项目',
        },
        {
          keyword: 'egg.js实战项目',
        },
        {
          keyword: '前后端分离实战项目',
        },
      ],
      // 搜索结果
      dataList: [],
      // 当前搜索类型
      type: 'post',
    }
  },
  onLoad(e) {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight
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
