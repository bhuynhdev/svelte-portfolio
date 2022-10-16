/** @type {import('./$types').PageLoad} */
export const load = ({ url }) => {
  // Export the currentRoute to be used for page transition
  // Credit: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog#implement-page-transitions
  const currentRoute = url.pathname

  return {
    currentRoute
  }
}

export const prerender = true;