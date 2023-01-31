<script>
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
  import { inspect } from '$lib/stores.js';

</script>

<Header />
<main class:inspect={$inspect}>
  <slot />
</main>
<footer>

</footer>

<style>
</style>