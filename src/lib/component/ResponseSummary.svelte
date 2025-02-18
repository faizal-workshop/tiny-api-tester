<script>
    import httpCodes from '$lib/httpCodes';

    export let response;

    let responseColor;

    $: {
        switch (true) {
            case response.code >= 500:
                responseColor = 'text-red-600';
                break;
            case response.code >= 400:
                responseColor = 'text-yellow-600';
                break;
            case response.code >= 300:
                responseColor = 'text-gray-600';
                break;
            case response.code >= 200:
                responseColor = 'text-green-600';
                break;
            case response.code >= 100:
                responseColor = 'text-gray-600';
                break;
            case response.code <= 0:
                responseColor = 'text-red-600';
                break;
            default:
                responseColor = '';
                break;
        }
    }
</script>

<div class="flex flex-col gap-1 mb-3 text-sm">
    <div class="flex items-center gap-1">
        <span class="w-[40px]">Code</span>
        <span>:</span>
        <span class="flex-1 {responseColor}">
            {#if !response.code}
                <span>-</span>
            {:else if response.code <= 0}
                <span>
                    {httpCodes[response.code]}
                </span>
            {:else}
                <span>
                    {response.code}
                    {#if response.code}
                        ({httpCodes[response.code]})
                    {/if}
                </span>
            {/if}
        </span>
    </div>
    <div class="flex items-center gap-1">
        <span class="w-[40px]">Time</span>
        <span>:</span>
        <span class="flex-1">
            {response.time || '-'}
        </span>
    </div>
    <div class="flex items-center gap-1">
        <span class="w-[40px]">Size</span>
        <span>:</span>
        <span class="flex-1">
            {response.size || '-'}
        </span>
    </div>
</div>
