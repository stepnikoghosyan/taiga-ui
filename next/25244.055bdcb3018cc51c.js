(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[25244],{25244:n=>{n.exports="import {AsyncPipe, NgForOf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiAutoColorPipe,\n    TuiFallbackSrcPipe,\n    TuiSurface,\n    TuiTitleDirective,\n} from '@taiga-ui/core';\nimport {TuiAvatarComponent, TuiAvatarStackComponent} from '@taiga-ui/kit';\nimport {TuiCardMedium} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [\n        TuiAvatarStackComponent,\n        TuiAvatarComponent,\n        TuiFallbackSrcPipe,\n        AsyncPipe,\n        TuiAutoColorPipe,\n        NgForOf,\n        TuiSurface,\n        TuiCardMedium,\n        TuiTitleDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly urls = [\n        'https://avatars.githubusercontent.com/u/11832552',\n        'https://avatars.githubusercontent.com/u/10106368',\n        'https://avatars.githubusercontent.com/u/46284632',\n    ];\n}\n"}}]);