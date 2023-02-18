<script>
  import 'systemjs';
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
    System.import(remote).then((module) => {
      new module[component]({
        target: document.getElementById(id)
      });
      loaded = true;
    });
  });
</script>

<svelte:head>
  <script type="systemjs-module" src="import:{remote}"></script>
</svelte:head>

<!-- <div class:hidden={!loaded} in:fly={{ y: 100, duration: 1000 }}> -->
<div class:hidden={!loaded}>
  <div class="mfeCard_before">
    {remote}.{component}
  </div>
  <div {id} class="mfeCard" />
</div>
