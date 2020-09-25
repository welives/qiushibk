<template>
  <view>
    <!-- 顶部选项卡 开始 -->
    <scroll-view
      scroll-x
      class="scroll-row border-bottom border-light-secondary"
      style="height: 80rpx;"
      :scroll-into-view="scrollInto"
      scroll-with-animation
    >
      <view
        class="scroll-row-item px-2 py-1"
        :class="tabIndex === index ? 'text-main font' : ''"
        :id="'tab_' + item.id"
        v-for="(item, index) in tabBars"
        :key="index"
        @click.stop="changeTab(index)"
      >
        <text
          class="pb-1 px-1"
          :class="tabIndex === index ? 'border-bottom border-main' : ''"
          style="border-width: 5rpx;"
          >{{ item.name }}</text
        >
      </view>
    </scroll-view>
    <!-- 顶部选项卡 结束 -->

    <!-- 滑动内容区 开始 -->
    <swiper :current="tabIndex" :duration="150" :style="'height: ' + scrollHeight + 'px;'" @change="changeSwiper">
      <swiper-item v-for="(item, index) in dataList" :key="index">
        <scroll-view scroll-y style="height: 100%;" @scrolltolower="loadMore(index)">
          <template v-if="item.list.length > 0">
            <block v-for="(list, idx) in item.list" :key="idx">
              <topic-list :item="list" :index="idx"></topic-list>
            </block>
            <!-- 上拉加载 -->
            <load-more :loadText="item.list.length > limit ? load.text[load.type] : load.text[2]"></load-more>
          </template>
          <template v-else>
            <!-- 无数据提示 -->
            <no-data></no-data>
          </template>
        </scroll-view>
      </swiper-item>
    </swiper>
    <!-- 滑动内容区 结束 -->
  </view>
</template>

<script>
import demo from './demo'
import common from '@/common/mixins/common'
import topicList from '@/components/common/topic-list'
import loadMore from '@/components/common/load-more'

export default {
  components: {
    topicList,
    loadMore,
  },
  mixins: [common],
  data() {
    return {
      // 顶部选项卡
      tabIndex: 0,
      tabBars: [],
      scrollInto: '',
      dataList: [],
      scrollHeight: 600,
    }
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight - uni.upx2px(80)
    this.initData()
  },
  methods: {
    // 初始化数据
    initData() {
      this.tabBars = demo.tabBars.map((v) => {
        return { ...v }
      })
      this.dataList = this.tabBars.map((v, i) => {
        if (i < 3) {
          return {
            list: demo.topicList.map((item) => {
              return { ...item }
            }),
          }
        } else {
          return { list: [] }
        }
      })
    },
    // 切换选项卡
    changeTab(index) {
      if (this.tabIndex === index) return
      this.tabIndex = index
      // 滚动到指定元素
      this.scrollInto = 'tab_' + this.tabBars[index].id
    },
    // swiper组件左右切换
    changeSwiper(e) {
      this.changeTab(e.detail.current)
    },
    // scroll-view组件触底事件
    loadMore(index) {
      if (this.load.type !== 2) {
        if (this.load.type === 1) return
        let list = this.dataList[index].list
        setTimeout(() => {
          this.load.type = 1
          this.dataList[index].list = [...list, ...list]
          this.load.type = 0
        }, 500)
      }
    },
  },
}
</script>

<style scoped></style>
