import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-invalid',
    // @angular-eslint/template/button-has-type, the inline template goes through the processor
    template: `
        <button (click)="save()">Save</button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvalidComponent {
    // @angular-eslint/no-empty-lifecycle-method and use-lifecycle-interface
    public ngOnInit(): void {}

    public save(): void {
        // @typescript-eslint/no-floating-promises, needs type information
        this.load();
    }

    // no-restricted-properties, the value would be inserted without sanitizing
    public trust(sanitizer: {bypassSecurityTrustHtml(value: string): unknown}, html: string): unknown {
        return sanitizer.bypassSecurityTrustHtml(html);
    }

    private async load(): Promise<string> {
        return Promise.resolve('data');
    }
}
