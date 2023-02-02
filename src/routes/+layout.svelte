<script>
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
  import { inspect } from '$lib/stores.js';
  import { onMount } from 'svelte';
  import Loader from '$lib/Loader.svelte';
  import { loaders } from '$lib/micro-frontends/stores';

  let loaded = false;
  $loaders++;

  onMount(async () => {
      loaded = true;
      $loaders--;
  });
</script>

{#if $loaders}
  <Loader />
{/if}

<!-- {#if !loaded}
  <Loader />
{/if} -->

<Header />
<main class:inspect={$inspect} class="container">
  <slot />
</main>
<footer class="container text-center p-10 pb-30">
  <a href="https://github.com/StephanPitois/mfe-shell">GitHub</a>
</footer>

<style>
</style>
