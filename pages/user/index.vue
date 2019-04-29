<template>
  <view class="user page-bg-img">
		<view class="status_bar"></view>
    <view class="user-data">
      <view class="user-top">
        <view class="user-leave">
          <img src="../../asstes/images/user-leave.png" class="user-leave-logo"/>
          <text :decode="true"> 一级班长</text>
        </view>
      </view>
      <view class="user-name">Baby爱英语</view>
      <view class="user-id">id:123456789</view>
    </view>
    <view class="user-info">
      <view class="user-info-item">
        <view class="user-info-item-top">
          链上资产
        </view>
        <view class="user-info-item-center">
          100
        </view>
        <view class="user-info-item-bottom">
          点券
        </view>
      </view>
      <view class="user-info-item">
        <view class="user-info-item-top">
          钱包余额
        </view>
        <view class="user-info-item-center">
          2351.01
        </view>
        <view class="user-info-item-bottom">
          <img src="../../asstes/images/user-money.png" class="user-money">
        </view>
      </view>
      <view class="user-info-item">
        <view class="user-info-item-top">
          可售额度
        </view>
        <view class="user-info-item-center">
          6784.12
        </view>
        <view class="user-info-item-bottom">
          点券
        </view>
      </view>
    </view>
    <view class="user-list">
      <view class="user-item">
        <view class="user-item-nav" @click="gotoPage('userInfo')">
          <view class="user-item-nav-icon">
            <icon-font className="icongerenxinxi" />
          </view>
          <view class="user-item-nav-text">
            个人资料
          </view>
          <view class="user-item-nav-right">
            <icon-font className="iconyoujiantou" fontClass="right-icon"/>
          </view>
        </view>
        <view class="user-item-nav" @click="gotoPage('team')">
          <view class="user-item-nav-icon">
            <icon-font className="icontuandui" />
          </view>
          <view class="user-item-nav-text">
            我的团队
          </view>
          <view class="user-item-nav-right">
            <icon-font className="iconyoujiantou" fontClass="right-icon"/>
          </view>
        </view>
        <view class="user-item-nav" @click="gotoPage('tradeRecord')">
          <view class="user-item-nav-icon">
            <icon-font className="icondingdan" />
          </view>
          <view class="user-item-nav-text">
            交易记录
          </view>
          <view class="user-item-nav-right">
            <icon-font className="iconyoujiantou" fontClass="right-icon"/>
          </view>
        </view>
        <view class="user-item-nav" @click="gotoPage('recordeRelease')">
          <view class="user-item-nav-icon">
            <icon-font className="iconqiandai" />
          </view>
          <view class="user-item-nav-text">
            释放记录
          </view>
          <view class="user-item-nav-right">
            <icon-font className="iconyoujiantou" fontClass="right-icon"/>
          </view>
        </view>
        <view class="user-item-nav" @click="gotoPage('rewardsRelease')">
          <view class="user-item-nav-icon">
            <icon-font className="iconjiangli2" />
          </view>
          <view class="user-item-nav-text">
            奖励记录
          </view>
          <view class="user-item-nav-right">
            <icon-font className="iconyoujiantou" fontClass="right-icon"/>
          </view>
        </view>
        <view class="user-item-nav" @click="gotoPage('notice')">
          <view class="user-item-nav-icon">
            <icon-font className="iconfuwu" />
          </view>
          <view class="user-item-nav-text">
            公告服务
          </view>
          <view class="user-item-nav-right">
            <icon-font className="iconyoujiantou" fontClass="right-icon"/>
          </view>
        </view>
        <view class="user-item-nav" @click="gotoPage('safe')">
          <view class="user-item-nav-icon">
            <icon-font className="iconanquan" />
          </view>
          <view class="user-item-nav-text">
            安全中心
          </view>
          <view class="user-item-nav-right">
            <icon-font className="iconyoujiantou" fontClass="right-icon"/>
          </view>
        </view>
        <view class="user-item-nav" @click="gotoPage('promote')">
          <view class="user-item-nav-icon">
            <icon-font className="icontuiguangdingdan" />
          </view>
          <view class="user-item-nav-text">
            推广分享
          </view>
          <view class="user-item-nav-right">
            <icon-font className="iconyoujiantou" fontClass="right-icon"/>
          </view>
        </view>
      </view>
    </view>
	</view>
</template>

<script>
  export default {
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
  .icongerenxinxi, .icontuandui, .icondingdan, .iconqiandai, .iconjiangli2, .iconfuwu, .iconanquan, .icontuiguangdingdan{
    color: #ef9700;
    font-size: 1.1rem !important;
  }
  .icontuandui{
    color: #00c5aa;
  }
  .icondingdan{
    color: #5ad5fc;
  }
  .iconqiandai{
    color: #e87aea;
  }
  .iconjiangli2{
    color: #fcc600;
  }
  .iconfuwu{
    color: #ef6162;
  }
  .iconanquan{
    color: #6d40f3;
  }
  .icontuiguangdingdan{
    color: #5cb1f4;
  }
  .right-icon{
    font-size: 0.9rem !important;
    color: #ececec;
  }
</style>


<style lang='scss' scoped>
  @import './index.scss';
</style>
