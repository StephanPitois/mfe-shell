<script>
  import { bundles } from '$lib/MicroFrontends';

  export let tags = [];

  function isRegistered(tag) {
    if (typeof customElements === 'undefined') {
      return false;
    }
    return typeof customElements.get(tag) !== 'undefined';
  }
</script>

{#each tags as tag}
  {#if !isRegistered(tag)}
    <script src={bundles[tag]}></script>
  {/if}
{/each}
