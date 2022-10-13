<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/global.scss';

	const { title } = $page.data; // title loaded from Markdown files
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
	<script src="https://kit.fontawesome.com/63bc15acb0.js" crossorigin="anonymous"></script>
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />
