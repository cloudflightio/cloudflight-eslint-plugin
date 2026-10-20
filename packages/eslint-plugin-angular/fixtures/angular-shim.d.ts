// minimal shim so the fixtures type-check without installing @angular/core
declare module '@angular/core' {
    export function Component(metadata: Record<string, unknown>): ClassDecorator;
    export enum ChangeDetectionStrategy {
        OnPush = 0,
    }
    export interface OnInit {
        ngOnInit(): void;
    }
}
