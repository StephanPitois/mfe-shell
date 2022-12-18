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
  }

  .header {
    grid-area: header;
  }

  .footer {
    grid-area: footer;
  }

  .wrapper {
    display: grid;
    grid-gap: 20px;
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
    padding: 30px;
    font-size: 125%;
  }

  .header,
  .footer {
    background-color: #444;
    color: #fff;
  }
</style>
