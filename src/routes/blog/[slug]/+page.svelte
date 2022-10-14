<script lang="ts">
	import type { MdPostLoadedData } from './+page';
	export let data: MdPostLoadedData;
</script>

<article class="markdown">
	<h2>{data.title}</h2>
	<p class="date">{data.date}</p>
	<svelte:component this={data.content} />
</article>

<style lang="scss">
	article {
		min-height: 100vh;
		padding: 5em var(--space-x);
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

	.date {
		margin-bottom: 2em;
	}
</style>
