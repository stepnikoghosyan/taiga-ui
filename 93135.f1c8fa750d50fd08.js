(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[93135],{93135:n=>{n.exports="import {NgForOf, NgIf} from '@angular/common';\nimport {Component, inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiIsString} from '@taiga-ui/cdk';\nimport {TuiDataList, TuiDropdown, TuiIcon} from '@taiga-ui/core';\nimport {TuiChevron, TuiTabs} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiTabs, NgForOf, NgIf, TuiChevron, TuiDropdown, TuiDataList, TuiIcon],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected open = false;\n    protected readonly collaborators = ['Carol Cleveland', 'Neil Innes'];\n\n    protected readonly tabs = [\n        this.collaborators,\n        ...inject<readonly string[]>('Pythons' as any),\n    ];\n\n    protected activeElement = String(this.collaborators[0]);\n\n    protected get activeItemIndex(): number {\n        if (this.collaborators.includes(this.activeElement)) {\n            return this.tabs.indexOf(this.collaborators);\n        }\n\n        return this.tabs.indexOf(this.activeElement);\n    }\n\n    protected stop(event: Event): void {\n        // We need to stop tab custom event so parent component does not think its active\n        event.stopPropagation();\n    }\n\n    protected onClick(activeElement: string): void {\n        this.activeElement = activeElement;\n    }\n\n    protected isString(tab: unknown): tab is string {\n        return tuiIsString(tab);\n    }\n}\n"}}]);