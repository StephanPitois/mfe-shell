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
  <!-- TODO: in addition to checking if the tag is registered, also check that the script was not alreay added -->
  {#if !isRegistered(tag)}
    <script src={bundles[tag]}></script>
  {/if}
{/each}
