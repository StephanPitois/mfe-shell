<script>
  import { onMount } from 'svelte';
  import { getStyleUrl, getScriptUrl } from '$lib/Bundles';
  import { ProgressBar } from 'carbon-components-svelte';
  import { page } from '$app/stores';

  /**
   * @type {string}
   */
  export let bundle;

  /**
   * @type {Function}
   */
  export let component;

  const id = `mfe-${crypto.randomUUID()}`;
  const styleId = `mfe-style-${bundle}`;
  const scriptId = `mfe-script-${bundle}`;

  // @ts-ignore
  const mfeData = $page.data.mfeData?.find((b) => b.name === bundle);
  const script = mfeData?.script;
  const style = mfeData?.style;

  let loaded = false;

  onMount(async () => {
    const styleBundleUrl = getStyleUrl(bundle);
    const scriptBundleUrl = getScriptUrl(bundle);
    loadStyle(styleBundleUrl, styleId);
    loadScript(scriptBundleUrl, scriptId, () => {
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
    if (document.querySelector(`#${id}`)) {
      console.log('Style already loaded');
      return;
    }
    if (style) {
      var styleElem = document.createElement('style');
      styleElem.appendChild(document.createTextNode(style));
      styleElem.setAttribute('id', id);
      document.head.appendChild(styleElem);
    } else {
      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = url;
      link.setAttribute('id', id);
      document.head.appendChild(link);
    }
  }

  /**
   * @param {string} url
   * @param {string} id
   * @param {Function} successCallback
   */
  function loadScript(url, id, successCallback) {
    if (document.querySelector(`#${id}`)) {
      console.log('Script already loaded');
      successCallback();
      return;
    }
    let scriptEle = document.createElement('script');
    scriptEle.setAttribute('type', 'text/javascript');
    const success = () => {
      console.log('File loaded');
      // TODO: FIXME!
      // Way for the script to be loaded before setting the ID.
      // It's not great but at least you can load more than one
      // component from the same bundle on a single page.
      // Need to fix this though. Need to have all listeners
      // triggered once loaded - not just one listener,
      // and not too early either.
      // The current solution's issue is that the same script
      // may be loaded more than once. That's not great at all.
      scriptEle.setAttribute('id', id);
      successCallback();
    };
    if (script) {
      scriptEle.text = script;
      // scriptEle.setAttribute('src', url);
      scriptEle.setAttribute('async', 'false');
      document.body.appendChild(scriptEle);
      success();
      // scriptEle.addEventListener('load', success);
      // scriptEle.addEventListener('error', (ev) => {
      //   console.log('Error on loading file', ev);
      // });
    } else {
      scriptEle.setAttribute('src', url);
      scriptEle.setAttribute('async', 'false');
      document.body.appendChild(scriptEle);
      scriptEle.addEventListener('load', success);
      scriptEle.addEventListener('error', (ev) => {
        console.log('Error on loading file', ev);
      });
    }
  }
</script>

{#if !loaded}
  <ProgressBar helperText="Loading..." />
{/if}

<div {id} class:hidden={!loaded} />
