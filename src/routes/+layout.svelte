<script>
  // @ts-nocheck

  import Header from '$lib/header/Header.svelte';
  import '../app.css';
  import { count } from '$lib/stores.js';
  import { registerEventListeners } from '$lib/EventListeners';

  let totoroEvents = [];

  // Use this to listen to events triggered by other micro-frontends:
  const listener = ({ detail }) => {
    console.log('Layout heard TOTORO_WAS_CLICKED.');
    totoroEvents = [
      ...totoroEvents,
      {
        ts: new Date(),
        message: 'TOTORO_WAS_CLICKED'
      }
    ];
  };

  registerEventListeners('App Shell: Layout', [
    {
      eventType: 'TOTORO_WAS_CLICKED',
      listener
    }
  ]);
</script>

<div class="wrapper">
  <div class="box header"><Header /></div>
  <div class="box sidebar">
    Sidebar
    <br />
    <br />
    <hr />
    <p>
      <b>Store boundaries</b>: the app shell cannot access a micro-frontend store, and
      micro-frontends can only access their own stores. This boundary gives micro-frontends full
      control over their own stores.
    </p>
    <div class="mfeCard">
      <div class="mfeCardTitle">Stores owned by app shell</div>
      <div class="mfeCardBody">
        <code>$count = {$count}</code>
      </div>
    </div>
    <br />
    <hr />
    <p>
      <b>Custom events</b>: the app shell and the micro-frontends when rendered on the same page use
      custom events to communicate with each other.
    </p>
    <div class="mfeCard">
      <div class="mfeCardTitle">Events caught by app shell</div>
      <div class="mfeCardBody">
        {#if totoroEvents.length}
          {#each totoroEvents as totoroEvent}
            <code>
              {new Date(totoroEvent.ts).toLocaleTimeString()}: {totoroEvent.message}
            </code>
          {/each}
        {:else}
          <i>Waiting for TOTORO_WAS_CLICKED...</i>
        {/if}
      </div>
    </div>
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
    grid-template-columns: 350px auto;
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
    padding: 30px;
    font-size: 125%;
  }

  .header,
  .footer {
    background-color: #444;
    color: #fff;
  }

  p {
    font-size: small;
  }

  code {
    white-space: nowrap;
    margin-bottom: 5px;
    display: inline-block;
  }

  .mfeCardBody {
    padding: 10px;
  }
</style>
