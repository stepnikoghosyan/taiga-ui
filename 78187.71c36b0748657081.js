(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[78187],{78187:n=>{n.exports="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiFlatLength} from '@taiga-ui/cdk';\n\n@Component({\n    standalone: true,\n    exportAs: \"Example2\",\n    templateUrl: './index.html',\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {\n    protected get flatted(): number {\n        return tuiFlatLength([\n            [1, 2],\n            [3, 4],\n            [5, 6],\n        ]);\n    }\n}\n"}}]);