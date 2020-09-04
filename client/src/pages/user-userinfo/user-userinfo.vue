<template>
  <view>
    <uni-list-item title="头像" :showArrow="false">
      <view slot="right" class="flex align-center" @click.stop="setAvatar">
        <image
          class="rounded-circle mr-2"
          style="width: 80rpx; height: 80rpx;"
          :src="userInfo.avatar || '/static/default.jpg'"
        ></image>
        <text class="iconfont icon-bianji1 text-light-muted font"></text>
      </view>
    </uni-list-item>
    <uni-list-item title="昵称" :showArrow="false" @click="userInfo.name.isEdit = true">
      <view slot="right" class="flex align-center">
        <input
          class="rounded mr-2 font"
          :class="userInfo.name.isEdit ? 'bg-light ' : 'text-right'"
          style="height: 60rpx;"
          v-model="userInfo.name.text"
          :focus="userInfo.name.isEdit"
          @blur="userInfo.name.isEdit = false"
        />
        <text class="iconfont icon-bianji1 text-light-muted font"></text>
      </view>
    </uni-list-item>
    <uni-list-item title="性别" :showArrow="false" @click="setSex">
      <view slot="right">
        <text class="mr-2 font">{{ sexText }}</text>
        <text class="iconfont icon-bianji1 text-light-muted font"></text>
      </view>
    </uni-list-item>
    <picker mode="date" :value="userInfo.birthday" @change="setBirthday">
      <uni-list-item title="生日" :showArrow="false">
        <view slot="right">
          <text class="mr-2 font">{{ userInfo.birthday }}</text>
          <text class="iconfont icon-bianji1 text-light-muted font"></text>
        </view>
      </uni-list-item>
    </picker>
    <uni-list-item title="情感" :showArrow="false" @click="setEmotion">
      <view slot="right">
        <text class="mr-2 font">{{ emotionText }}</text>
        <text class="iconfont icon-bianji1 text-light-muted font"></text>
      </view>
    </uni-list-item>
    <uni-list-item title="职业" :showArrow="false" @click="userInfo.job.isEdit = true">
      <view slot="right" class="flex align-center">
        <input
          class="rounded mr-2 font"
          :class="userInfo.job.isEdit ? 'bg-light ' : 'text-right'"
          style="height: 60rpx;"
          v-model="userInfo.job.text"
          :focus="userInfo.job.isEdit"
          @blur="userInfo.job.isEdit = false"
        />
        <text class="iconfont icon-bianji1 text-light-muted font"></text>
      </view>
    </uni-list-item>
    <uni-list-item title="家乡" :showArrow="false" @click="openSimpleAddress">
      <view slot="right">
        <text class="mr-2 font">{{ userInfo.country }}</text>
        <text class="iconfont icon-bianji1 text-light-muted font"></text>
      </view>
    </uni-list-item>

    <view class="px-4 pt-5">
      <button
        type="primary"
        class="border-0 bg-main text-white"
        style="border-radius: 60rpx; letter-spacing: 6rpx;"
        @click.stop="submit"
      >
        完成
      </button>
    </view>

    <simple-address ref="simpleAddress" confirmColor="#007AFF" @onConfirm="setCountry"></simple-address>
  </view>
</template>

<script>
const sexArr = ['保密', '男', '女']
const emotionArr = ['保密', '单身', '恋爱中', '未婚', '已婚', '丧偶']
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item'
import simpleAddress from '@/components/simple-address/simple-address'
export default {
  components: {
    uniListItem,
    simpleAddress,
  },
  data() {
    return {
      userInfo: {
        avatar: 'http://qfjny782p.hn-bkt.clouddn.com/demo/default.jpg',
        name: {
          isEdit: false,
          text: '煎蛋',
        },
        sex: 0,
        birthday: '',
        emotion: 0,
        job: {
          isEdit: false,
          text: '码农',
        },
        country: '',
      },
    }
  },
  computed: {
    sexText() {
      return sexArr[this.userInfo.sex]
    },
    emotionText() {
      return emotionArr[this.userInfo.emotion]
    },
  },
  onBackPress() {
    if (this.$refs.simpleAddress.showPopup) {
      this.$refs.simpleAddress.close()
      return true
    }
  },
  onUnload() {
    if (this.$refs.simpleAddress.showPopup) {
      this.$refs.simpleAddress.close()
    }
  },
  methods: {
    // 表单提交
    submit() {
      uni.showToast({
        title: JSON.stringify(this.userInfo),
        icon: 'none',
      })
    },
    // 设置头像
    setAvatar() {
      uni.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        success: (chooseImageRes) => {
          this.userInfo.avatar = chooseImageRes.tempFilePaths[0]
        },
      })
    },
    // 设置性别
    setSex() {
      uni.showActionSheet({
        itemList: sexArr,
        success: (res) => {
          this.userInfo.sex = res.tapIndex
        },
      })
    },
    // 设置情感
    setEmotion() {
      uni.showActionSheet({
        itemList: emotionArr,
        success: (res) => {
          this.userInfo.emotion = res.tapIndex
        },
      })
    },
    // 设置生日
    setBirthday(e) {
      this.userInfo.birthday = e.detail.value
    },
    // 设置家乡
    setCountry(e) {
      this.userInfo.country = e.label
    },
    // 打开三级地址联动组件
    openSimpleAddress() {
      this.$refs.simpleAddress.open()
    },
  },
}
</script>

<style scoped></style>
