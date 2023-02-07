<script>
  // @ts-nocheck
  import { page } from '$app/stores';
  import RemoteModule from '$lib/micro-frontends/RemoteModule.svelte';
  import { inspect } from '$lib/stores.js';
</script>

<header class="container">
  <nav class="gap-5">
    <ul class="gap-5" style="margin-left: 0">
      <li class:active={$page.url.pathname === '/'}>
        <a data-sveltekit-preload-data href="/"
          ><img
            style="width:24px; height: 24px"
            alt="GitHub"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3ZTQxODQiIGQ9Ik0xMCAyMHYtNmg0djZoNXYtOGgzTDEyIDNMMiAxMmgzdjhoNVoiLz48L3N2Zz4="
          /></a
        >
      </li>
      <li class:active={$page.url.pathname === '/products'}>
        <a data-sveltekit-preload-data href="/products">Products</a>
      </li>
      <li>
        <label for="switch" title="Highlight remote components with a border">
          <input type="checkbox" id="switch" name="switch" role="switch" bind:checked={$inspect} />
          Inspect
        </label>
      </li>
      <li>
        <a style="font-weight: normal" href="https://github.com/StephanPitois/mfe-shell"
          ><img
            style="width:24px; height: 24px"
            alt="GitHub"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9IiM3ZTQxODQiIGQ9Ik0xMiAyQTEwIDEwIDAgMCAwIDIgMTJjMCA0LjQyIDIuODcgOC4xNyA2Ljg0IDkuNWMuNS4wOC42Ni0uMjMuNjYtLjV2LTEuNjljLTIuNzcuNi0zLjM2LTEuMzQtMy4zNi0xLjM0Yy0uNDYtMS4xNi0xLjExLTEuNDctMS4xMS0xLjQ3Yy0uOTEtLjYyLjA3LS42LjA3LS42YzEgLjA3IDEuNTMgMS4wMyAxLjUzIDEuMDNjLjg3IDEuNTIgMi4zNCAxLjA3IDIuOTEuODNjLjA5LS42NS4zNS0xLjA5LjYzLTEuMzRjLTIuMjItLjI1LTQuNTUtMS4xMS00LjU1LTQuOTJjMC0xLjExLjM4LTIgMS4wMy0yLjcxYy0uMS0uMjUtLjQ1LTEuMjkuMS0yLjY0YzAgMCAuODQtLjI3IDIuNzUgMS4wMmMuNzktLjIyIDEuNjUtLjMzIDIuNS0uMzNjLjg1IDAgMS43MS4xMSAyLjUuMzNjMS45MS0xLjI5IDIuNzUtMS4wMiAyLjc1LTEuMDJjLjU1IDEuMzUuMiAyLjM5LjEgMi42NGMuNjUuNzEgMS4wMyAxLjYgMS4wMyAyLjcxYzAgMy44Mi0yLjM0IDQuNjYtNC41NyA0LjkxYy4zNi4zMS42OS45Mi42OSAxLjg1VjIxYzAgLjI3LjE2LjU5LjY3LjVDMTkuMTQgMjAuMTYgMjIgMTYuNDIgMjIgMTJBMTAgMTAgMCAwIDAgMTIgMloiLz48L3N2Zz4="
          /></a
        >
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
