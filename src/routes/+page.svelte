<svelte:head>
  <title>Home - MFE Demo</title>
  <meta name="description" content="MFE demo app" />
</svelte:head>

<h1>Micro-Frontend Demo</h1>
<article>
  <p>A simple Svelte-based micro-frontend demo.</p>
  <p>
    <strong>Store boundaries</strong>: the app shell cannot access a micro-frontend store, and
    micro-frontends can only access their own stores. This boundary gives micro-frontends full
    control over their own stores.
  </p>
  <p>
    <strong>Custom events</strong>: when rendered on the same page, the app shell and the
    micro-frontends use custom events to communicate with each other.
  </p>
</article>
