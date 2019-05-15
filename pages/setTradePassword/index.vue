<template>
  <view class="set-trade-password">
    <view class="set-trade-password-info">
      <view class="set-trade-password-info-line">
        <input type="number" class="set-trade-password-input" placeholder-class="set-trade-password-placeholder" v-model="password" placeholder="请输入6位交易密码" :maxlength="6" />
      </view>
    </view>
    <e-button text="确认" className="change-password-btn" @clickBtn="submit"></e-button>
  </view>
</template>

<script>
  import EButton from '../../compoments/EButton/index.vue';
  import { mapActions } from 'vuex';
  import userApi from '../../api/user.js';
  import { inputValid } from '../../mixins/index.js';
  const space  = 'user';
  export default {
    mixins: [inputValid],
    components: {
      EButton
    },
    data() {
      return {
        password: ''
      }
    },
    methods: {
      ...mapActions(space, {
				changeUserInfo: 'changeUserInfo'
			}),
      async submit() {
        if (!this.inputValid({
          payPassword: this.password
        })) {
          return;
        }
        if (this.password.trim().length !== 6) {
          return uni.showToast({
            icon: 'none',
            mask: true,
            title: '请输入6位交易密码'
          });
        }
        try {
          let res = await userApi.setPayPassword({
            payPassword: this.password
          });
          if (res.success) {
            this.changeUserInfo(res.body);
						uni.setStorageSync('user-info', res.body);
            this.$go('setUserInfo');
          }
        } catch (error) {
        }
      }
    }
  }
</script>

<style lang="scss">
  .change-password-btn{
    margin-top: 2rem;
  }
</style>

<style lang="scss" scoped>
  @import './index.scss';
</style>
