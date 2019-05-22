<template>
  <view class="trade page-bg-img">
		<view class="status_bar"></view>
    <view class="trade-info">
      <view class="trade-info-top">
        <view class="trade-info-top-left">
          37.01
        </view>
        <view class="trade-info-top-right">
          最高：<text class="trade-info-top-right-num">37.92</text>
        </view>
      </view>
      <view class="trade-info-bottom">
        <view class="trade-info-bottom-left">
          -0.77  -8.25%
        </view>
        <view class="trade-info-bottom-right">
          最高：<text class="trade-info-bottom-right-num">37.92</text>
        </view>
      </view>
    </view>
    <!-- <view class="trade-chart">
      <view class="trade-chart-btn-list">
        <view class="trade-chart-btn trade-chart-btn-choose">
          日线
        </view>
        <view class="trade-chart-btn">
          月线
        </view>
      </view>
    </view> -->
    <view class="trade-cancelled">
      <view class="trade-cancelled-new" @click="gotoPage('young')">
        <view class="trade-cancelled-new-logo">
          <img src="../../asstes/images/young.png" class="trade-cancelled-new-img"/>
        </view>
        小蜜蜂
      </view>
      <view class="trade-cancelled-standard" @click="gotoPage('standard')">
        <view class="trade-cancelled-standard-logo">
          <img src="../../asstes/images/standard.png" class="trade-cancelled-new-img"/>
        </view>
        大蜜蜂
      </view>
    </view>
	</view>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      gotoPage(id) {
        uni.navigateTo({
          url: `/pages/putUpOrder/index?id=${id}`
        });
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import './index.scss';
</style>
