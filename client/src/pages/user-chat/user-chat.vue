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
    <bottom-input @submit="doSubmit"></bottom-input>
    <!-- 底部操作条 结束 -->
  </view>
</template>

<script>
const demo = [
  {
    id: 1,
    user_id: 2,
    username: '女神',
    avatar: 'http://qfjny782p.hn-bkt.clouddn.com/qiushibk/demo/userpic/14.jpg',
    content: '呼叫舔狗',
    type: 'text',
    created_at: 1598897479,
  },
  {
    id: 2,
    user_id: 2,
    username: '女神',
    avatar: 'http://qfjny782p.hn-bkt.clouddn.com/qiushibk/demo/userpic/14.jpg',
    content: '?????????????????????????????????????????????????????????????????????????',
    type: 'text',
    created_at: 1598897779,
  },
  {
    id: 3,
    user_id: 1,
    username: '舔狗',
    avatar: 'http://qfjny782p.hn-bkt.clouddn.com/qiushibk/demo/userpic/10.jpg',
    content: '汪汪汪',
    type: 'text',
    created_at: 1598900918,
  },
]
import chatList from '@/components/common/chat-list'
import bottomInput from '@/components/common/bottom-input'

export default {
  components: {
    chatList,
    bottomInput,
  },
  data() {
    return {
      scrollHeight: 600,
      dataList: [],
      scrollInto: '',
    }
  },
  onLoad() {
    const res = uni.getSystemInfoSync()
    this.scrollHeight = res.windowHeight - 50
    uni.setNavigationBarTitle({
      title: '女神',
    })
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
    doSubmit(data) {
      let msg = {
        user_id: 1,
        username: '舔狗',
        avatar: '/static/default.jpg',
        content: data,
        type: 'text',
        created_at: new Date().getTime(),
      }
      this.dataList.push(msg)
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
