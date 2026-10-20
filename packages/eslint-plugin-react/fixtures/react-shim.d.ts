// minimal shim so the fixtures type-check without installing react
declare module 'react' {
    export function useState<T>(initial: T): [T, (value: T) => void];
}

declare module 'react/jsx-runtime' {
    export function jsx(type: unknown, props: unknown, key?: unknown): unknown;
    export function jsxs(type: unknown, props: unknown, key?: unknown): unknown;
    export const Fragment: unknown;
}

declare namespace JSX {
    interface IntrinsicElements {
        [element: string]: Record<string, unknown>;
    }
    type Element = unknown;
}
