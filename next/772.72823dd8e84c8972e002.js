(window.webpackJsonp=window.webpackJsonp||[]).push([[772],{hLFw:function(n,i,e){"use strict";e.r(i),i.default="import {Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiNotificationsService} from '@taiga-ui/core';\n\n@Component({\n    selector: 'tui-notifications-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiNotificationsExampleComponent1 {\n    constructor(\n        @Inject(TuiNotificationsService)\n        private readonly notificationsService: TuiNotificationsService,\n    ) {}\n\n    showNotification() {\n        this.notificationsService\n            .show('A simple option', {\n                label: 'With a heading!',\n            })\n            .subscribe();\n    }\n}\n"}}]);