(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[28502],{28502:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiNumberFormatProvider} from '@taiga-ui/core';\nimport {TuiInputNumberModule, tuiInputNumberOptionsProvider} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example6\",\n    imports: [TuiInputNumberModule, FormsModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        tuiNumberFormatProvider({\n            precision: 0,\n        }),\n        tuiInputNumberOptionsProvider({\n            step: 1,\n        }),\n    ],\n})\nexport default class Example {\n    protected value = 237;\n}\n"}}]);