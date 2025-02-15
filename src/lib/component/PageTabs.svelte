<script>
  export let page;
  export let navigatePage;
</script>

<div role="tablist" class="tabs tabs-lift mb-3">
  <button
    role="tab"
    class="tab {page === 0 && 'tab-active'}"
    on:click={() => navigatePage(0)}
  >
    Request
  </button>
  <button
    role="tab"
    class="tab {page === 1 && 'tab-active'}"
    on:click={() => navigatePage(1)}
  >
    Response
  </button>
</div>
