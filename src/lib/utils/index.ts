import type { MdPostDynamicImport } from 'src/routes/blog/[slug]/+page';

export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob<MdPostDynamicImport>('/src/routes/blog/*.mdx');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			// Slicing because path will be in format of "/src/routes/blog/*.mdx"
			const postPath = path.slice(11, -4);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};
