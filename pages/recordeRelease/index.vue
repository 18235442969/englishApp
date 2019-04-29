<template>
  <view class="recorde-release">
    <view class="recorde-info">
      <view class="status_bar"></view>
      <view class="recorde-nav">
        <view class="recorde-nav-icon">
          <icon-font className="iconback" fontClass="iconBack" @clickIcon="goBack" />
          释放记录
        </view>
      </view>
      <view class="recorde-info-data">
        <view class="recorde-info-text">
          释放总额
        </view>
        <view class="recorde-info-money">
          1000000
        </view>
        <view class="recorde-info-text">
          点券
        </view>
      </view>
    </view>
    <scroll-view class="recorde-list" :scroll-y="true">
      <release-item></release-item>
      <release-item></release-item>
      <release-item></release-item>
      <release-item></release-item>
      <release-item></release-item>
      <release-item></release-item>
      <release-item></release-item>
      <release-item></release-item>
      <release-item></release-item>
      <release-item></release-item>
      <release-item></release-item>
      <release-item></release-item>
      <release-item></release-item>
      <release-item></release-item>
    </scroll-view>
	</view>
</template>

<script>
  import ReleaseItem from './components/ReleaseItem.vue';
  export default {
    components: {
      ReleaseItem
    },
    data() {
      return {
      }
    },
    methods: {
      goBack() {

      }
    }
  }
</script>

<style>
  .iconBack{
    font-size: 1rem !important;
		color: #fff;
    margin: 2px 10px 0 10px;
  }
</style>

<style lang='scss' scoped>
  @import './index.scss';
</style>
