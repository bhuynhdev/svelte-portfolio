import type { PageLoad } from './$types';
import { error as SvelteError } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

export type MdPostDynamicImport = {
	metadata: {
		title: string;
		date: string;
		layout?: string;
	};
	default: typeof SvelteComponent;
};

export type MdPostLoadedData = {
	title: string;
	date: string;
	content: MdPostDynamicImport['default'];
};

export const load: PageLoad<MdPostLoadedData> = async ({ params }) => {
	try {
		const post: MdPostDynamicImport = await import(`../${params.slug}.mdx`);
		const { title = 'Blog post title', date = 'January 01, 2022' } = post.metadata;
		const content = post.default;

		return {
			content,
			title,
			date
		};
	} catch (error) {
		console.log(error);
		throw SvelteError(404, 'Not found');
	}
};
