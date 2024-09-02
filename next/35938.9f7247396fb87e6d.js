(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[35938],{35938:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {\n    TuiDataListWrapper,\n    TuiFilterByInputPipe,\n    TuiStringifyContentPipe,\n} from '@taiga-ui/kit';\nimport {TuiComboBoxModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [\n        FormsModule,\n        TuiComboBoxModule,\n        TuiDataListWrapper,\n        TuiFilterByInputPipe,\n        TuiStringifyContentPipe,\n    ],\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport default class Example {\n    protected value = null;\n\n    protected readonly items = [\n        {name: 'John', surname: 'Cleese'},\n        {name: 'Eric', surname: 'Idle'},\n        {name: 'Graham', surname: 'Chapman'},\n        {name: 'Michael', surname: 'Palin'},\n        {name: 'Terry', surname: 'Gilliam'},\n        {name: 'Terry', surname: 'Jones'},\n    ];\n\n    protected readonly stringify = (item: {name: string; surname: string}): string =>\n        `${item.name} ${item.surname}`;\n}\n"}}]);