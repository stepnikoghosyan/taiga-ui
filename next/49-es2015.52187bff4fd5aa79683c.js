(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{Q4Yb:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiDataListModule",(function(){return Le}));var o=n("An66"),i=n("3kIJ"),a=n("1VvW"),r=n("SVIu"),l=n("l4xa"),c=n("Qq0t"),u=n("dvRg"),p=n("kZht"),d=n("OZlg"),m=n("e0eB"),s=n("iyc4"),f=n("TjIJ"),g=n("jTus"),v=n("fP8s"),b=n("luNI"),y=n("SgIQ"),S=n("gEyt"),h=n("cVyY"),x=n("mCBh"),C=n("xcN3"),E=n("Kl/4"),T=n("2sqw"),w=n("aEsk"),O=n("DzXc");function D(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"button",6),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275property"]("value",e.items),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e.name," only ")}}function M(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-opt-group"),p["\u0275\u0275elementStart"](1,"button",6),p["\u0275\u0275text"](2,"All"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](3,D,2,2,"button",7),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("value",e.all),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",e.items)}}function A(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"button",6),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275property"]("value",e),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e," ")}}function L(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-opt-group",11),p["\u0275\u0275template"](1,A,2,2,"button",7),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]().tuiLet;p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",e)}}function k(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-opt-group",9),p["\u0275\u0275template"](1,L,2,1,"tui-opt-group",10),p["\u0275\u0275elementEnd"]()),2&e){const e=t.tuiLet,n=p["\u0275\u0275nextContext"]().$implicit;p["\u0275\u0275property"]("label",n.name),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",e.length)}}function $(e,t){if(1&e&&(p["\u0275\u0275elementContainerStart"](0),p["\u0275\u0275template"](1,k,2,2,"tui-opt-group",8),p["\u0275\u0275pipe"](2,"tuiFilter"),p["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("tuiLet",p["\u0275\u0275pipeBind3"](2,1,e.items,n.filter,n.value))}}let I=(()=>{class e{constructor(){this.items=[],this.value="",this.all=l.EMPTY_ARRAY,this.filter=l.TUI_DEFAULT_MATCHER}onArrowDown(e,t){e.onFocus(t,!0)}onKeyDown(e,t){t&&Object(c.isEditingKey)(e)&&Object(l.setNativeFocused)(t,!0,!0)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["custom-list"]],inputs:{items:"items"},decls:8,vars:4,consts:[["iconContent","tuiIconSearchLarge","iconAlign","left",1,"tui-space_all-2",3,"tuiTextfieldLabelOutside","value","valueChange","keydown.arrowDown.prevent"],["input",""],["emptyContent","No results found",3,"keydown"],["list",""],[4,"ngIf"],[4,"ngFor","ngForOf"],["tuiOption","",3,"value"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],[3,"label",4,"tuiLet"],[3,"label"],["tuiMultiSelectGroup","",4,"ngIf"],["tuiMultiSelectGroup",""]],template:function(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-primitive-textfield",0,1),p["\u0275\u0275listener"]("valueChange",(function(e){return t.value=e}))("keydown.arrowDown.prevent",(function(n){p["\u0275\u0275restoreView"](e);const o=p["\u0275\u0275reference"](5);return t.onArrowDown(o,n.target)})),p["\u0275\u0275text"](2," Search categories\n"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](3,"hr"),p["\u0275\u0275elementStart"](4,"tui-data-list",2,3),p["\u0275\u0275listener"]("keydown",(function(n){p["\u0275\u0275restoreView"](e);const o=p["\u0275\u0275reference"](1);return t.onKeyDown(n.key,o.nativeFocusableElement)})),p["\u0275\u0275template"](6,M,4,2,"tui-opt-group",4),p["\u0275\u0275template"](7,$,3,5,"ng-container",5),p["\u0275\u0275elementEnd"]()}2&e&&(p["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("value",t.value),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("ngIf",!t.value),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",t.items))},directives:[b.a,y.a,S.b,h.a,o.t,o.s,x.a,C.a,E.a,T.a,w.a],pipes:[O.a],encapsulation:2,changeDetection:0}),e})();function _(e,t){if(1&e&&p["\u0275\u0275element"](0,"custom-list",2),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",e.items)}}const F={name:"Income",items:["Donations","Product placement","Sponsorship","Found on the street","Unexpected inheritance","Investments","Color copier"]},R={name:"Expenses",items:["Energy drinks","Coffee","Ramen","Bills","Back medicine","Warhammer 40000 figurines"]};let P=(()=>{class e{constructor(){this.value=[],this.items=[F,R],this.identityMatcher=(e,t)=>e.length===t.length&&e.every(e=>-1!==t.indexOf(e)),this.valueContent=({$implicit:e})=>{if(!e.length)return"All";const t=this.items.find(({items:t})=>this.identityMatcher(e,t));return t?t.name+" only":"Selected: "+e.length}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-data-list-example-4"]],decls:3,vars:3,consts:[[1,"control",3,"identityMatcher","valueContent","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-select",0),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),p["\u0275\u0275text"](1," Open-source budget "),p["\u0275\u0275template"](2,_,1,1,"custom-list",1),p["\u0275\u0275elementEnd"]()),2&e&&p["\u0275\u0275property"]("identityMatcher",t.identityMatcher)("valueContent",t.valueContent)("ngModel",t.value)},directives:[f.a,g.a,i.NgControlStatus,i.NgModel,v.a,I],styles:[".control[_ngcontent-%COMP%] { width: 320px }"],changeDetection:0}),e})();var G=n("aPft"),z=n("q7Lq"),V=n("zV1d"),N=n("ONKv");function H(e,t){1&e&&p["\u0275\u0275element"](0,"tui-svg",10)}function B(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"a",7,8),p["\u0275\u0275text"](2),p["\u0275\u0275template"](3,H,1,0,"tui-svg",9),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=p["\u0275\u0275reference"](1);p["\u0275\u0275property"]("routerLink",e.routerLink),p["\u0275\u0275attribute"]("aria-checked",n.isActive),p["\u0275\u0275advance"](2),p["\u0275\u0275textInterpolate1"](" ",e.label," "),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngIf",n.isActive)}}function j(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-opt-group",5),p["\u0275\u0275template"](1,B,4,4,"a",6),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275property"]("label",e.label),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",e.items)}}function W(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-data-list",3),p["\u0275\u0275template"](1,j,2,2,"tui-opt-group",4),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",e.groups)}}let Z=(()=>{class e{constructor(){this.arrow=u.TUI_ARROW,this.groups=[{label:$localize`Components`,items:[{label:"Input",routerLink:"/components/input"},{label:"Select",routerLink:"/components/select"},{label:"DataList",routerLink:"/components/data-list"}]},{label:$localize`Styles`,items:[{label:$localize`Icons`,routerLink:"/icons"},{label:$localize`Typography`,routerLink:"/typography"}]},{label:"",items:[{label:$localize`Changelog`,routerLink:"/changelog"}]}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-data-list-example-1"]],decls:5,vars:2,consts:[[3,"content"],["tuiButton","","type","button",3,"iconRight"],["content",""],["role","menu"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["tuiOption","","role","menuitemradio","routerLinkActive","",3,"routerLink",4,"ngFor","ngForOf"],["tuiOption","","role","menuitemradio","routerLinkActive","",3,"routerLink"],["rla","routerLinkActive"],["src","tuiIconCheckLarge",4,"ngIf"],["src","tuiIconCheckLarge"]],template:function(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),p["\u0275\u0275elementStart"](1,"button",1),p["\u0275\u0275text"](2,"Menu"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](3,W,2,1,"ng-template",null,2,p["\u0275\u0275templateRefExtractor"])),2&e){const e=p["\u0275\u0275reference"](4);p["\u0275\u0275property"]("content",e),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("iconRight",t.arrow)}},directives:[z.a,V.a,h.a,o.s,x.a,C.a,a.e,a.d,o.t,N.a],encapsulation:2,changeDetection:0}),e})();var q=n("1iwt"),J=n("4hRd"),U=n("W2aA");function Y(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",9),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](e);const n=t.tuiLet;return p["\u0275\u0275nextContext"](2).selectOption(n)})),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()}if(2&e){const e=t.tuiLet;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e," ")}}function K(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",9),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](e);const n=t.tuiLet;return p["\u0275\u0275nextContext"](2).selectOption(n)})),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()}if(2&e){const e=t.tuiLet;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e," ")}}function Q(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",9),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](e);const n=t.$implicit;return p["\u0275\u0275nextContext"](3).selectOption(n)})),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e," ")}}function X(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-data-list",4),p["\u0275\u0275template"](1,Q,2,1,"button",10),p["\u0275\u0275elementStart"](2,"button",6),p["\u0275\u0275text"](3," Nested menu "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]().$implicit,t=p["\u0275\u0275reference"](10),n=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("tuiActiveZoneParent",e),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",n.burgers),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("tuiDropdownContent",t)("tuiDropdownSided",!0)}}function ee(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"button",9),p["\u0275\u0275listener"]("click",(function(){p["\u0275\u0275restoreView"](e);const n=t.$implicit;return p["\u0275\u0275nextContext"](3).selectOption(n)})),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e," ")}}function te(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-data-list"),p["\u0275\u0275template"](1,ee,2,1,"button",10),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"](2);p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngForOf",e.drinks)}}function ne(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-data-list",4),p["\u0275\u0275template"](1,Y,2,1,"button",5),p["\u0275\u0275elementStart"](2,"button",6),p["\u0275\u0275text"](3," Burgers "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"button",6),p["\u0275\u0275text"](5," Drinks "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](6,K,2,1,"button",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](7,X,4,4,"ng-template",null,7,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275template"](9,te,2,1,"ng-template",null,8,p["\u0275\u0275templateRefExtractor"])),2&e){const e=t.$implicit,n=p["\u0275\u0275reference"](8),o=p["\u0275\u0275reference"](10);p["\u0275\u0275property"]("tuiActiveZoneParent",e),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("tuiLet","French Fries"),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("tuiDropdownContent",n)("tuiDropdownSided",!0),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("tuiDropdownContent",o)("tuiDropdownSided",!0),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("tuiLet","Ice Cream")}}let oe=(()=>{class e{constructor(e){this.dialogService=e,this.dropdownOpen=!1,this.burgers=["Classic","Cheeseburger","Royal Cheeseburger"],this.drinks=["Cola","Tea","Coffee","Slurm"]}selectOption(e){this.dropdownOpen=!1,this.dialogService.open("You selected "+e).subscribe()}}return e.\u0275fac=function(t){return new(t||e)(p["\u0275\u0275directiveInject"](c.TuiDialogService))},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-data-list-example-2"]],decls:5,vars:3,consts:[[3,"content","open","openChange"],["dropdown",""],["tuiIconButton","","appearance","flat","icon","tuiIconMoreVer","type","button",3,"pseudoHovered"],["content",""],["tuiDataListDropdownManager","",3,"tuiActiveZoneParent"],["tuiOption","",3,"click",4,"tuiLet"],["tuiOption","","tuiDropdown","","tuiDropdownAlign","right",3,"tuiDropdownContent","tuiDropdownSided"],["burgersTmp",""],["drinksTmp",""],["tuiOption","",3,"click"],["tuiOption","",3,"click",4,"ngFor","ngForOf"]],template:function(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0,1),p["\u0275\u0275listener"]("openChange",(function(e){return t.dropdownOpen=e})),p["\u0275\u0275element"](2,"button",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](3,ne,11,7,"ng-template",null,3,p["\u0275\u0275templateRefExtractor"])),2&e){const e=p["\u0275\u0275reference"](1),n=p["\u0275\u0275reference"](4);p["\u0275\u0275property"]("content",n)("open",t.dropdownOpen),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("pseudoHovered",e.open||null)}},directives:[z.a,V.a,h.a,q.a,J.a,E.a,C.a,U.a,o.s],encapsulation:2,changeDetection:0}),e})();function ie(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"button",8),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275property"]("value",e),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e," ")}}function ae(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"button",8),p["\u0275\u0275text"](1),p["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;p["\u0275\u0275property"]("value",e),p["\u0275\u0275advance"](1),p["\u0275\u0275textInterpolate1"](" ",e," ")}}function re(e,t){if(1&e){const e=p["\u0275\u0275getCurrentView"]();p["\u0275\u0275elementStart"](0,"tui-data-list"),p["\u0275\u0275elementStart"](1,"tui-opt-group",4),p["\u0275\u0275listener"]("ngModelChange",(function(t){return p["\u0275\u0275restoreView"](e),p["\u0275\u0275nextContext"]().value=t})),p["\u0275\u0275elementStart"](2,"tui-opt-group",5),p["\u0275\u0275template"](3,ie,2,2,"button",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"tui-opt-group",7),p["\u0275\u0275template"](5,ae,2,2,"button",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()}if(2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("ngModel",e.value),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",e.burgers),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("ngForOf",e.drinks)}}let le=(()=>{class e{constructor(){this.value=[],this.burgers=["Hamburger","Cheeseburger"],this.drinks=["Cola","Tea","Coffee","Slurm"],this.arrow=u.TUI_ARROW}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-data-list-example-3"]],decls:7,vars:4,consts:[[3,"content"],["dropdown",""],["tuiIconButton","","appearance","flat","type","button",3,"icon","pseudoHovered"],["content",""],["tuiMultiSelectGroup","",3,"ngModel","ngModelChange"],["label","Food"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["label","Drinks"],["tuiOption","",3,"value"]],template:function(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0,1),p["\u0275\u0275element"](2,"button",2),p["\u0275\u0275elementEnd"](),p["\u0275\u0275template"](3,re,6,3,"ng-template",null,3,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275elementStart"](5,"p"),p["\u0275\u0275text"](6),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275reference"](1),n=p["\u0275\u0275reference"](4);p["\u0275\u0275property"]("content",n),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("icon",t.arrow)("pseudoHovered",e.open||null),p["\u0275\u0275advance"](4),p["\u0275\u0275textInterpolate"](t.value)}},directives:[z.a,V.a,h.a,x.a,T.a,w.a,i.NgControlStatus,i.NgModel,o.s,C.a],encapsulation:2,changeDetection:0}),e})();var ce,ue=n("yHor"),pe=n("zGJC"),de=n("u8jZ");ce=$localize`:␟f9d15c776cab9b795d1216098674f3a131512347␟7885675783778291482:${"\ufffd#2\ufffd"}:START_TAG_CODE:DataList${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to make lists or menus `;const me=["heading",$localize`:␟dc60677d5a906e69f38a5cf9da7f2eb03931bea0␟7565716024468232322:Links`];var se;se=$localize`:␟33c95483482ed8be69df5fcc5fa64b529f061437␟8571278609349877603: Import ${"\ufffd#9\ufffd"}:START_TAG_CODE:TuiArrowModule${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: if you need a rotated arrow `;const fe=["heading",$localize`:␟54b9e6243f5a4c0cd2ae56b50aafa4bc56a49365␟1033431736972256177:Submenu`];var ge,ve,be,ye,Se,he,xe;function Ce(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,ce),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-example",2),p["\u0275\u0275element"](4,"tui-data-list-example-4"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](6,me),p["\u0275\u0275elementStart"](7,"tui-notification",4),p["\u0275\u0275i18nStart"](8,se),p["\u0275\u0275element"](9,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](10,"tui-data-list-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"tui-doc-example",5),p["\u0275\u0275i18nAttributes"](12,fe),p["\u0275\u0275element"](13,"tui-data-list-example-2"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](14,"tui-doc-example",6),p["\u0275\u0275elementStart"](15,"tui-notification",4),p["\u0275\u0275i18nStart"](16,ge),p["\u0275\u0275element"](17,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](18,"tui-data-list-example-3"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example4),p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",e.example1),p["\u0275\u0275advance"](6),p["\u0275\u0275property"]("content",e.example2),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example3)}}function Ee(e,t){1&e&&p["\u0275\u0275i18n"](0,ve)}function Te(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,be),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275element"](2,"em"),p["\u0275\u0275element"](3,"code"),p["\u0275\u0275i18nEnd"]())}function we(e,t){1&e&&p["\u0275\u0275i18n"](0,ye)}function Oe(e,t){1&e&&(p["\u0275\u0275i18nStart"](0,Se),p["\u0275\u0275element"](1,"code"),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275i18nEnd"]())}function De(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"h2"),p["\u0275\u0275text"](1,"DataList"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-documentation"),p["\u0275\u0275template"](3,Ee,1,0,"ng-template",7),p["\u0275\u0275template"](4,Te,4,0,"ng-template",8),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"h2"),p["\u0275\u0275text"](6,"OptGroup"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"tui-doc-documentation"),p["\u0275\u0275template"](8,we,1,0,"ng-template",9),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"h2"),p["\u0275\u0275text"](10,"Option"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"tui-doc-documentation"),p["\u0275\u0275template"](12,Oe,3,0,"ng-template",10),p["\u0275\u0275elementEnd"]())}function Me(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",11),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,he),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",12),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,xe),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",13),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",e.exampleImportModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}ge=$localize`:␟992f9aba2dd9e12cab5fdf16b03c54dae8f9703d␟8033471336283613576: Import ${"\ufffd#17\ufffd"}:START_TAG_CODE:TuiMultiSelectModule${"\ufffd/#17\ufffd"}:CLOSE_TAG_CODE:`,ve=$localize`:␟1396678e9343696e0ba4990b23fd3107ffaf1504␟314511360780648423: Content to display when there are no options inside `,be=$localize`:␟f57d8b200294d6e6e0b0f1fb7efe62ed640add20␟6904648380497078003: Native accessability role — ${"[\ufffd#1\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:listbox${"[\ufffd/#1\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd#2\ufffd"}:START_EMPHASISED_TEXT:(default)${"\ufffd/#2\ufffd"}:CLOSE_EMPHASISED_TEXT: or ${"[\ufffd#1\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:menu${"[\ufffd/#1\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: for common usage `,be=p["\u0275\u0275i18nPostprocess"](be),ye=$localize`:␟8c918c45e9c54837c94f25f61a68988a3b272035␟2059095426405918218: Group label `,Se=$localize`:␟1d0af9e8a86558c15856025e01265669cfcd5d2f␟1098780179882136171: Native accessability role. Set ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:aria-checked${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: for all roles except ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:menuitem${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: (see sample) `,Se=p["\u0275\u0275i18nPostprocess"](Se),he=$localize`:␟5328da1720bf2dec4cb435be14f74ff37d2609ef␟944971838556589360: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiDataListModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,xe=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let Ae=(()=>{class e{constructor(){this.exampleImportModule=n.e(272).then(n.bind(null,"YcGW")),this.exampleInsertTemplate=n.e(273).then(n.bind(null,"H5Vb")),this.example1={TypeScript:n.e(263).then(n.bind(null,"mT/k")),HTML:n.e(262).then(n.bind(null,"JISo"))},this.example2={TypeScript:n.e(265).then(n.bind(null,"kal1")),HTML:n.e(264).then(n.bind(null,"qmmB"))},this.example3={TypeScript:n.e(267).then(n.bind(null,"b1T+")),HTML:n.e(266).then(n.bind(null,"tAWm"))},this.example4={TypeScript:n.e(271).then(n.bind(null,"CqnN")),HTML:n.e(270).then(n.bind(null,"6C+V")),"custom-list.component.ts":n.e(268).then(n.bind(null,"CpUQ")),"custom-list.template.html":n.e(269).then(n.bind(null,"gzy9"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-data-list"]],decls:4,vars:0,consts:[["header","DataList","package","CORE","type","components"],["pageTab",""],["id","custom","heading","Custom list",3,"content"],["id","links",3,"content",6,"heading"],[1,"tui-space_bottom-3"],["id","submenu",3,"content",6,"heading"],["id","control","heading","Form control",3,"content"],["documentationPropertyName","emptyContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","role","documentationPropertyMode","input","documentationPropertyType","TuiDataListRole"],["documentationPropertyName","label","documentationPropertyMode","input","documentationPropertyType","string"],["documentationPropertyName","role","documentationPropertyMode","input","documentationPropertyType","TuiOptionRole"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275template"](1,Ce,19,4,"ng-template",1),p["\u0275\u0275template"](2,De,13,0,"ng-template",1),p["\u0275\u0275template"](3,Me,10,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[d.a,m.a,s.a,P,G.a,Z,oe,le,ue.a,pe.a,de.a],encapsulation:2,changeDetection:0}),e})(),Le=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,l.TuiLetModule,u.TuiMultiSelectModule,c.TuiPrimitiveTextfieldModule,u.TuiSelectModule,c.TuiTextfieldControllerModule,u.TuiArrowModule,c.TuiNotificationModule,c.TuiDataListModule,c.TuiSvgModule,c.TuiHostedDropdownModule,c.TuiButtonModule,c.TuiDropdownModule,l.TuiActiveZoneModule,r.i,a.f.forChild(Object(r.p)(Ae)),l.TuiFilterPipeModule]]}),e})()}}]);