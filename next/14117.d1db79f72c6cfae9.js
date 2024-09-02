(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[14117],{14117:e=>{e.exports="import {NgIf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiAutoFocus} from '@taiga-ui/cdk';\nimport {TuiAlertService, TuiButton} from '@taiga-ui/core';\nimport {TuiInputInline} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [TuiInputInline, TuiButton, TuiAutoFocus, FormsModule, NgIf],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly alerts = inject(TuiAlertService);\n\n    protected heading = 'Page heading';\n    protected editing = false;\n\n    protected toggle(): void {\n        this.editing = !this.editing;\n    }\n\n    protected onBlur(): void {\n        this.editing = false;\n        this.saveHeading(this.heading);\n    }\n\n    private saveHeading(newHeading: string): void {\n        this.alerts.open(newHeading, {label: 'New heading'}).subscribe();\n    }\n}\n"}}]);