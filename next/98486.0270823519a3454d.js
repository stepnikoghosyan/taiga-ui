(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[98486],{98486:e=>{e.exports="import {Component, HostListener} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {ALWAYS_FALSE_HANDLER, tuiClamp} from '@taiga-ui/cdk';\nimport {BehaviorSubject, distinctUntilChanged, map, of, switchMap, timer} from 'rxjs';\n\n@Component({\n    selector: 'tui-slider-example-6',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport class TuiSliderExample6 {\n    min = 0.5;\n    max = 2;\n    value = 1;\n\n    readonly active$ = new BehaviorSubject(false);\n    readonly showHint$ = this.active$.pipe(\n        distinctUntilChanged(),\n        switchMap(active =>\n            active ? of(true) : timer(1000).pipe(map(ALWAYS_FALSE_HANDLER)),\n        ),\n    );\n\n    @HostListener('pointerdown', ['true'])\n    @HostListener('document:pointerup', ['false'])\n    onKeydown(show: boolean): void {\n        this.active$.next(show);\n    }\n\n    change(step: number): void {\n        this.value = tuiClamp(this.value + step, this.min, this.max);\n    }\n}\n"}}]);