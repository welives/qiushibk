<template>
  <view>
    <!-- 聊天内容 开始 -->
    <scroll-view
      scroll-y
      style="position: absolute; left: 0; right: 0; top: 0; bottom: 50px;"
      :style="'height:' + scrollHeight + 'px;'"
      :scroll-into-view="scrollInto"
      scroll-with-animation
    >
      <block v-for="(item, index) in dataList" :key="index">
        <view :id="'chat_' + index">
          <chat-list :item="item" :index="index" :prevTime="index > 0 ? dataList[index - 1].created_at : 0"></chat-list>
        </view>
      </block>
    </scroll-view>
    <!-- 聊天内容 结束 -->

    <!-- 底部操作条 开始 -->
    <view
      class="fixed-bottom flex align-center justify-between bg-white px-2 border-top border-light-secondary"
      style="height: 50px;"
    >
      <view class="flex-fill py-1 rounded" style="background-color: rgba(0, 0, 0, 0.05);">
        <input
          type="text"
          class="px-2"
          placeholder="文明发言"
          placeholder-class="text-light-muted"
          v-model="content"
          @confirm="submit"
        />
      </view>
      <view
        class="flex-shrink-0 text-center text-main animate__animated"
        hover-class="animate__pulse"
        style="width: 50px;"
        @click.stop="submit"
      >
        <text class="iconfont icon-fabu" style="font-size: 50rpx;"></text>
      </view>
    </view>
    <!-- 底部操作条 结束 -->
  </view>
</template>

<script>
const demo = [
  {
    id: 1,
    user_id: 2,
    username: '女神',
    avatar: '/static/default.jpg',
    content: '呼叫舔狗',
    type: 'text',
    created_at: 1598897479,
  },
  {
    id: 2,
    user_id: 2,
    username: '女神',
    avatar: '/static/default.jpg',
    content: '?????????????????????????????????????????????????????????????????????????',
    type: 'text',
    created_at: 1598897779,
  },
  {
    id: 3,
    user_id: 1,
    username: '舔狗',
    avatar: '/static/default.jpg',
    content: '汪汪汪',
    type: 'text',
    created_at: 1598900918,
  },
]
import chatList from '@/components/common/chat-list'

export default {
  components: { chatList },
  data() {
    return {
      scrollHeight: 600,
      dataList: [],
      content: '',
      scrollInto: '',
    }
  },
  onLoad() {
    uni.setNavigationBarTitle({
      title: '女神',
    })
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight - 50
    this.initData()
  },
  onReady() {
    this.scrollToBottom()
  },
  methods: {
    // 初始化页面数据
    initData() {
      this.dataList = demo.map((v) => {
        return { ...v }
      })
    },
    // 发送
    submit() {
      if (!this.content) return
      let msg = {
        user_id: 1,
        username: '舔狗',
        avatar: '/static/default.jpg',
        content: this.content,
        type: 'text',
        created_at: new Date().getTime(),
      }
      this.content && this.dataList.push(msg)
      this.content = ''
      this.scrollToBottom()
    },
    // 滚动到底部
    scrollToBottom() {
      let lastIndex = this.dataList.length - 1
      if (lastIndex < 0) return
      setTimeout(() => {
        this.scrollInto = 'chat_' + lastIndex
      }, 250)
    },
  },
}
</script>

<style scoped></style>
