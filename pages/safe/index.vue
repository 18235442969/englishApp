<template>
  <view class="safe">
    <top-line></top-line>
    <view class="safe-list">
      <view class="safe-item" @click="gotoPage('changePassword')">
        <view class="safe-item-icon">
          <icon-font className="iconmima1" />
        </view>
        <view class="safe-item-text">
          登录密码设置
        </view>
        <view class="safe-item-right">
          <icon-font className="iconyoujiantou" />
        </view>
      </view>
      <view class="safe-item" @click="gotoPage('changeTradePassword')">
        <view class="safe-item-icon">
          <icon-font className="iconjiaoyi" />
        </view>
        <view class="safe-item-text">
          交易密码设置
        </view>
        <view class="safe-item-right">
          <icon-font className="iconyoujiantou" />
        </view>
      </view>
    </view>
	</view>
</template>

<script>
  import TopLine from '../../compoments/TopLine/index.vue';
  export default {
    components: {
      TopLine
    },
    data() {
      return {
      }
    },
    methods: {
      gotoPage(url) {
        uni.navigateTo({
          url: `/pages/${url}/index`
        })
      }
    }
  }
</script>

<style>
  .iconmima1{
    color: #45a1f7;
    font-size: 1rem !important;
  }
  .iconjiaoyi{
    color: #f86900;
    font-size: 1rem !important;
  }
  .iconyoujiantou{
    font-size: 0.8rem !important;
  }
</style>

<style lang='scss' scoped>
  @import './index.scss';
</style>
