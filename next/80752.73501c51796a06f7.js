(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[80752],{80752:n=>{n.exports="import {AsyncPipe, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiSwipeActions} from '@taiga-ui/addon-mobile';\nimport {TuiButton, TuiSurface, TuiTitle} from '@taiga-ui/core';\nimport {TuiAvatarComponent, TuiCheckboxComponent} from '@taiga-ui/kit';\nimport {TuiCardLarge, TuiCellDirective} from '@taiga-ui/layout';\n\n@Component({\n    standalone: true,\n    exportAs: \"ExampleComponent4\",\n    imports: [\n        TuiSwipeActions,\n        TuiSurface,\n        TuiCellDirective,\n        TuiCardLarge,\n        TuiAvatarComponent,\n        TuiTitle,\n        TuiAmountPipe,\n        AsyncPipe,\n        NgIf,\n        TuiButton,\n        TuiCheckboxComponent,\n        FormsModule,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected shareButton = false;\n    protected editButton = true;\n}\n"}}]);