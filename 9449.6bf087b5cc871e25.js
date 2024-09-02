(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9449],{9449:n=>{n.exports="import {\n    CdkFixedSizeVirtualScroll,\n    CdkVirtualForOf,\n    CdkVirtualScrollViewport,\n} from '@angular/cdk/scrolling';\nimport {NgForOf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {\n    TUI_ANDROID_LOADER,\n    TUI_PULL_TO_REFRESH_COMPONENT,\n    TUI_PULL_TO_REFRESH_LOADED,\n    TuiPullToRefresh,\n} from '@taiga-ui/addon-mobile';\nimport {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';\nimport {TuiAlertService, TuiButton, TuiScrollable, TuiScrollbar} from '@taiga-ui/core';\nimport {Subject} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [\n        TuiPullToRefresh,\n        TuiScrollbar,\n        TuiScrollable,\n        TuiButton,\n        CdkVirtualScrollViewport,\n        CdkFixedSizeVirtualScroll,\n        CdkVirtualForOf,\n        NgForOf,\n    ],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n    providers: [\n        {\n            provide: TUI_IS_IOS,\n            useValue: false,\n        },\n        {\n            provide: TUI_IS_ANDROID,\n            useValue: true,\n        },\n        {\n            provide: TUI_PULL_TO_REFRESH_COMPONENT,\n            useValue: TUI_ANDROID_LOADER,\n        },\n        {\n            provide: TUI_PULL_TO_REFRESH_LOADED,\n            useClass: Subject,\n        },\n    ],\n})\nexport default class Example {\n    private readonly alerts = inject(TuiAlertService);\n\n    protected items = Array.from({length: 10000}).map((_, i) => `Item #${i}`);\n\n    protected onPull(): void {\n        this.alerts.open('Loading...').subscribe();\n    }\n}\n"}}]);