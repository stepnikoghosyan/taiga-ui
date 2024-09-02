(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[17583],{17583:e=>{e.exports="import {NgForOf, NgIf} from '@angular/common';\nimport {Component, ElementRef, Input, ViewChild} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {\n    EMPTY_ARRAY,\n    TUI_DEFAULT_MATCHER,\n    TuiAutoFocus,\n    TuiFilterPipe,\n    TuiLet,\n} from '@taiga-ui/cdk';\nimport {\n    TuiDataList,\n    tuiIsEditingKey,\n    TuiTextfield,\n    TuiTextfieldDirective,\n} from '@taiga-ui/core';\nimport {TuiMultiSelectModule} from '@taiga-ui/legacy';\n\ninterface Items<T> {\n    readonly items: readonly T[];\n    readonly name: string;\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"Examplecustom-list\",\n    selector: 'custom-list',\n    imports: [\n        NgIf,\n        NgForOf,\n        FormsModule,\n        TuiDataList,\n        TuiLet,\n        TuiFilterPipe,\n        TuiMultiSelectModule,\n        TuiTextfield,\n        TuiAutoFocus,\n    ],\n    templateUrl: './index.html',\n    changeDetection,\n})\nexport class CustomListComponent<T> {\n    @ViewChild(TuiTextfieldDirective, {read: ElementRef})\n    private readonly input?: ElementRef<HTMLInputElement>;\n\n    protected value = '';\n    protected readonly all = EMPTY_ARRAY;\n    protected readonly filter: (item: T, value: string) => boolean = TUI_DEFAULT_MATCHER;\n\n    @Input()\n    public items: ReadonlyArray<Items<T>> = [];\n\n    protected onKeyDown(key: string): void {\n        if (tuiIsEditingKey(key)) {\n            this.input?.nativeElement.focus({preventScroll: true});\n        }\n    }\n}\n"}}]);