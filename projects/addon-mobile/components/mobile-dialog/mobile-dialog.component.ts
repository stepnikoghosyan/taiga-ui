import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiRipple} from '@taiga-ui/addon-mobile/directives';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {TuiButton} from '@taiga-ui/core/components/button';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';

import type {TuiMobileDialogOptions} from './mobile-dialog.options';

@Component({
    standalone: true,
    selector: 'tui-mobile-dialog',
    imports: [
        NgForOf,
        NgIf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiButton,
        TuiRipple,
    ],
    templateUrl: './mobile-dialog.template.html',
    styleUrls: ['./mobile-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class._ios]': 'isIOS',
    },
})
export class TuiMobileDialog<I> {
    protected readonly isIOS = inject(TUI_IS_IOS);
    protected readonly context =
        inject<TuiPopover<TuiMobileDialogOptions<I>, number>>(POLYMORPHEUS_CONTEXT);

    protected onAction(index: number): void {
        this.context.completeWith(index);
    }
}
