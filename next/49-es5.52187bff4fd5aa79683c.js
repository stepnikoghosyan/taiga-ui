var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16;function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{Q4Yb:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiDataListModule",(function(){return $e}));var a=n("An66"),o=n("3kIJ"),i=n("1VvW"),l=n("SVIu"),r=n("l4xa"),c=n("Qq0t"),p=n("dvRg"),u=n("kZht"),m=n("OZlg"),d=n("e0eB"),s=n("iyc4"),f=n("TjIJ"),g=n("jTus"),b=n("fP8s"),v=n("luNI"),C=n("SgIQ"),h=n("gEyt"),O=n("cVyY"),_=n("mCBh"),y=n("xcN3"),S=n("Kl/4"),T=n("2sqw"),x=n("aEsk"),E=n("DzXc");function w(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"button",6),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275property"]("value",n.items),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",n.name," only ")}}function L(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-opt-group"),u["\u0275\u0275elementStart"](1,"button",6),u["\u0275\u0275text"](2,"All"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,w,2,2,"button",7),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("value",n.all),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngForOf",n.items)}}function j(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"button",6),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275property"]("value",n),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",n," ")}}function k(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-opt-group",11),u["\u0275\u0275template"](1,j,2,2,"button",7),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]().tuiLet;u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",n)}}function D(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-opt-group",9),u["\u0275\u0275template"](1,k,2,1,"tui-opt-group",10),u["\u0275\u0275elementEnd"]()),2&e){var n=t.tuiLet,a=u["\u0275\u0275nextContext"]().$implicit;u["\u0275\u0275property"]("label",a.name),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",n.length)}}function M(e,t){if(1&e&&(u["\u0275\u0275elementContainerStart"](0),u["\u0275\u0275template"](1,D,2,2,"tui-opt-group",8),u["\u0275\u0275pipe"](2,"tuiFilter"),u["\u0275\u0275elementContainerEnd"]()),2&e){var n=t.$implicit,a=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("tuiLet",u["\u0275\u0275pipeBind3"](2,1,n.items,a.filter,a.value))}}var A,I=((A=function(){function e(){_classCallCheck(this,e),this.items=[],this.value="",this.all=r.EMPTY_ARRAY,this.filter=r.TUI_DEFAULT_MATCHER}return _createClass(e,[{key:"onArrowDown",value:function(e,t){e.onFocus(t,!0)}},{key:"onKeyDown",value:function(e,t){t&&Object(c.isEditingKey)(e)&&Object(r.setNativeFocused)(t,!0,!0)}}]),e}()).\u0275fac=function(e){return new(e||A)},A.\u0275cmp=u["\u0275\u0275defineComponent"]({type:A,selectors:[["custom-list"]],inputs:{items:"items"},decls:8,vars:4,consts:[["iconContent","tuiIconSearchLarge","iconAlign","left",1,"tui-space_all-2",3,"tuiTextfieldLabelOutside","value","valueChange","keydown.arrowDown.prevent"],["input",""],["emptyContent","No results found",3,"keydown"],["list",""],[4,"ngIf"],[4,"ngFor","ngForOf"],["tuiOption","",3,"value"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],[3,"label",4,"tuiLet"],[3,"label"],["tuiMultiSelectGroup","",4,"ngIf"],["tuiMultiSelectGroup",""]],template:function(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-primitive-textfield",0,1),u["\u0275\u0275listener"]("valueChange",(function(e){return t.value=e}))("keydown.arrowDown.prevent",(function(e){u["\u0275\u0275restoreView"](n);var a=u["\u0275\u0275reference"](5);return t.onArrowDown(a,e.target)})),u["\u0275\u0275text"](2," Search categories\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](3,"hr"),u["\u0275\u0275elementStart"](4,"tui-data-list",2,3),u["\u0275\u0275listener"]("keydown",(function(e){u["\u0275\u0275restoreView"](n);var a=u["\u0275\u0275reference"](1);return t.onKeyDown(e.key,a.nativeFocusableElement)})),u["\u0275\u0275template"](6,L,4,2,"tui-opt-group",4),u["\u0275\u0275template"](7,M,3,5,"ng-container",5),u["\u0275\u0275elementEnd"]()}2&e&&(u["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("value",t.value),u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("ngIf",!t.value),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",t.items))},directives:[v.a,C.a,h.b,O.a,a.t,a.s,_.a,y.a,S.a,T.a,x.a],pipes:[E.a],encapsulation:2,changeDetection:0}),A);function F(e,t){if(1&e&&u["\u0275\u0275element"](0,"custom-list",2),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("items",n.items)}}var P,$={name:"Income",items:["Donations","Product placement","Sponsorship","Found on the street","Unexpected inheritance","Investments","Color copier"]},R={name:"Expenses",items:["Energy drinks","Coffee","Ramen","Bills","Back medicine","Warhammer 40000 figurines"]},G=((P=_createClass((function e(){var t=this;_classCallCheck(this,e),this.value=[],this.items=[$,R],this.identityMatcher=function(e,t){return e.length===t.length&&e.every((function(e){return-1!==t.indexOf(e)}))},this.valueContent=function(e){var n=e.$implicit;if(!n.length)return"All";var a=t.items.find((function(e){var a=e.items;return t.identityMatcher(n,a)}));return a?a.name+" only":"Selected: "+n.length}}))).\u0275fac=function(e){return new(e||P)},P.\u0275cmp=u["\u0275\u0275defineComponent"]({type:P,selectors:[["tui-data-list-example-4"]],decls:3,vars:3,consts:[[1,"control",3,"identityMatcher","valueContent","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-select",0),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),u["\u0275\u0275text"](1," Open-source budget "),u["\u0275\u0275template"](2,F,1,1,"custom-list",1),u["\u0275\u0275elementEnd"]()),2&e&&u["\u0275\u0275property"]("identityMatcher",t.identityMatcher)("valueContent",t.valueContent)("ngModel",t.value)},directives:[f.a,g.a,o.NgControlStatus,o.NgModel,b.a,I],styles:[".control[_ngcontent-%COMP%] { width: 320px }"],changeDetection:0}),P),z=n("aPft"),V=n("q7Lq"),N=n("zV1d"),H=n("ONKv");function B(e,t){1&e&&u["\u0275\u0275element"](0,"tui-svg",10)}function W(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"a",7,8),u["\u0275\u0275text"](2),u["\u0275\u0275template"](3,B,1,0,"tui-svg",9),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,a=u["\u0275\u0275reference"](1);u["\u0275\u0275property"]("routerLink",n.routerLink),u["\u0275\u0275attribute"]("aria-checked",a.isActive),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"](" ",n.label," "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",a.isActive)}}function Z(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-opt-group",5),u["\u0275\u0275template"](1,W,4,4,"a",6),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275property"]("label",n.label),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",n.items)}}function q(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-data-list",3),u["\u0275\u0275template"](1,Z,2,2,"tui-opt-group",4),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",n.groups)}}var J,U=((J=_createClass((function e(){_classCallCheck(this,e),this.arrow=p.TUI_ARROW,this.groups=[{label:$localize(_templateObject||(_templateObject=_taggedTemplateLiteral(["Components"]))),items:[{label:"Input",routerLink:"/components/input"},{label:"Select",routerLink:"/components/select"},{label:"DataList",routerLink:"/components/data-list"}]},{label:$localize(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["Styles"]))),items:[{label:$localize(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["Icons"]))),routerLink:"/icons"},{label:$localize(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["Typography"]))),routerLink:"/typography"}]},{label:"",items:[{label:$localize(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["Changelog"]))),routerLink:"/changelog"}]}]}))).\u0275fac=function(e){return new(e||J)},J.\u0275cmp=u["\u0275\u0275defineComponent"]({type:J,selectors:[["tui-data-list-example-1"]],decls:5,vars:2,consts:[[3,"content"],["tuiButton","","type","button",3,"iconRight"],["content",""],["role","menu"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["tuiOption","","role","menuitemradio","routerLinkActive","",3,"routerLink",4,"ngFor","ngForOf"],["tuiOption","","role","menuitemradio","routerLinkActive","",3,"routerLink"],["rla","routerLinkActive"],["src","tuiIconCheckLarge",4,"ngIf"],["src","tuiIconCheckLarge"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),u["\u0275\u0275elementStart"](1,"button",1),u["\u0275\u0275text"](2,"Menu"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,q,2,1,"ng-template",null,2,u["\u0275\u0275templateRefExtractor"])),2&e){var n=u["\u0275\u0275reference"](4);u["\u0275\u0275property"]("content",n),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("iconRight",t.arrow)}},directives:[V.a,N.a,O.a,a.s,_.a,y.a,i.e,i.d,a.t,H.a],encapsulation:2,changeDetection:0}),J),Y=n("1iwt"),K=n("4hRd"),Q=n("W2aA");function X(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",9),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.tuiLet;return u["\u0275\u0275nextContext"](2).selectOption(e)})),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()}if(2&e){var a=t.tuiLet;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",a," ")}}function ee(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",9),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.tuiLet;return u["\u0275\u0275nextContext"](2).selectOption(e)})),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()}if(2&e){var a=t.tuiLet;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",a," ")}}function te(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",9),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"](3).selectOption(e)})),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",a," ")}}function ne(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-data-list",4),u["\u0275\u0275template"](1,te,2,1,"button",10),u["\u0275\u0275elementStart"](2,"button",6),u["\u0275\u0275text"](3," Nested menu "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]().$implicit,a=u["\u0275\u0275reference"](10),o=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("tuiActiveZoneParent",n),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",o.burgers),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("tuiDropdownContent",a)("tuiDropdownSided",!0)}}function ae(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",9),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](n);var e=t.$implicit;return u["\u0275\u0275nextContext"](3).selectOption(e)})),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",a," ")}}function oe(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-data-list"),u["\u0275\u0275template"](1,ae,2,1,"button",10),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"](2);u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",n.drinks)}}function ie(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-data-list",4),u["\u0275\u0275template"](1,X,2,1,"button",5),u["\u0275\u0275elementStart"](2,"button",6),u["\u0275\u0275text"](3," Burgers "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"button",6),u["\u0275\u0275text"](5," Drinks "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](6,ee,2,1,"button",5),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](7,ne,4,4,"ng-template",null,7,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275template"](9,oe,2,1,"ng-template",null,8,u["\u0275\u0275templateRefExtractor"])),2&e){var n=t.$implicit,a=u["\u0275\u0275reference"](8),o=u["\u0275\u0275reference"](10);u["\u0275\u0275property"]("tuiActiveZoneParent",n),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("tuiLet","French Fries"),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("tuiDropdownContent",a)("tuiDropdownSided",!0),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiDropdownContent",o)("tuiDropdownSided",!0),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("tuiLet","Ice Cream")}}var le,re=((le=function(){function e(t){_classCallCheck(this,e),this.dialogService=t,this.dropdownOpen=!1,this.burgers=["Classic","Cheeseburger","Royal Cheeseburger"],this.drinks=["Cola","Tea","Coffee","Slurm"]}return _createClass(e,[{key:"selectOption",value:function(e){this.dropdownOpen=!1,this.dialogService.open("You selected "+e).subscribe()}}]),e}()).\u0275fac=function(e){return new(e||le)(u["\u0275\u0275directiveInject"](c.TuiDialogService))},le.\u0275cmp=u["\u0275\u0275defineComponent"]({type:le,selectors:[["tui-data-list-example-2"]],decls:5,vars:3,consts:[[3,"content","open","openChange"],["dropdown",""],["tuiIconButton","","appearance","flat","icon","tuiIconMoreVer","type","button",3,"pseudoHovered"],["content",""],["tuiDataListDropdownManager","",3,"tuiActiveZoneParent"],["tuiOption","",3,"click",4,"tuiLet"],["tuiOption","","tuiDropdown","","tuiDropdownAlign","right",3,"tuiDropdownContent","tuiDropdownSided"],["burgersTmp",""],["drinksTmp",""],["tuiOption","",3,"click"],["tuiOption","",3,"click",4,"ngFor","ngForOf"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0,1),u["\u0275\u0275listener"]("openChange",(function(e){return t.dropdownOpen=e})),u["\u0275\u0275element"](2,"button",2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,ie,11,7,"ng-template",null,3,u["\u0275\u0275templateRefExtractor"])),2&e){var n=u["\u0275\u0275reference"](1),a=u["\u0275\u0275reference"](4);u["\u0275\u0275property"]("content",a)("open",t.dropdownOpen),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("pseudoHovered",n.open||null)}},directives:[V.a,N.a,O.a,Y.a,K.a,S.a,y.a,Q.a,a.s],encapsulation:2,changeDetection:0}),le);function ce(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"button",8),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275property"]("value",n),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",n," ")}}function pe(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"button",8),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;u["\u0275\u0275property"]("value",n),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",n," ")}}function ue(e,t){if(1&e){var n=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-data-list"),u["\u0275\u0275elementStart"](1,"tui-opt-group",4),u["\u0275\u0275listener"]("ngModelChange",(function(e){return u["\u0275\u0275restoreView"](n),u["\u0275\u0275nextContext"]().value=e})),u["\u0275\u0275elementStart"](2,"tui-opt-group",5),u["\u0275\u0275template"](3,ce,2,2,"button",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"tui-opt-group",7),u["\u0275\u0275template"](5,pe,2,2,"button",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){var a=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngModel",a.value),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngForOf",a.burgers),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("ngForOf",a.drinks)}}var me,de,se=((me=_createClass((function e(){_classCallCheck(this,e),this.value=[],this.burgers=["Hamburger","Cheeseburger"],this.drinks=["Cola","Tea","Coffee","Slurm"],this.arrow=p.TUI_ARROW}))).\u0275fac=function(e){return new(e||me)},me.\u0275cmp=u["\u0275\u0275defineComponent"]({type:me,selectors:[["tui-data-list-example-3"]],decls:7,vars:4,consts:[[3,"content"],["dropdown",""],["tuiIconButton","","appearance","flat","type","button",3,"icon","pseudoHovered"],["content",""],["tuiMultiSelectGroup","",3,"ngModel","ngModelChange"],["label","Food"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["label","Drinks"],["tuiOption","",3,"value"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0,1),u["\u0275\u0275element"](2,"button",2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,ue,6,3,"ng-template",null,3,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementStart"](5,"p"),u["\u0275\u0275text"](6),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275reference"](1),a=u["\u0275\u0275reference"](4);u["\u0275\u0275property"]("content",a),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("icon",t.arrow)("pseudoHovered",n.open||null),u["\u0275\u0275advance"](4),u["\u0275\u0275textInterpolate"](t.value)}},directives:[V.a,N.a,O.a,_.a,T.a,x.a,o.NgControlStatus,o.NgModel,a.s,y.a],encapsulation:2,changeDetection:0}),me),fe=n("yHor"),ge=n("zGJC"),be=n("u8jZ");de=$localize(_templateObject6||(_templateObject6=_taggedTemplateLiteral([":\u241ff9d15c776cab9b795d1216098674f3a131512347\u241f7885675783778291482:",":START_TAG_CODE:DataList",":CLOSE_TAG_CODE: allows to make lists or menus "])),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var ve,Ce=["heading",$localize(_templateObject7||(_templateObject7=_taggedTemplateLiteral([":\u241fdc60677d5a906e69f38a5cf9da7f2eb03931bea0\u241f7565716024468232322:Links"])))];ve=$localize(_templateObject8||(_templateObject8=_taggedTemplateLiteral([":\u241f33c95483482ed8be69df5fcc5fa64b529f061437\u241f8571278609349877603: Import ",":START_TAG_CODE:TuiArrowModule",":CLOSE_TAG_CODE: if you need a rotated arrow "])),"\ufffd#9\ufffd","\ufffd/#9\ufffd");var he,Oe,_e,ye,Se,Te,xe,Ee=["heading",$localize(_templateObject9||(_templateObject9=_taggedTemplateLiteral([":\u241f54b9e6243f5a4c0cd2ae56b50aafa4bc56a49365\u241f1033431736972256177:Submenu"])))];function we(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18nStart"](1,de),u["\u0275\u0275element"](2,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"tui-doc-example",2),u["\u0275\u0275element"](4,"tui-data-list-example-4"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-doc-example",3),u["\u0275\u0275i18nAttributes"](6,Ce),u["\u0275\u0275elementStart"](7,"tui-notification",4),u["\u0275\u0275i18nStart"](8,ve),u["\u0275\u0275element"](9,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](10,"tui-data-list-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"tui-doc-example",5),u["\u0275\u0275i18nAttributes"](12,Ee),u["\u0275\u0275element"](13,"tui-data-list-example-2"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"tui-doc-example",6),u["\u0275\u0275elementStart"](15,"tui-notification",4),u["\u0275\u0275i18nStart"](16,he),u["\u0275\u0275element"](17,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](18,"tui-data-list-example-3"),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example4),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",n.example1),u["\u0275\u0275advance"](6),u["\u0275\u0275property"]("content",n.example2),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example3)}}function Le(e,t){1&e&&u["\u0275\u0275i18n"](0,Oe)}function je(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,_e),u["\u0275\u0275element"](1,"code"),u["\u0275\u0275element"](2,"em"),u["\u0275\u0275element"](3,"code"),u["\u0275\u0275i18nEnd"]())}function ke(e,t){1&e&&u["\u0275\u0275i18n"](0,ye)}function De(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,Se),u["\u0275\u0275element"](1,"code"),u["\u0275\u0275element"](2,"code"),u["\u0275\u0275i18nEnd"]())}function Me(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"h2"),u["\u0275\u0275text"](1,"DataList"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-documentation"),u["\u0275\u0275template"](3,Le,1,0,"ng-template",7),u["\u0275\u0275template"](4,je,4,0,"ng-template",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"h2"),u["\u0275\u0275text"](6,"OptGroup"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"tui-doc-documentation"),u["\u0275\u0275template"](8,ke,1,0,"ng-template",9),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"h2"),u["\u0275\u0275text"](10,"Option"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"tui-doc-documentation"),u["\u0275\u0275template"](12,De,3,0,"ng-template",10),u["\u0275\u0275elementEnd"]())}function Ae(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",11),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,Te),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,xe),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",13),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",n.exampleImportModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}he=$localize(_templateObject10||(_templateObject10=_taggedTemplateLiteral([":\u241f992f9aba2dd9e12cab5fdf16b03c54dae8f9703d\u241f8033471336283613576: Import ",":START_TAG_CODE:TuiMultiSelectModule",":CLOSE_TAG_CODE:"])),"\ufffd#17\ufffd","\ufffd/#17\ufffd"),Oe=$localize(_templateObject11||(_templateObject11=_taggedTemplateLiteral([":\u241f1396678e9343696e0ba4990b23fd3107ffaf1504\u241f314511360780648423: Content to display when there are no options inside "]))),_e=$localize(_templateObject12||(_templateObject12=_taggedTemplateLiteral([":\u241ff57d8b200294d6e6e0b0f1fb7efe62ed640add20\u241f6904648380497078003: Native accessability role \u2014 ",":START_TAG_CODE:listbox",":CLOSE_TAG_CODE:",":START_EMPHASISED_TEXT:(default)",":CLOSE_EMPHASISED_TEXT: or ",":START_TAG_CODE:menu",":CLOSE_TAG_CODE: for common usage "])),"[\ufffd#1\ufffd|\ufffd#3\ufffd]","[\ufffd/#1\ufffd|\ufffd/#3\ufffd]","\ufffd#2\ufffd","\ufffd/#2\ufffd","[\ufffd#1\ufffd|\ufffd#3\ufffd]","[\ufffd/#1\ufffd|\ufffd/#3\ufffd]"),_e=u["\u0275\u0275i18nPostprocess"](_e),ye=$localize(_templateObject13||(_templateObject13=_taggedTemplateLiteral([":\u241f8c918c45e9c54837c94f25f61a68988a3b272035\u241f2059095426405918218: Group label "]))),Se=$localize(_templateObject14||(_templateObject14=_taggedTemplateLiteral([":\u241f1d0af9e8a86558c15856025e01265669cfcd5d2f\u241f1098780179882136171: Native accessability role. Set ",":START_TAG_CODE:aria-checked",":CLOSE_TAG_CODE: for all roles except ",":START_TAG_CODE:menuitem",":CLOSE_TAG_CODE: (see sample) "])),"[\ufffd#1\ufffd|\ufffd#2\ufffd]","[\ufffd/#1\ufffd|\ufffd/#2\ufffd]","[\ufffd#1\ufffd|\ufffd#2\ufffd]","[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"),Se=u["\u0275\u0275i18nPostprocess"](Se),Te=$localize(_templateObject15||(_templateObject15=_taggedTemplateLiteral([":\u241f5328da1720bf2dec4cb435be14f74ff37d2609ef\u241f944971838556589360: Import ",":START_TAG_CODE:TuiDataListModule",":CLOSE_TAG_CODE: into a module where you want to use our component "])),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),xe=$localize(_templateObject16||(_templateObject16=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"])));var Ie,Fe,Pe=((Fe=_createClass((function e(){_classCallCheck(this,e),this.exampleImportModule=n.e(272).then(n.bind(null,"YcGW")),this.exampleInsertTemplate=n.e(273).then(n.bind(null,"H5Vb")),this.example1={TypeScript:n.e(263).then(n.bind(null,"mT/k")),HTML:n.e(262).then(n.bind(null,"JISo"))},this.example2={TypeScript:n.e(265).then(n.bind(null,"kal1")),HTML:n.e(264).then(n.bind(null,"qmmB"))},this.example3={TypeScript:n.e(267).then(n.bind(null,"b1T+")),HTML:n.e(266).then(n.bind(null,"tAWm"))},this.example4={TypeScript:n.e(271).then(n.bind(null,"CqnN")),HTML:n.e(270).then(n.bind(null,"6C+V")),"custom-list.component.ts":n.e(268).then(n.bind(null,"CpUQ")),"custom-list.template.html":n.e(269).then(n.bind(null,"gzy9"))}}))).\u0275fac=function(e){return new(e||Fe)},Fe.\u0275cmp=u["\u0275\u0275defineComponent"]({type:Fe,selectors:[["example-tui-data-list"]],decls:4,vars:0,consts:[["header","DataList","package","CORE","type","components"],["pageTab",""],["id","custom","heading","Custom list",3,"content"],["id","links",3,"content",6,"heading"],[1,"tui-space_bottom-3"],["id","submenu",3,"content",6,"heading"],["id","control","heading","Form control",3,"content"],["documentationPropertyName","emptyContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","role","documentationPropertyMode","input","documentationPropertyType","TuiDataListRole"],["documentationPropertyName","label","documentationPropertyMode","input","documentationPropertyType","string"],["documentationPropertyName","role","documentationPropertyMode","input","documentationPropertyType","TuiOptionRole"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,we,19,4,"ng-template",1),u["\u0275\u0275template"](2,Me,13,0,"ng-template",1),u["\u0275\u0275template"](3,Ae,10,2,"ng-template",1),u["\u0275\u0275elementEnd"]())},directives:[m.a,d.a,s.a,G,z.a,U,re,se,fe.a,ge.a,be.a],encapsulation:2,changeDetection:0}),Fe),$e=((Ie=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=u["\u0275\u0275defineNgModule"]({type:Ie}),Ie.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||Ie)},imports:[[a.c,o.FormsModule,r.TuiLetModule,p.TuiMultiSelectModule,c.TuiPrimitiveTextfieldModule,p.TuiSelectModule,c.TuiTextfieldControllerModule,p.TuiArrowModule,c.TuiNotificationModule,c.TuiDataListModule,c.TuiSvgModule,c.TuiHostedDropdownModule,c.TuiButtonModule,c.TuiDropdownModule,r.TuiActiveZoneModule,l.i,i.f.forChild(Object(l.p)(Pe)),r.TuiFilterPipeModule]]}),Ie)}}]);