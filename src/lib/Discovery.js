import { PUBLIC_MFE_1, PUBLIC_MFE_2, PUBLIC_MFE_3 } from '$env/static/public';

const bundles = {
    flTotoro: PUBLIC_MFE_1 || "http://localhost:1971/build/bundle.js",
    flCatbus: PUBLIC_MFE_2 || "http://localhost:1972/build/bundle.js",
    flNoFace: PUBLIC_MFE_3 || "http://localhost:1973/build/bundle.js"
}

/**
 * @param {string} tag
 */
function isRegistered(tag) {
    if (typeof customElements === 'undefined') {
        return false;
    }
    return typeof customElements.get(tag) !== 'undefined';
}

export { bundles, isRegistered }
