(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97957],{97957:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    tuiAmountOptionsProvider,\n    TuiAmountPipe,\n    TuiDecimalPipe,\n} from '@taiga-ui/addon-commerce';\nimport {TuiNumberFormat} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [TuiAmountPipe, AsyncPipe, TuiDecimalPipe, TuiNumberFormat],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [tuiAmountOptionsProvider({currencyAlign: 'left'})],\n})\nexport default class Example {}\n"}}]);