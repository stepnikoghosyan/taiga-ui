(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[91849],{91849:n=>{n.exports='<tui-breadcrumbs [style.color]="\'red\'">\n    <button\n        *tuiItem\n        appearance="secondary"\n        iconStart="@tui.ellipsis"\n        size="xs"\n        tuiDropdownOpen\n        tuiIconButton\n        [tuiDropdown]="content"\n    >\n        More\n    </button>\n    <ng-template #content>\n        <tui-data-list>\n            <a\n                *tuiRepeatTimes="let index of items.length - max"\n                tuiOption\n                [href]="items[index]?.link"\n            >\n                {{ items[index]?.caption }}\n            </a>\n        </tui-data-list>\n    </ng-template>\n    <ng-container *tuiRepeatTimes="let index of max">\n        <a\n            *tuiItem\n            appearance="link"\n            tuiLink\n            [href]="items[index + items.length - max]?.link"\n        >\n            {{ items[index + items.length - max]?.caption }}\n        </a>\n    </ng-container>\n</tui-breadcrumbs>\n<p>\n    <tui-input-number\n        [max]="4"\n        [min]="2"\n        [step]="1"\n        [(ngModel)]="max"\n    >\n        Max tabs\n    </tui-input-number>\n</p>\n'}}]);