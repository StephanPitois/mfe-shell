import { PUBLIC_MFE_1, PUBLIC_MFE_2, PUBLIC_MFE_3 } from '$env/static/public';

const bundles = new Map();
bundles.set('fl-totoro', PUBLIC_MFE_1 || "http://localhost:1971/build/bundle.js");
bundles.set('fl-catbus', PUBLIC_MFE_2 || "http://localhost:1972/build/bundle.js");
bundles.set('fl-noface', PUBLIC_MFE_3 || "http://localhost:1973/build/bundle.js");

function getScriptUrl(bundle: string) {
    return bundles.get(bundle);
}

function getStyleUrl(bundle: string) {
    return bundles.get(bundle).replace('.js', '.css');
}

async function getData(mfes: string[]): Promise<any[]> {
    // TODO: add server-side caching?
    const mfeData: any[] | PromiseLike<any[]> = [];
    for (let i = 0; i < mfes.length; i++) {
        const bundle = mfes[i];
        mfeData.push({
            name: bundle,
            script: await getFileText(getScriptUrl(bundle)),
            style: await getFileText(getStyleUrl(bundle))
        })
    }
    return mfeData;
}

async function getFileText(url: string) {
    const response = await fetch(url);
    const text = await response.text();
    return text;
}

export { bundles, getData, getScriptUrl, getStyleUrl }
