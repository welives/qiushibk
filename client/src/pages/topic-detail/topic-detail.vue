<template>
  <view>
    <topic-info :detail="detail"></topic-info>
    <view class="divider"></view>
    <!-- 热门帖子 开始 -->
    <view
      class="px-2 py-1 flex align-center border-bottom border-light-secondary"
      hover-class="bg-light"
      v-for="(item, index) in hotList"
      :key="index"
    >
      <text class="iconfont icon-liulan text-main font-md mr-2"></text>
      <text class="font text-ellipsis">{{ item.title }}</text>
    </view>
    <view class="divider"></view>
    <!-- 热门帖子 结束 -->

    <!-- 选项卡 开始 -->
    <view class="flex align-center w-100" style="height: 80rpx;">
      <block v-for="(item, index) in tabBars" :key="index">
        <view
          class="flex-fill text-center font-weight-bold"
          :class="tabIndex === index ? 'text-main font-lg' : 'font-md'"
          style="height: 100%;"
          @click.stop="tabIndex = index"
          >{{ item.name }}</view
        >
      </block>
    </view>
    <!-- 选项卡 结束 -->

    <!-- 列表 开始 -->
    <template v-if="listData.length > 0">
      <block v-for="(item, index) in listData" :key="index">
        <post-list :item="item" :index="index"></post-list>
        <view class="divider"></view>
      </block>
      <load-more :loadText="listData.length > limit ? load.text[load.type] : load.text[2]"></load-more>
    </template>
    <template v-else>
      <!-- 无数据提示 -->
      <no-data></no-data>
    </template>
    <!-- 列表 结束 -->
  </view>
</template>

<script>
const demo = [
  {
    username: '煎蛋',
    avatar: 'http://qfjny782p.hn-bkt.clouddn.com/qiushibk/demo/default.jpg',
    isFollow: false,
    title: '测试标题1',
    content: '英国大量上班族希望延续远程办公的政策',
    cover: 'http://qfjny782p.hn-bkt.clouddn.com/qiushibk/demo/datapic/11.jpg',
    support: {
      type: 'praise',
      praise_count: 10,
      blame_count: 10,
    },
    comment_count: 0,
    share_count: 0,
    created_at: new Date().getTime() - Math.floor(Math.random() * 1e10),
  },
  {
    username: '咸鱼',
    avatar: 'http://qfjny782p.hn-bkt.clouddn.com/qiushibk/demo/userpic/3.jpg',
    isFollow: true,
    title: '测试标题2',
    content: '外部供应链被切断，内部猴子不够用',
    cover: 'http://qfjny782p.hn-bkt.clouddn.com/qiushibk/demo/datapic/12.jpg',
    support: {
      type: 'blame',
      praise_count: 10,
      blame_count: 10,
    },
    comment_count: 0,
    share_count: 0,
    created_at: new Date().getTime() - Math.floor(Math.random() * 1e10),
  },
  {
    username: '绿师',
    avatar: 'http://qfjny782p.hn-bkt.clouddn.com/qiushibk/demo/userpic/10.jpg',
    isFollow: true,
    title: '测试标题3',
    content: 'Y染色体的消失，并不意味着男性的灭绝',
    cover: 'http://qfjny782p.hn-bkt.clouddn.com/qiushibk/demo/datapic/2.jpg',
    support: {
      type: '',
      praise_count: 0,
      blame_count: 0,
    },
    comment_count: 0,
    share_count: 0,
    created_at: new Date().getTime() - Math.floor(Math.random() * 1e10),
  },
]
import common from '@/common/mixins/common'
import postList from '@/components/common/post-list'
import topicInfo from '@/components/common/topic-info'
import loadMore from '@/components/common/load-more'

export default {
  components: {
    postList,
    topicInfo,
    loadMore,
  },
  mixins: [common],
  data() {
    return {
      tabIndex: 0,
      tabBars: [
        { id: 1, name: '默认', key: 'def' },
        { id: 2, name: '最新', key: 'new' },
      ],
      detail: {},
      hotList: [{ title: 'uni-app实战第一季社区交友' }, { title: 'uni-app实战第二季商城开发' }],
      dataList: {
        def: [],
        new: [],
      },
    }
  },
  computed: {
    tab() {
      return this.tabBars[this.tabIndex]
    },
    listData() {
      return this.dataList[this.tab.key]
    },
  },
  onLoad(e) {
    e.detail && (this.detail = JSON.parse(decodeURIComponent(e.detail)))
    this.initData()
  },
  // 页面触底事件
  onReachBottom() {
    if (this.load.type !== 2) {
      if (this.load.type === 1) return
      let list = this.dataList[this.tab.key]
      // 模拟请求
      setTimeout(() => {
        this.load.type = 1
        this.dataList[this.tab.key] = [...list, ...list]
        this.load.type = 0
      }, 500)
    }
  },
  methods: {
    initData() {
      this.dataList['def'] = demo.map((v) => {
        return { ...v }
      })
    },
  },
}
</script>

<style scoped></style>
