(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[43801],{43801:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TUI_IS_MOBILE} from '@taiga-ui/cdk';\nimport {TuiTitle} from '@taiga-ui/core';\nimport {TuiAvatarComponent, TuiBadgeDirective, TuiCommentDirective} from '@taiga-ui/kit';\nimport {TuiBlockDetailsDirective} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        AsyncPipe,\n        TuiAvatarComponent,\n        TuiCommentDirective,\n        TuiAmountPipe,\n        TuiBlockDetailsDirective,\n        TuiBadgeDirective,\n        TuiTitle,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly isMobile = inject(TUI_IS_MOBILE);\n}\n"}}]);