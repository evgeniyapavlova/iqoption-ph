<script>
	import { onMount, onDestroy } from 'svelte';
	import LogoIqOption from './common/LogoIQOption.svelte';

	let scrolled = false;

	const handleScroll = () => {
		scrolled = window.scrollY > 0;
	};

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
		}
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<header class:scrolled>
	<section>
		<LogoIqOption />
		<a href="#registration" class="button">Mag-sign up</a>
	</section>
</header>

<style>
	header.scrolled {
		background-color: white;
		box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 16px 1px;
		--Logo-Primary: #000;
	}

	header {
		transition: background-color 300ms linear;
		padding: 16px 0;
		position: fixed;
		z-index: 3;
		--Logo-Primary: #fff;
		width: 100%;
	}

	section {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	@media screen and (max-width: 960px) {
		header {
			padding: 14px 0;
		}
		:global(header .button) {
			padding: 10px 22px 11px;
			font-size: 12px;
		}
	}
</style>
