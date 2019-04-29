<script>
	export default {
		onLaunch: function() {
		},
		onShow: function() {
		},
		onHide: function() {
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	.login-placeholder, .registe-placeholder{
		color: #fbc895;
	}
	.realname-placeholder {
		color: #cacaca;
	}
	.page-bg-img{
		width: 100vw;
		height: 100vh;
    // height: calc(100vh - var(--window-bottom));
    overflow: hidden;
    background-image: url(~@/asstes/images/loginBg.png);
    background-size: 100% 100%;
    background-repeat: none;
	}
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
</style>
