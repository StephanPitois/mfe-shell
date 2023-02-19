<script>
  import { onMount } from 'svelte';

  /**
   * @type {string}
   */
  export let remote;

  /**
   * @type {string}
   */
  export let component;

  const id = `mfe-${crypto.randomUUID()}`;

  let loaded = false;

  onMount(async () => {
    // @ts-ignore
    const url = mfe_importmap[remote];
    import(/* @vite-ignore */ url).then((module) => {
      const constructor = module[component];
      new constructor({
        target: document.getElementById(id)
      });
      loaded = true;
    });
  });
</script>

<!-- <div class:hidden={!loaded} in:fly={{ y: 100, duration: 1000 }}> -->
<div class:hidden={!loaded}>
  <div class="mfeCard_before">
    {remote}.{component}
  </div>
  <div {id} class="mfeCard" />
</div>
