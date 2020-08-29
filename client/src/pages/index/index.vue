<template>
  <view>
    <!-- 顶部选项卡 -->
    <scroll-view
      scroll-x
      class="scroll-row border-bottom border-light-secondary"
      style="height: 40px;"
      :scroll-into-view="scrollInto"
      scroll-with-animation
    >
      <view
        class="scroll-row-item px-3 py-1"
        :class="tabIndex === index ? 'text-main font' : ''"
        :id="'tab_' + item.id"
        v-for="(item, index) in tabBars"
        :key="index"
        @click.stop="changeTab(index)"
      >
        {{ item.name }}
      </view>
    </scroll-view>
    <swiper :current="tabIndex" :duration="150" @change="changeSwiper" :style="'height: ' + scrollHeight + 'px;'">
      <swiper-item v-for="(item, index) in dataList" :key="index">
        <scroll-view scroll-y style="height: 100%;">
          <block v-for="(list, idx) in item.list" :key="idx">
            <common-list :item="list" :index="idx" @follow="follow" @support="support"></common-list>
            <view class="divider"></view>
          </block>
        </scroll-view>
      </swiper-item>
    </swiper>
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
      // 顶部选项卡
      scrollInto: '',
      tabIndex: 0,
      tabBars: [
        {
          id: 1,
          name: '关注',
        },
        {
          id: 2,
          name: '推荐',
        },
        {
          id: 3,
          name: '体育',
        },
        {
          id: 4,
          name: '热点',
        },
        {
          id: 5,
          name: '财经',
        },
        {
          id: 6,
          name: '娱乐',
        },
        {
          id: 7,
          name: '军事',
        },
        {
          id: 8,
          name: '历史',
        },
        {
          id: 9,
          name: '本地',
        },
      ],
      dataList: [],
      scrollHeight: 600,
    }
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight - 40
    this.getData()
  },
  methods: {
    getData() {
      let arr = []
      this.tabBars.forEach((v) => {
        arr.push({ list: demo })
      })
      this.dataList = arr
    },
    // 切换选项卡
    changeTab(index) {
      if (this.tabIndex === index) return
      this.tabIndex = index
      // 滚动到指定元素
      this.scrollInto = 'tab_' + this.tabBars[index].id
    },
    changeSwiper(e) {
      // this.tabIndex = e.detail.current
      this.changeTab(e.detail.current)
    },
    // 关注 | 取消关注
    follow(e) {
      this.list[e].isFollow = !this.list[e].isFollow
      return uni.showToast({
        title: this.list[e].isFollow ? '关注成功' : '已取消关注',
        icon: 'none',
      })
    },
    // 赞 | 踩
    support(e) {
      // 拿到当前的操作对象
      let item = this.list[e.index]
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
  },
}
</script>

<style scoped></style>
