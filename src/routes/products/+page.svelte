<script>
  import MicroFrontend from '$lib/components/MicroFrontend.svelte';
</script>

<svelte:head>
  <title>Page 1 - MFE Demo</title>
  <meta name="description" content="Page 1 - MFE demo app" />
</svelte:head>

<div class="flex flex-col gap-5">
  <MicroFrontend bundle="fl-totoro" component={() => mf1App.Totoro} />
  <MicroFrontend bundle="fl-catbus" component={() => mf2App.Catbus} />
</div>
