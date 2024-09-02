(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44953],{44953:n=>{n.exports="import {AsyncPipe} from '@angular/common';\nimport {Component, inject, INJECTOR, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMobileCalendarDropdown} from '@taiga-ui/addon-mobile';\nimport {tuiControlValue, TuiDay} from '@taiga-ui/cdk';\nimport {TUI_MONTHS, TuiButton, TuiDialogService} from '@taiga-ui/core';\nimport {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';\nimport {PolymorpheusComponent} from '@taiga-ui/polymorpheus';\nimport type {Observable} from 'rxjs';\nimport {combineLatest, map} from 'rxjs';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example5\",\n    imports: [TuiButton, AsyncPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly dialogs = inject(TuiDialogService);\n    private readonly injector = inject(INJECTOR);\n    private readonly months$ = inject(TUI_MONTHS);\n    private readonly control = new FormControl<readonly TuiDay[] | null>(null);\n\n    private readonly dialog$: Observable<readonly TuiDay[]> = this.dialogs.open(\n        new PolymorpheusComponent(\n            TuiMobileCalendarDropdown,\n            Injector.create({\n                providers: [\n                    {\n                        provide: TUI_CALENDAR_DATE_STREAM,\n                        useValue: tuiControlValue(this.control),\n                    },\n                ],\n                parent: this.injector,\n            }),\n        ),\n        {\n            size: 'fullscreen',\n            closeable: false,\n            data: {\n                multi: true,\n                min: new TuiDay(2018, 2, 10),\n            },\n        },\n    );\n\n    protected readonly date$ = combineLatest([\n        tuiControlValue<readonly TuiDay[]>(this.control),\n        this.months$,\n    ]).pipe(\n        map(([value, months]) => {\n            if (!value?.length) {\n                return 'Choose dates';\n            }\n\n            return value\n                .map((day) => `${months[day.month]} ${day.day}, ${day.year}`)\n                .join('; ');\n        }),\n    );\n\n    protected get empty(): boolean {\n        return !this.control.value?.length;\n    }\n\n    protected onClick(): void {\n        this.dialog$.subscribe((value) => this.control.setValue(value));\n    }\n}\n"}}]);