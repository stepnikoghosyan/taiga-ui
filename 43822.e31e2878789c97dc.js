(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[43822],{43822:n=>{n.exports="import {Component, Directive} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiInjectElement} from '@taiga-ui/cdk';\nimport {\n    tuiAsPositionAccessor,\n    TuiButton,\n    TuiDropdown,\n    TuiDropdownOpen,\n    type TuiPoint,\n    TuiPositionAccessor,\n} from '@taiga-ui/core';\n\n@Directive({\n    standalone: true,\n    exportAs: \"Example5\",\n    selector: '[topRight]',\n    providers: [tuiAsPositionAccessor(TopRightDirective)],\n})\nclass TopRightDirective extends TuiPositionAccessor {\n    private readonly el = tuiInjectElement();\n\n    public readonly type = 'dropdown';\n\n    public getPosition({height}: DOMRect): TuiPoint {\n        const {right, top} = this.el.getBoundingClientRect();\n\n        return [top - height, right];\n    }\n}\n\n@Component({\n    standalone: true,\n    imports: [TopRightDirective, TuiDropdownOpen, TuiButton, TuiDropdown],\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    encapsulation,\n    changeDetection,\n})\nexport default class Example {}\n"}}]);