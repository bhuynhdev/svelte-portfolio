<script lang="ts">
	export let iconName: string;
	export let size: number;
</script>

<figure class="skillIcon">
	<img src="/icons/{iconName.toLowerCase()}.svg" alt={iconName} width={size} height={size} />
	<figcaption>{iconName}</figcaption>
</figure>

<style lang="scss">
	.skillIcon {
		text-align: center;
		width: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		row-gap: 0.35em;
		figcaption {
			font-size: 0.85rem;
		}
	}
</style>
