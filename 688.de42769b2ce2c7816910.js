(window.webpackJsonp=window.webpackJsonp||[]).push([[688],{VxUP:function(n,e,t){"use strict";t.r(e),e.default='<form\n    class="b-form"\n    [formGroup]="testForm"\n>\n    <label\n        tuiLabel\n        label="Secret number"\n    >\n        <tui-input\n            formControlName="testValue1"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input>\n\n        <ng-template #errorContent>\n            Secret number must contain\n            <strong>10 or 12 digits</strong>\n            .\n        </ng-template>\n\n        <tui-field-error\n            formControlName="testValue1"\n            [order]="[\'required\', \'inn\']"\n        ></tui-field-error>\n    </label>\n\n    <label\n        tuiLabel\n        i18n-label\n        label="Enter company name"\n        class="tui-space_top-4"\n    >\n        <tui-input\n            formControlName="testValue2"\n            tuiTextfieldSize="m"\n            [tuiTextfieldLabelOutside]="true"\n        ></tui-input>\n\n        <ng-template #bigErrorContent>\n            This company is already registered\n            <button\n                tuiButton\n                type="button"\n                class="tui-space_top-2"\n            >\n                It is mine\n            </button>\n        </ng-template>\n\n        <tui-field-error formControlName="testValue2"></tui-field-error>\n    </label>\n</form>\n'}}]);