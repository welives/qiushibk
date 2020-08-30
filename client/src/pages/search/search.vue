<template>
  <view>
    <!-- 搜索历史 -->
    <view v-if="list.length === 0" class="px-2">
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
    <!-- 搜索结果 -->
    <block v-else v-for="(item, index) in list" :key="index">
      <common-list :item="item" :index="index"></common-list>
    </block>
  </view>
</template>

<script>
import commonList from '@/components/common/common-list'
let demo = [
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
]
export default {
  components: {
    commonList,
  },
  data() {
    return {
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
      list: [],
    }
  },
  onNavigationBarButtonTap(e) {
    e.index === 0 && this.search()
  },
  onNavigationBarSearchInputChanged(e) {
    this.keyword = e.text
  },
  methods: {
    search() {
      if (!this.keyword) {
        return uni.showToast({
          title: '请输入关键字',
          icon: 'none',
        })
      }
      // 收起键盘
      uni.hideKeyboard()
      // 搜索请求
      uni.showLoading({ title: '加载中' })
      setTimeout(() => {
        this.list = demo
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
