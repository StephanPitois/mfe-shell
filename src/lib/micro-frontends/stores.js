import { writable } from 'svelte/store';

export const loadScriptQueue = writable(new Map());
export const loadedScripts = writable([]);
