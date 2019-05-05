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
						0<text class="info-num-right">天</text>
					</view>
				</view>
				<view class="study-info-text">
					已学习天数
				</view>
			</view>
			<view class="study-info-wordnum">
				<view class="study-info-num">
					<view class="info-num-left">
						0<text class="info-num-right">个</text>
					</view>
				</view>
				<view class="study-info-text">
					已学习单词数
				</view>
			</view>
		</view>
		<view class="study-start">
			<e-button text="开始学习" :clickBtn="clickBtn" className="study-btn" hoverClass="study-btn-hover"></e-button>
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
			}
		},
		methods: {
			clickBtn() {
				console.log(1)
			},
			gotoBookPage() {
				uni.navigateTo({
					url: '/pages/book/index'
				})
			}
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
