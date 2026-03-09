<script>
    import screen from '$lib/component/stores/screen';
</script>

<div role="tablist" class="tabs tabs-lift mb-3">
    <button
        role="tab"
        class="tab {$screen.responseTab === 0 && 'tab-active'}"
        on:click={() => screen.update(s => ({ ...s, responseTab: 0 }))}
    >
        Body
    </button>
    <button
        role="tab"
        class="tab {$screen.responseTab === 1 && 'tab-active'}"
        on:click={() => screen.update(s => ({ ...s, responseTab: 1 }))}
    >
        Header
    </button>
</div>
