(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[34960],{34960:n=>{n.exports='<div\n    *ngFor="let platform of platforms; let first = first"\n    class="wrapper"\n    [class.wrapper_web]="platform === \'web\'"\n    [tuiPlatform]="platform"\n>\n    <input\n        tuiSwitch\n        type="checkbox"\n        [ngModel]="true"\n        [showIcons]="first"\n        [size]="getSize(first)"\n    />\n\n    <input\n        tuiSwitch\n        type="checkbox"\n        [disabled]="true"\n        [ngModel]="true"\n        [showIcons]="first"\n        [size]="getSize(first)"\n    />\n\n    <input\n        tuiSwitch\n        type="checkbox"\n        [showIcons]="first"\n        [size]="getSize(first)"\n    />\n\n    <input\n        tuiSwitch\n        type="checkbox"\n        [disabled]="true"\n        [ngModel]="false"\n        [showIcons]="first"\n        [size]="getSize(first)"\n    />\n\n    <input\n        tuiSwitch\n        type="checkbox"\n        [formControl]="invalidTrue"\n        [showIcons]="first"\n        [size]="getSize(first)"\n    />\n\n    <input\n        tuiSwitch\n        type="checkbox"\n        [formControl]="invalidFalse"\n        [showIcons]="first"\n        [size]="getSize(first)"\n    />\n</div>\n'}}]);