<template>
	<button type="default" :class="eButtonClass" @click="clickBtn" :disabled="disabled" :loading="loading" :hover-class="hoverClass">{{text}}</button>
</template>

<script>
	export default{
		name: 'EButton',
		props: {
			className: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				default: '确认'
			},
			hoverClass: {
				type: String,
				default: 'btn-hover'
			},
			disabled: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
			}
		},
		computed: {
			eButtonClass() {
				return this.className ? `e-button ${this.className}` : 'e-button';
			}
		},
		methods: {
			clickBtn() {
				this.$emit('clickBtn');
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>