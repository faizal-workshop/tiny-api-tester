<script>
  import { Plus, Trash2 } from "lucide-svelte";

  export let parameters;
  export let addParameter;
  export let removeParameter;
</script>

<div class="flex flex-col mb-3">
  {#if !parameters.length}
    <div class="flex gap-1">
      <button
        class="btn btn-sm btn-outline btn-neutral"
        title="Add new parameter"
        on:click={() => addParameter()}
      >
        <Plus size={12} /> Add
      </button>
    </div>
  {/if}
  {#each parameters as item, i}
    <div class="flex flex-col gap-1 {parameters.length - 1 > i && 'mb-3'}">
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
        {#if parameters.length - 1 === i}
          <button
            class="btn btn-sm btn-outline btn-neutral"
            title="Add new parameter"
            on:click={() => addParameter()}
          >
            <Plus size={12} /> Add
          </button>
        {/if}
        <button
          class="btn btn-sm btn-outline btn-error ms-auto hover:text-white"
          title="Delete this parameter"
          on:click={() => removeParameter(i)}
        >
          <Trash2 size={12} /> Delete
        </button>
      </div>
    </div>
  {/each}
</div>
