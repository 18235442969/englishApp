<template>
  <view class="rewards-item">
    <view class="rewards-item-left">
      <view class="rewards-item-middle rewards-item-start">
        奖励时间
      </view>
      <view class="rewards-item-bottom rewards-item-start rewards-item-time">
        2019-4-11 16:57:23
      </view>
    </view>
    <view class="rewards-item-right">
      <view class="rewards-item-middle rewards-item-end">
        奖励金额
      </view>
      <view class="rewards-item-bottom rewards-item-end">
        +500
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
  .rewards-item{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #eeeff1;
    .rewards-item-left, .rewards-item-right{
      flex-grow: 1;
      padding: 10px 0;
      width: 50%;
      .rewards-item-middle, .rewards-item-bottom{
        display: flex;
        justify-content: center;
        font-size: 0.75rem;
        flex-grow: 1;
        height: 50%;
      }
      .rewards-item-middle{
        color: #a4a5a6;
        font-size: 0.7rem;
      }
      .rewards-item-bottom{
        align-items: flex-end;
        color: #4ba1e0;
        font-size: 1rem;
      }
      .rewards-item-start{
        justify-content: flex-start;
      }
      .rewards-item-end{
        justify-content: flex-end;
      }
      .rewards-item-time{
        font-size: 0.65rem;
        color: #f68650;
      }
    }
  }
</style>
