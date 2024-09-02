(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[70397],{70397:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {takeUntilDestroyed} from '@angular/core/rxjs-interop';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiButton} from '@taiga-ui/core';\nimport {TuiSheetService} from '@taiga-ui/legacy';\nimport {Subject, switchMap} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [TuiButton],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly stream$ = new Subject<void>();\n\n    constructor() {\n        const service = inject(TuiSheetService);\n\n        this.stream$\n            .pipe(\n                switchMap(() => service.open('Simple sheet', {overlay: true})),\n                takeUntilDestroyed(),\n            )\n            .subscribe();\n    }\n}\n"}}]);