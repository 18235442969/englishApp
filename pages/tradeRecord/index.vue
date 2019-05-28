<template>
  <view class="tradeRecord page-bg-img">
    <view class="tradeRecord-top">
      <view class="status_bar"></view>
      <view class="tradeRecord-nav">
        <view class="tradeRecord-nav-icon" @click="goBack">
          <icon-font className="iconback" fontClass="iconBack" />
          我的账单
        </view>
        <!-- <view class="tradeRecord-nav-balance">
          <view class="tradeRecord-nav-balance-text">
            余额:
            <view class="tradeRecord-nav-balance-money">2100.12</view>
          </view>
        </view> -->
      </view>
      <view class="tradeRecord-info">
        <view class="tradeRecord-info-item tradeRecord-info-line">
          <view class="tradeRecord-info-text">
            共买
          </view>
          <view class="tradeRecord-info-money">
            {{buyNum}}
            <view class="tradeRecord-info-money-text">点券</view>
          </view>
        </view>
        <view class="tradeRecord-info-item">
          <view class="tradeRecord-info-text">
            共卖
          </view>
          <view class="tradeRecord-info-money">
            {{saleNum}}
            <view class="tradeRecord-info-money-text">点券</view>
          </view>
        </view>
      </view>
    </view>
    <view class="tradeRecord-list">
      <view class="tradeRecord-list-tab">
        <view class="tradeRecord-list-tab-item" :class="tabIndex === 0 ? 'tradeRecord-list-tab-item-choose' : ''" @click="changeTabIndex(0)">
          购买
        </view>
        <view class="tradeRecord-list-tab-item" :class="tabIndex === 1 ? 'tradeRecord-list-tab-item-choose' : ''" @click="changeTabIndex(1)">
          卖出
        </view>
      </view>
      <view class="tradeRecord-line"></view>
      <scroll-view class="tradeRecord-info-list" :scroll-y="true" @scrolltolower="buyLoadMore"  v-if="tabIndex === 0">
        <trade-item v-for="(i, index) in buyList" :key="index" :trade="i"></trade-item>
        <view class="no-data" v-if="tabIndex === 0 && buyList.length === 0">
          <text class="no-data-text">
            暂无数据
          </text>
        </view>
      </scroll-view>
      <scroll-view class="tradeRecord-info-list" :scroll-y="true" @scrolltolower="saleLoadMore" v-if="tabIndex === 1">
        <trade-item  v-for="(i, index) in saleList" :key="index" :trade="i"></trade-item>
        <view class="no-data" v-if="tabIndex === 1 && saleList.length === 0">
          <text class="no-data-text">
            暂无数据
          </text>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<script>
  import TradeItem from './components/TradeItem.vue';
  import marketApi from '../../api/market';
  export default {
    components: {
      TradeItem
    },
    data() {
      return {
        tabIndex: 0,
        loadMore: true,

        buyNum: 0,
        saleNum: 0,

        buyList: [],
        buyPageCount: 0,
        buyPageIndex: 1,
        buyPageSize: 20,

        saleList: [],
        salePageCount: 0,
        salePageIndex: 1,
        salePageSize: 20,
      }
    },
    onLoad () {
      this.getBuyTradeData();
      this.getSaleTradeData();
      this.getTradeInfo();
    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      changeTabIndex(index) {
        if (this.tabIndex !== index) {
          this.tabIndex = index;
        }
      },
      buyLoadMore() {
        if (this.buyPageIndex < this.buyPageCount && this.loadMore) {
          this.buyPageIndex++;
          this.loadMore = false;
          this.getBuyTradeData();
        }
      },
      saleLoadMore() {
        if (this.salePageIndex < this.salePageCount && this.loadMore) {
          this.salePageIndex++;
          this.loadMore = false;
          this.getSaleTradeData();
        }
      },
      async getTradeInfo() {
        try {
          let res = await marketApi.getMyTranDB();
          this.loadMore = true;
          if (res.success) {
            this.buyNum = res.body.csTotal;
            this.saleNum = res.body.amount;
          }
        } catch (error) {
        }
      },
      async getBuyTradeData() {
        try {
          let res = await marketApi.getMyTranList({
            pageIndex: this.buyPageIndex,
            pageSize: this.buyPageSize,
            type: 0
          });
          this.loadMore = true;
          if (res.success) {
            this.buyPageCount = res.body.pageCount;
            this.buyList = [...this.buyList, ...res.body.paging];
          }
        } catch (error) {
          this.loadMore = true;
        }
      },
      async getSaleTradeData() {
        try {
          let res = await marketApi.getMyTranList({
            pageIndex: this.salePageIndex,
            pageSize: this.salePageSize,
            type: 1
          });
          this.loadMore = true;
          if (res.success) {
            this.salePageCount = res.body.pageCount;
            this.saleList = [...this.saleList, ...res.body.paging];
          }
        } catch (error) {
          this.loadMore = true;
        }
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
