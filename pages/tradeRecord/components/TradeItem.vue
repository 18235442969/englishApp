<template>
  <view class="trade-item">
    <view class="trade-item-left">
      <view class="trade-item-top trade-item-start">
        2019-4-11 16:57:23
      </view>
      <view class="trade-item-middle trade-item-start">
        成交价格
      </view>
      <view class="trade-item-bottom trade-item-start">
        11.26
      </view>
    </view>
    <view class="trade-item-center">
      <view class="trade-item-top">
      </view>
      <view class="trade-item-middle">
        成交数量
      </view>
      <view class="trade-item-bottom">
        2000
      </view>
    </view>
    <view class="trade-item-fill"></view>
    <view class="trade-item-right">
      <view class="trade-item-top trade-item-start">
        已完成
      </view>
      <view class="trade-item-middle trade-item-start">
        成交额度
      </view>
      <view class="trade-item-bottom trade-item-start">
        225200
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
  .trade-item{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #eeeff1;
    .trade-item-left, .trade-item-center, .trade-item-right{
      flex-grow: 1;
      padding: 10px 0;
      .trade-item-top, .trade-item-middle, .trade-item-bottom{
        display: flex;
        justify-content: center;
        font-size: 0.75rem;
        flex-grow: 1;
        height: 33.33%;
      }
      .trade-item-top{
        font-size: 0.65rem;
        color: #f68650;
      }
      .trade-item-middle{
        color: #a4a5a6;
        font-size: 0.7rem;
      }
      .trade-item-bottom{
        color: #4ba1e0;
        font-size: 1rem;
      }
      .trade-item-start{
        justify-content: flex-start;
      }
    }
    .trade-item-left{
      width: 33.33%;
    }
    .trade-item-center{
      width: 33.33%;
    }
    .trade-item-fill{
      width: 10%;
    }
    .trade-item-right{
      width: 23.33%;
    }
  }
</style>
