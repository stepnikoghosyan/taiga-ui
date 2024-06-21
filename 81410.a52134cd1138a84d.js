(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[81410],{81410:n=>{n.exports="import {Component} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDay} from '@taiga-ui/cdk';\nimport {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core';\nimport type {TuiLanguage} from '@taiga-ui/i18n';\nimport {TUI_LANGUAGE} from '@taiga-ui/i18n';\nimport {TuiInputDateModule} from '@taiga-ui/legacy';\nimport type {BehaviorSubject, Observable} from 'rxjs';\nimport {map, switchMap} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example7\",\n    imports: [TuiInputDateModule, ReactiveFormsModule],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_DATE_FORMAT,\n            deps: [TUI_LANGUAGE],\n            useFactory: (lang: BehaviorSubject<Observable<TuiLanguage>>) =>\n                lang.pipe(\n                    switchMap(lang => lang),\n                    map(({name}) => ({\n                        ...TUI_DEFAULT_DATE_FORMAT,\n                        mode: name === 'english' ? 'MDY' : 'DMY',\n                        separator: name === 'english' ? '/' : '.',\n                    })),\n                ),\n        },\n    ],\n})\nexport default class Example {\n    protected readonly testForm = new FormGroup({\n        testValue: new FormControl(new TuiDay(2017, 0, 15)),\n    });\n}\n"}}]);