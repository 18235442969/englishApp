<template>
	<view class="login">
		<view class="status_bar">
		</view>
		<img src="../../asstes/images/logo.png" class="logo"/>
		
		<view class="phone">
			<view class="login-line">
				<view class="input-icon">
					<icon-font className="iconshouji" fontClass="loginIcon"/>
				</view>
				<view class="input-input">
					<input type="number" class="loginInput" placeholder-class="login-placeholder" v-model="phone" placeholder="请输入手机号" :maxlength="11"/>
				</view>
			</view>
		</view>

		<view class="password">
			<view class="login-line">
				<view class="input-icon">
					<icon-font className="iconmima1" fontClass="loginIcon"/>
				</view>
				<view class="input-input">
					<input type="password" class="loginInput" placeholder-class="login-placeholder" v-model="password" placeholder="请输入密码" :maxlength="20"/>
				</view>
			</view>
		</view>
		<e-button text="登录" :clickBtn="clickBtn" className="login-btn" hoverClass="login-btn-hover"></e-button>
		<view class="login-nav">
			<view class="login-nav-left">
				新用户注册
			</view>
			<view class="login-nav-right">
				忘记密码
			</view>
		</view>
	</view>
</template>

<script>
	import EButton from '../../compoments/EButton/index.vue';
	import EInput from '../../compoments/EInput/index.vue';
	import {mapState, mapActions} from 'vuex';
	const space = 'user'
	export default {
		name: 'Login',
		components: {
			EButton,
			EInput
		},
		data() {
			return {
				phone: '',
				password: 's'
			}
		},
		computed: {
			...mapState(space, {
				name: state => state.name
			})
		},
		methods: {
			...mapActions(space, {
				changeName: 'changeName'
			}),
			clickBtn() {
				this.changeName()
				console.log(this.password)
				// uni.navigateTo({
				// 	url: '/pages/index/index'
				// })
			}
		}
	}
</script>

<style lang="scss">
	.loginIcon{
		color: #fbe3d2;
		font-size: 1rem !important;
	}
	.login-btn{
		margin-top: 2rem;
		background-color: #fdecb7 !important;
		color: #fb4e31 !important;
	}
	.login-btn-hover{
		background-color: #fb4e31 !important;
	}
</style>


<style lang="scss">
	@import './index.scss';
</style>
