<script>
  import RemoteModule from '$lib/micro-frontends/RemoteModule.svelte';
</script>

<svelte:head>
  <title>Products - MFE Demo</title>
  <meta name="description" content="Products - MFE Demo" />
</svelte:head>

<div class="flex flex-col gap-5">
  <RemoteModule remote="remote-app-1" component={()=> remote_app_1.Products} />
  <RemoteModule remote="remote-app-2" component={()=> remote_app_2.MFE2} />
</div>