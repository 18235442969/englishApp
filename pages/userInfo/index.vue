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
    <e-button text="退出登录" className="exit-btn" @clickBtn="exit"></e-button>
  </view>
</template>

<script>
  import TopLine from '../../compoments/TopLine/index.vue';
  import EButton from '../../compoments/EButton/index.vue';
  import { removeSign } from '../../utils/auth.js';
  export default {
    components: {
      TopLine,
      EButton
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
      },
      exit() {
        uni.showModal({
          title: '提示',
          content: '您确定要退出登录吗?',
          success: function(res) {
            if (res.confirm) {
              removeSign();
              uni.reLaunch({
                url: '/pages/login/index'
              });
            }
          }
        });
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
  .exit-btn{
    margin-top: 1.5rem;
  }
</style>

<style lang="scss" scoped>
  @import './index.scss';
</style>
