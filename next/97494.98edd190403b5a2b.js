(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[97494],{97494:n=>{n.exports="import {AsyncPipe, NgIf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport type {TuiDurationOptions} from '@taiga-ui/core';\nimport {TuiButton, tuiWidthCollapse} from '@taiga-ui/core';\n\nimport {AnimationState} from '../../state';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [TuiButton, NgIf, AsyncPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    animations: [tuiWidthCollapse],\n})\nexport default class Example {\n    protected speed = inject(AnimationState);\n    protected isOpen = true;\n\n    @tuiPure\n    protected getAnimation(duration: number): TuiDurationOptions {\n        return {value: '', params: {duration}};\n    }\n}\n"}}]);