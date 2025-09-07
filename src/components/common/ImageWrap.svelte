<script>
	import Modal from './Modal.svelte';
	import { base } from '$app/paths';
	export let imageH,
		path,
		imageW = 760,
		fullImage = [1680, 770],
		darkBgr = false;

	const paddingBottom = Math.round(imageH / (imageW / 100));

	let showModal = false;
</script>

<div
	class="image-wrap"
	style="max-width: {imageW}px; height: calc((100vw - 48px) * {paddingBottom / 100});"
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		aria-label="Open image in the modal window"
		role="button"
		class="image"
		style="background-image:url('{base}/images{path}'); padding-bottom: {paddingBottom}%;{!darkBgr &&
			'border: 1px solid #fafafa;'}"
		on:click={() => {
			showModal = true;
		}}
		tabindex="0"
	/>
</div>

<Modal bind:showModal {fullImage}>
	<img class="inside-modal-image" src="{base}/images{path}" alt="" />
</Modal>

<style>
	.inside-modal-image {
		max-width: 100%;
		max-height: 95vh;
	}
	.image-wrap {
		margin-top: 30px;
		margin-bottom: 30px;
	}
	.image {
		outline: none;
		border-radius: 10px;
		cursor: pointer;
		width: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		box-shadow:
			rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
			rgba(0, 0, 0, 0.1) 0px 10px 16px 0px;
	}

	/* @media screen and (min-width: 480px) { */
	.image-wrap {
		height: auto !important;
	}
	/* } */
	/* @media screen and (max-width: 480px) {
		.image {
			position: absolute;
			left: 24px;
			width: calc(100vw - 48px);
		}
	} */
</style>
