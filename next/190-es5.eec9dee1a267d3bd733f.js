var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{G3iW:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleMiscellaneousModule",(function(){return R}));var a,r,o=n("An66"),l=n("3kIJ"),i=n("1VvW"),m=n("SVIu"),s=n("Qq0t"),c=n("dvRg"),p=n("kZht"),u=n("OZlg"),d=n("e0eB"),f=n("iyc4"),g=n("l4xa"),y=((r=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"assertResult",get:function(){var e=5===(new Date).getDay();return g.tuiAssert.assert(e,"Today is not a friday"),e?"Nothing in console":"There is a console assert: 'Today is not a friday'"}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=p["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-miscellaneous-example-1"]],decls:2,vars:1,template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate"](t.assertResult))},encapsulation:2,changeDetection:0}),r),b=((a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"flatted",get:function(){return Object(g.flatLength)([[1,2],[3,4],[5,6]])}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=p["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-miscellaneous-example-2"]],decls:2,vars:1,template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"]("",t.flatted," = flatLength([[1, 2], [3, 4], [5, 6]]);"))},encapsulation:2,changeDetection:0}),a),h=n("T8fS"),v=n("TjIJ"),C=n("jTus"),x=n("fP8s"),_=n("OWJi");function S(e,t){if(1&e&&p["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",n.items)}}var j,w=((j=function(){function e(){_classCallCheck(this,e),this.items=["6734567890123456","5536567890123456","2202567890123456","4405567890123456","4000567890123456"],this.parametersForm=new l.FormGroup({cardNumber:new l.FormControl("")})}return _createClass(e,[{key:"paymentSystem",get:function(){var e=this.parametersForm.value.cardNumber;return Object(h.getPaymentSystem)(e)}}]),e}()).\u0275fac=function(e){return new(e||j)},j.\u0275cmp=p["\u0275\u0275defineComponent"]({type:j,selectors:[["tui-miscellaneous-example-4"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","cardNumber",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p["\u0275\u0275text"](0),p["\u0275\u0275elementStart"](1,"form",0),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275elementStart"](3,"tui-select",2),p["\u0275\u0275text"](4," Choose card number "),p["\u0275\u0275template"](5,S,1,1,"tui-data-list-wrapper",3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275textInterpolate1"]("'",t.paymentSystem,"' = getPaymentSystem(cardNumber); "),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.FormGroupDirective,v.a,C.a,l.NgControlStatus,l.FormControlName,x.a,_.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),j);function O(e,t){if(1&e&&p["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",n.items)}}var T,F,P=((T=function(){function e(){_classCallCheck(this,e),this.items=["String","null","undefined"],this.parametersForm=new l.FormGroup({value:new l.FormControl(null)})}return _createClass(e,[{key:"isPresent",get:function(){var e=this.parametersForm.value.value,t=this.objectifyValue(e);return Object(g.isPresent)(t)}},{key:"objectifyValue",value:function(e){return"null"===e?null:"undefined"!==e?e:void 0}}]),e}()).\u0275fac=function(e){return new(e||T)},T.\u0275cmp=p["\u0275\u0275defineComponent"]({type:T,selectors:[["tui-miscellaneous-example-5"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p["\u0275\u0275text"](0),p["\u0275\u0275elementStart"](1,"form",0),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275elementStart"](3,"tui-select",2),p["\u0275\u0275text"](4," value "),p["\u0275\u0275template"](5,O,1,1,"tui-data-list-wrapper",3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275textInterpolate1"]("",t.isPresent," = isPresent(value); "),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[l["\u0275angular_packages_forms_forms_y"],l.NgControlStatusGroup,l.FormGroupDirective,v.a,C.a,l.NgControlStatus,l.FormControlName,x.a,_.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),T),L=n("u8jZ"),k=["header",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241ff398ef0b34074b4560e84ef5317ea054e78a752a\u241f788967566322079082:Miscellaneous"])))];F=$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241fc676d43c710fec8019330348fa0df2c00362f699\u241f5150738835928000159:Some utils to simplify the development process"])));var E,D=["description",$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241ff10d1538fd526ebffa07d75e2380b111f5438a1c\u241f6294798745949256000:Logs assert into console in dev mode"])))],N=["description",$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f2f599a78aea67c3b476d1c718f2e8c3b464a9257\u241f5469082953515383630:Calculates a length of elements of two dimensional array"])))],M=["description",$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241f5105c7dbe368aca66ee4710b6940836ace147001\u241f7224030121581173286:Card number to its payment system"])))],G=["description",$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241ff6929faea8489787de4425621b6b893ee9a50c10\u241f2199641579905414520:Checks value not to be null or undefined"])))];function z(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18n"](1,F),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](3,D),p["\u0275\u0275element"](4,"tui-miscellaneous-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-doc-example",4),p["\u0275\u0275i18nAttributes"](6,N),p["\u0275\u0275element"](7,"tui-miscellaneous-example-2"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"tui-doc-example",5),p["\u0275\u0275i18nAttributes"](9,M),p["\u0275\u0275element"](10,"tui-miscellaneous-example-4"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"tui-doc-example",6),p["\u0275\u0275i18nAttributes"](12,G),p["\u0275\u0275element"](13,"tui-miscellaneous-example-5"),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",n.example1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.example2),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.example4),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.example5)}}function A(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",7),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18n"](3,E),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](4,"tui-doc-code",8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",n.importComponentExample)}}E=$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241f331439c9b8ee5b975fc037bbc742a75012cb302f\u241f5059560669993049040:Import into component and use:"])));var I,V,$=((V=_createClass((function e(){_classCallCheck(this,e),this.importComponentExample="import {getPaymentSystem} from '@taiga-ui/kit';\n\n...\n    paymentSystem = getPaymentSystem(cardNumber);\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {tuiAssert} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-miscellaneous-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample1 {\n    get assertResult(): string {\n        const dayOfWeek = new Date().getDay();\n        const isFriday = dayOfWeek === 5;\n\n        tuiAssert.assert(isFriday, 'Today is not a friday');\n\n        return isFriday\n            ? 'Nothing in console'\n            : `There is a console assert: 'Today is not a friday'`;\n    }\n}\n",HTML:"<p>{{ assertResult }}</p>\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {flatLength} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-miscellaneous-example-2',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample2 {\n    get flatted(): number {\n        return flatLength([\n            [1, 2],\n            [3, 4],\n            [5, 6],\n        ]);\n    }\n}\n",HTML:"<p>{{ flatted }} = flatLength([[1, 2], [3, 4], [5, 6]]);</p>\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {getPaymentSystem} from '@taiga-ui/addon-commerce';\n\n@Component({\n    selector: 'tui-miscellaneous-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample4 {\n    readonly items = [\n        '6734567890123456',\n        '5536567890123456',\n        '2202567890123456',\n        '4405567890123456',\n        '4000567890123456',\n    ];\n\n    parametersForm = new FormGroup({\n        cardNumber: new FormControl(''),\n    });\n\n    get paymentSystem(): string | null {\n        const {cardNumber} = this.parametersForm.value;\n\n        return getPaymentSystem(cardNumber);\n    }\n}\n",HTML:'\'{{ paymentSystem }}\' = getPaymentSystem(cardNumber);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-select formControlName="cardNumber" class="tui-space_top-2">\n            Choose card number\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {isPresent} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-miscellaneous-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMiscellaneousExample5 {\n    readonly items = ['String', 'null', 'undefined'];\n\n    parametersForm = new FormGroup({\n        value: new FormControl(null),\n    });\n\n    get isPresent(): boolean {\n        const {value} = this.parametersForm.value;\n        const objectedValue = this.objectifyValue(value);\n\n        return isPresent(objectedValue);\n    }\n\n    private objectifyValue(value: string): string | null | undefined {\n        if (value === 'null') {\n            return null;\n        }\n\n        if (value === 'undefined') {\n            return undefined;\n        }\n\n        return value;\n    }\n}\n",HTML:'{{ isPresent }} = isPresent(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-select formControlName="value" class="tui-space_top-2">\n            value\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 0.75rem;\n    width: 13.75rem;\n}\n"}}))).\u0275fac=function(e){return new(e||V)},V.\u0275cmp=p["\u0275\u0275defineComponent"]({type:V,selectors:[["example-format"]],decls:4,vars:0,consts:[["package","CDK","type","utils",6,"header"],["pageTab",""],["pageTab","Setup"],["id","assert","heading","assert",3,"content",6,"description"],["id","flatLength","heading","flatLength",3,"content",6,"description"],["id","getPaymentSystem","heading","getPaymentSystem",3,"content",6,"description"],["id","isPresent","heading","isPresent",3,"content",6,"description"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,k),p["\u0275\u0275template"](2,z,14,4,"ng-template",1),p["\u0275\u0275template"](3,A,5,1,"ng-template",2),p["\u0275\u0275elementEnd"]())},directives:[u.a,d.a,f.a,y,b,w,P,L.a],encapsulation:2,changeDetection:0}),V),R=((I=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=p["\u0275\u0275defineNgModule"]({type:I}),I.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||I)},imports:[[o.c,l.FormsModule,l.ReactiveFormsModule,c.TuiSelectModule,s.TuiDataListModule,c.TuiDataListWrapperModule,m.i,i.f.forChild(Object(m.p)($))]]}),I)}}]);