(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[26604],{26604:t=>{t.exports="import {AsyncPipe} from '@angular/common';\nimport {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {TuiButton, TuiDropdown} from '@taiga-ui/core';\nimport {TuiPaletteModule} from '@taiga-ui/legacy';\nimport {BehaviorSubject} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiButton, TuiPaletteModule, TuiDropdown, AsyncPipe],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport default class Example {\n    protected colors = new Map([\n        ['blue', 'var(--tui-status-info)'],\n        ['green', 'var(--tui-status-positive)'],\n        ['red', 'var(--tui-status-negative)'],\n    ]);\n\n    protected color$ = new BehaviorSubject('var(--tui-status-positive)');\n\n    protected updateColor(color: string): void {\n        this.color$.next(color);\n    }\n}\n"}}]);