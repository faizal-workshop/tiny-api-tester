<script>
    export let responseTab;
    export let navigateResponseTab;
</script>

<div role="tablist" class="tabs tabs-lift mb-3">
    <button
        role="tab"
        class="tab {responseTab === 0 && 'tab-active'}"
        on:click={() => navigateResponseTab(0)}
    >
        Body
    </button>
    <button
        role="tab"
        class="tab {responseTab === 1 && 'tab-active'}"
        on:click={() => navigateResponseTab(1)}
    >
        Header
    </button>
</div>
