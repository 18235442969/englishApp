<template>
	<view class="study page-bg-img">
		<view class="status_bar"></view>
		<view class="icon-left">
      <icon-font className="iconshu" fontClass="book-class" :clickIcon="gotoBookPage"></icon-font>
    </view>
		<view class="study-info">
			<view class="study-info-day">
				<view class="study-info-num">
					<view class="info-num-left">
						{{userInfo.dayNum}}<text class="info-num-right">天</text>
					</view>
				</view>
				<view class="study-info-text">
					已学习天数
				</view>
			</view>
			<view class="study-info-wordnum">
				<view class="study-info-num">
					<view class="info-num-left">
						{{userInfo.wordNum}}<text class="info-num-right">个</text>
					</view>
				</view>
				<view class="study-info-text">
					已学习单词数
				</view>
			</view>
		</view>
		<view class="study-start">
			<e-button text="开始学习" @clickBtn="clickBtn" className="study-btn" hoverClass="study-btn-hover"></e-button>
		</view>
	</view>
</template>

<script>
	import EButton from '../../compoments/EButton/index.vue';
	import { getSign } from '../../utils/auth.js';
	import wordApi from '../../api/word.js';
	import userApi from '../../api/user.js';
	import { mapGetters, mapActions } from 'vuex';
	const space = 'user';
	export default {
		components: {
			EButton
		},
		data() {
			return {
			}
		},
		computed: {
			...mapGetters({
				userInfo: 'userInfo'
			})
		},
		methods: {
			...mapActions(space, {
				changeUserInfo: 'changeUserInfo'
			}),
			clickBtn() {
				if (this.userInfo.typeId) {
					this.startStudy();
				} else {
					this.$go('book');
				}
			},
			gotoBookPage() {
				this.$go('book');
			},
			timeOut() {
				let time = uni.getStorageSync('word-list-time') || '';
				let wordList = uni.getStorageSync('word-list');
				if (!time || (!wordList || wordList.length === 0)) {
					return true;
				} else {
					let date = new Date(new Date().toLocaleDateString()).getTime();
					return date === time ? false : true;
				}
			},
			startStudy() {
				let wordList = uni.getStorageSync('word-list') || [];
				if (this.timeOut()) {
					this.getWordList();
				} else {
					let learnWordList = wordList.filter(e => !e.know);
					if (learnWordList.length === 0) {
						uni.showModal({
							title: '英语链',
							content: '您今天已学习完毕',
							showCancel: false
						})
					} else {
						this.$go('wordList');
					}
				}
			},
			async getWordList() {
				try {
					let user = this.userInfo || getSign() || {};
					let res = await wordApi.startStudy({
						id: user.typeId
					})
					if (res.success) {
						let date = new Date(new Date().toLocaleDateString()).getTime();
						uni.setStorageSync('word-list-time', date);
						uni.setStorageSync('word-list', res.body.list);
						if (res.body.list.length === 0) {
							uni.showModal({
								title: '英语链',
								content: '您今天已学习完毕',
								showCancel: false
							})
						} else {
							this.$go('wordList');
						}
					}
				} catch (error) {
				}
			},
			async getUserInfo() {
				try {
					let res = await userApi.getUserInfo();
					if (res.success) {
						this.changeUserInfo(res.body);
						uni.setStorageSync('user-info', res.body);
					}
				} catch (error) {
				}
			}
		},
		mounted() {
		},
		onShow() {
			this.getUserInfo();
		}
	}
</script>

<style>
	.book-class{
		color: #fff;
		font-size: 1.2rem !important;
	}
	.study-btn{
		margin-top: 2rem;
		background-color: #fdecb7 !important;
		color: #fb4e31 !important;
	}
	.study-btn-hover{
		background-color: #decfa2 !important;
	}
</style>


<style lang="scss" scoped>
	@import 'index.scss';
</style>
