(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[29829],{29829:n=>{n.exports="import {NgForOf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {Router} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiPopover} from '@taiga-ui/cdk';\nimport {type TuiAlertOptions, TuiAlertService, TuiButton} from '@taiga-ui/core';\nimport {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@taiga-ui/polymorpheus';\nimport {switchMap, takeUntil} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiButton, NgForOf],\n    template: `\n        <p>Yes?</p>\n        <button\n            *ngFor=\"let response of [true, false]\"\n            appearance=\"whiteblock\"\n            size=\"s\"\n            tuiButton\n            type=\"button\"\n            class=\"tui-space_right-1\"\n            (click)=\"context.completeWith(response)\"\n        >\n            {{ response ? 'Yes' : 'No' }}\n        </button>\n    `,\n    changeDetection,\n})\nexport class AlertExample {\n    protected readonly context =\n        inject<TuiPopover<TuiAlertOptions<void>, boolean>>(POLYMORPHEUS_CONTEXT);\n}\n\n@Component({\n    standalone: true,\n    imports: [TuiButton],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly alerts = inject(TuiAlertService);\n    private readonly notification = this.alerts\n        .open<boolean>(new PolymorpheusComponent(AlertExample), {\n            label: 'Question',\n            status: 'error',\n            autoClose: 0,\n        })\n        .pipe(\n            switchMap(response =>\n                this.alerts.open(`Got a value — ${response}`, {label: 'Information'}),\n            ),\n            takeUntil(inject(Router).events),\n        );\n\n    protected showNotification(): void {\n        this.notification.subscribe();\n    }\n}\n"}}]);