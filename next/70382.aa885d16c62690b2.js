(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[70382],{70382:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [TuiButton, TuiDropdown, TuiDataList, NgForOf],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];\n\n    protected open = false;\n\n    protected onClick(): void {\n        this.open = false;\n    }\n}\n"}}]);