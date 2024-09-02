(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[90268],{90268:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiTime} from '@taiga-ui/cdk';\nimport {TuiSwitch} from '@taiga-ui/kit';\nimport {\n    TuiInputTimeModule,\n    tuiInputTimeOptionsProvider,\n    TuiTextfieldControllerModule,\n} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example5\",\n    imports: [\n        ReactiveFormsModule,\n        TuiInputTimeModule,\n        TuiTextfieldControllerModule,\n        TuiSwitch,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiInputTimeOptionsProvider({\n            mode: 'HH:MM',\n            maxValues: {HH: 11, MM: 59, SS: 59, MS: 999},\n        }),\n    ],\n})\nexport default class Example {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl<TuiTime | null>(null),\n        isPm: new FormControl(false),\n    });\n\n    protected get postfix(): string {\n        return this.testForm.value?.isPm ? 'PM' : 'AM';\n    }\n}\n"}}]);