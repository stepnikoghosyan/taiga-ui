(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[74609],{74609:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiMonthRange} from '@taiga-ui/cdk';\nimport {TuiInputMonthRangeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [\n        TuiInputMonthRangeModule,\n        ReactiveFormsModule,\n        TuiTextfieldControllerModule,\n    ],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly control = new FormControl<TuiMonthRange | null>(null);\n}\n"}}]);