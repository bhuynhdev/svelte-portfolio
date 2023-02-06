<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/global.scss';
	import { fade } from 'svelte/transition';
	const { title } = $page.data; // title loaded from Markdown files
	export let data: any;
</script>

<svelte:head>
	<title>{title || 'Bao Huynh portfolio'}</title>
	<meta name="description" content="Bao Huynh's portfolio" />
	<meta property="og:title" content={title} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:wght@400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
	<link href="/fontawesome6/css/fontawesome.min.css" rel="stylesheet" />
	<link href="/fontawesome6/css/brands.min.css" rel="stylesheet" />
	<link href="/fontawesome6/css/solid.min.css" rel="stylesheet" />
</svelte:head>

<Header />
{#key data.currentRoute}
	<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 100 }}>
		<slot />
	</main>
{/key}
<Footer />
