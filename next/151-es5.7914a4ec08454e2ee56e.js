var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{"8bCa":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiValidatorModule",(function(){return P}));var a=n("An66"),o=n("3kIJ"),r=n("1VvW"),l=n("SVIu"),i=n("l4xa"),m=n("Qq0t"),c=n("dvRg"),p=n("kZht"),u=n("OZlg"),d=n("e0eB"),s=n("iyc4"),f=n("GdrL"),g=n("71sB"),C=n("TjIJ"),b=n("jTus"),h=n("fP8s"),_=n("OWJi"),v=n("EmN8"),y=n("bYz0");function T(e,t){if(1&e&&p["\u0275\u0275element"](0,"tui-data-list-wrapper",6),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",n.items)}}function O(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-input",7),p["\u0275\u0275text"](1," Contact "),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("tuiValidator",n.validator)}}function E(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-phone",8),p["\u0275\u0275text"](1,"Contact"),p["\u0275\u0275elementEnd"]())}var x,w,j=function(){return{standalone:!0}},M=((x=_createClass((function e(){_classCallCheck(this,e),this.items=["Email","Phone"],this.type=this.items[0],this.group=new o.FormGroup({name:new o.FormControl("",o.Validators.required),contact:new o.FormControl("",o.Validators.required)}),this.validator=o.Validators.email}))).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=p["\u0275\u0275defineComponent"]({type:x,selectors:[["tui-validator-example-1"]],decls:9,vars:6,consts:[[1,"b-form",3,"formGroup"],["formControlName","name"],[1,"tui-space_vertical-3",3,"ngModelOptions","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["formControlName","contact",3,"tuiValidator",4,"ngIf","ngIfElse"],["phone",""],[3,"items"],["formControlName","contact",3,"tuiValidator"],["formControlName","contact"]],template:function(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"tui-input",1),p["\u0275\u0275text"](2,"Name"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-select",2),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.type=e})),p["\u0275\u0275text"](4," Connection "),p["\u0275\u0275template"](5,T,1,1,"tui-data-list-wrapper",3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](6,O,2,1,"tui-input",4),p["\u0275\u0275template"](7,E,2,0,"ng-template",null,5,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275reference"](8);p["\u0275\u0275property"]("formGroup",t.group),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngModelOptions",p["\u0275\u0275pureFunction0"](5,j))("ngModel",t.type),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngIf",t.type===t.items[0])("ngIfElse",n)}},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,f.a,g.a,o.NgControlStatus,o.FormControlName,C.a,b.a,o.NgModel,h.a,a.t,_.a,v.a,y.a],encapsulation:2,changeDetection:0}),x),S=n("u8jZ"),V=["header",$localize(_templateObject||(_templateObject=_taggedTemplateLiteral([":\u241fe9989acc7c8ce4e53c98e725c4ccddb26500a12c\u241f676188202391799015:Validator"])))];w=$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral([":\u241f31386b4456fc6b3d900fca512c4eb3cfd8f4cb03\u241f3877732538093888358:",":START_TAG_CODE:tuiValidator",":CLOSE_TAG_CODE: allows set validators for form control on the fly "])),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var N,I,D=["heading",$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"])))];function L(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,w),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](4,D),p["\u0275\u0275element"](5,"tui-validator-example-1"),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.example1)}}function F(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",4),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,N),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,I),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",n.exampleImportModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}N=$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral([":\u241f882bd28a9551de615e0f39bd9b0d55c6c1b1d514\u241f2747244216500749928: Import an Angular module for forms and ",":START_TAG_CODE:TuiValidatorModule",":CLOSE_TAG_CODE: in the same module where you want to use our directive: "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),I=$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"])));var G,k,A=((k=_createClass((function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiValidatorModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiValidatorModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-input\n    formControlName="control"\n    [tuiValidator]="validator"\n></tui-input>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-validator-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiValidatorExample1 {\n    readonly items = ['Email', 'Phone'];\n\n    type = this.items[0];\n\n    readonly group = new FormGroup({\n        name: new FormControl('', Validators.required),\n        contact: new FormControl('', Validators.required),\n    });\n\n    readonly validator = Validators.email;\n}\n",HTML:'<form class="b-form" [formGroup]="group">\n    <tui-input formControlName="name">Name</tui-input>\n    <tui-select\n        class="tui-space_vertical-3"\n        [ngModelOptions]="{standalone: true}"\n        [(ngModel)]="type"\n    >\n        Connection\n        <tui-data-list-wrapper\n            *tuiDataList\n            [items]="items"\n        ></tui-data-list-wrapper>\n    </tui-select>\n    <tui-input\n        *ngIf="type === items[0]; else phone"\n        formControlName="contact"\n        [tuiValidator]="validator"\n    >\n        Contact\n    </tui-input>\n    <ng-template #phone>\n        <tui-input-phone formControlName="contact">Contact</tui-input-phone>\n    </ng-template>\n</form>\n'}}))).\u0275fac=function(e){return new(e||k)},k.\u0275cmp=p["\u0275\u0275defineComponent"]({type:k,selectors:[["example-tui-validator"]],decls:4,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],["pageTab","Setup"],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,V),p["\u0275\u0275template"](2,L,6,1,"ng-template",1),p["\u0275\u0275template"](3,F,10,2,"ng-template",2),p["\u0275\u0275elementEnd"]())},directives:[u.a,d.a,s.a,M,S.a],encapsulation:2,changeDetection:0}),k),P=((G=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=p["\u0275\u0275defineNgModule"]({type:G}),G.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||G)},imports:[[a.c,o.FormsModule,o.ReactiveFormsModule,c.TuiInputModule,c.TuiSelectModule,i.TuiValidatorModule,c.TuiInputPhoneModule,m.TuiDataListModule,c.TuiDataListWrapperModule,l.i,r.f.forChild(Object(l.p)(A))]]}),G)}}]);