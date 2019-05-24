<template>
  <view class="registe">
    <view class="registe-bg">
      <view class="status_bar"></view>
      <view class="icon-back" @click="goBack">
        <icon-font className="iconback" fontClass="iconBack" />
      </view>
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
              :maxlength="4"
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
              placeholder="请输入登录密码"
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
              type="number"
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
              :maxlength="20"
            />
          </view>
        </view>
      </view>
      <e-button className="registe-btn" hoverClass="registe-btn-hover" text="注册" @clickBtn="submit"></e-button>
      <view class="registe-tips">
        注册即是同意<text class="registe-tips-agreement">公司服务协议</text>
      </view>
    </view>
  </view>
</template>

<script>
  import EButton from '../../compoments/EButton/index.vue';
  import { inputValid } from '../../mixins/index.js';
  import valid from '../../utils/valid.js';
  import userApi from '../../api/user.js';
  export default {
    mixins: [inputValid],
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
        let startTime = 60;
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
      },
      async sendCode() {
        if (this.codeSend) {
          return;
        }
        if (!this.inputValid({
          phone: this.phone
        })) {
          return;
        }
        uni.showLoading({
          mask: true
        });
        try {
          let res = await userApi.registerSendMsg({
            phone: this.phone
          });
          if (res.success) {
            uni.showToast({
              title: res.msg
            });
            this.timer();
          }
        } catch (error) {
        }
      },
      async submit() {
        if (!this.inputValid({
          phone: this.phone,
          code: this.code,
          password: this.password,
          payPassword: this.tradePassword,
          referrer: this.referrer
        })) {
          return;
        }
        if (!valid.isPhone(this.phone)) {
          return uni.showToast({
            icon: 'none',
            mask: true,
            title: '手机号格式不正确'
          });
        }
        if (!valid.passwordValid(this.password)) {
          return uni.showToast({
            icon: 'none',
            mask: true,
            title: '登录密码需要同时包含字母和数字'
          });
        }
        const res = /^[0-9]+$/;
        if (this.tradePassword.length !== 6 || !res.test(this.tradePassword)) {
          return uni.showToast({
            icon: 'none',
            mask: true,
            title: '请输入6位数字交易密码'
          });
        }
        uni.showLoading({
          mask: true
        });
        try {
          let res = await userApi.register({
            phone: this.phone,
            code: this.code,
            password: this.password,
            payPassword: this.tradePassword,
            generateCode: this.referrer
          });
          if (res.success) {
            uni.showToast({
              icon: 'none',
              title: '注册成功',
              mask: true,
              duration: 1000
            })
            setTimeout(() => {
              this.goBack()
            }, 1000);
          }
        } catch (error) {
        }
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
