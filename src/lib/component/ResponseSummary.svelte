<script>
    import httpCodes from '$lib/httpCodes';

    export let response;
</script>

<div class="flex flex-col gap-1 mb-3 text-sm">
    <div class="flex items-center gap-1">
        <span class="w-[40px]">Code</span>
        <span>:</span>
        <div class="flex-1">
            <span>{response.code || '-'}</span>
            {#if response.code}
                <span class="text-gray-600">
                    ({httpCodes[response.code]})
                </span>
            {/if}
        </div>
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
