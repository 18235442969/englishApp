<template>
  <view class="notice-detail" v-if="noticeDetail.id">
    <view class="notice-detail-title">
      {{noticeDetail.title}}
    </view>
    <view class="notice-detail-content">
      {{noticeDetail.context}}
    </view>
	</view>
  <view v-else>
  </view>
</template>

<script>
  import noticeApi from '../../api/notice.js';
  export default {
    data() {
      return {
        noticeDetail: {}
      }
    },
    methods: {
      async getNoticeDetail(id) {
        uni.showLoading({
          mask: true
        });
        try {
          let res = await noticeApi.getModel({
            id
          });
          if (res.success) {
            this.noticeDetail = res.body;
          }
        } catch (error) {
        }
      }
    },
    onLoad(option) {
      this.getNoticeDetail(option.id);
    }
  }
</script>

<style lang='scss' scoped>
  @import './index.scss';
</style>
