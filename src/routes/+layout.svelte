<script>
    import '../app.css';
    import { page } from '$app/stores';

    let { children } = $props();
</script>

<svelte:head>
    <title>
        {import.meta.env.VITE_APP_NAME}
    </title>
</svelte:head>

{@render children()}
