<template>
	<view class="login">
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
		<e-button text="登录" :clickBtn="clickBtn" className="login-btn" hoverClass="login-btn-hover"></e-button>
		<view class="login-nav">
			<view class="login-nav-left" @click="gotoPage('registe')">
				新用户注册
			</view>
			<view class="login-nav-right" @click="gotoPage('changePassword')">
				忘记密码
			</view>
		</view>
	</view>
</template>

<script>
	import EButton from '../../compoments/EButton/index.vue';
	import valid from '../../utils/valid.js';
	import userApi from '../../api/user.js';
	import {mapActions} from 'vuex';
	const space = 'user'
	export default {
		name: 'Login',
		components: {
			EButton
		},
		data() {
			return {
				phone: '',
				password: ''
			}
		},
		computed: {
		},
		methods: {
			...mapActions(space, {
				changeName: 'changeName'
			}),
			async clickBtn() {
				if (valid.isStrEmpty(this.phone)) {
					return uni.showToast({
						icon: 'none',
						title: '请输入手机号'
					})
				}
				if (valid.isStrEmpty(this.password)) {
					return uni.showToast({
						icon: 'none',
						title: '请输入密码'
					})
				}
				try {
					// let res = await userApi.login();
					// if (res.success) {
						this.changeName()
					// 	uni.switchTab({
					// 		url: '/pages/study/index'
					// 	})
					// } else {

					// }
				} catch (error) {
					console.log(error);
				}
			},
			gotoPage(url) {
				uni.navigateTo({
					url: `/pages/${url}/index`
				})
			}
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
