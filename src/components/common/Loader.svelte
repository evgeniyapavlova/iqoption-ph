<script>
	export let loaderW = '100dvw',
		loaderH = '100dvh';
</script>

<div class="loader-wrap" style="height: {loaderH}; width: {loaderW};">
	<div class="loader-wrapper">
		<div class="loader">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</div>

<style>
	.loader-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		background-color: rgba(255, 255, 255, 0.5);
	}

	.loader-wrapper {
		width: 80px;
		height: 80px;
		background: #fe7a20;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}
	.loader {
		display: flex;
		justify-content: space-between;
		align-items: end;
		width: 40px;
		height: 50px;
		gap: 6px;
		transform: translateY(-4.5px);
	}
	.loader div {
		width: 11px;
		height: 50%;
		background: #fff;
		border-radius: 10px;
		animation: grow 1s infinite ease-in-out;
		transform: translate(-1px);
	}
	.loader div:nth-child(2) {
		animation-delay: 0.15s;
	}
	.loader div:nth-child(3) {
		animation-delay: 0.3s;
	}
	@keyframes grow {
		0%,
		100% {
			height: 40%;
		}
		50% {
			height: 80%;
		}
	}
</style>
