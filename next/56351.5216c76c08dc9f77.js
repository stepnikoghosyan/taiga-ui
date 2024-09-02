(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[56351],{56351:t=>{t.exports="import {AsyncPipe, NgIf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiPure} from '@taiga-ui/cdk';\nimport type {TuiDurationOptions} from '@taiga-ui/core';\nimport {\n    TuiButton,\n    tuiSlideInBottom,\n    tuiSlideInLeft,\n    tuiSlideInRight,\n    tuiSlideInTop,\n} from '@taiga-ui/core';\n\nimport {AnimationState} from '../../state';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example5\",\n    imports: [NgIf, TuiButton, AsyncPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    animations: [tuiSlideInLeft, tuiSlideInTop, tuiSlideInBottom, tuiSlideInRight],\n})\nexport default class Example {\n    protected speed = inject(AnimationState);\n\n    protected isLeft = false;\n    protected isTop = false;\n    protected isRight = false;\n    protected isBottom = false;\n\n    @tuiPure\n    protected getAnimation(duration: number): TuiDurationOptions {\n        return {value: '', params: {duration}};\n    }\n\n    protected reset(): void {\n        this.isLeft = false;\n        this.isTop = false;\n        this.isRight = false;\n        this.isBottom = false;\n    }\n}\n"}}]);