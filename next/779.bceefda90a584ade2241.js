(window.webpackJsonp=window.webpackJsonp||[]).push([[779],{q593:function(n,o,e){"use strict";e.r(o),o.default="import {Component, Inject, Injector} from '@angular/core';\nimport {Router} from '@angular/router';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';\nimport {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';\nimport {Observable} from 'rxjs';\nimport {switchMap, takeUntil} from 'rxjs/operators';\n\nimport {AlertExampleComponent} from './alert-example/alert-example.component';\n\n@Component({\n    selector: 'tui-notifications-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiNotificationsExampleComponent3 {\n    readonly notification: Observable<void>;\n\n    constructor(\n        @Inject(TuiNotificationsService) notificationsService: TuiNotificationsService,\n        @Inject(Router) router: Router,\n        @Inject(Injector) private readonly injector: Injector,\n    ) {\n        this.notification = notificationsService\n            .show<boolean>(\n                new PolymorpheusComponent(AlertExampleComponent, this.injector),\n                {\n                    label: 'Question',\n                    status: TuiNotification.Error,\n                    autoClose: false,\n                },\n            )\n            .pipe(\n                switchMap(response =>\n                    notificationsService.show('Got a value \u2014 ' + response, {\n                        label: 'Information',\n                    }),\n                ),\n                takeUntil(router.events),\n            );\n    }\n\n    showNotification() {\n        this.notification.subscribe();\n    }\n}\n"}}]);