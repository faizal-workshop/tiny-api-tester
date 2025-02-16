<script>
    export let requestTab;
    export let navigateRequestTab;
</script>

<div role="tablist" class="tabs tabs-lift mb-3">
    <button
        role="tab"
        class="tab {requestTab === 0 && 'tab-active'}"
        on:click={() => navigateRequestTab(0)}
    >
        Parameters
    </button>
    <button
        role="tab"
        class="tab {requestTab === 1 && 'tab-active'}"
        on:click={() => navigateRequestTab(1)}
    >
        Headers
    </button>
    <button
        role="tab"
        class="tab {requestTab === 2 && 'tab-active'}"
        on:click={() => navigateRequestTab(2)}
    >
        JSON
    </button>
</div>
