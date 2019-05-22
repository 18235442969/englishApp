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
	.e-prompt-input-placeholder{
    display: flex;
    align-items: center;
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

	.e-prompt{
		position: fixed;
		top: 0;
		z-index: 198;
		width: 100vw;
		height: 100vh;
		display: none;
		justify-content: center;
		align-items: center;
		.e-prompt-layer{
			position: fixed;
			width: 100vw;
			height: 100vh;
			opacity: 0.3;
			background-color: #000;
			z-index: 199;
		}
		.e-prompt-container{
			padding: 0 5vw;
			z-index: 200;
			width: 80vw;
			min-height: 20vh;
			background-color: #ecce91;
			border-radius: 5px;
			.e-prompt-title{
				margin-top: 0.7rem;
				color: #893d00;
				font-size: 0.85rem;
			}
			.e-prompt-center{
				margin-top: 0.7rem;
				padding: 1vh 0;
				display: flex;
				flex-direction: row;
				align-items: center;
				background-color: #fff;
				border: 1px solid #eb5200;
				border-radius: 5px;
				.e-prompt-input{
					width: 75vw;
					font-size: 0.8rem;
					padding: 0 0.5rem;
				}
				
			}
			.e-prompt-operation{
				margin: 1rem 0 1rem 0;
				.e-prompt-button{
				}
			}
		}
	}

	.e-prompt-in{
		display: flex;
		animation: promptIn 0.3s;
		-webkit-animation: promptIn 0.3s;
		animation-fill-mode: forwards;
	}
	.e-prompt-out{
		animation: promptOut 0.3s;
		-webkit-animation: promptOut 0.3s;
		animation-fill-mode: forwards;
	}
	.e-prompt-in .e-prompt-container{
		animation: containerIn 0.3s;
		-webkit-animation: containerIn 0.3s;
		animation-fill-mode: forwards;
	}

	@keyframes promptIn{
		from {
			opacity: 0;
		} to {
			opacity: 1;
		}
	}

	@keyframes promptOut{
		from {
			opacity: 1;
		} to {
			opacity: 0;
		}
	}

	@keyframes containerIn{
		0% {
			transform: scale(0);
		}
		50% {
			transform: scale(1.1);
			-webkit-transform: scale(1.1);
			-moz-transform: scale(1.1);
			-ms-transform: scale(1.1);
			-o-transform: scale(1.1);
	}
		100% {
			transform: scale(1);
		}
	}
</style>
