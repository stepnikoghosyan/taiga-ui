(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[89941],{89941:e=>{e.exports="import {Component, inject} from '@angular/core';\nimport {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiValueChanges} from '@taiga-ui/cdk';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {TuiInputModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [ReactiveFormsModule, TuiInputModule, TuiValueChanges],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly alerts = inject(TuiAlertService);\n\n    protected readonly form = new FormGroup({\n        control: new FormControl('', {updateOn: 'blur'}),\n    });\n\n    protected onChanges(value: string): void {\n        this.alerts.open(value).subscribe();\n    }\n}\n"}}]);