<script>
	/**@type {import('./+page').BlogIndexPageData} */
	export let data;
</script>

<h1>ALl blog posts</h1>

<ul>
	{#each data.posts as post}
		<li>
			<h2>
				<a href={post.path}>
					{post.meta.title}
				</a>
			</h2>
			Published {post.meta.date}
		</li>
	{/each}
</ul>
