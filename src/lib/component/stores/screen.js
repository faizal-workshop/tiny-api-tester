import { writable } from 'svelte/store';

export default writable({
    page: 0,
    requestTab: 0,
    responseTab: 0,
});
