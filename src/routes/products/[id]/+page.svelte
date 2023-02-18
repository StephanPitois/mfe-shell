<script>
  import RemoteModule from '$lib/micro-frontends/RemoteModule.svelte';
</script>

<svelte:head>
  <title>Product - MFE Demo</title>
  <meta name="description" content="Product - MFE Demo" />
</svelte:head>

<div class="gap-10">
  <RemoteModule remote="remote-app-1" component="Product" />
</div>
