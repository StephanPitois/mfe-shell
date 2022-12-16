<script>
  import Spacer from '$lib/components/Spacer.svelte';
  import ImportMicroFrontends from '$lib/components/ImportMicroFrontends.svelte';
</script>

<svelte:head>
  <title>Page 1 - MFE Demo</title>
  <meta name="description" content="Page 1 - MFE demo app" />
  <ImportMicroFrontends tags={['fl-totoro', 'fl-catbus']} />
</svelte:head>

<fl-totoro />

<Spacer height={'20px'} />

<fl-catbus />
