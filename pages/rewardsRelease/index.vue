<template>
  <view class="rewards">
    <view class="rewards-tab">
      <view class="rewards-tab-item rewards-tab-item-choose">
        推荐奖
      </view>
      <view class="rewards-tab-item">
        充值奖
      </view>
      <view class="rewards-tab-item">
        持有奖
      </view>
    </view>
    <view class="rewards-line"></view>
    <scroll-view :scroll-y="true" class="rewards-list">
      <rewards-item></rewards-item>
      <rewards-item></rewards-item>
      <rewards-item></rewards-item>
      <rewards-item></rewards-item>
      <rewards-item></rewards-item>
      <rewards-item></rewards-item>
      <rewards-item></rewards-item>
      <rewards-item></rewards-item>
      <rewards-item></rewards-item>
      <rewards-item></rewards-item>
      <rewards-item></rewards-item>
    </scroll-view>
	</view>
</template>

<script>
  import RewardsItem from './components/RewardsItem.vue';
  export default {
    components: {
      RewardsItem
    },
    data() {
      return {
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import './index.scss';
</style>
