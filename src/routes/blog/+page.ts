import type { fetchMarkdownPosts } from '$lib/utils';
import type { PageLoad } from './$types';

type FetchedPostData = Awaited<ReturnType<typeof fetchMarkdownPosts>>;

export type BlogIndexPageData = {
	posts: FetchedPostData;
};

export const load: PageLoad<BlogIndexPageData> = async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	const posts: FetchedPostData = await response.json();

	return {
		posts
	};
};
