(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[90872],{90872:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiBarSet} from '@taiga-ui/addon-charts';\nimport {TuiFormatNumberPipe} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example5\",\n    imports: [TuiBarSet, TuiFormatNumberPipe, AsyncPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly value = [451, 302, 203, 124, 65];\n    protected readonly sum = this.value.reduce((a, b) => a + b, 0);\n}\n"}}]);