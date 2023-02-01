<script>
  import { onMount } from 'svelte';
  import { PUBLIC_MFE_1, PUBLIC_MFE_2, PUBLIC_MFE_3 } from '$env/static/public';
  import { loadedScripts, loadScriptQueue } from '$lib/micro-frontends/stores';
  import Loader from '$lib/Loader.svelte';

  /**
   * @type {string}
   */
  export let remote;

  /**
   * @type {Function}
   */
  export let component;

  // TODO: Move to config file
  const remotes = new Map();
  remotes.set('remote-app-1', PUBLIC_MFE_1 || 'http://localhost:1971/build/bundle.js');
  remotes.set('remote-app-2', PUBLIC_MFE_2 || 'http://localhost:1972/build/bundle.js');
  remotes.set('remote-app-3', PUBLIC_MFE_3 || 'http://localhost:1973/build/bundle.js');

  const id = `mfe-${crypto.randomUUID()}`;
  const styleId = `mfe-style-${remote}`;
  const scriptId = `mfe-script-${remote}`;

  let loaded = false;

  onMount(async () => {
    const styleRemoteUrl = remotes.get(remote).replace('.js', '.css');
    const scriptRemoteUrl = remotes.get(remote);
    loadStyle(styleRemoteUrl, styleId);
    loadScript(scriptRemoteUrl, scriptId, () => {
      const componentConstructor = component();
      new componentConstructor({ target: document.querySelector(`#${id}`) });
      loaded = true;
    });
  });

  /**
   * @param {string} url
   * @param {string} id
   */
  function loadStyle(url, id) {
    // Already loaded?
    if (document.querySelector(`#${id}`)) {
      return;
    }
    // Load script
    const elem = document.createElement('link');
    elem.setAttribute('type', 'text/css');
    elem.setAttribute('rel', 'stylesheet');
    elem.setAttribute('href', url);
    elem.setAttribute('id', id);
    document.head.appendChild(elem);
  }

  /**
   * @param {string} url
   * @param {string} id
   * @param {Function} successCallback
   */
  function loadScript(url, id, successCallback) {
    // Already loaded?
    if ($loadedScripts.includes(id)) {
      successCallback();
      return;
    }
    // In progress?
    const cbs = $loadScriptQueue.get(id);
    if (cbs && cbs.length) {
      $loadScriptQueue.set(id, [...cbs, successCallback]);
      return;
    }
    // First time? Load script.
    $loadScriptQueue.set(id, [successCallback]);
    const elem = document.createElement('script');
    elem.setAttribute('type', 'text/javascript');
    elem.setAttribute('src', url);
    elem.setAttribute('defer', '');
    elem.setAttribute('id', id);
    elem.addEventListener('load', () => {
      const cbs = $loadScriptQueue.get(id);
      for (let i = 0; i < cbs.length; i++) {
        cbs[i]();
      }
      $loadScriptQueue.delete(id);
      $loadedScripts = [...$loadedScripts, id];
    });
    document.body.appendChild(elem);
  }
</script>

{#if !loaded}
  <Loader />
{/if}

<div class:hidden={!loaded}>
  <div class="mfeCard_before">
    {component.toString().replace('()', '').replace('=>', '').trim()}
  </div>
  <div {id} class="mfeCard" />
</div>
