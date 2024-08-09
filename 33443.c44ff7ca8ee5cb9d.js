(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[33443],{33443:e=>{e.exports="import {AsyncPipe} from '@angular/common';\nimport {Component, HostListener, inject} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiStringHandler} from '@taiga-ui/cdk';\nimport {TuiCopyProcessor} from '@taiga-ui/cdk';\nimport {TUI_NUMBER_FORMAT, TuiAlertService} from '@taiga-ui/core';\nimport {TuiInputNumberModule} from '@taiga-ui/legacy';\nimport {map} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example1\",\n    imports: [TuiInputNumberModule, TuiCopyProcessor, FormsModule, AsyncPipe],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly format = inject(TUI_NUMBER_FORMAT);\n    private readonly alerts = inject(TuiAlertService);\n\n    protected value = 12345.67;\n\n    protected numberProcessor$ = this.format.pipe(\n        map(\n            (format) => (text: string) =>\n                text\n                    .replace(format.decimalSeparator, '.')\n                    .replaceAll(new RegExp(format.thousandSeparator, 'g'), ''),\n        ),\n    );\n\n    @HostListener('copy', ['$event'])\n    protected onCopy(event: ClipboardEvent): void {\n        this.alerts.open(event.clipboardData?.getData('text/plain') ?? '').subscribe();\n    }\n\n    protected readonly textProcessor: TuiStringHandler<string> = (text) =>\n        text.toUpperCase();\n}\n"}}]);