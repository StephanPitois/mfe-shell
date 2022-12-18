<script>
  import MicroFrontend from '$lib/components/MicroFrontend.svelte';
</script>

<svelte:head>
  <title>Another Page - MFE Demo</title>
  <meta name="description" content="Page 2 - MFE demo app" />
</svelte:head>

<MicroFrontend bundle="fl-noface" component={() => mf3App.NoFace} />
