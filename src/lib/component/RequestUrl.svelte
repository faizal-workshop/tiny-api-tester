<script>
    import { Check } from 'lucide-svelte';

    export let request;
    export let sendRequest;

    async function handleKeydown(event) {
        if (event.key === 'Enter' && !!create) {
            sendRequest();
        }
    }
</script>

<div class="flex flex-col gap-1 mb-3">
    <input
        type="text"
        class="input"
        placeholder="https://example.com"
        bind:value={request.url}
        on:keydown={handleKeydown}
    />
    <div class="flex items-center gap-1">
        <select class="select appearance-none" bind:value={request.verb}>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="patch">PATCH</option>
            <option value="put">PUT</option>
            <option value="delete">DELETE</option>
        </select>
        <button
            class="btn btn-primary"
            disabled={request.loading}
            on:click={() => sendRequest()}
        >
            {#if request.loading}
                <span class="loading loading-spinner loading-xs"></span> Loading...
            {:else}
                <Check size={16} /> Send
            {/if}
        </button>
    </div>
</div>
