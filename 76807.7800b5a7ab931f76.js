(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[76807],{76807:e=>{e.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIcon, TuiIconPipe} from '@taiga-ui/core';\nimport {TuiSwitch, tuiSwitchOptionsProvider} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [TuiIcon, TuiIconPipe, TuiSwitch],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [tuiSwitchOptionsProvider({icon: '@tui.material.filled.check'})],\n})\nexport default class Example {}\n"}}]);