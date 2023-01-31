import { PUBLIC_MFE_1, PUBLIC_MFE_2, PUBLIC_MFE_3 } from '$env/static/public';

// TODO: Move to config file
const remotes = new Map();
remotes.set('remote-app-1', PUBLIC_MFE_1 || "http://localhost:1971/build/bundle.js");
remotes.set('remote-app-2', PUBLIC_MFE_2 || "http://localhost:1972/build/bundle.js");
remotes.set('remote-app-3', PUBLIC_MFE_3 || "http://localhost:1973/build/bundle.js");

function getScriptUrl(remote: string) {
    return remotes.get(remote);
}

function getStyleUrl(remote: string) {
    return remotes.get(remote).replace('.js', '.css');
}

async function getData(mfes: string[]): Promise<any[]> {
    // TODO: add server-side caching?
    const mfeData: any[] | PromiseLike<any[]> = [];
    for (let i = 0; i < mfes.length; i++) {
        const remote = mfes[i];
        mfeData.push({
            name: remote,
            script: await getFileText(getScriptUrl(remote)),
            style: await getFileText(getStyleUrl(remote))
        })
    }
    return mfeData;
}

async function getFileText(url: string) {
    const response = await fetch(url);
    const text = await response.text();
    return text;
}

export { remotes, getData, getScriptUrl, getStyleUrl }
