(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[99205],{99205:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHint, TuiTextfield} from '@taiga-ui/core';\nimport {TuiInputModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [\n        ReactiveFormsModule,\n        TuiInputModule,\n        TuiTextfield,\n        TuiTextfieldControllerModule,\n        TuiHint,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl('mail@mail.ru'),\n    });\n}\n"}}]);