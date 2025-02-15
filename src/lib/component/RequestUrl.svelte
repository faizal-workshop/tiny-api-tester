<script>
  import { Check } from "lucide-svelte";

  export let url;
  export let verb;
  export let sendRequest;

  async function handleKeydown(event) {
    if (event.key === "Enter" && !!create) {
      sendRequest();
    }
  }
</script>

<div class="flex flex-col gap-1 mb-3">
  <input
    type="text"
    class="input"
    placeholder="https://example.com"
    bind:value={url}
    on:keydown={handleKeydown}
  />
  <div class="flex items-center gap-1">
    <select class="select" bind:value={verb}>
      <option value="get">GET</option>
      <option value="post">POST</option>
      <option value="patch">PATCH</option>
      <option value="put">PUT</option>
      <option value="delete">DELETE</option>
    </select>
    <button class="btn btn-primary" on:click={() => sendRequest()}>
      <Check size={16} /> Send
    </button>
  </div>
</div>
