(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[49610],{49610:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport type {OnInit} from '@angular/core';\nimport {Component} from '@angular/core';\nimport {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiPlatform} from '@taiga-ui/cdk';\nimport type {TuiSizeS} from '@taiga-ui/core';\nimport {TuiRadio} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [NgForOf, FormsModule, ReactiveFormsModule, TuiPlatform, TuiRadio],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example implements OnInit {\n    protected readonly platforms: ReadonlyArray<'android' | 'ios' | 'web'> = [\n        'web',\n        'web',\n        'android',\n        'ios',\n    ];\n\n    protected readonly invalidTrue = new FormControl(true, () => ({invalid: true}));\n    protected readonly invalidFalse = new FormControl(false, () => ({invalid: true}));\n\n    public ngOnInit(): void {\n        this.invalidTrue.markAsTouched();\n        this.invalidFalse.markAsTouched();\n    }\n\n    protected getSize(first: boolean): TuiSizeS {\n        return first ? 'm' : 's';\n    }\n}\n"}}]);