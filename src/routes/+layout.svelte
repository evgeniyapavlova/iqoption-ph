<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import meta__img from '$lib/images/meta__img.jpg';
	import './styles.css';

	import { iframe_params } from '../lib/constants/reg_link';

	function updateLinks() {
		iframe_params.set(window.location.search);
	}

	onMount(() => {
		updateLinks();
	});

	const title = 'IQ Option Philippines: Trading, Login, Sign Up, Ano ito, Paano Gumagana';
	const desc =
		'IMagsimula sa trading gamit ang IQ Option Philippines. Alamin kung paano mag-sign up, mag-login, at mag-trade nang madali sa isang ligtas na platform.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={meta__img} />

	<meta name="twitter:site" content="iqoption.ph" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={meta__img} />
	<link rel="canonical" href="https://iqoption.ph" />
	<link
		rel="preload"
		as="image"
		href="{base}/images/bg_intro.webp"
		type="image/webp"
		fetchpriority="high"
	/>
</svelte:head>

<div class="app">
	<slot />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.wrap {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
	}
</style>
