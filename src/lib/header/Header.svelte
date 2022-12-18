<script>
  import { page } from '$app/stores';
  import MicroFrontend from '$lib/components/MicroFrontend.svelte';
</script>

<header>
  <nav>
    <ul>
      <li class:active={$page.url.pathname === '/'}>
        <a data-sveltekit-preload-data href="/">Home</a>
      </li>
      <li class:active={$page.url.pathname === '/products'}>
        <a data-sveltekit-preload-data href="/products">Products</a>
      </li>
      <li class:active={$page.url.pathname === '/another-page'}>
        <a data-sveltekit-preload-data href="/another-page">Another Page</a>
      </li>
    </ul>
    <div>
      <MicroFrontend bundle="fl-noface" component={() => mf3App.ShoppingCart} />
    </div>
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active {
    text-decoration: underline;
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 2em 0 0;
    color: var(--heading-color);
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--accent-color);
  }
</style>
