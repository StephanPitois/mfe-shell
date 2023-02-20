<progress />
<!-- <div class="loader" aria-busy="true"><div>Loading...</div></div> -->

<style>
  progress {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10000;
    border-radius: 0;
  }
  .loader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10000;
    /* background: var(--background-color); */
    background: transparent;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loader > div {
    color: #999;
  }
</style>
