<script>
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
  import { inspect } from '$lib/stores.js';
  import { onMount } from 'svelte';
  import Loader from '$lib/Loader.svelte';
  import { loaders } from '$lib/micro-frontends/stores';

  $loaders++;

  onMount(async () => {
    $loaders--;
  });
</script>

{#if $loaders}
  <Loader />
{/if}

<div class="wrapper gap-10" class:inspect={$inspect}>
  <Header />
  <main class="container">
    <slot />
  </main>
  <footer class="container flex flex-row justify-end">
    <!-- <a href="https://github.com/StephanPitois/mfe-shell">GitHub</a> -->
  </footer>
</div>

<style>
  .wrapper {
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }
  footer {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
</style>
