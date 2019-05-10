<template>
  <view class="set-user-info">
    <view class="set-user-info-tips" v-if="!isShow">
      <view class="tips-image">
        <icon-font className="iconjinggao" fontClass="warn-icon"></icon-font>
      </view>
      <view class="tips-text">
        请认真填写以下信息，除微信号其它为必填项，请确保所有信息与本人信息相符并一致，以免对您造成不必要的损失。
      </view>
    </view>
    <view class="set-user-info-info">
      <view class="set-user-info-info-line">
        <input type="text" class="set-user-info-input" placeholder-class="set-user-info-placeholder" v-model="name" placeholder="请输入真实姓名" :maxlength="20" v-if="!user.name"/>
        <view v-else class="else-text">
          姓名：{{name}}
        </view>
      </view>
      <view class="set-user-info-info-line" v-if="!isShow">
        <input type="text" class="set-user-info-input" placeholder-class="set-user-info-placeholder" v-model="idCard" placeholder="请输入身份证号" :maxlength="18" v-if="!user.cardid"/>
        <view v-else class="else-text">
          身份证号：{{idCard}}
        </view>
      </view>
      <view class="set-user-info-info-line">
        <input type="text" class="set-user-info-input" placeholder-class="set-user-info-placeholder" v-model="bankName" placeholder="请输入开户行名称" :maxlength="20" v-if="!user.ebankname"/>
        <view v-else class="else-text">
          开户行：{{bankName}}
        </view>
      </view>
      <view class="set-user-info-info-line">
        <input type="number" class="set-user-info-input" placeholder-class="set-user-info-placeholder" v-model="bankNumber" placeholder="请输入银行卡号" :maxlength="19" v-if="!user.cardno"/>
        <view v-else class="else-text">
          银行卡号：{{bankNumber}}
        </view>
      </view>
      <view class="set-user-info-info-line">
        <input type="text" class="set-user-info-input" placeholder-class="set-user-info-placeholder" v-model="alipay" placeholder="请输入支付宝号" :maxlength="20" v-if="!user.alipay"/>
        <view v-else class="else-text">
          支付宝号：{{alipay}}
        </view>
      </view>
      <view class="set-user-info-info-line">
        <input type="text" class="set-user-info-input" placeholder-class="set-user-info-placeholder" v-model="wechat" placeholder="请输入微信号" :maxlength="20" v-if="!user.weixin" />
        <view v-else class="else-text">
          微信号：{{wechat}}
        </view>
      </view>
    </view>
    <checkbox-group class="uni-list" @change="checkboxChange" v-if="!isShow">
      <label class="label-3">
        <view class="uni-list-cell uni-list-cell-pd">
          <checkbox class="checkbox-3" :value="checkbok.name" :checked="checkbok.isOK">确认信息填写无误</checkbox>
        </view>
      </label>
    </checkbox-group>
    <e-button text="确定" className="set-user-info-btn" @clickBtn="submit" :disabled="!checkbok.isOK" v-if="btnIsShow"></e-button>
  </view>
</template>

<script>
  import EButton from '../../compoments/EButton/index.vue';
  import { mapGetters, mapActions } from 'vuex';
  import valid from '../../utils/valid.js';
  import { inputValid } from '../../mixins/index.js';
  import userApi from '../../api/user.js';
  const space  = 'user';
  export default {
    mixins: [inputValid],
    components: {
      EButton
    },
    data() {
      return {
        name: '',
        idCard: '',
        bankName: '',
        bankNumber: '',
        alipay: '',
        wechat: '',
        checkbok: {
          isOK: false,
          name: 'check'
        },
        isShow: false,
        user: {}
      }
    },
    filters: {
      valueFilter(value) {
        return value.trim() !== '';
      }
    },
    computed: {
      ...mapGetters({
				userInfo: 'userInfo'
			}),
      btnIsShow() {
        return !(this.user.name && this.user.cardid && this.user.ebankname && this.user.cardno && this.user.alipay && this.user.weixin);
      },
      isChange() {
        return this.user.name === this.name && this.user.cardid === this.idCard && this.user.ebankname === this.bankName && this.user.cardno === this.bankNumber && this.user.alipay === this.alipay && this.user.weixin === this.wechat
      }
    },
    methods: {
      ...mapActions(space, {
				changeUserInfo: 'changeUserInfo'
			}),
      checkboxChange(e) {
        if (e.target.value.length > 0) {
          this.checkbok.isOK = true;
        } else {
          this.checkbok.isOK = false;
        }
      },
      submit() {
        if (!this.inputValid({
					name: this.name,
					idCard: this.idCard,
					bankName: this.bankName,
					bankNumber: this.bankNumber,
					alipay: this.alipay
				})) {
					return;
				}
        if (!valid.idCardValidate(this.idCard)) {
          return uni.showToast({
						icon: 'none',
						title: '身份证号格式错误'
					})
        }
        if (!valid.checkBankNo(this.bankNumber)) {
          return uni.showToast({
						icon: 'none',
						title: '银行卡号格式错误'
					})
        }
        if (!this.isChange) {
          this.setUserInfo();
        }
      },
      async setUserInfo() {
        uni.showLoading({
          mask: true
        });
        try {
          let res = await userApi.updateUserInfo({
            name: this.name.trim(),
            cardid: this.idCard.trim(),
            cardno: this.bankNumber.trim(),
            ebankname: this.bankName.trim(),
            alipay: this.alipay.trim(),
            weixin: this.wechat.trim()
          });
          if (res.success) {
            this.changeUserInfo(res.body);
						uni.setStorageSync('user-info', res.body);
            if (!this.isShow) {
              uni.switchTab({
                url: '/pages/study/index'
              })
            } else {
              this.userInfo = res.body;
              this.changeUser(true);
              uni.showToast({
                icon: 'none',
                title: '修改成功',
                mask: true
              });
            }
          }
        } catch (error) {
        }
      },
      changeUser(isShow) {
        this.isShow = isShow;
        this.checkbok.isOK = isShow;
        this.user = this.userInfo || uni.getStorageSync('user-info') || {};
        this.name = this.user.name;
        this.idCard = this.user.cardid;
        this.bankName = this.user.ebankname;
        this.bankNumber = this.user.cardno;
        this.alipay = this.user.alipay;
        this.wechat = this.user.weixin;
      }
    },
    onLoad(option) {
      if (option.isShow) {
        this.changeUser(option.isShow);
      }
    }
  }
</script>

<style>
  .set-user-info-btn{
    margin-top: 2rem;
  }
  .warn-icon{
    font-size: 1.2rem;
    color: #fb4e4d !important;
  }
</style>

<style lang="scss" scoped>
  @import './index.scss';
</style>
