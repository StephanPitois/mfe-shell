<script>
  import { bundles, isRegistered } from '$lib/Discovery';
  import Spacer from '$lib/Spacer.svelte';
</script>

<svelte:head>
  <title>Page 1 - MFE Demo</title>
  <meta name="description" content="Page 1 - MFE demo app" />
  {#if !isRegistered('fl-totoro')}
    <script src={bundles.flTotoro}></script>
  {/if}
  <!-- You can have as many MFEs on the same page as needed: -->
  {#if !isRegistered('fl-catbus')}
    <script src={bundles.flCatbus}></script>
  {/if}
</svelte:head>

<fl-totoro />

<Spacer />

<!-- You can have as many MFEs on the same page as needed: -->
<p>You can have as many MFEs as needed on the same page.</p>

<Spacer />

<fl-catbus />

<style>
  p {
    font-size: small;
  }
</style>
