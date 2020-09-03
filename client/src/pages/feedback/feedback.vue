<template>
  <view>
    <uni-collapse class="py-2" :accordion="true">
      <uni-collapse-item title="一文不名" :showAnimation="true">
        <text class="bg-light p-2"
          >今天，是我拿到驾照的10周年。我的驾驶记录非常完美：0事故，0罚单。今天也是距离我最后一次开车10周年的日子。FML</text
        >
      </uni-collapse-item>
      <uni-collapse-item title="浪漫已死" :showAnimation="true">
        <text class="bg-light p-2"
          >今天，我正在进行一场非常重要的视频员工会议。结果我的男朋友下班回家，边开门边吼道：“宝贝儿！我的小丁丁已经准备好啦！”我当时没静音。FML</text
        >
      </uni-collapse-item>
      <uni-collapse-item title="宕鸡" :showAnimation="true">
        <text class="bg-light p-2"
          >我因为头部受重伤住了院，最近刚回家。我的医生警告我说局部皮肤可能会出现麻木无感，结果还真让他说中了。是我的小和尚。什么都感觉不到啊。我们还是在床上发现的，变着花儿都叫不起来它，这家伙彻底凉了。FML</text
        >
      </uni-collapse-item>
    </uni-collapse>
    <view class="px-4 pt-5">
      <button type="primary" class="border-0 bg-main text-white" style="border-radius: 50rpx; letter-spacing: 6rpx;">
        意见反馈
      </button>
    </view>
  </view>
</template>

<script>
import uniCollapse from '@/components/uni-ui/uni-collapse/uni-collapse'
import uniCollapseItem from '@/components/uni-ui/uni-collapse-item/uni-collapse-item'
export default {
  components: {
    uniCollapse,
    uniCollapseItem,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
