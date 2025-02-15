<script>
  import axios from "axios";
  import { toast } from "svoast";

  import PageTabs from "$lib/component/PageTabs.svelte";
  import RequestUrl from "$lib/component/RequestUrl.svelte";
  import RequestTabs from "$lib/component/RequestTabs.svelte";
  import Parameters from "$lib/component/Parameters.svelte";
  import Headers from "$lib/component/Headers.svelte";
  import JsonEditor from "$lib/component/JsonEditor.svelte";
  import ResponseSummary from "$lib/component/ResponseSummary.svelte";
  import ResponseTabs from "$lib/component/ResponseTabs.svelte";
  import JsonPreview from "$lib/component/JsonPreview.svelte";

  let page = 0;
  let url = "";
  let verb = "get";
  let requestTab = 0;
  let responseTab = 0;
  let parameters = [];
  let headers = [];
  let json = "";
  let response = {
    code: "",
    time: "",
    size: "",
    body: "",
    head: "",
  };

  function navigatePage(id) {
    page = id;
  }

  function navigateRequestTab(id) {
    requestTab = id;
  }

  function navigateResponseTab(id) {
    responseTab = id;
  }

  function addParameter() {
    parameters = [...parameters, { key: "", value: "" }];
  }

  function removeParameter(id) {
    parameters = parameters.filter((_, index) => index !== id);
  }

  function addHeader() {
    headers = [...headers, { key: "", value: "" }];
  }

  function removeHeader(id) {
    headers = headers.filter((_, index) => index !== id);
  }

  async function sendRequest() {
    try {
      const response = await axios[verb](url);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  }
</script>

<div class="p-3">
  <h1 class="mt-3 mb-6 text-3xl">API Tester</h1>
  <PageTabs {page} {navigatePage} />
  {#if page === 0}
    <RequestUrl {url} {verb} {sendRequest} />
    <RequestTabs {requestTab} {navigateRequestTab} />
    {#if requestTab === 0}
      <Parameters {parameters} {addParameter} {removeParameter} />
    {:else if requestTab === 1}
      <Headers {headers} {addHeader} {removeHeader} />
    {:else}
      <JsonEditor {json} />
    {/if}
  {:else}
    <ResponseSummary {response} />
    <ResponseTabs {responseTab} {navigateResponseTab} />
    {#if responseTab === 0}
      <JsonPreview json={response.body} />
    {:else}
      <JsonPreview json={response.head} />
    {/if}
  {/if}
</div>
