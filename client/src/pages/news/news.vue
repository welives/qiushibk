<template>
  <view>
    <!-- 自定义导航 -->
    <uni-nav-bar :border="false" statusBar fixed>
      <view class="flex align-center justify-center font-weight-bold w-100">
        <view class="font-md text-main mx-1">关注</view>
        <view class="font text-muted mx-1">话题</view>
      </view>
      <text slot="right" class="iconfont icon-fatie_icon" style="font-size: 20px;"></text>
    </uni-nav-bar>
  </view>
</template>

<script>
import common from '@/common/mixins/common'
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar'
export default {
  components: {
    uniNavBar,
  },
  mixins: [common],
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
</script>

<style></style>
