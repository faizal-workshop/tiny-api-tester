<script>
    import { page } from '$app/stores';
    import axios from 'axios';
    import { toast } from 'svoast';

    import screen from '$lib/component/stores/screen';
    import PageTabs from '$lib/component/PageTabs.svelte';
    import RequestUrl from '$lib/component/RequestUrl.svelte';
    import RequestTabs from '$lib/component/RequestTabs.svelte';
    import Parameters from '$lib/component/Parameters.svelte';
    import Headers from '$lib/component/Headers.svelte';
    import JsonEditor from '$lib/component/JsonEditor.svelte';
    import ResponseSummary from '$lib/component/ResponseSummary.svelte';
    import ResponseTabs from '$lib/component/ResponseTabs.svelte';
    import JsonPreview from '$lib/component/JsonPreview.svelte';

    let request = {
        url: '',
        verb: 'get',
        parameters: [],
        headers: [],
        json: '',
        loading: false,
    };
    let response = {
        code: '',
        time: '',
        size: '',
        head: '',
        body: '',
    };

    async function sendRequest() {
        function toObject(arr) {
            return Object.fromEntries(
                arr.map(({ key, value }) => [key, value]),
            );
        }

        response = {
            ...response,
            code: '',
            time: '',
            size: '',
            head: '',
            body: '',
        };

        request.loading = true;
        const startTime = Date.now();

        axios({
            method: request.verb,
            url: request.url,
            params: toObject(request.parameters),
            headers: toObject(request.headers),
            data: request.json,
        })
            .then(result => {
                response.code = result.status;
                response.head = result.headers;
                response.body = result.data;
            })
            .catch(e => {
                if (e.response) {
                    response.code = e.response.status;
                    response.head = e.response.headers;
                    response.body = e.response.data;
                } else if (e.request) {
                    response.code = '';
                    response.head = {};
                    response.body =
                        'The request was made, but no response was received.';
                } else {
                    response.code = -1;
                    response.head = {};
                    response.body = error.message;
                }
            })
            .finally(() => {
                response.time = `${Date.now() - startTime}ms`;
                response.size = `${JSON.stringify(response.body).length} bytes`;

                screen.update(s => ({
                    ...s,
                    page: 1,
                    responseTab: 0,
                }));
                request.loading = false;
            });
    }
</script>

<div class="p-3">
    <h1 class="mt-3 mb-6 text-3xl">API Tester</h1>
    <PageTabs />
    {#if $screen.page === 0}
        <RequestUrl {request} {sendRequest} />
        <RequestTabs />
        {#if $screen.requestTab === 0}
            <Parameters {request} />
        {:else if $screen.requestTab === 1}
            <Headers {request} />
        {:else}
            <JsonEditor
                {request}
                on:updateRequest={event => (request.json = event.detail)}
            />
        {/if}
    {:else}
        <ResponseSummary {response} />
        <ResponseTabs />
        {#if $screen.responseTab === 0}
            <JsonPreview
                content={response.body &&
                    JSON.stringify(response.body, null, 2)}
            />
        {:else}
            <JsonPreview
                content={response.head &&
                    JSON.stringify(response.head, null, 2)}
            />
        {/if}
    {/if}
</div>
