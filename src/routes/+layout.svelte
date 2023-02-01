<script>
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
  import { inspect } from '$lib/stores.js';
  import { onMount } from 'svelte';
  import Loader from '$lib/Loader.svelte';

  let loaded = false;

  onMount(async () => {
      loaded = true;
  });
</script>

{#if !loaded}
  <Loader />
{/if}

<Header />
<main class:inspect={$inspect} class="container">
  <slot />
</main>
<footer class="container text-center p-10 pb-30">
  <a href="https://github.com/StephanPitois/mfe-shell">GitHub</a>
</footer>

<style>
</style>
