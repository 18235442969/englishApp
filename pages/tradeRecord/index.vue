<template>
  <view class="tradeRecord page-bg-img">
    <view class="tradeRecord-top">
      <view class="status_bar"></view>
      <view class="tradeRecord-nav">
        <view class="tradeRecord-nav-icon" @click="goBack">
          <icon-font className="iconback" fontClass="iconBack" />
          我的账单
        </view>
        <view class="tradeRecord-nav-balance">
          <view class="tradeRecord-nav-balance-text">
            余额:
            <view class="tradeRecord-nav-balance-money">2100.12</view>
          </view>
        </view>
      </view>
      <view class="tradeRecord-info">
        <view class="tradeRecord-info-item tradeRecord-info-line">
          <view class="tradeRecord-info-text">
            共买
          </view>
          <view class="tradeRecord-info-money">
            1000000
            <view class="tradeRecord-info-money-text">笔</view>
          </view>
        </view>
        <view class="tradeRecord-info-item">
          <view class="tradeRecord-info-text">
            共卖
          </view>
          <view class="tradeRecord-info-money">
            58
            <view class="tradeRecord-info-money-text">笔</view>
          </view>
        </view>
      </view>
    </view>
    <view class="tradeRecord-list">
      <view class="tradeRecord-list-tab">
        <view class="tradeRecord-list-tab-item tradeRecord-list-tab-item-choose">
          购买
        </view>
        <view class="tradeRecord-list-tab-item">
          卖出
        </view>
      </view>
      <view class="tradeRecord-line"></view>
      <scroll-view class="tradeRecord-info-list" :scroll-y="true" @scrolltolower="getTradeData">
        <trade-item></trade-item>
        <trade-item></trade-item>
        <trade-item></trade-item>
        <trade-item></trade-item>
        <trade-item></trade-item>
        <trade-item></trade-item>
        <trade-item></trade-item>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  import TradeItem from './components/TradeItem.vue'
  export default {
    components: {
      TradeItem
    },
    data() {
      return {
        goBack() {
        }
      }
    },
    methods: {
      getTradeData() {
        console.log(1);
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


<style lang="scss" scoped>
  @import './index.scss';
</style>
