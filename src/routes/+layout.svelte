<script>
  import Header from '$lib/header/Header.svelte';
  import '../app.css';
</script>

<div class="wrapper p-5">
  <div class="box header"><Header /></div>
  <div class="box sidebar">Sidebar</div>
  <div>
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
    display: none;
    width: 260px;
  }

  .header {
    grid-area: header;
  }

  .footer {
    grid-area: footer;
  }

  .wrapper {
    display: grid;
    xxx-grid-gap: 20px;
    row-gap: 20px;
    grid-template-columns: auto 1fr;
    grid-template-rows: 150px 1fr 99.5px;
    grid-template-areas:
      'header  header'
      'content content'
      'footer  footer';
    background-color: #fff;
    color: #444;
  }

  @media (min-width: 900px) {
    .wrapper {
      column-gap: 20px;
      grid-template-rows: 99.5px 1fr 99.5px;
      grid-template-areas:
        'header  header'
        'sidebar content'
        'footer  footer';
      /* grid-template-columns: 1fr;
      grid-template-areas:
        'header'
        'sidebar'
        'footer'; */
    }
    .sidebar {
      display: block;
    }
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
</style>
