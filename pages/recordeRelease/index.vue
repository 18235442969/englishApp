<template>
  <view class="recorde-release">
    <!-- <view class="recorde-info">
      <view class="status_bar"></view>
      <view class="recorde-nav">
        <view class="recorde-nav-icon" @click="goBack">
          <icon-font className="iconback" fontClass="iconBack" />
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
    </view> -->
    <scroll-view class="recorde-list" :scroll-y="true" @scrolltolower="getMore">
      <release-item v-for="(i, index) in releaseList" :key="index" :release="i"></release-item>
      <view class="no-data" v-if="releaseList.length === 0">
        <text class="no-data-text">
          暂无数据
        </text>
      </view>
    </scroll-view>
	</view>
</template>

<script>
  import ReleaseItem from './components/ReleaseItem.vue';
  import userApi from '../../api/user';
  export default {
    components: {
      ReleaseItem
    },
    data() {
      return {
        releaseList: [],
        pageCount: 0,
        dataCount: 0,
        pageIndex: 1,
        pageSize: 20,
        loadMore: true
      }
    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      getMore() {
        if (this.pageIndex < this.pageCount && this.loadMore) {
          this.pageIndex++;
          this.loadMore = false;
          this.getReleaseList();
        }
      },
      async getReleaseList() {
        try {
          let res = await userApi.getReleaseList({
            pageIndex: this.pageIndex,
            pageSize: this.pageSize
          });
          this.loadMore = true;
          if (res.success) {
            this.pageCount = res.body.pageCount;
            this.dataCount = res.body.dataCount;
            this.releaseList = [...this.releaseList, ...res.body.paging];
          }
        } catch (error) {
          this.loadMore = true;
        }
      }
    },
    onLoad() {
      this.getReleaseList();
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
