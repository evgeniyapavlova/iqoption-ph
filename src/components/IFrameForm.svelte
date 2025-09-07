<script>
	import { onMount } from 'svelte';
	import { iframe_params } from '../lib/constants/reg_link';
	import Loader from './common/Loader.svelte';

	let isIframeLoaded = false;

	onMount(() => {
		const iframe = document.getElementById('form-iframe');
		if (iframe) {
			iframe.addEventListener('load', () => {
				isIframeLoaded = true;
			});
		}
	});
</script>

<section class="iframe-wrap" id="registration">
	<div class="iframe-container">
		{#if !isIframeLoaded}
			<Loader loaderH="100%" loaderW="100%" />
		{/if}
		<iframe
			loading="lazy"
			id="form-iframe"
			title="IQ Option registration form"
			src="https://iqbroker.com/lp/regframe-01-light/en/{$iframe_params}"
			frameborder="0"
			allowfullscreen
		></iframe>
	</div>
</section>

<style>
	.iframe-wrap {
		padding-top: 35px;
	}

	.iframe-container {
		display: flex;
		justify-content: center;
		min-height: 950px;
		margin-left: -4px;
		margin-right: -4px;
	}
	iframe {
		width: 100%;
	}

	@media screen and (max-width: 400px) {
		.iframe-wrap {
			padding: 0 12px;
		}
	}
</style>
