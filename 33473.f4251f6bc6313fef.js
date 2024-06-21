(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[33473],{33473:e=>{e.exports="import {Component} from '@angular/core';\nimport {FormControl, ReactiveFormsModule} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport type {TuiContext} from '@taiga-ui/cdk';\nimport {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example5\",\n    imports: [TuiInputSliderModule, TuiTextfieldControllerModule, ReactiveFormsModule],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected readonly max = 100;\n    protected readonly min = 0;\n\n    protected readonly smallControl = new FormControl(this.min);\n    protected readonly bigControl = new FormControl(this.max);\n\n    protected readonly customLabel = ({\n        $implicit,\n    }: TuiContext<number>): number | string => {\n        switch ($implicit) {\n            case this.max:\n                // eslint-disable-next-line @typescript-eslint/quotes\n                return \"Digits can't describe my love!\";\n            case this.min:\n                return 'Just a label for min value';\n            case (this.max - this.min) / 2:\n                return 'Middle';\n            default:\n                return $implicit;\n        }\n    };\n}\n"}}]);