<script>
    import { Plus, Trash2 } from 'lucide-svelte';

    export let request;

    function addHeader() {
        request.headers = [...request.headers, { key: '', value: '' }];
    }

    function removeHeader(id) {
        request.headers = request.headers.filter((_, index) => index !== id);
    }
</script>

<div class="flex flex-col mb-3">
    {#if !request.headers.length}
        <div class="flex gap-1">
            <button
                class="btn btn-sm btn-outline btn-neutral"
                title="Add new header"
                on:click={() => addHeader()}
            >
                <Plus size={12} /> Add
            </button>
        </div>
    {/if}
    {#each request.headers as item, i}
        <div
            class="flex flex-col gap-1 {request.headers.length - 1 > i &&
                'mb-3'}"
        >
            <input
                type="text"
                class="input"
                placeholder="Key"
                bind:value={item.key}
            />
            <input
                type="text"
                class="input"
                placeholder="Value"
                bind:value={item.value}
            />
            <div class="flex items-center gap-1">
                {#if request.headers.length - 1 === i}
                    <button
                        class="btn btn-sm btn-outline btn-neutral"
                        title="Add new header"
                        on:click={() => addHeader()}
                    >
                        <Plus size={12} /> Add
                    </button>
                {/if}
                <button
                    class="btn btn-sm btn-outline btn-error ms-auto hover:text-white"
                    title="Delete this header"
                    on:click={() => removeHeader(i)}
                >
                    <Trash2 size={12} /> Delete
                </button>
            </div>
        </div>
    {/each}
</div>
