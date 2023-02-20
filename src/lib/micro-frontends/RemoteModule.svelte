<script>
  import { onMount } from 'svelte';
  import { loaders } from '$lib/micro-frontends/stores';

  /**
   * @type {string}
   */
  export let remote;

  /**
   * @type {string}
   */
  export let component;

  $loaders++;

  const id = `mfe-${crypto.randomUUID()}`;

  let loaded = false;
  let error = '';

  onMount(async () => {
    // @ts-ignore
    const url = mfe_importmap[remote];
    const target = document.getElementById(id);
    import(/* @vite-ignore */ url)
      .then((module) => {
        const constructor = module[component];
        new constructor({ target });
        error = '';
        loaded = true;
        $loaders--;
      })
      .catch((err) => {
        error = err.message;
      });
  });
</script>

{#if error}
  <article>{error}</article>
{/if}

<!-- <div class:hidden={!loaded} in:fly={{ y: 100, duration: 1000 }}> -->
<div class:hidden={!loaded}>
  <div class="mfeCard_before">
    {remote}.{component}
  </div>
  <div {id} class="mfeCard" />
</div>

<style>
  article {
    border-color: #bf2e3a;
  }
</style>