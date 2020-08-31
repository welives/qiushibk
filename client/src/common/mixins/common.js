import $T from '@/common/time'
export default {
  data() {
    return {
      // 上拉加载的三种文字状态
      load: { type: 0, text: ['上拉加载更多...', '加载中...', '真的一滴都没有了'] },
      page: 1,
      limit: 10,
      limits: [5, 7, 10, 13, 15],
    }
  },
  filters: {
    formatTime(value) {
      return $T.getTime(value)
    },
  },
  methods: {
    // 返回上一页
    back(step = 1) {
      uni.navigateBack({
        delta: step,
      })
    },
    // 跳转到指定页面
    navigateTo(path) {
      uni.navigateTo({
        url: `/pages/${path}/${path}`,
      })
    },
  },
}
