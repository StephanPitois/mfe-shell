<script>
  // @ts-nocheck
  import RemoteModule from '$lib/micro-frontends/RemoteModule.svelte';
</script>

<svelte:head>
  <title>Product - MFE Demo</title>
  <meta name="description" content="Product - MFE Demo" />
</svelte:head>

<div class="gap-10">
  <!-- svelte-ignore missing-declaration -->
  <RemoteModule remote="remote-app-1" component={() => remote_app_1.Product} />
</div>
