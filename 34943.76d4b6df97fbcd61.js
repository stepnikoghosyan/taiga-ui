(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[34943],{34943:n=>{n.exports='<tui-primitive-textfield\n    [disabled]="disabled"\n    [focusable]="focusable"\n    [invalid]="computedInvalid"\n    [readOnly]="readOnly"\n    [tuiTextfieldIcon]="iconContent"\n    [(value)]="value"\n    (focusedChange)="onFocused($event)"\n>\n    <ng-content />\n    <input\n        tuiTextfieldLegacy\n        [type]="inputType"\n    />\n</tui-primitive-textfield>\n\n<ng-template #iconContent>\n    <button\n        appearance="icon"\n        tuiIconButton\n        class="icon"\n        [iconStart]="icon"\n        [tuiHint]="hintContent"\n        (click)="togglePasswordVisibility()"\n    ></button>\n</ng-template>\n\n<ng-template #hintContent>{{ hint }}</ng-template>\n'}}]);