(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[34227],{34227:n=>{n.exports="import {NgForOf, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {\n    TuiInputCardGroupedComponent,\n    TuiThumbnailCardComponent,\n} from '@taiga-ui/addon-commerce';\nimport {TuiButton, TuiDataList, TuiIcon, TuiTitle} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent2\",\n    imports: [\n        ReactiveFormsModule,\n        TuiInputCardGroupedComponent,\n        TuiDataList,\n        TuiIcon,\n        NgForOf,\n        TuiThumbnailCardComponent,\n        TuiTitle,\n        NgIf,\n        TuiButton,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n})\nexport default class Example {\n    protected readonly items = [\n        {card: '4321***1234', expire: '12/21', name: 'Salary', bank: 'Tinkoff'},\n        {\n            card: '8765***5678',\n            expire: '03/42',\n            cvc: '***',\n            name: 'Tips',\n            bank: 'Bank of America',\n        },\n        {card: '4200***9000', name: 'Dogecoins', bank: 'Crypto'},\n    ];\n\n    protected readonly card = new FormGroup({meta: new FormControl(this.items[0])});\n    protected open = false;\n}\n"}}]);