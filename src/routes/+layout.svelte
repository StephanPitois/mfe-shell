<script>
  // @ts-nocheck

  import Header from '$lib/header/Header.svelte';
  import '../app.css';
  import { count } from '$lib/stores.js';
  import { onMount, onDestroy } from 'svelte';

  let totoroEvents = [];

  // Use this to listen to events triggered by other micro-frontends:
  const listener = ({ detail }) => {
    console.log('Layout heard Totoro.');
    totoroEvents = [...totoroEvents, {
      ts: new Date(),
      message: detail.message
    }];
  };

  onMount(async () => {
    if (typeof window !== 'undefined') {
      window.addEventListener('TOTORO_WAS_CLICKED', listener);
    }
  });

  onDestroy(async () => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('TOTORO_WAS_CLICKED', listener);
    }
  });
</script>

<div class="wrapper">
  <div class="box header"><Header /></div>
  <div class="box sidebar">
    Sidebar
    <p>
      The App Shell has its own stores and cannot access other MFEs' stores. For example, click
      count store remains 0 in the sidebar while it can increase in MFE 1. Clicks: {$count}
    </p>

    Events
    {#if totoroEvents.length}
      {#each totoroEvents as totoroEvent}
        <p>
          {(new Date(totoroEvent.ts)).toLocaleTimeString()}<br>
          {totoroEvent.message}
        </p>
      {/each}
    {:else}
      <p>No events yet. Click on Totoro's first child component.</p>
    {/if}
  </div>
  <div class="box content">
    <main>
      <slot />
    </main>
  </div>
  <div class="box footer">Footer</div>
</div>

<footer />

<style>
  .sidebar {
    grid-area: sidebar;
  }

  .content {
    grid-area: content;
    position: relative;
  }

  .header {
    grid-area: header;
  }

  .footer {
    grid-area: footer;
  }

  .wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 250px auto;
    grid-template-areas:
      'header  header'
      'sidebar content'
      'footer  footer ';
    background-color: #fff;
    color: #444;
  }

  .box {
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 50px;
    font-size: 150%;
  }

  .header,
  .footer {
    background-color: #999;
  }

  p {
    font-size: small;
  }
</style>
