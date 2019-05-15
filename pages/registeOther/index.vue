<template>
  <view class="registe-other">
    <top-line></top-line>
    <view class="registe-other-info">
      <view class="input-line phone-line">
        <view class="phone-input">
          <input type="number" class="change-password-input" placeholder-class="change-password-placeholder" v-model="phone" placeholder="请输入手机号" :maxlength="11" />
        </view>
			</view>
      <view class="input-line password-line">
        <view class="password-input">
          <input type="text" class="change-password-input" placeholder-class="change-password-placeholder" v-model="password" placeholder="请输入密码" :maxlength="20" />
        </view>
			</view>
    </view>
    <e-button text="确认" className="change-password-btn" @clickBtn="submit" :disabled="!isSubmit"></e-button>
  </view>
</template>

<script>
  import TopLine from '../../compoments/TopLine/index.vue';
  import EButton from '../../compoments/EButton/index.vue'; 
  import valid from '../../utils/valid.js';
  import userApi from '../../api/user.js';
  export default {
    components: {
      TopLine,
      EButton
    },
    data() {
      return {
        phone: '',
        password: ''
      }
    },
    computed: {
      isSubmit() {
        return this.password && this.phone;
      }
    },
    methods: {
      async submit() {
        if (!valid.isPhone(this.phone)) {
          return uni.showToast({
            mask: true,
            icon: 'none',
            title: '请输入正确的手机号'
          });
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
        try {
          let res = await userApi.userRegister({
            phone: this.phone,
            password: this.password
          });
          if (res.success) {
            this.phone = '';
            this.password = '';
            uni.showToast({
              title: '注册成功'
            });
          }
        } catch (error) {
        }
      }
    },
  }
</script>

<style lang="scss">
  .change-password-btn{
    margin-top: 1.5rem;
  }
</style>

<style lang="scss" scoped>
  @import './index.scss';
</style>
