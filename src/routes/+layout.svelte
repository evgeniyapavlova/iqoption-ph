<script>
	import { base } from '$app/paths';
	import './styles.css';
	import meta__img from '$lib/images/meta__img.jpg';

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { iframe_params } from '../lib/constants/reg_link';

	export const continentCode = writable('');

	const myAPIKey = '83da9b2dcf134505beb00f51915dff53';
	let loading = true;

	function updateLinks() {
		iframe_params.set(window.location.search);
	}

	onMount(() => {
		updateLinks();
	});

	onMount(async () => {
		const res = await fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=${myAPIKey}`);
		const result = await res.json();
		continentCode.set(result.continent.code);
		loading = false;
	});

	const title = 'IQ Option: Como Funciona, O Que é, Como Usar? - Corretora Brasil';
	const desc =
		'IQ Option: Descubra como funciona, o que é e como usar esta popular plataforma de negociação online. Saiba tudo sobre a corretora que conquistou o Brasil.';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={meta__img} />

	<meta name="twitter:site" content="iqoptionbrazil.com" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={desc} />
	<meta name="twitter:image" content={meta__img} />
	<link rel="canonical" href="https://iqoptionbrazil.com" />
	<link
		rel="preload"
		as="image"
		href="{base}/images/bg_intro.webp"
		type="image/webp"
		fetchpriority="high"
	/>
</svelte:head>

{#if loading}
	<div class="wrap">
		<div class="loader"></div>
	</div>
{:else if $continentCode !== 'EU'}
	<div class="app">
		<slot />
	</div>
{:else}
	<div class="wrap">
		<h1 style="color: black; font-weight: 400;">The service is not provided in your country</h1>
	</div>
{/if}

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
	.loader {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		position: relative;
		animation: rotate 1s linear infinite;
	}
	.loader::before {
		content: '';
		box-sizing: border-box;
		position: absolute;
		inset: 0px;
		border-radius: 50%;
		border: 5px solid var(--orange);
		animation: prixClipFix 2s linear infinite;
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes prixClipFix {
		0% {
			clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
		}
		25% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
		}
		50% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
		}
		75% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
		}
		100% {
			clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
		}
	}
</style>
