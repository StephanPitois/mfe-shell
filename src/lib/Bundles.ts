import { PUBLIC_MFE_1, PUBLIC_MFE_2, PUBLIC_MFE_3 } from '$env/static/public';

const bundles = new Map();
bundles.set('fl-totoro', PUBLIC_MFE_1 || "http://localhost:1971/build/bundle.js");
bundles.set('fl-catbus', PUBLIC_MFE_2 || "http://localhost:1972/build/bundle.js");
bundles.set('fl-noface', PUBLIC_MFE_3 || "http://localhost:1973/build/bundle.js");

export { bundles }
