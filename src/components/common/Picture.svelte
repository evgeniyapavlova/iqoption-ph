<script>
	import { base } from '$app/paths';
	export let fallbackFormat = 'png';
	export let classes = '';
	export let alt, basePath;
</script>

<picture class="{classes} text-pic">
	{#each ['avif', 'webp', fallbackFormat] as format}
		<source type="image/{format}" srcset="{base}/images/content/{basePath}.{format}" />
	{/each}
	<img src="{base}/images/content/{basePath}.{fallbackFormat}" {alt} />
</picture>
