(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[96849],{96849:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiGroupDirective} from '@taiga-ui/core';\nimport {TuiBlock, TuiRadio} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiGroupDirective, ReactiveFormsModule, TuiBlock, TuiRadio],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected testForm = new FormGroup({\n        testValue: new FormControl('orange'),\n    });\n}\n"}}]);