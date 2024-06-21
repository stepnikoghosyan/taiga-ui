(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[63411],{63411:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiBooleanHandler} from '@taiga-ui/cdk';\nimport {TUI_DEFAULT_MATCHER, tuiPure} from '@taiga-ui/cdk';\nimport {TuiDataList} from '@taiga-ui/core';\nimport {TuiDataListWrapper} from '@taiga-ui/kit';\nimport {TuiMultiSelectModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\nconst ITEMS: readonly string[] = [\n    'Luke Skywalker',\n    'Leia Organa Solo',\n    'Darth Vader',\n    'Han Solo',\n    'Obi-Wan Kenobi',\n    'Yoda',\n];\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [\n        TuiMultiSelectModule,\n        ReactiveFormsModule,\n        TuiTextfieldControllerModule,\n        TuiDataListWrapper,\n        TuiDataList,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected search: string | null = '';\n\n    protected readonly control = new FormControl([ITEMS[0]]);\n\n    @tuiPure\n    protected filter(search: string | null): readonly string[] {\n        return ITEMS.filter(item => TUI_DEFAULT_MATCHER(item, search || ''));\n    }\n\n    protected tagValidator: TuiBooleanHandler<string> = tag => !tag.startsWith('Han');\n}\n"}}]);