(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[90193],{90193:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiSheetDialogOptions} from '@taiga-ui/addon-mobile';\nimport {TuiSheetDialog} from '@taiga-ui/addon-mobile';\nimport {TuiButton} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [TuiButton, TuiSheetDialog],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected open = false;\n\n    protected readonly options: Partial<TuiSheetDialogOptions> = {\n        label: 'Alexander Inkin',\n        closeable: false,\n    };\n}\n"}}]);