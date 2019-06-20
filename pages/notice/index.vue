<template>
  <scroll-view class="notice" :scroll-y="true" @scrolltolower="getMore" :lower-threshold="100">
    <view class="notice-info" v-for="item in noticeList" :key="item.id" @click="gotoDetail(item.id)">
      <view class="notice-item">
        <view class="notice-icon">·</view>
        <view class="notice-text">
          {{item.title}}
        </view>
        <view class="notice-time">
          {{item.createtime | timeFilter}}
        </view>
      </view>
    </view>
    <view class="no-data" v-if="noticeList.length === 0">
      <text class="no-data-text">
        暂无数据
      </text>
    </view>
	</scroll-view>
</template>

<script>
  import noticeApi from '../../api/notice.js';
  export default {
    data() {
      return {
        noticeList: [],
        pageCount: 0,
        dataCount: 0,
        pageIndex: 1,
        pageSize: 20,
        loadMore: true
      }
    },
    filters: {
      timeFilter(val) {
        let index = val.lastIndexOf(':');
        let time = val.slice(0, index);
        return time.replace(/-/g, '/').replace(/T/g, '');
      }
    },
    methods: {
      getMore() {
        if (this.pageIndex < this.pageCount && this.loadMore) {
          this.pageIndex++;
          this.loadMore = false;
          this.getNoticeList();
        }
      },
      async getNoticeList() {
        try {
          let res = await noticeApi.getNoticeList({
            pageIndex: this.pageIndex,
            pageSize: this.pageSize
          });
          this.loadMore = true;
          if (res.success) {
            this.pageCount = res.body.pageCount;
            this.dataCount = res.body.dataCount;
            this.noticeList = [...this.noticeList, ...res.body.paging];
          }
        } catch (error) {
          this.loadMore = true;
        }
      },
      gotoDetail(id) {
        uni.navigateTo({
          url: `/pages/noticeDetail/index?id=${id}`
        })
      }
    },
    mounted() {
      
    },
    created() {
      this.getNoticeList();
    },
  }
</script>

<style lang='scss' scoped>
  @import './index.scss';
</style>
