(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[46265],{46265:e=>{e.exports="import {I18nPluralPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';\nimport {Component} from '@angular/core';\nimport {FormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiIcon} from '@taiga-ui/core';\nimport {TuiRange} from '@taiga-ui/kit';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example3\",\n    imports: [TuiRange, FormsModule, NgForOf, NgIf, I18nPluralPipe, TuiIcon, JsonPipe],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly min = 0;\n    protected readonly max = 1000;\n    protected readonly step = 250;\n    protected readonly segments = 4;\n    protected readonly labels = [...new Array(this.segments + 1).keys()].map(\n        (i) => this.min + this.step * i,\n    );\n\n    protected value = [0, 250];\n\n    // https://angular.io/api/common/I18nPluralPipe\n    protected pluralMap = {'=0': '0', '=1': '# item', '=1000': 'MAX', other: '# items'};\n}\n"}}]);