import type { PageServerLoad } from './$types';
// import { getData } from '$lib/Bundles';

export const load = (async ({ params }) => {
    return {
        // ----------------------------------------------------
        // Important
        // ----------------------------------------------------
        // While inlining the micro-frontend js and css works
        // well in a POC, I do not recommend it without a good
        // caching policy on the server side as it shifts the
        // burden of fetching these files from the browser to
        // the server.
        // ----------------------------------------------------
        // mfeData: await getData(['fl-noface'])
    };
}) satisfies PageServerLoad;

