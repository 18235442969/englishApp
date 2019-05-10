<template>
  <view class="userinfo">
    <top-line></top-line>
    <view class='user-info-list'>
      <view class="user-info-item" @click="gotoPage('setUserInfo')">
        <view class="user-info-item-icon">
          <icon-font className="icongerenxinxi" />
        </view>
        <view class="user-info-item-text">
          个人信息
        </view>
        <view class="user-info-item-right">
          <icon-font className="iconyoujiantou" />
        </view>
      </view>
      <!-- <view class="user-info-item" @click="gotoPage('realName')">
        <view class="user-info-item-icon">
          <icon-font className="iconshenfenzhengdaiquan" />
        </view>
        <view class="user-info-item-text">
          实名认证
        </view>
        <view class="user-info-item-right">
          <text :decode="true">宋为民&nbsp;&nbsp;</text>
          <icon-font className="iconyoujiantou" />
        </view>
      </view>
      <view class="user-info-item">
        <view class="user-info-item-icon">
          <icon-font className="iconshouji" />
        </view>
        <view class="user-info-item-text">
          手机注册认证
        </view>
        <view class="user-info-item-right">
          139****2256
        </view>
      </view>
      <view class="user-info-item" @click="gotoPage('face')">
        <view class="user-info-item-icon">
          <icon-font className="icontouxiangsaomiao" />
        </view>
        <view class="user-info-item-text">
          刷脸认证
        </view>
        <view class="user-info-item-right">
          已认证
          <icon-font className="iconyoujiantou" />
        </view>
      </view> -->
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
        if (url === 'setUserInfo') {
          uni.navigateTo({
            url: `/pages/setUserInfo/index?isShow=true`
          })
        } else {
          this.$go(url);
        }
      }
    }
  }
</script>

<style>
  .iconshenfenzhengdaiquan{
    color: #45a1f7;
    font-size: 1.1rem !important;
  }
  .iconshouji{
    color: #f86900;
    font-size: 1rem !important;
  }
  .icontouxiangsaomiao{
    color: #00d493;
    font-size: 1.1rem !important;
  }
  .iconyoujiantou{
    font-size: 0.8rem !important;
  }
  .icongerenxinxi{
    color: #44D0FF;
    font-size: 1.1rem !important;
  }
</style>

<style lang="scss" scoped>
  @import './index.scss';
</style>
