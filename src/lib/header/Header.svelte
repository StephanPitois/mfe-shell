<script>
  // @ts-nocheck

  import { page } from '$app/stores';
  import ImportMicroFrontends from '$lib/components/ImportMicroFrontends.svelte';
</script>

<svelte:head>
  <!-- 
    FIXME: must use different keys to identify bundle and components because
    a bundle can contain multiple component_subscribe.
    In this case, fl-shopping-cart is contained in the same bundle as 
    fl-noface. Including fl-noface will includ fl-shopping-cart, but this
    is very confusing, hence the need for separate bundle and component IDs.
    Also: adding 'fl-noface' in header and on Page 2 causes this error when
    loading Page 2 with SSR: "Failed to execute 'define' on
    'CustomElementRegistry': the name "fl-noface" has already been used with
    this registry", which ImportMicroFrontends is apparently not able to prevent.
    Find out why and fix it. 
  -->
  <ImportMicroFrontends tags={['fl-noface']} />
</svelte:head>

<header>
  <nav>
    <ul>
      <li class:active={$page.url.pathname === '/'}>
        <a data-sveltekit-preload-data href="/">Home</a>
      </li>
      <li class:active={$page.url.pathname === '/page-1'}>
        <a data-sveltekit-preload-data href="/page-1">Page 1</a>
      </li>
      <li class:active={$page.url.pathname === '/page-2'}>
        <a data-sveltekit-preload-data href="/page-2">Page 2</a>
      </li>
    </ul>
    <fl-shopping-cart />
  </nav>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }

  nav {
    display: flex;
    /* justify-content: center; */
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
