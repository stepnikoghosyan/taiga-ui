import {inject, Injectable} from '@angular/core';
import {AbstractTuiDialogService} from '@taiga-ui/cdk';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {TuiDialogComponent} from './dialog.component';
import {TuiDialogOptions} from './dialog.interfaces';
import {TUI_DIALOG_OPTIONS} from './dialog.tokens';

const DIALOG = new PolymorpheusComponent(TuiDialogComponent);

@Injectable({
    providedIn: `root`,
})
export class TuiDialogService extends AbstractTuiDialogService<TuiDialogOptions<any>> {
    protected readonly component = DIALOG;
    protected readonly defaultOptions: TuiDialogOptions<any> = {
        ...inject(TUI_DIALOG_OPTIONS),
        data: undefined,
    };
}
