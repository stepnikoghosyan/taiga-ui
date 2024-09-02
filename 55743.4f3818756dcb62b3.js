(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[55743],{55743:e=>{e.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiContext} from '@taiga-ui/cdk';\nimport {TuiDataList} from '@taiga-ui/core';\nimport {TuiDataListWrapper} from '@taiga-ui/kit';\nimport {\n    TuiMultiSelectModule,\n    TuiTagModule,\n    TuiTextfieldControllerModule,\n} from '@taiga-ui/legacy';\nimport type {PolymorpheusContent} from '@taiga-ui/polymorpheus';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example11\",\n    imports: [\n        TuiMultiSelectModule,\n        TuiTextfieldControllerModule,\n        FormsModule,\n        TuiDataListWrapper,\n        TuiDataList,\n        NgForOf,\n        TuiTagModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly items = [\n        'Luke Skywalker',\n        'Leia Organa Solo',\n        'Darth Vader',\n        'Han Solo',\n        'Obi-Wan Kenobi',\n        'Yoda',\n    ];\n\n    protected value: string[] = this.items;\n\n    protected content: PolymorpheusContent<TuiContext<string[]>> = ({\n        $implicit: {length},\n    }) => `Selected: ${length}`;\n\n    protected remove(item: string): void {\n        this.value = this.value.filter((val) => val !== item);\n    }\n}\n"}}]);