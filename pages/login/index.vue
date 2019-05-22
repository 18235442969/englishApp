<template>
	<view class="login" v-if="loginShow">
		<view class="status_bar">
		</view>
		<img src="../../asstes/images/logo.png" class="logo"/>
		
		<view class="phone">
			<view class="login-line">
				<view class="input-icon">
					<icon-font className="iconshouji" fontClass="login-icon" />
				</view>
				<view class="input-input">
					<input type="number" class="login-input" placeholder-class="login-placeholder" v-model="phone" placeholder="请输入手机号" :maxlength="11"/>
				</view>
			</view>
		</view>

		<view class="password">
			<view class="login-line">
				<view class="input-icon">
					<icon-font className="iconmima1" fontClass="login-icon" />
				</view>
				<view class="input-input">
					<input type="password" class="login-input" placeholder-class="login-placeholder" v-model="password" placeholder="请输入密码" :maxlength="20"/>
				</view>
			</view>
		</view>
		<e-button text="登录" @clickBtn="clickBtn" className="login-btn" hoverClass="login-btn-hover"></e-button>
		<view class="login-nav">
			<view class="login-nav-left" @click="gotoPage('registe')">
				新用户注册
			</view>
			<view class="login-nav-right" @click="gotoPage('changePassword')">
				忘记密码
			</view>
		</view>
	</view>
	<view v-else>
	</view>
</template>

<script>
	import EButton from '../../compoments/EButton/index.vue';
	import { inputValid } from '../../mixins/index.js';
	import { getSign } from '../../utils/auth.js'
	import valid from '../../utils/valid.js';
	import userApi from '../../api/user.js';
	import { mapState, mapActions } from 'vuex';
	const space = 'user'
	export default {
		name: 'Login',
		mixins: [inputValid],
		components: {
			EButton
		},
		data() {
			return {
				loginShow: false,
				phone: '',
				password: ''
			}
		},
		computed: {
			...mapState(space, {
				userInfo: state => state.userInfo
			})
		},
		methods: {
			...mapActions(space, {
				changeUserInfo: 'changeUserInfo'
			}),
			async clickBtn() {
				if (!this.inputValid({
					phone: this.phone,
					password: this.password
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
            title: '登录密码格式不正确'
          });
        }
				uni.showLoading({
					mask: true
				});
				try {
					let res = await userApi.login({
						phone: this.phone,
						password: this.password
					});
					if (res.success) {
						this.changeUserInfo(res.body);
						uni.setStorageSync('user-info', res.body);
						if (res.body.payPassword) {
							if ((res.body.name || res.body.cardid || res.body.cardno || res.body.ebankname || res.body.alipay)) {
								uni.switchTab({
									url: '/pages/study/index'
								})
							} else {
								this.$go('setUserInfo');
							}
						} else {
							this.$go('setTradePassword');
						}
					}
				} catch (error) {
				}
			},
			gotoPage(url) {
				uni.navigateTo({
					url: `/pages/${url}/index`
				})
			}
		},
		onLoad() {
			let userInfo = uni.getStorageSync('user-info');
			if (getSign() && userInfo && userInfo.payPassword && (userInfo.name || userInfo.cardid || userInfo.cardno || userInfo.ebankname || userInfo.alipay)) {
				uni.switchTab({
					url: '/pages/study/index'
				})
			}
			this.loginShow = true;
		}
	}
</script>

<style lang="scss">
	.login-icon{
		color: #fbe3d2;
		font-size: 1rem !important;
	}
	.login-btn{
		margin-top: 2rem;
		background-color: #fdecb7 !important;
		color: #fb4e31 !important;
	}
	.login-btn-hover{
		background-color: #decfa2 !important;
	}
</style>


<style lang="scss">
	@import './index.scss';
</style>
