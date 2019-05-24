<template>
  <view class="rewards">
    <view class="rewards-tab">
      <view class="rewards-tab-item" :class="tabIndex === 0 ? 'rewards-tab-item-choose' : ''" @click="changeTab(0)">
        推荐奖
      </view>
      <view class="rewards-tab-item" :class="tabIndex === 1 ? 'rewards-tab-item-choose' : ''" @click="changeTab(1)">
        充值奖
      </view>
      <!-- <view class="rewards-tab-item" :class="tabIndex === 2 ? 'rewards-tab-item-choose' : ''" @click="changeTab(2)">
        持有奖
      </view> -->
    </view>
    <view class="rewards-line"></view>
    <scroll-view :scroll-y="true" class="rewards-list" v-show="tabIndex === 0" @scrolltolower="getRecommendMore">
      <rewards-item v-for="(i , index) in recommendList" :key="index" :item="i" ></rewards-item>
      <view class="no-data" v-if="tabIndex === 0 && recommendList.length === 0">
        <text class="no-data-text">
          暂无数据
        </text>
      </view>
    </scroll-view>
    <scroll-view :scroll-y="true" class="rewards-list" v-show="tabIndex === 1" @scrolltolower="getRechargeMore">
      <rewards-item v-for="(i , index) in rechargeList" :key="index" :item="i"></rewards-item>
      <view class="no-data" v-if="tabIndex === 1 && rechargeList.length === 0">
        <text class="no-data-text">
          暂无数据
        </text>
      </view>
    </scroll-view>
    <!-- <scroll-view :scroll-y="true" class="rewards-list" v-if="tabIndex === 2">
      <rewards-item></rewards-item>2
    </scroll-view> -->
	</view>
</template>

<script>
  import RewardsItem from './components/RewardsItem.vue';
  import userApi from '../../api/user';
  export default {
    components: {
      RewardsItem
    },
    data() {
      return {
        tabIndex: 0,
        recommendList: [],
        recommendPageCount: 0,
        recommendDataCount: 0,
        recommendPageIndex: 1,
        recommendPageSize: 20,
        rechargeList: [],
        rechargePageCount: 0,
        rechargeDataCount: 0,
        rechargePageIndex: 1,
        rechargePageSize: 20,
        loadMore: true
      }
    },
    methods: {
      changeTab(index) {
        if (index !== this.tabIndex) {
          this.tabIndex = index;
        }
      },
      getRecommendMore() {
        if (this.recommendPageIndex < this.recommendPageCount && this.loadMore) {
          this.recommendPageIndex++;
          this.loadMore = false;
          this.getRecommendList();
        }
      },
      getRechargeMore() {
        if (this.rechargePageIndex < this.rechargeDataCount && this.loadMore) {
          this.rechargePageIndex++;
          this.loadMore = false;
          this.getRechargeList();
        }
      },
      async getRecommendList() {
        try {
          let res = await userApi.getRecommendList({
            pageIndex: this.recommendPageIndex,
            pageSize: this.recommendPageSize
          });
          this.loadMore = true;
          if (res.success) {
            this.recommendPageCount = res.body.pageCount;
            this.recommendDataCount = res.body.dataCount;
            this.recommendList = [...this.recommendList, ...res.body.paging];
          }
        } catch (error) {
          this.loadMore = true;
        }
      },
      async getRechargeList() {
        try {
          let res = await userApi.getRechargeList({
            pageIndex: this.rechargePageIndex,
            pageSize: this.rechargePageSize
          });
          this.loadMore = true;
          if (res.success) {
            this.rechargePageCount = res.body.pageCount;
            this.rechargeDataCount = res.body.dataCount;
            this.rechargeList = [...this.rechargeList, ...res.body.paging];
          }
        } catch (error) {
          this.loadMore = true;
        }
      }
    },
    onLoad() {
      this.getRecommendList();
      this.getRechargeList();
    }
  }
</script>

<style lang='scss' scoped>
  @import './index.scss';
</style>
