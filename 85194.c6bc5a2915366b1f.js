(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[85194],{85194:e=>{e.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiItem} from '@taiga-ui/cdk';\nimport type {TuiFileLike} from '@taiga-ui/kit';\nimport {TuiFiles} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [TuiFiles, NgForOf, TuiItem],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected height = 3;\n\n    protected readonly files: readonly TuiFileLike[] = [\n        {\n            name: 'Loaded.txt',\n        },\n        {\n            name: 'one_more_file.txt',\n        },\n        {\n            name: 'one_more_file.txt',\n        },\n        {\n            name: 'one_more_file.txt',\n        },\n        {\n            name: 'one_more_file.txt',\n        },\n        {\n            name: 'one_more_file.txt',\n        },\n        {\n            name: 'last_file.txt',\n        },\n    ];\n\n    protected readonly rejectedFiles: readonly TuiFileLike[] = [\n        {\n            name: 'File with an error.txt',\n        },\n    ];\n}\n"}}]);