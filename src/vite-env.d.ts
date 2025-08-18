/// <reference types="vite/client" />

// Prevent types from webcoreui/svelte causing build errors
declare module 'svelte' {
    export type Snippet = any
    export class SvelteComponent<T = any> {
        [key: string]: any
    }
}

declare module 'svelte/elements' {
    export type MouseEventHandler<T = any> = (...args: any[]) => any
}
