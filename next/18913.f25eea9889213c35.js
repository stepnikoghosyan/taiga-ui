(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[18913],{18913:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TuiButton,\n    TuiLabelDirective,\n    TuiSurface,\n    TuiTitleDirective,\n} from '@taiga-ui/core';\nimport {\n    TuiAvatarComponent,\n    TuiBadgeDirective,\n    TuiChip,\n    TuiSkeletonDirective,\n    TuiSwitchComponent,\n} from '@taiga-ui/kit';\nimport {TuiCardLarge, TuiHeaderDirective} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent1\",\n    imports: [\n        TuiLabelDirective,\n        TuiSwitchComponent,\n        FormsModule,\n        TuiAvatarComponent,\n        TuiSkeletonDirective,\n        TuiButton,\n        TuiChip,\n        TuiBadgeDirective,\n        TuiCardLarge,\n        TuiSurface,\n        TuiHeaderDirective,\n        TuiTitleDirective,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected skeleton = false;\n}\n"}}]);