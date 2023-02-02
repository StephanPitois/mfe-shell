<script>
  // @ts-nocheck
  import RemoteModule from '$lib/micro-frontends/RemoteModule.svelte';
</script>

<svelte:head>
  <title>Products - MFE Demo</title>
  <meta name="description" content="Products - MFE Demo" />
</svelte:head>

<div class="gap-10">
  <!-- svelte-ignore missing-declaration -->
  <RemoteModule remote="remote-app-1" component={() => remote_app_1.Products} />
  <!-- svelte-ignore missing-declaration -->
  <RemoteModule remote="remote-app-2" component={() => remote_app_2.MFE2} />
</div>
