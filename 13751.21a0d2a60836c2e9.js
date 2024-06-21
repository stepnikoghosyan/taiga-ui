(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[13751],{13751:e=>{e.exports="import {Component, DestroyRef, inject} from '@angular/core';\nimport {takeUntilDestroyed} from '@angular/core/rxjs-interop';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiLet} from '@taiga-ui/cdk';\nimport {TuiAlertService} from '@taiga-ui/core';\nimport {TuiBadge} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    imports: [TuiLet, TuiBadge],\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    private readonly destroyRef = inject(DestroyRef);\n    private readonly alerts = inject(TuiAlertService);\n\n    protected get getter(): string {\n        this.alerts\n            .open('Getter called')\n            .pipe(takeUntilDestroyed(this.destroyRef))\n            .subscribe();\n\n        return '🐳';\n    }\n}\n"}}]);