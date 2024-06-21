(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[28450],{28450:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {assets} from '@demo/utils';\nimport {TUI_DEFAULT_MATCHER, TuiLet} from '@taiga-ui/cdk';\nimport {TuiInitialsPipe} from '@taiga-ui/core';\nimport {TuiAvatar, TuiDataListWrapper} from '@taiga-ui/kit';\nimport {TuiComboBoxModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\nimport type {Observable} from 'rxjs';\nimport {delay, filter, of, startWith, Subject, switchMap} from 'rxjs';\n\nclass User {\n    constructor(\n        protected readonly firstName: string,\n        protected readonly lastName: string,\n        protected readonly avatarUrl: string | null = null,\n    ) {}\n\n    protected toString(): string {\n        return `${this.firstName} ${this.lastName}`;\n    }\n}\n\nconst databaseMockData: readonly User[] = [\n    new User('Roman', 'Sedov', 'https://avatars.githubusercontent.com/u/10106368'),\n    new User('Alex', 'Inkin', assets`/images/avatar.jpg`),\n];\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [\n        AsyncPipe,\n        TuiLet,\n        ReactiveFormsModule,\n        TuiComboBoxModule,\n        TuiDataListWrapper,\n        TuiTextfieldControllerModule,\n        TuiAvatar,\n        TuiInitialsPipe,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly search$ = new Subject<string | null>();\n\n    protected readonly items$: Observable<readonly User[] | null> = this.search$.pipe(\n        filter(value => value !== null),\n        switchMap(search =>\n            this.serverRequest(search).pipe(startWith<readonly User[] | null>(null)),\n        ),\n        startWith(databaseMockData),\n    );\n\n    protected readonly testValue = new FormControl(databaseMockData[1]);\n\n    protected onSearchChange(searchQuery: string | null): void {\n        this.search$.next(searchQuery);\n    }\n\n    protected extractValueFromEvent(event: Event): string | null {\n        return (event.target as HTMLInputElement)?.value || null;\n    }\n\n    /**\n     * Service request emulation\n     */\n    private serverRequest(searchQuery: string | null): Observable<readonly User[]> {\n        const result = databaseMockData.filter(user =>\n            TUI_DEFAULT_MATCHER(user, searchQuery || ''),\n        );\n\n        return of(result).pipe(delay(Math.random() * 1000 + 500));\n    }\n}\n"}}]);