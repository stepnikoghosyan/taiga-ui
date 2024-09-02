(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[23720],{23720:n=>{n.exports="import {AsyncPipe, NgForOf, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport type {AbstractControl, ValidatorFn} from '@angular/forms';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiBooleanHandler} from '@taiga-ui/cdk';\nimport {\n    EMPTY_ARRAY,\n    TUI_DEFAULT_MATCHER,\n    tuiPure,\n    TuiValidationError,\n} from '@taiga-ui/cdk';\nimport {TuiDataList, TuiError} from '@taiga-ui/core';\nimport {TuiFieldErrorPipe} from '@taiga-ui/kit';\nimport {TuiInputTagModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\nfunction createControlValidator(handler: TuiBooleanHandler<string>): ValidatorFn {\n    return ({value}: AbstractControl) => {\n        const invalidTags = value ? value.filter(handler) : EMPTY_ARRAY;\n\n        return invalidTags.length > 0\n            ? {\n                  tags: new TuiValidationError('Some tags are invalid'),\n              }\n            : null;\n    };\n}\n\nconst ITEMS = ['The Midnight', 'FM-84', 'Timecop1983', 'GUNSHIP'];\n\nfunction tagValidator(tag: string): boolean {\n    return !/\\d/.test(tag);\n}\n\n@Component({\n    standalone: true,\n    exportAs: \"Example4\",\n    imports: [\n        TuiInputTagModule,\n        ReactiveFormsModule,\n        TuiTextfieldControllerModule,\n        TuiDataList,\n        NgIf,\n        NgForOf,\n        TuiError,\n        TuiFieldErrorPipe,\n        AsyncPipe,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected search = '';\n\n    protected readonly tagValidator = tagValidator;\n\n    protected readonly control = new FormControl<string[]>(\n        [],\n        createControlValidator(tagValidator),\n    );\n\n    protected get filtered(): readonly string[] {\n        return this.filterBy(this.search, this.control.value ?? []);\n    }\n\n    @tuiPure\n    private filterBy(search: string, value: readonly string[]): readonly string[] {\n        return ITEMS.filter(\n            (item) => TUI_DEFAULT_MATCHER(item, search) && !value.includes(item),\n        );\n    }\n}\n"}}]);