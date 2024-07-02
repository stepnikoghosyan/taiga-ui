(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[26236],{26236:n=>{n.exports='<tui-filter\n    size="s"\n    [formControl]="control"\n    [items]="items"\n></tui-filter>\n\n<ng-container *tuiLet="!!(isMobile$ | async) as isMobile">\n    <tui-action-bar\n        *tuiActionBar="open"\n        [expanded]="isMobile && expanded"\n    >\n        <tui-data-list role="menu">\n            <tui-opt-group>\n                <button\n                    role="menuitem"\n                    tuiOption\n                >\n                    <span>\n                        <tui-icon\n                            icon="tuiIconSendLarge"\n                            class="tui-space_right-3"\n                        ></tui-icon>\n                        Send\n                    </span>\n                </button>\n                <button\n                    role="menuitem"\n                    tuiOption\n                >\n                    <span>\n                        <tui-icon\n                            icon="tuiIconTrashLarge"\n                            class="tui-space_right-3"\n                        ></tui-icon>\n                        Delete\n                    </span>\n                </button>\n            </tui-opt-group>\n            <tui-opt-group>\n                <button\n                    role="menuitem"\n                    tuiOption\n                    [disabled]="selected === items.length"\n                    (click)="control.setValue(items)"\n                >\n                    <span>\n                        <tui-icon\n                            icon="tuiIconGridLarge"\n                            class="tui-space_right-3"\n                        ></tui-icon>\n                        Select all\n                    </span>\n                </button>\n                <button\n                    role="menuitem"\n                    tuiOption\n                    (click)="close()"\n                >\n                    <span>\n                        <tui-icon\n                            icon="tuiIconCloseLarge"\n                            class="tui-space_right-3"\n                        ></tui-icon>\n                        Select none and close\n                    </span>\n                </button>\n            </tui-opt-group>\n        </tui-data-list>\n\n        <div>\n            Selected: {{ selected }} of {{ items.length }}\n\n            <button\n                *ngIf="!isMobile"\n                appearance="icon"\n                tuiLink\n                tuiMode="onDark"\n                class="tui-space_left-3"\n                [pseudo]="true"\n                (click)="toggleSelect()"\n            >\n                {{ selected < items.length ? \'Select all\' : \'Select none\' }}\n            </button>\n        </div>\n\n        <button\n            appearance="glass"\n            iconLeft="tuiIconSend"\n            size="m"\n            tuiButton\n            [disabled]="expanded"\n        >\n            {{ isMobile ? \'\' : \'Send\' }}\n        </button>\n        <button\n            *ngIf="!isMobile"\n            appearance="glass"\n            iconLeft="tuiIconTrashLarge"\n            size="m"\n            tuiButton\n            [disabled]="expanded"\n            (click)="close()"\n        >\n            Delete\n        </button>\n\n        <button\n            *ngIf="isMobile"\n            appearance="glass"\n            iconLeft="tuiIconMoreHorizontalLarge"\n            size="m"\n            tuiIconButton\n            (click)="expanded = !expanded"\n        >\n            More\n        </button>\n\n        <button\n            *ngIf="!isMobile"\n            appearance="icon"\n            iconLeft="tuiIconClose"\n            size="m"\n            tuiIconButton\n            (click)="close()"\n        >\n            Close\n        </button>\n    </tui-action-bar>\n</ng-container>\n'}}]);