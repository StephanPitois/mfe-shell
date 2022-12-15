// This could be moved to a shared library or copy/pasted into projects that need it

import { onMount, onDestroy } from 'svelte';

/**
 * Handles onMount/addEventListener and onDestroy/removeEventListener for a Svelte Component
 * @param registree the name of the component registering the event - for info only
 * @param registrations a collection of event types and listerner functions to add/remove as listeners
 */
function registerEventListeners(registree: string, registrations: EventRegistration[]) {
    onMount(async () => {
        registrations.forEach(registration => {
            if (typeof window !== 'undefined') {
                console.log(`'${registree}' added listener for event type '${registration.eventType}'`);
                window.addEventListener(registration.eventType, registration.listener);
            }
        })
    });
    onDestroy(async () => {
        registrations.forEach(registration => {
            if (typeof window !== 'undefined') {
                console.log(`'${registree}' removed listener for event type '${registration.eventType}'`);
                window.removeEventListener(registration.eventType, registration.listener);
            }
        })
    });
}

export { registerEventListeners }
