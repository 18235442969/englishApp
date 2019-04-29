<template>
  <view class="release-item">
    <view class="release-item-left">
      <view class="release-item-middle release-item-start">
        释放时间
      </view>
      <view class="release-item-bottom release-item-start release-item-time">
        2019-4-11 16:57:23
      </view>
    </view>
    <view class="release-item-center">
      <view class="release-item-middle">
        释放金额
      </view>
      <view class="release-item-bottom">
        2000
      </view>
    </view>
    <view class="release-item-fill"></view>
    <view class="release-item-right">
      <view class="release-item-middle release-item-start">
        资产基数
      </view>
      <view class="release-item-bottom release-item-start">
        2200
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .release-item{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #eeeff1;
    .release-item-left, .release-item-center, .release-item-right{
      flex-grow: 1;
      padding: 10px 0;
      .release-item-middle, .release-item-bottom{
        display: flex;
        justify-content: center;
        font-size: 0.75rem;
        flex-grow: 1;
        height: 50%;
      }
      .release-item-middle{
        color: #a4a5a6;
        font-size: 0.7rem;
      }
      .release-item-bottom{
        align-items: flex-end;
        color: #4ba1e0;
        font-size: 1rem;
      }
      .release-item-start{
        justify-content: flex-start;
      }
      .release-item-time{
        font-size: 0.65rem;
        color: #f68650;
      }
    }
    .release-item-left{
      width: 33.33%;
    }
    .release-item-center{
      width: 33.33%;
    }
    .release-item-fill{
      width: 10%;
    }
    .release-item-right{
      width: 23.33%;
    }
  }
</style>
