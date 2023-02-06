<script>
  // @ts-nocheck
  import { page } from '$app/stores';
  import RemoteModule from '$lib/micro-frontends/RemoteModule.svelte';
  import { inspect } from '$lib/stores.js';
</script>

<header class="container">
  <nav>
    <ul class="gap-5">
      <li class:active={$page.url.pathname === '/'}>
        <a data-sveltekit-preload-data href="/">Home</a>
      </li>
      <li class:active={$page.url.pathname === '/products'}>
        <a data-sveltekit-preload-data href="/products">Products</a>
      </li>
      <li>
        <a style="font-weight: normal" href="https://github.com/StephanPitois/mfe-shell">➝ GitHub</a>
      </li>
      <li>
        <label for="switch" title="Highlight remote components with a border">
          <input type="checkbox" id="switch" name="switch" role="switch" bind:checked={$inspect} />
          Highlight
        </label>
      </li>
    </ul>
    <ul class="gap-5">
      <li>
        <!-- svelte-ignore missing-declaration -->
        <RemoteModule remote="remote-app-3" component={() => remote_app_3.ShoppingCart} />
      </li>
    </ul>
  </nav>
</header>

<style>
  li a {
    font-weight: bold;
    border-bottom: 2px solid transparent;
    border-radius: 0;
  }
  li.active a {
    border-color: var(--primary);
  }
</style>
