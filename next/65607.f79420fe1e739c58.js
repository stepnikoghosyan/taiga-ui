(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[65607],{65607:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAmountPipe} from '@taiga-ui/addon-commerce';\nimport {TuiButton, TuiTitle} from '@taiga-ui/core';\nimport {TuiHeader} from '@taiga-ui/layout';\nimport type {TuiSheetOptions} from '@taiga-ui/legacy';\nimport {TuiSheetModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiButton, TuiSheetModule, TuiAmountPipe, AsyncPipe, TuiHeader, TuiTitle],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected open = false;\n\n    protected readonly options: Partial<TuiSheetOptions> = {\n        stops: ['calc(5rem + 74vw)', 'calc(9rem + 74vw)'],\n        image: 'https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_0323-1024x756.jpeg',\n    };\n\n    protected toggle(): void {\n        this.open = !this.open;\n    }\n}\n"}}]);