(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44274],{44274:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMapperPipe} from '@taiga-ui/cdk';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [TuiMapperPipe],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly mapper = (amount: number, currencySymbol: string): string =>\n        `Total: ${amount} ${currencySymbol}`;\n}\n"}}]);