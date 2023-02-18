<script>
  import RemoteModule from '$lib/micro-frontends/RemoteModule.svelte';
</script>

<svelte:head>
  <title>Products - MFE Demo</title>
  <meta name="description" content="Products - MFE Demo" />
</svelte:head>

<div class="gap-10">
  <RemoteModule remote="remote-app-1" component="Products" />
</div>
