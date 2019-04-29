<template>
  <view class="registe">
    <view class="registe-bg">
      <view class="status_bar"></view>
      <icon-font className="iconback" fontClass="iconBack" :clickIcon="goBack" />
		  <img src="../../asstes/images/logo.png" class="logo"/>

      <view class="phone">
        <view class="registe-line">
          <view class="input-icon">
            <icon-font
              className="iconshouji"
              fontClass="registe-icon"
            />
          </view>
          <view class="input-input">
            <input
              type="number"
              class="registe-input"
              placeholder-class="registe-placeholder"
              v-model="phone"
              placeholder="请输入手机号"
              :maxlength="11"
            />
          </view>
        </view>
      </view>
      
      <view class="code">
        <view class="registe-line">
          <view class="input-icon">
            <icon-font
              className="iconyanzheng"
              fontClass="registe-icon"
            />
          </view>
          <view class="input-input">
            <input
              type="number"
              class="registe-input"
              placeholder-class="registe-placeholder"
              v-model="code"
              placeholder="请输入验证码"
              :maxlength="20"
            />
          </view>
          <view :class="codeSend ? 'input-send-text' : 'input-text'" @click="sendCode">
            {{sendCodeText}}
          </view>
        </view>
      </view>

      <view class="password">
        <view class="registe-line">
          <view class="input-icon">
            <icon-font
              className="iconmima1"
              fontClass="registe-icon"
            />
          </view>
          <view class="input-input">
            <input
              type="password"
              class="registe-input"
              placeholder-class="registe-placeholder"
              v-model="password"
              placeholder="请输入密码"
              :maxlength="20"
            />
          </view>
        </view>
      </view>

      <view class="trade-password">
        <view class="registe-line">
          <view class="input-icon">
            <icon-font
              className="iconjiaoyi"
              fontClass="registe-icon"
            />
          </view>
          <view class="input-input">
            <input
              type="password"
              class="registe-input"
              placeholder-class="registe-placeholder"
              v-model="tradePassword"
              placeholder="请输入交易密码"
              :maxlength="6"
            />
          </view>
        </view>
      </view>

      <view class="referrer">
        <view class="registe-line">
          <view class="input-icon">
            <icon-font
              className="icontuijianren"
              fontClass="registe-icon"
            />
          </view>
          <view class="input-input">
            <input
              type="number"
              class="registe-input"
              placeholder-class="registe-placeholder"
              v-model="referrer"
              placeholder="请输入推荐人ID或手机号"
              :maxlength="6"
            />
          </view>
        </view>
      </view>
      <e-button className="registe-btn" hoverClass="registe-btn-hover" text="注册" :clickBtn="submit"></e-button>
      <view class="registe-tips">
        注册即是同意<text class="registe-tips-agreement">公司服务协议</text>
      </view>
    </view>
  </view>
</template>

<script>
  import EButton from '../../compoments/EButton/index.vue';
  export default {
    components: {
      EButton
    },
    data() {
      return {
        codeSend: false,
        sendCodeText: '获取验证码',
        phone: '',
        code: '',
        password: '',
        tradePassword: '',
        referrer: ''
      };
    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      timer() {
        if (!this.codeSend) {
          let startTime = 3;
          this.sendCodeText = `${startTime}s`;
          let timeInterval = setInterval(() => {
            startTime--;
            this.sendCodeText = `${startTime}s`;
            if (startTime === 0) {
              clearInterval(timeInterval);
              this.sendCodeText = '获取验证码';
              this.codeSend = false;
            }
          }, 1000);
          this.codeSend = true;
        }
      },
      sendCode() {
        this.timer();
      },
      submit() {
        console.log(1)
      }
    }
  };
</script>

<style lang="scss">
	.registe-icon{
		color: #fbe3d2;
		font-size: 1rem !important;
	}
  .iconBack{
    position: absolute;
    top: calc(var(--status-bar-height) + 5px);
    left: 10px;
		color: #fff;
		font-size: 1rem !important;
  }
	.registe-btn{
		margin-top: 1rem;
		background-color: #fdecb7 !important;
		color: #fb4e31 !important;
	}
	.registe-btn-hover{
		background-color: #decfa2 !important;
	}
</style>

<style lang="scss" scoped>
  @import "./index.scss";
</style>
