(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[79222],{79222:n=>{n.exports='<form [formGroup]="form">\n    <button\n        appearance="whiteblock"\n        tuiButton\n        type="button"\n        [attr.data-mode]="length ? \'checked\' : null"\n        [tuiDropdown]="dropdown"\n        [(tuiDropdownOpen)]="open"\n        (keydown.delete)="form.reset()"\n    >\n        {{ text }}\n        <button\n            appearance="icon"\n            size="xs"\n            tabindex="-1"\n            tuiChevron\n            tuiIconButton\n            type="reset"\n            [iconStart]="length ? \'@tui.x\' : \'\'"\n            (mousedown.silent.prevent)="(0)"\n        ></button>\n    </button>\n    <ng-template #dropdown>\n        <tui-data-list-wrapper\n            formControlName="control"\n            tuiMultiSelectGroup\n            [items]="items"\n        />\n    </ng-template>\n</form>\n'}}]);