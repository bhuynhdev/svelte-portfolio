<script lang="ts">
	import type { MdPostLoadedData } from './+page';
	export let data: MdPostLoadedData;
</script>

<article>
	<h2>{data.title}</h2>
	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>

<style lang="scss">
	article {
		min-height: 100vh;
		padding: 0 var(--space-x);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
	}
</style>
