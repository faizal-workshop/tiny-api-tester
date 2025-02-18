import { writable } from 'svelte/store';

export const screen = writable({
    page: 0,
    requestTab: 0,
    responseTab: 0,
});
