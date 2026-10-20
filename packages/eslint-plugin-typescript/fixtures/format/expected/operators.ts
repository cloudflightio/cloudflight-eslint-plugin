export enum Level {
    Low = 1,
    High = 2,
}
export const label = Level.Low === 1
    ? 'low'
    : 'high';
export type Wide<T> = T extends string
    ? string
    : number;
