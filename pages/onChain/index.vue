<template>
  <view class="chain">
    <scroll-view class="chain-info" :scroll-y="true" @scrolltolower="getMore">
      <view class="chain-list">
        <view class="chain-item" v-for="(i, index) in chainList" :key="index">
          <view class="chain-item-left">
            <view class="chain-item-middle chain-item-start">
              上链时间
            </view>
            <view class="chain-item-bottom chain-item-start chain-item-time">
              {{i.createTime | timeFilter}}
            </view>
          </view>
          <view class="chain-item-right">
            <view class="chain-item-middle chain-item-end">
              上链金额
            </view>
            <view class="chain-item-bottom chain-item-end">
              {{i.plan}}
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
  import userApi from '../../api/user';
  import time from '../../utils/time';
  export default {
    data() {
      return {
        chainList: [],
        pageCount: 0,
        dataCount: 0,
        pageIndex: 1,
        pageSize: 20,
        loadMore: true
      }
    },
    methods: {
      getMore() {
        if (this.pageIndex < this.pageCount && this.loadMore) {
          this.pageIndex++;
          this.loadMore = false;
          this.getChainData();
        }
      },
      async getChainData() {
        try {
          let res = await userApi.getAmountList({
            pageIndex: this.pageIndex,
            pageSize: this.pageSize
          });
          this.loadMore = true;
          if (res.success) {
            this.pageCount = res.body.pageCount;
            this.dataCount = res.body.dataCount;
            this.chainList = [...this.chainList, ...res.body.paging];
          }
        } catch (error) {
          this.loadMore = true;
        }
      }
    },
    filters: {
      timeFilter(val) {
        return val.replace(/T/g, ' ').replace(/-/g, '/');
      }
    },
    onLoad() {
      this.getChainData();
    }
  }
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
