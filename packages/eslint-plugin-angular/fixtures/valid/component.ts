/* eslint-disable import-x/no-unresolved -- @angular/core is only shimmed in this fixture */
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-valid',
    template: `
        <button type="button" (click)="save()">Save</button>
        <div [style.width.%]="progress"></div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ValidComponent {
    public readonly progress = 1;

    public save(): void {
        // intentionally empty
    }
}
