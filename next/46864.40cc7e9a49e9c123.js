(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[46864],{46864:n=>{n.exports='<button\n    tuiButton\n    class="tui-space_bottom-4"\n    (click)="open = !open"\n>\n    Toggle dropdown\n</button>\n<form [formGroup]="card">\n    <tui-input-card-group\n        formControlName="meta"\n        [(open)]="open"\n    >\n        <tui-data-list\n            *tuiTextfieldDropdown\n            size="l"\n        >\n            <button\n                tuiOption\n                [value]="null"\n            >\n                <tui-icon\n                    icon="@tui.plus"\n                    class="new"\n                />\n                <span class="label">New card</span>\n            </button>\n            <button\n                *ngFor="let item of items; let index = index"\n                tuiOption\n                [value]="item"\n            >\n                <tui-thumbnail-card\n                    size="s"\n                    class="card"\n                >\n                    {{ item.card.slice(-4) }}\n                </tui-thumbnail-card>\n                <span\n                    tuiTitle\n                    class="label"\n                >\n                    {{ item.bank }}\n                    <span tuiSubtitle>{{ item.name }}</span>\n                </span>\n                <span>{{ item.card.slice(-5) }}</span>\n            </button>\n        </tui-data-list>\n    </tui-input-card-group>\n</form>\n'}}]);