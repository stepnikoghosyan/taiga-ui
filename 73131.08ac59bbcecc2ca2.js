(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[73131],{73131:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiButton} from '@taiga-ui/core';\nimport {TuiBadgedContent, TuiBadgeNotification, TuiChip, TuiFade} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [\n        TuiChip,\n        TuiAmountPipe,\n        AsyncPipe,\n        TuiBadgedContent,\n        TuiBadgeNotification,\n        TuiButton,\n        TuiFade,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected selected = false;\n}\n"}}]);