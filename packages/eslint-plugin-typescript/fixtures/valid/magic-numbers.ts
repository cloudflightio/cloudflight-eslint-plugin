export enum Status {
    Active = 5,
}

export type Size = 3 | 5 | 7;

export class Client {
    private readonly timeout = 5000;

    public get wait(): number {
        return this.timeout;
    }
}
