(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[50139],{50139:o=>{o.exports="import {NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAutoFocus} from '@taiga-ui/cdk';\nimport {TuiButton} from '@taiga-ui/core';\nimport {TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [TuiButton, TuiInputModule, NgIf, TuiAutoFocus, FormsModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected showInput = false;\n    protected model = 'Focused after its appearance';\n\n    protected onClick(): void {\n        this.showInput = true;\n    }\n}\n"}}]);