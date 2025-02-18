<script>
    import { screen } from '$lib/component/stores/screen';
</script>

<div role="tablist" class="tabs tabs-lift mb-3">
    <button
        role="tab"
        class="tab {$screen.requestTab === 0 && 'tab-active'}"
        on:click={() => screen.update(s => ({ ...s, requestTab: 0 }))}
    >
        Parameters
    </button>
    <button
        role="tab"
        class="tab {$screen.requestTab === 1 && 'tab-active'}"
        on:click={() => screen.update(s => ({ ...s, requestTab: 1 }))}
    >
        Headers
    </button>
    <button
        role="tab"
        class="tab {$screen.requestTab === 2 && 'tab-active'}"
        on:click={() => screen.update(s => ({ ...s, requestTab: 2 }))}
    >
        JSON
    </button>
</div>
