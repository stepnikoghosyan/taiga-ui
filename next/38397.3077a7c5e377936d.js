(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38397],{38397:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_IS_MOBILE} from '@taiga-ui/cdk';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly isMobile = inject(TUI_IS_MOBILE);\n}\n"}}]);