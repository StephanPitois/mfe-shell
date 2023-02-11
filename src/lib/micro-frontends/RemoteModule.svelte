<script>
  import { onMount } from 'svelte';
  import { PUBLIC_REMOTE_APPS } from '$env/static/public';
  import { loadedScripts, loadScriptQueue } from '$lib/micro-frontends/stores';
  import { loaders } from '$lib/micro-frontends/stores';
  import { fly } from 'svelte/transition';

  /**
   * @type {string}
   */
  export let remote;

  /**
   * @type {Function}
   */
  export let component;

  const remotes = JSON.parse(PUBLIC_REMOTE_APPS);
  const scriptRemoteUrl = remotes[remote];
  const styleRemoteUrl = scriptRemoteUrl.replace('.js', '.css');

  const id = `mfe-${crypto.randomUUID()}`;
  const styleId = `mfe-style-${remote}`;
  const scriptId = `mfe-script-${remote}`;

  let loaded = false;
  $loaders++;

  onMount(async () => {
    loadStyle(styleRemoteUrl, styleId);
    loadScript(scriptRemoteUrl, scriptId, () => {
      const componentConstructor = component();
      new componentConstructor({ target: document.querySelector(`#${id}`) });
      loaded = true;
      $loaders--;
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

<div class:hidden={!loaded} in:fly={{ y: 1080, duration: 2000 }}>
  <div class="mfeCard_before">
    {component.toString().replace('()', '').replace('=>', '').trim()}
  </div>
  <div {id} class="mfeCard" />
</div>
