(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[76322],{76322:t=>{t.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_FALSE_HANDLER} from '@taiga-ui/cdk';\nimport {TuiButton} from '@taiga-ui/core';\nimport {TuiButtonLoading} from '@taiga-ui/kit';\nimport {map, startWith, Subject, switchMap, timer} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [TuiButton, AsyncPipe, TuiButtonLoading],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly trigger$ = new Subject<void>();\n    protected readonly loading$ = this.trigger$.pipe(\n        switchMap(() => timer(2000).pipe(map(TUI_FALSE_HANDLER), startWith('Loading'))),\n    );\n}\n"}}]);