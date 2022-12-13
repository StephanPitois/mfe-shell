<script>
  import { bundles, isRegistered } from '$lib/Discovery';
</script>

<svelte:head>
  <title>Page 2 - MFE Demo</title>
  <meta name="description" content="Page 2 - MFE demo app" />
  {#if !isRegistered('fl-noface')}
    <script src={bundles.flNoFace}></script>
  {/if}
</svelte:head>

<fl-noface />
