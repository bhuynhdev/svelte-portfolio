import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import preprocess from 'svelte-preprocess';

/** @type Parameters<typeof rehypeAutolinkHeadings>[0] */
const rehypeAutoLinkHeadingsOptions = {
	properties: {
		className: ['link-icon-hover'],
		ariaHidden: true,
		tabIndex: -1
	},
	content: {
		type: 'element',
		tagName: 'i',
		properties: {
			className: ['fa-solid', 'fa-link']
		},
		children: []
	}
};

/** @type Parameters<typeof rehypeExternalLinks>[0] */
const rehypeExternalLinksOptions = {
	rel: ['noopener', 'noreferrer', 'nofollow'],
	target: (element) => {
		return element.properties.href.startsWith('http') ? '_blank' : undefined;
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.mdx'],
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, rehypeAutoLinkHeadingsOptions],
				[rehypeExternalLinks, rehypeExternalLinksOptions]
			]
		})
	],

	extensions: ['.svelte', '.mdx'],

	kit: {
		adapter: adapter()
	}
};

export default config;
