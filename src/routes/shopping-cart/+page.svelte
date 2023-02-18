<script>
  import RemoteModule from '$lib/micro-frontends/RemoteModule.svelte';
</script>

<svelte:head>
  <title>Shopping Cart - MFE Demo</title>
  <meta name="description" content="Shopping Cart - MFE Demo" />
</svelte:head>

<RemoteModule remote="remote-app-3" component="ShoppingCartDetails" />
