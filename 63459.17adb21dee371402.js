(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[63459],{63459:e=>{e.exports="import {NgForOf, UpperCasePipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAvatar} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiAvatar, NgForOf, UpperCasePipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly sizes = ['xxl', 'xl', 'l', 'm', 's', 'xs'] as const;\n    protected readonly names = ['Jason Statham', 'Silvester Stallone', 'Jackie Chan'];\n}\n"}}]);