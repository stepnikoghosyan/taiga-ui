(window.webpackJsonp=window.webpackJsonp||[]).push([[701],{z1ZW:function(n,t,e){"use strict";e.r(t),t.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiHandler, TuiIdentityMatcher} from '@taiga-ui/cdk';\n\ninterface Orerations {\n    title: string;\n    operations: readonly Oreration[];\n}\n\ninterface Oreration {\n    amount: number;\n}\n\nconst COMPLETED = {\n    title: `Done`,\n    operations: [\n        {\n            amount: 100,\n        },\n        {\n            amount: 200,\n        },\n    ],\n};\n\n@Component({\n    selector: `tui-filter-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFilterExample2 {\n    readonly form = new FormGroup({\n        filters: new FormControl([\n            {\n                title: `Drafts`,\n            },\n        ]),\n    });\n\n    items: readonly Orerations[] = [\n        COMPLETED,\n        {\n            title: `Drafts`,\n            operations: [\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 100,\n                },\n            ],\n        },\n        {\n            title: `For sign`,\n            operations: [],\n        },\n        {\n            title: `Queue`,\n            operations: [\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n                {\n                    amount: 100,\n                },\n                {\n                    amount: 200,\n                },\n            ],\n        },\n    ];\n\n    identityMatcher: TuiIdentityMatcher<Orerations> = (\n        item1: Orerations,\n        item2: Orerations,\n    ) => item1.title === item2.title;\n\n    badgeHandler: TuiHandler<Orerations, number> = item => item.operations.length;\n}\n"}}]);