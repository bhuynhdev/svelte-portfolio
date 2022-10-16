import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
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

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.mdx'],
			rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, rehypeAutoLinkHeadingsOptions]]
		})
	],

	extensions: ['.svelte', '.mdx'],

	kit: {
		adapter: adapter()
	},

};

export default config;
