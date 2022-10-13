import type { PageLoad } from './$types';
import { error as SvelteError } from '@sveltejs/kit';
import type { SvelteComponent } from 'svelte';

type MdPostDynamicImport = {
	metadata: {
		title: string;
		date: string;
	};
	default: typeof SvelteComponent;
};

export type MdPostLoadedData = {
	title: MdPostDynamicImport['metadata']['title'];
	date: MdPostDynamicImport['metadata']['date'];
	content: MdPostDynamicImport['default'];
};

export const load: PageLoad<MdPostLoadedData> = async ({ params }) => {
	try {
		const post: MdPostDynamicImport = await import(`../${params.slug}.mdx`);
		const { title = 'Blog post title', date } = post.metadata;
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
