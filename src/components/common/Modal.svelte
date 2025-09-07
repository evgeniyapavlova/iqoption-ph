<script>
	export let showModal, fullImage;

	let dialog;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	class="fade animated"
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	style="width: {fullImage[0]}px; height: {fullImage[1]}px;"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div style="position: relative;" on:click|stopPropagation>
		<slot />
		{#if showModal}
			<button class="close-btn" aria-label="Close modal" on:click={() => dialog.close()} />
		{/if}
	</div>
</dialog>

{#if showModal}
	<style>
		body {
			overflow: hidden;
		}
	</style>
{/if}

<style>
	dialog[open] {
		display: flex;
	}
	dialog {
		max-width: 90%;
		border: none;
		padding: 0;
		margin: 0 auto;
		background: none;
		align-items: center;
		justify-content: center;
		top: 50%;
		transform: translateY(-50%);
		overflow: visible;
		outline: none !important;
	}

	@media screen and (max-width: 640px) {
		dialog {
			max-width: 95%;
		}
	}

	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}

	dialog[open]::backdrop,
	.fade {
		animation: fade 0.1s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
	.close-btn {
		background-color: rgba(0, 0, 0, 0.3);
		cursor: pointer;
		display: block;
		box-sizing: border-box;
		position: absolute;
		z-index: 1000;
		top: 10px;
		right: 10px;
		margin: 0;
		padding: 0;
		width: 30px;
		height: 30px;
		border: 0;
		border-radius: 3rem;
		transition:
			transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
			background-color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
		appearance: none;
		-webkit-appearance: none;
	}
	.close-btn::after,
	.close-btn::before {
		content: '';
		display: block;
		box-sizing: border-box;
		position: absolute;
		top: 50%;
		width: 20px;
		height: 2px;
		background: rgba(255, 255, 255, 0.7);
		transform-origin: center;
		left: 5px;
		transition:
			height 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
			background 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
	}
	.close-btn::before {
		-webkit-transform: translate(0, -50%) rotate(45deg);
		-moz-transform: translate(0, -50%) rotate(45deg);
		transform: translate(0, -50%) rotate(45deg);
	}
	.close-btn::after {
		-webkit-transform: translate(0, -50%) rotate(-45deg);
		-moz-transform: translate(0, -50%) rotate(-45deg);
		transform: translate(0, -50%) rotate(-45deg);
	}
	.close-btn:hover::before,
	.close-btn:hover::after {
		height: 2px;
		background: rgba(0, 0, 0, 0.3);
	}
	.close-btn:hover {
		background-color: rgba(255, 255, 255, 0.1);
		outline: none;
	}
	.close-btn:focus-visible {
		outline: none;
	}
	.animated {
		-webkit-animation-duration: 1s;
		animation-duration: 0.2s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
	}
</style>
