<template>
  <view class="change-password">
    <top-line></top-line>
    <view class="input-list">
      <!-- <view class="input-line">
        <input type="number" class="change-password-input" placeholder-class="change-password-placeholder" v-model="phone" placeholder="请输入手机号" :maxlength="11" />
			</view> -->
      <!-- <view class="input-line code-line">
        <view class="code-input">
          <input type="number" class="change-password-input" placeholder-class="change-password-placeholder" v-model="code" placeholder="请输入验证码" :maxlength="6" />
        </view>
        <view :class="codeSend ? 'code-send-text' : 'code-text'" @click="sendCode">
          {{sendCodeText}}
        </view>
			</view> -->
      <view class="input-line password-line">
        <view class="password-input">
          <input type="number" class="change-password-input" placeholder-class="change-password-placeholder" v-model="password" placeholder="请输入旧密码" :maxlength="6" />
        </view>
        <!-- <view class="password-icon" @click="changePasswordType">
          <icon-font className="iconanquan" fontClass="passwordIcon" v-if="passworType == 'password'"/>
          <icon-font className="icontuandui" fontClass="passwordIcon" v-else/>
        </view> -->
			</view>
      <view class="input-line password-line">
        <view class="password-input">
          <input type="number" class="change-password-input" placeholder-class="change-password-placeholder" v-model="newPassword" placeholder="请输入6位新密码" :maxlength="6" />
        </view>
        <!-- <view class="password-icon" @click="changePasswordType">
          <icon-font className="iconanquan" fontClass="passwordIcon" v-if="passworType == 'password'"/>
          <icon-font className="icontuandui" fontClass="passwordIcon" v-else/>
        </view> -->
			</view>
      <view class="input-line password-line">
        <view class="password-input">
          <input type="number" class="change-password-input" placeholder-class="change-password-placeholder" v-model="repeatPassword" placeholder="请重复新密码" :maxlength="6" />
        </view>
        <!-- <view class="password-icon" @click="changePasswordType">
          <icon-font className="iconanquan" fontClass="passwordIcon" v-if="passworType == 'password'"/>
          <icon-font className="icontuandui" fontClass="passwordIcon" v-else/>
        </view> -->
			</view>
    </view>
    <e-button text="确认修改" className="change-password-btn" @clickBtn="submit" :disabled="!isSubmit"></e-button>
  </view>
</template>


<script>
  import TopLine from '../../compoments/TopLine/index.vue';
  import EButton from '../../compoments/EButton/index.vue';
  import userApi from '../../api/user.js';
  export default {
    components: {
      TopLine,
      EButton
    },
    data() {
      return {
        codeSend: false,
        phone: '',
        code: '',
        password: '',
        passworType: 'password',
        sendCodeText: '获取验证码',
        newPassword: '',
        repeatPassword: ''
      }
    },
    computed: {
      isSubmit() {
        return this.password && this.newPassword && this.repeatPassword;
      }
    },
    methods: {
      changePasswordType() {
        this.passworType = this.passworType === 'password' ? 'text' : 'password';
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
      async submit() {
        const res = /^[0-9]+$/;
        if (this.newPassword.length !== 6 || !res.test(this.newPassword)) {
          return uni.showToast({
            mask: true,
            icon: 'none',
            title: '请输入6位数字密码'
          });
        }
        if (this.newPassword !== this.repeatPassword) {
          return uni.showToast({
            mask: true,
            icon: 'none',
            title: '两次输入的新密码不一致'
          });
        }
        try {
          let res = await userApi.updatePayPassword({
            oldPassword: this.password,
            newPassword: this.newPassword
          });
          if (res.success) {
            this.password = '';
            this.newPassword = '';
            this.repeatPassword = '';
            uni.showToast({
              title: '修改成功'
            });
          }
        } catch (error) {
        }
      }
    }
  };
</script>

<style lang="scss">
	.passwordIcon{
		color: #b6b7b8;
		font-size: 1rem !important;
	}
  .change-password-btn{
    margin-top: 1.5rem;
  }
</style>

<style lang="scss" scoped>
  @import "./index.scss";
</style>
