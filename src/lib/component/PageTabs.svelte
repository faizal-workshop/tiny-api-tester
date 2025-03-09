<script>
    import screen from '$lib/component/stores/screen';
</script>

<div role="tablist" class="tabs tabs-lift mb-3">
    <button
        role="tab"
        class="tab flex-1 {$screen.page === 0 && 'tab-active'}"
        on:click={() => screen.update(s => ({ ...s, page: 0 }))}
    >
        Request
    </button>
    <button
        role="tab"
        class="tab flex-1 {$screen.page === 1 && 'tab-active'}"
        on:click={() => screen.update(s => ({ ...s, page: 1 }))}
    >
        Response
    </button>
</div>
