(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[38072],{33742:(t,e,n)=>{n.d(e,{Kx:()=>u.Kx,ch:()=>u.ch,I3:()=>O.I,yj:()=>O.y,dn:()=>w.dn,Cc:()=>w.Cc,Vl:()=>D.Vl,R9:()=>D.R9,Wb:()=>v.W,yc:()=>y.y,Bl:()=>l.B,lk:()=>p,DZ:()=>g.D,eO:()=>i.e,tk:()=>c,YX:()=>f.Y,LU:()=>b.L,PQ:()=>m.P,gJ:()=>T.g,c4:()=>d.c,jz:()=>P,WT:()=>S.W,y3:()=>Y,yS:()=>C.y,jY:()=>M.j,Kt:()=>I.K,Ws:()=>E.W,EE:()=>z.E,Nx:()=>_.N,fu:()=>A.f,AS:()=>u.AS,Jz:()=>w.Jz,PT:()=>D.PT});var i=n(52061),o=n(12057),s=n(64862),r=n(26485),a=n(74788);let c=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[[o.ez,s.TuiSvgModule,s.TuiButtonModule,r.TuiTilesModule]]}),t})();var u=n(47543),l=n(62818),h=n(88002),d=n(19582);let p=(()=>{class t{constructor(t){this.table=t,this.directionOrderChange=this.table.directionChange.pipe((0,h.U)((t=>1===t?"asc":"desc")))}set directionOrder(t){this.table.direction="asc"===t?1:-1}}return t.ɵfac=function(e){return new(e||t)(a.Y36(d.c))},t.ɵdir=a.lG2({type:t,selectors:[["table","tuiTable","","tuiDirectionOrder",""]],inputs:{directionOrder:"directionOrder"},outputs:{directionOrderChange:"directionOrderChange"}}),t})();var g=n(78979),f=n(17706),b=n(35459),m=n(61006),T=n(10435),_=n(13073),C=n(23301),O=n(15315),v=n(35436),y=n(30479),x=n(4797),k=n(89570);let P=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[[o.ez,k.wq,x.TuiMapperPipeModule,s.TuiSvgModule]]}),t})();var w=n(73446),M=n(57681),I=n(48598),E=n(96408),z=n(222),A=n(84190),S=n(56946);let Y=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=a.oAB({type:t}),t.ɵinj=a.cJS({imports:[[o.ez,s.TuiButtonModule,s.TuiLinkModule,s.TuiHostedDropdownModule,s.TuiDataListModule,s.TuiSvgModule,k.wq]]}),t})();var D=n(10450)},52061:(t,e,n)=>{n.d(e,{e:()=>p});var i=n(74788),o=n(47119),s=n(47543),r=n(92309),a=n(12057),c=n(5111),u=n(1065),l=n(34880),h=n(76189);function d(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"tui-tile",2),i.TgZ(1,"div",3),i._UZ(2,"tui-svg",4),i._uU(3),i.TgZ(4,"button",5),i.NdJ("click",(function(){const e=i.CHM(t).$implicit;return i.oxw().toggle(e)}))("keydown.arrowDown.prevent",(function(){const e=i.CHM(t).index;return i.oxw().move(e,1)}))("keydown.arrowUp.prevent",(function(){const e=i.CHM(t).index;return i.oxw().move(e,-1)})),i.ALo(5,"async"),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=e.$implicit,n=e.index,o=i.oxw();i.Udp("order",o.order.get(n)),i.xp6(2),i.Q6J("src",o.options.icons.drag),i.xp6(1),i.hij(" ",t," "),i.xp6(1),i.ekj("t-button_hidden",!o.isEnabled(t)),i.Q6J("icon",o.getIcon(t))("title",i.lcZ(5,8,o.showHideText$))}}let p=(()=>{class t{constructor(t,e){this.options=t,this.showHideText$=e,this.dragging=!1,this.enabled=[],this.itemsChange=new i.vpe,this.enabledChange=new i.vpe,this.order=new Map,this.unsortedItems=[]}set items(t){t.length===this.unsortedItems.length&&t.every((t=>this.unsortedItems.includes(t)))||(this.unsortedItems=t)}noop(){}onDrag(){this.dragging=!0}onDrop(){this.dragging&&(this.dragging=!1,this.updateItems())}isEnabled(t){return this.enabled.includes(t)}getIcon(t){return this.isEnabled(t)?this.options.icons.hide:this.options.icons.show}toggle(t){this.enabled=this.isEnabled(t)?this.enabled.filter((e=>e!==t)):this.enabled.concat(t),this.updateEnabled()}move(t,e){var n;const i=null!==(n=this.order.get(t))&&void 0!==n?n:t;if(!i&&e<0||i===this.unsortedItems.length-1&&e>0)return;const o=i+e,s=Array.from(this.order.values()).findIndex((t=>t===o));this.order.set(t,o),this.order.set(s,i),this.order=new Map(this.order),this.updateItems()}getSortedItems(){const t=new Array(this.unsortedItems.length);return this.unsortedItems.forEach(((e,n)=>{var i;t[null!==(i=this.order.get(n))&&void 0!==i?i:n]=e})),t}updateItems(){this.itemsChange.emit(this.getSortedItems()),this.updateEnabled()}updateEnabled(){const t=this.getSortedItems().filter((t=>this.isEnabled(t)));this.enabled=t,this.enabledChange.emit(t)}}return t.ɵfac=function(e){return new(e||t)(i.Y36(s.ch),i.Y36(o.s))},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-reorder"]],hostBindings:function(t,e){1&t&&i.NdJ("focusout.stop",(function(){return e.noop()}))("pointerdown.silent",(function(){return e.onDrag()}))("pointerup.silent",(function(){return e.onDrop()}),!1,i.evT)},inputs:{items:"items",enabled:"enabled"},outputs:{itemsChange:"itemsChange",enabledChange:"enabledChange"},decls:2,vars:2,consts:[[1,"t-wrapper",3,"order","orderChange"],["tuiTileHandle","",3,"order",4,"ngFor","ngForOf"],["tuiTileHandle",""],[1,"t-item"],[1,"t-icon",3,"src"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-button",3,"icon","title","click","keydown.arrowDown.prevent","keydown.arrowUp.prevent"]],template:function(t,e){1&t&&(i.TgZ(0,"tui-tiles",0),i.NdJ("orderChange",(function(t){return e.order=t})),i.YNc(1,d,6,10,"tui-tile",1),i.qZA()),2&t&&(i.Q6J("order",e.order),i.xp6(1),i.Q6J("ngForOf",e.unsortedItems))},directives:[r.U,a.sg,c.D,u.$,l.P,h.v],pipes:[a.Ov],styles:["[_nghost-%COMP%]{display:block;font:var(--tui-font-text-s);padding:.5rem 0;-webkit-user-select:none;-moz-user-select:none;user-select:none}.t-wrapper[_ngcontent-%COMP%]{cursor:ns-resize;grid-auto-rows:2rem}.t-item[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;height:2rem;align-items:center;padding:0 .75rem;background:var(--tui-base-01)}.t-item[_ngcontent-%COMP%]:hover{background:var(--tui-base-02)}.t-item[_ngcontent-%COMP%]:hover   .t-button[_ngcontent-%COMP%]{opacity:1}.t-icon[_ngcontent-%COMP%]{margin-right:.5rem;color:var(--tui-base-05)}.t-button[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;margin-left:auto;opacity:0}.t-button_hidden[_ngcontent-%COMP%], .t-button[_ngcontent-%COMP%]:focus{opacity:1}"],changeDetection:0}),t})()},47543:(t,e,n)=>{n.d(e,{AS:()=>r,Kx:()=>o,ch:()=>s});var i=n(4797);const o={icons:{hide:"tuiIconEye",show:"tuiIconEyeOff",drag:"tuiIconDrag"}},s=(0,i.tuiCreateToken)(o);function r(t){return(0,i.tuiProvideOptions)(s,t,o)}},56946:(t,e,n)=>{n.d(e,{W:()=>x});var i=n(74788),o=n(47119),s=n(64862),r=n(10450),a=n(12057),c=n(62939),u=n(66596),l=n(20933),h=n(35065),d=n(89570),p=n(34880),g=n(76189);function f(t,e){if(1&t&&(i.ynx(0),i._uU(1),i.TgZ(2,"strong",6),i._uU(3),i.qZA(),i.BQk()),2&t){const t=i.oxw().ngIf,e=i.oxw();i.xp6(1),i.hij(" ",t.pages," "),i.xp6(2),i.Oqu(e.pages)}}function b(t,e){if(1&t&&(i.ynx(0),i._uU(1),i.BQk()),2&t){const t=e.polymorpheusOutlet;i.xp6(1),i.hij(" ",t," ")}}function m(t,e){if(1&t&&i._UZ(0,"tui-svg",13),2&t){const t=i.oxw(4);i.Q6J("src",t.commonIcons.check)}}function T(t,e){1&t&&i._UZ(0,"span",14)}const _=function(t,e){return{$implicit:t,total:e}};function C(t,e){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"button",9),i.NdJ("click",(function(){const e=i.CHM(t).$implicit;return i.oxw(3).onItem(e)})),i.YNc(2,b,2,1,"ng-container",10),i.YNc(3,m,1,1,"tui-svg",11),i.YNc(4,T,1,0,"ng-template",null,12,i.W1O),i.qZA(),i.BQk()}if(2&t){const t=e.$implicit,n=i.MAs(5),o=i.oxw(3);i.xp6(2),i.Q6J("polymorpheusOutlet",o.options.sizeOptionContent)("polymorpheusOutletContext",i.WLB(4,_,t,o.total)),i.xp6(1),i.Q6J("ngIf",t===o.size)("ngIfElse",n)}}function O(t,e){if(1&t&&(i.TgZ(0,"tui-data-list",7),i.YNc(1,C,6,7,"ng-container",8),i.qZA()),2&t){const t=i.oxw(2);i.xp6(1),i.Q6J("ngForOf",t.items)}}function v(t,e){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"button",15),i.NdJ("click",(function(){return i.CHM(t),i.oxw(2).back()})),i.qZA(),i.TgZ(2,"button",16),i.NdJ("click",(function(){return i.CHM(t),i.oxw(2).forth()})),i.qZA(),i.BQk()}if(2&t){const t=e.ngIf,n=i.oxw(2);i.xp6(1),i.Q6J("disabled",n.leftDisabled)("icon",n.icons.decrement)("title",t[0]),i.xp6(1),i.Q6J("disabled",n.rightDisabled)("icon",n.icons.increment)("title",t[1])}}function y(t,e){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"span",1),i.YNc(2,f,4,2,"ng-container",0),i.qZA(),i.TgZ(3,"span",2),i._uU(4),i.TgZ(5,"tui-hosted-dropdown",3),i.NdJ("openChange",(function(e){return i.CHM(t),i.oxw().open=e})),i.TgZ(6,"button",4),i.TgZ(7,"strong"),i._uU(8),i.qZA(),i.qZA(),i.YNc(9,O,2,1,"ng-template",null,5,i.W1O),i.qZA(),i._uU(11),i.TgZ(12,"strong",6),i._uU(13),i.qZA(),i.qZA(),i.YNc(14,v,3,6,"ng-container",0),i.ALo(15,"async"),i.BQk()}if(2&t){const t=e.ngIf,n=i.MAs(10),o=i.oxw();i.xp6(2),i.Q6J("ngIf",o.options.showPages),i.xp6(2),i.hij(" ",t.linesPerPage," "),i.xp6(1),i.Q6J("content",n)("open",o.open),i.xp6(3),i.AsE("",o.start+1,"–",o.end,""),i.xp6(3),i.hij(" ",t.of," "),i.xp6(2),i.Oqu(o.total),i.xp6(1),i.Q6J("ngIf",i.lcZ(15,9,o.spinTexts$))}}let x=(()=>{class t{constructor(t,e,n,o,s){this.icons=t,this.spinTexts$=e,this.texts$=n,this.options=o,this.commonIcons=s,this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.pageChange=new i.vpe,this.sizeChange=new i.vpe,this.paginationChange=new i.vpe,this.open=!1}get pages(){return Math.ceil(this.total/this.size)}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}onItem(t){const{start:e}=this;this.size=t,this.sizeChange.emit(t),this.open=!1,this.page=Math.floor(e/this.size),this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}back(){this.page--,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}forth(){this.page++,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}}return t.ɵfac=function(e){return new(e||t)(i.Y36(s.TUI_SPIN_ICONS),i.Y36(s.TUI_SPIN_TEXTS),i.Y36(o.J),i.Y36(r.R9),i.Y36(s.TUI_COMMON_ICONS))},t.ɵcmp=i.Xpm({type:t,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{pageChange:"pageChange",sizeChange:"sizeChange",paginationChange:"paginationChange"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],[3,"content","open","openChange"],["tuiLink","","type","button"],["content",""],[1,"t-strong"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","icon","title","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","icon","title","click"]],template:function(t,e){1&t&&(i.YNc(0,y,16,11,"ng-container",0),i.ALo(1,"async")),2&t&&i.Q6J("ngIf",i.lcZ(1,1,e.texts$))},directives:[a.O5,c.o,u.V,l.q,a.sg,h.v,d.Li,p.P,g.v],pipes:[a.Ov],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),t})()},10450:(t,e,n)=>{n.d(e,{PT:()=>r,R9:()=>s,Vl:()=>o});var i=n(4797);const o={sizeOptionContent:function({$implicit:t}){return`${t}`},showPages:!0,items:[10,20,50,100],size:10},s=(0,i.tuiCreateToken)(o);function r(t){return(0,i.tuiProvideOptions)(s,t,o)}},62818:(t,e,n)=>{n.d(e,{B:()=>o});var i=n(74788);let o=(()=>{class t{constructor(t){this.template=t,this.tuiCell=""}}return t.ɵfac=function(e){return new(e||t)(i.Y36(i.Rgc))},t.ɵdir=i.lG2({type:t,selectors:[["","tuiCell",""]],inputs:{tuiCell:"tuiCell"}}),t})()},78979:(t,e,n)=>{n.d(e,{D:()=>o});var i=n(74788);let o=(()=>{class t{constructor(t){this.template=t}}return t.ɵfac=function(e){return new(e||t)(i.Y36(i.Rgc))},t.ɵdir=i.lG2({type:t,selectors:[["","tuiHead",""]],inputs:{tuiHead:"tuiHead"}}),t})()},17706:(t,e,n)=>{n.d(e,{Y:()=>h});var i=n(12057),o=n(74788),s=n(4797),r=n(64862),a=n(43190),c=n(87519),u=n(88002),l=n(46782);let h=(()=>{class t{constructor(t,e,n){this.doc=t,this.el=e,this.parentRef=n,this.tuiResized=(0,s.tuiTypedFromEvent)(this.el.nativeElement,"mousedown").pipe((0,s.tuiPreventDefault)(),(0,a.w)((()=>{const{width:t,right:e}=this.parentRef.nativeElement.getBoundingClientRect();return(0,s.tuiTypedFromEvent)(this.doc,"mousemove").pipe((0,c.x)(),(0,u.U)((({clientX:n})=>t+n-e)),(0,l.R)((0,s.tuiTypedFromEvent)(this.doc,"mouseup")))})))}}return t.ɵfac=function(e){return new(e||t)(o.Y36(i.K0),o.Y36(o.SBq),o.Y36(r.TUI_ELEMENT_REF))},t.ɵdir=o.lG2({type:t,selectors:[["","tuiResized",""]],outputs:{tuiResized:"tuiResized"}}),t})()},35459:(t,e,n)=>{n.d(e,{L:()=>o});var i=n(74788);let o=(()=>{class t{constructor(t){this.template=t,this.tuiRowOf=[]}static ngTemplateContextGuard(t,e){return!0}}return t.ɵfac=function(e){return new(e||t)(i.Y36(i.Rgc))},t.ɵdir=i.lG2({type:t,selectors:[["ng-template","tuiRow",""]],inputs:{tuiRowOf:"tuiRowOf"}}),t})()},61006:(t,e,n)=>{n.d(e,{P:()=>l});var i=n(4797),o=n(71289),s=n(45435),r=n(88002),a=n(10435),c=n(19582),u=n(74788);let l=(()=>{class t{constructor(t){this.table=t,this.sortables=i.EMPTY_QUERY,this.tuiSortByChange=this.table.sorterChange.pipe((0,o.g)(0),(0,s.h)((()=>!!this.sortables.length)),(0,r.U)((t=>this.getKey(t)))),this.tuiSortBy=null}set sortBy(t){this.tuiSortBy=t,this.checkSortables()}checkSortables(){this.sortables.forEach((t=>t.check()))}getKey(t){var e;return(null===(e=this.sortables.find((e=>e.sorter===t)))||void 0===e?void 0:e.key)||null}}return t.ɵfac=function(e){return new(e||t)(u.Y36(c.c))},t.ɵdir=u.lG2({type:t,selectors:[["table","tuiTable","","tuiSortBy",""]],contentQueries:function(t,e,n){if(1&t&&u.Suo(n,a.g,5),2&t){let t;u.iGM(t=u.CRH())&&(e.sortables=t)}},inputs:{sortBy:["tuiSortBy","sortBy"]},outputs:{tuiSortByChange:"tuiSortByChange"}}),t})()},10435:(t,e,n)=>{n.d(e,{g:()=>a});var i=n(74788),o=n(96408),s=n(61006),r=n(19582);let a=(()=>{class t{constructor(t,e,n){this.sortBy=t,this.table=e,this.th=n,this.sorter=()=>0}get key(){return this.th.key}ngOnInit(){this.sorter=this.match?this.table.sorter:this.sorter,this.th.sorter=this.sorter}check(){this.match&&this.table.sorter!==this.sorter&&this.table.updateSorter(this.sorter)}get match(){return this.sortBy.tuiSortBy===this.key}}return t.ɵfac=function(e){return new(e||t)(i.Y36((0,i.Gpc)((()=>s.P))),i.Y36(r.c),i.Y36(o.W))},t.ɵdir=i.lG2({type:t,selectors:[["th","tuiTh","","tuiSortable",""]]}),t})()},19582:(t,e,n)=>{n.d(e,{c:()=>l});var i=n(74788),o=n(11693),s=n(4797),r=n(64862),a=n(15315),c=n(30479),u=n(73446);let l=(()=>{class t extends s.AbstractTuiController{constructor(t,e,n,o,s){super(),this.entries$=t,this.mode$=e,this.stuck$=n,this.options=o,this.cdr=s,this.columns=[],this.size=this.options.size,this.direction=this.options.direction,this.directionChange=new i.vpe,this.sorterChange=new i.vpe,this.sorter=()=>0}updateSorterAndDirection(t){this.sorter===t?this.updateDirection(1===this.direction?-1:1):(this.updateSorter(t),this.updateDirection(1))}ngAfterViewInit(){this.cdr.detectChanges()}updateSorter(t){this.sorter=t||(()=>0),this.sorterChange.emit(this.sorter),this.change$.next()}updateDirection(t){this.direction=t,this.directionChange.emit(this.direction),this.change$.next()}}return t.ɵfac=function(e){return new(e||t)(i.Y36(o.te),i.Y36(r.TUI_MODE),i.Y36(a.I),i.Y36(u.Cc),i.Y36(i.sBO))},t.ɵdir=i.lG2({type:t,selectors:[["table","tuiTable",""]],hostAttrs:[2,"border-collapse","separate"],hostVars:1,hostBindings:function(t,e){1&t&&i.NdJ("$.data-mode.attr",(function(){return e.mode$}))("$.class._stuck",(function(){return e.stuck$})),2&t&&i.uIk("data-size",e.size)},inputs:{columns:"columns",size:"size",direction:"direction",sorter:"sorter"},outputs:{directionChange:"directionChange",sorterChange:"sorterChange"},features:[i._Bn(c.y),i.qOj]}),t})()},13073:(t,e,n)=>{n.d(e,{N:()=>r});var i=n(11693),o=n(15315),s=n(74788);let r=(()=>{class t{constructor(t){this.stuck$=t}}return t.ɵfac=function(e){return new(e||t)(s.Y36(o.I))},t.ɵdir=s.lG2({type:t,selectors:[["thead","tuiThead",""]],hostBindings:function(t,e){1&t&&s.NdJ("$.class._stuck",(function(){return e.stuck$}))},features:[s._Bn([o.y,i.te,{provide:i.RL,useValue:"0px 10000px 10000px 10000px"}])]}),t})()},23301:(t,e,n)=>{n.d(e,{y:()=>a});var i=n(64762),o=n(4797),s=n(19582),r=n(74788);class a{constructor(t){this.table=t}transform(t){return this.sort(t,this.table.sorter,this.table.direction)}sort(t,e,n){return[...t].sort(((t,i)=>n*e(t,i)))}}a.ɵfac=function(t){return new(t||a)(r.Y36(s.c,16))},a.ɵpipe=r.Yjl({name:"tuiTableSort",type:a,pure:!1}),(0,i.gn)([o.tuiPure],a.prototype,"sort",null)},15315:(t,e,n)=>{n.d(e,{I:()=>r,y:()=>a});var i=n(74788),o=n(11693),s=n(88002);const r=new i.OlP("[TUI_STUCK]"),a={provide:r,deps:[i.SBq,o.te],useFactory:({nativeElement:t},e)=>{const n=e.pipe((0,s.U)((([{intersectionRatio:t}])=>t<1)));return t["$.class._stuck"]=n,n}}},35436:(t,e,n)=>{n.d(e,{W:()=>c});var i=n(74788),o=n(4797),s=n(64862),r=n(19582),a=n(23301);const c=[o.TuiDestroyService,a.y,{provide:r.c,deps:[[new i.tp0,r.c],i.sBO,o.TuiDestroyService],useFactory:s.tuiWatchedControllerFactory}]},30479:(t,e,n)=>{n.d(e,{y:()=>u});var i=n(74788),o=n(11693),s=n(64862),r=n(26485),a=n(19582),c=n(15315);const u=[{provide:o.RL,useValue:"10000px 10000px 10000px 0px"},{provide:o.op,useValue:[0,1]},{provide:s.TUI_TEXTFIELD_APPEARANCE_DIRECTIVE,useFactory:()=>{const t=new s.TuiTextfieldAppearanceDirective;return t.appearance=s.TuiAppearance.Table,t}},{provide:s.TUI_TEXTFIELD_LABEL_OUTSIDE,useValue:{labelOutside:!0}},{provide:r.TUI_INPUT_COUNT_OPTIONS,deps:[[new i.tp0,r.TUI_INPUT_COUNT_OPTIONS]],useFactory:t=>Object.assign(Object.assign({},t),{hideButtons:!0})},{provide:s.TUI_TEXTFIELD_SIZE,useExisting:(0,i.Gpc)((()=>a.c))},o.te,s.MODE_PROVIDER,c.y]},73446:(t,e,n)=>{n.d(e,{Cc:()=>s,Jz:()=>r,dn:()=>o});var i=n(4797);const o={sticky:!1,resizable:!1,open:!0,size:"m",direction:1,sortIcons:{asc:"tuiIconSortAscending",desc:"tuiIconSortDescending",off:"tuiIconSortOff"}},s=(0,i.tuiCreateToken)(o);function r(t){return(0,i.tuiProvideOptions)(s,t,o)}},57681:(t,e,n)=>{n.d(e,{j:()=>y});var i=n(74788),o=n(4797),s=n(26485),r=n(35459),a=n(19582),c=n(23301),u=n(35436),l=n(73446),h=n(84190),d=n(12057),p=n(89570),g=n(34880),f=n(35271);const b=["tuiTbody",""];function m(t,e){if(1&t&&(i.ynx(0),i._uU(1),i.BQk()),2&t){const t=e.polymorpheusOutlet;i.xp6(1),i.hij(" ",t," ")}}function T(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"tr"),i.TgZ(1,"th",1),i.TgZ(2,"button",2),i.NdJ("click",(function(){return i.CHM(t),i.oxw().onClick()})),i.TgZ(3,"span",3),i.YNc(4,m,2,1,"ng-container",4),i.qZA(),i._UZ(5,"tui-svg",5),i.qZA(),i.qZA(),i.qZA()}if(2&t){const t=i.oxw();i.xp6(1),i.Q6J("colSpan",t.table.columns.length),i.xp6(3),i.Q6J("polymorpheusOutlet",t.heading),i.xp6(1),i.ekj("t-chevron_rotated",t.open),i.Q6J("src",t.arrowOptions.iconLarge)}}function _(t,e){1&t&&(i.ynx(0),i.Hsn(1),i.BQk())}function C(t,e){if(1&t&&(i.GkF(0,7),i.ALo(1,"tuiMapper")),2&t){const t=e.$implicit,n=e.index,o=i.oxw(2);i.Q6J("ngTemplateOutlet",o.row.template)("ngTemplateOutletContext",i.Dn7(1,2,t,o.toContext,n))}}function O(t,e){if(1&t&&(i.ynx(0),i.YNc(1,C,2,6,"ng-container",6),i.BQk()),2&t){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.sorted)}}const v=["*"];let y=(()=>{class t{constructor(t,e,n,s){this.pipe=t,this.options=e,this.arrowOptions=n,this.table=s,this.data=[],this.open=this.options.open,this.openChange=new i.vpe,this.rows=o.EMPTY_QUERY,this.toContext=(t,e)=>({$implicit:t,index:e})}get sorted(){return this.pipe.transform(this.data)}onClick(){this.open=!this.open,this.openChange.emit(this.open)}}return t.ɵfac=function(e){return new(e||t)(i.Y36(c.y),i.Y36(l.Cc),i.Y36(s.TUI_ARROW_OPTIONS),i.Y36((0,i.Gpc)((()=>a.c))))},t.ɵcmp=i.Xpm({type:t,selectors:[["tbody","tuiTbody",""]],contentQueries:function(t,e,n){if(1&t&&(i.Suo(n,r.L,5),i.Suo(n,h.f,4)),2&t){let t;i.iGM(t=i.CRH())&&(e.row=t.first),i.iGM(t=i.CRH())&&(e.rows=t)}},inputs:{data:"data",heading:"heading",open:"open"},outputs:{openChange:"openChange"},features:[i._Bn(u.W)],attrs:b,ngContentSelectors:v,decls:3,vars:3,consts:[[4,"ngIf"],[1,"t-heading",3,"colSpan"],["type","button",1,"t-expand",3,"click"],[1,"t-name"],[4,"polymorpheusOutlet"],[1,"t-chevron",3,"src"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){1&t&&(i.F$t(),i.YNc(0,T,6,5,"tr",0),i.YNc(1,_,2,0,"ng-container",0),i.YNc(2,O,2,1,"ng-container",0)),2&t&&(i.Q6J("ngIf",e.heading),i.xp6(1),i.Q6J("ngIf",e.open),i.xp6(1),i.Q6J("ngIf",e.open&&e.row))},directives:[d.O5,p.Li,g.P,d.sg,d.tP],pipes:[f.c],styles:['[_nghost-%COMP%]{border-color:var(--tui-base-04)}[_nghost-%COMP%]   tr[_ngcontent-%COMP%]{border-color:inherit}.t-expand[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:flex;width:100%;height:100%;align-items:center;box-sizing:border-box;outline:none;font-weight:bold;cursor:pointer;border-color:inherit}.t-expand[_ngcontent-%COMP%]:focus-visible   .t-name[_ngcontent-%COMP%]{background:var(--tui-selection)}.t-expand[_ngcontent-%COMP%]:before, .t-expand[_ngcontent-%COMP%]:after{content:"";position:-webkit-sticky;position:sticky;height:100%;border-left:1px solid;border-color:inherit}.t-expand[_ngcontent-%COMP%]:before{left:0}.t-expand[_ngcontent-%COMP%]:after{right:0}.t-heading[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:var(--tui-height-m);font:var(--tui-font-text-s);padding:0;background:var(--tui-base-02);border-bottom:1px solid var(--tui-base-04);border-color:inherit}.t-heading[_ngcontent-%COMP%]:hover{background:var(--tui-base-03)}table[data-size="l"][_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-heading[_ngcontent-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l)}.t-name[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;left:.75rem;display:inline-block}table[data-size="l"][_nghost-%COMP%]   .t-name[_ngcontent-%COMP%], table[data-size="l"]   [_nghost-%COMP%]   .t-name[_ngcontent-%COMP%]{left:1rem}.t-chevron[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:-webkit-sticky;position:sticky;right:.75rem;margin:0 .6875rem 0 auto}.t-chevron_rotated[_ngcontent-%COMP%]{transform:rotate(180deg)}'],changeDetection:0}),t})()},48598:(t,e,n)=>{n.d(e,{K:()=>a});var i=n(23738),o=n(74788);const s=["tuiTd",""],r=["*"];let a=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["th","tuiTd",""],["td","tuiTd",""]],contentQueries:function(t,e,n){if(1&t&&o.Suo(n,i.a5,5),2&t){let t;o.iGM(t=o.CRH())&&(e.control=t.first)}},hostVars:2,hostBindings:function(t,e){2&t&&o.ekj("_editable",e.control)},attrs:s,ngContentSelectors:r,decls:1,vars:0,template:function(t,e){1&t&&(o.F$t(),o.Hsn(0))},styles:['[_nghost-%COMP%]{position:relative;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;padding:0 .75rem;background:var(--tui-base-01);border:1px solid var(--tui-base-04);border-top:none;box-sizing:border-box;filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translate(0)}}[_nghost-%COMP%]:first-child{left:0}[_nghost-%COMP%]:not(:first-child){border-left:none}._editable[_nghost-%COMP%]:focus-within{z-index:1}._editable[_nghost-%COMP%]{padding:0;vertical-align:top}th[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;z-index:1}th[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;bottom:0;left:100%;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}th[_nghost-%COMP%]:focus-within:not(:disabled){z-index:11}table[data-mode="onDark"][_nghost-%COMP%]:after, table[data-mode="onDark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table._stuck[_nghost-%COMP%], table._stuck   [_nghost-%COMP%]{z-index:10}table._stuck[_nghost-%COMP%]:last-of-type:after, table._stuck   [_nghost-%COMP%]:last-of-type:after{opacity:1}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{font:var(--tui-font-text-m);height:var(--tui-height-l);padding-left:1rem;padding-right:1rem}table[data-size="l"]._editable[_nghost-%COMP%], table[data-size="l"]   ._editable[_nghost-%COMP%]{padding:0}td[_nghost-%COMP%]:focus-within{z-index:1}td[_nghost-%COMP%]:not(:focus-within){z-index:0}'],changeDetection:0}),t})()},222:(t,e,n)=>{n.d(e,{E:()=>T});var i=n(74788),o=n(4797),s=n(39761),r=n(88002),a=n(78979),c=n(19582),u=n(35436),l=n(96408),h=n(12057);const d=["tuiThGroup",""];function p(t,e){if(1&t&&(i.TgZ(0,"th",5),i._uU(1),i.qZA()),2&t){const t=i.oxw(2).$implicit;i.xp6(1),i.hij(" ",t.toString()," ")}}function g(t,e){if(1&t&&i.YNc(0,p,2,1,"th",4),2&t){const t=i.oxw(3);i.Q6J("ngIf",!t.th&&!t.heads.length)}}function f(t,e){if(1&t&&(i.ynx(0,2),i.YNc(1,g,1,1,"ng-template",null,3,i.W1O),i.BQk()),2&t){const t=e.$implicit,n=i.MAs(2),o=i.oxw().ngIf;i.Q6J("ngTemplateOutlet",(null==o[t.toString()]?null:o[t.toString()].template)||n)}}function b(t,e){if(1&t&&(i.ynx(0),i.YNc(1,f,3,1,"ng-container",1),i.BQk()),2&t){const t=i.oxw();i.xp6(1),i.Q6J("ngForOf",t.table.columns)}}const m=["*"];let T=(()=>{class t{constructor(t){this.table=t,this.heads=o.EMPTY_QUERY,this.heads$=null}ngAfterContentInit(){this.heads$=this.heads.changes.pipe((0,s.O)(null),(0,r.U)((()=>this.heads.reduce(((t,e)=>Object.assign(Object.assign({},t),{[e.tuiHead]:e})),{}))))}}return t.ɵfac=function(e){return new(e||t)(i.Y36((0,i.Gpc)((()=>c.c))))},t.ɵcmp=i.Xpm({type:t,selectors:[["tr","tuiThGroup",""]],contentQueries:function(t,e,n){if(1&t&&(i.Suo(n,l.W,5),i.Suo(n,a.D,4)),2&t){let t;i.iGM(t=i.CRH())&&(e.th=t.first),i.iGM(t=i.CRH())&&(e.heads=t)}},features:[i._Bn([u.W])],attrs:d,ngContentSelectors:m,decls:3,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTh","",4,"ngIf"],["tuiTh",""]],template:function(t,e){1&t&&(i.F$t(),i.Hsn(0),i.YNc(1,b,2,1,"ng-container",0),i.ALo(2,"async")),2&t&&(i.xp6(1),i.Q6J("ngIf",i.lcZ(2,1,e.heads$)))},directives:[h.O5,h.sg,h.tP,l.W],pipes:[h.Ov],encapsulation:2,changeDetection:0}),t})()},96408:(t,e,n)=>{n.d(e,{W:()=>m});var i=n(74788),o=n(4797),s=n(64862),r=n(78979),a=n(19582),c=n(73446),u=n(12057),l=n(34880),h=n(17706);const d=["tuiTh",""];function p(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",3),i.NdJ("click",(function(){return i.CHM(t),i.oxw().updateSorterAndDirection()})),i.GkF(1,4),i._uU(2),i.ALo(3,"async"),i._UZ(4,"tui-svg",5),i.qZA()}if(2&t){const t=i.oxw(),e=i.MAs(2);i.ekj("t-sort_sorted",t.isCurrent),i.xp6(1),i.Q6J("ngTemplateOutlet",e),i.xp6(1),i.hij(" ",i.lcZ(3,5,t.table.change$)," "),i.xp6(2),i.Q6J("src",t.icon)}}function g(t,e){1&t&&i.Hsn(0)}function f(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"div",6),i.NdJ("tuiResized",(function(e){return i.CHM(t),i.oxw().onResized(e)})),i.qZA()}}const b=["*"];let m=(()=>{class t{constructor(t,e,n){this.options=t,this.head=e,this.table=n,this.sorter=this.head?(t,e)=>(0,o.tuiDefaultSort)(t[this.key],e[this.key]):null,this.resizable=this.options.resizable,this.sticky=this.options.sticky,this.width=null}get key(){if(!this.head)throw new o.TuiTableSortKeyException;return this.head.tuiHead}get isCurrent(){return!!this.sorter&&!!this.table&&this.sorter===this.table.sorter}get icon(){var t;return this.isCurrent?1===(null===(t=this.table)||void 0===t?void 0:t.direction)?this.options.sortIcons.desc:this.options.sortIcons.asc:this.options.sortIcons.off}updateSorterAndDirection(){var t;null===(t=this.table)||void 0===t||t.updateSorterAndDirection(this.isCurrentAndAscDirection?null:this.sorter)}onResized(t){this.width=t}get isCurrentAndAscDirection(){var t,e;return this.sorter===(null===(t=this.table)||void 0===t?void 0:t.sorter)&&-1===(null===(e=this.table)||void 0===e?void 0:e.direction)}}return t.ɵfac=function(e){return new(e||t)(i.Y36(c.Cc),i.Y36(r.D,8),i.Y36((0,i.Gpc)((()=>a.c)),8))},t.ɵcmp=i.Xpm({type:t,selectors:[["th","tuiTh",""]],hostVars:4,hostBindings:function(t,e){2&t&&(i.Udp("width",e.width,"px"),i.ekj("_sticky",e.sticky))},inputs:{sorter:"sorter",resizable:"resizable",sticky:"sticky"},features:[i._Bn([{provide:s.TUI_ELEMENT_REF,useExisting:i.SBq}])],attrs:d,ngContentSelectors:b,decls:4,vars:3,consts:[["type","button","class","t-sort",3,"t-sort_sorted","click",4,"ngIf","ngIfElse"],["content",""],["class","t-bar",3,"tuiResized",4,"ngIf"],["type","button",1,"t-sort",3,"click"],[3,"ngTemplateOutlet"],[1,"t-sort-icon",3,"src"],[1,"t-bar",3,"tuiResized"]],template:function(t,e){if(1&t&&(i.F$t(),i.YNc(0,p,5,7,"button",0),i.YNc(1,g,1,0,"ng-template",null,1,i.W1O),i.YNc(3,f,1,0,"div",2)),2&t){const t=i.MAs(2);i.Q6J("ngIf",e.sorter&&e.table)("ngIfElse",t),i.xp6(3),i.Q6J("ngIf",e.resizable)}},directives:[u.O5,u.tP,l.P,h.Y],pipes:[u.Ov],styles:['[_nghost-%COMP%]{transition-property:box-shadow;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;top:0;height:var(--tui-height-m);font:var(--tui-font-text-s);text-align:left;font-weight:bold;color:var(--tui-text-02);background:var(--tui-base-01);cursor:default;padding:0 .75rem;box-sizing:border-box;box-shadow:0 .3125rem #ededed00;border:1px solid var(--tui-base-04);filter:opacity(1)}@supports (-webkit-hyphens: none){[_nghost-%COMP%]{transform:translate(0)}}[_nghost-%COMP%]:not(:first-child){border-left:none}._sticky[_nghost-%COMP%], ._stuck   ._sticky[_nghost-%COMP%]{position:-webkit-sticky;position:sticky;z-index:30}._sticky[_nghost-%COMP%]:first-child, ._stuck   ._sticky[_nghost-%COMP%]:first-child{left:0}._sticky[_nghost-%COMP%]:after, ._stuck   ._sticky[_nghost-%COMP%]:after{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;content:"";position:absolute;top:0;left:100%;bottom:0;width:.3125rem;pointer-events:none;background:rgba(237,237,237,.7);opacity:0}._stuck   [_nghost-%COMP%]{z-index:20}tr:not(:first-child)[_nghost-%COMP%], tr:not(:first-child)   [_nghost-%COMP%]{border-top:none}table[data-size="l"][_nghost-%COMP%], table[data-size="l"]   [_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:bold;padding:0 1rem}thead[tuiThead][_nghost-%COMP%], thead[tuiThead]   [_nghost-%COMP%]{position:-webkit-sticky;position:sticky}table._stuck._sticky[_nghost-%COMP%]:after, table._stuck   ._sticky[_nghost-%COMP%]:after{opacity:1}thead[tuiThead]._stuck[_nghost-%COMP%], thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #edededb3}table[data-mode="onDark"][_nghost-%COMP%]:after, table[data-mode="onDark"]   [_nghost-%COMP%]:after{background:rgba(60,60,60,.9)}table[data-mode="onDark"]   thead[tuiThead]._stuck[_nghost-%COMP%], table[data-mode="onDark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]{box-shadow:0 .3125rem #3c3c3ce6}table[data-mode="onDark"]   thead[tuiThead]._stuck[_nghost-%COMP%]:first-child, table[data-mode="onDark"]   thead[tuiThead]._stuck   [_nghost-%COMP%]:first-child{box-shadow:.0625rem .3125rem #3c3c3ce6}table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="l"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-l)}table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="m"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-m)}table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)[_nghost-%COMP%], table[data-size="s"]   thead[tuiThead]   tr:nth-child(2)   [_nghost-%COMP%]{top:var(--tui-height-s)}.t-sort[_ngcontent-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;display:inline-flex;flex-direction:inherit;align-items:center;outline:none;font-weight:bold;cursor:pointer}.t-sort_sorted[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-sort[_ngcontent-%COMP%]:focus-visible{background:var(--tui-selection)}.t-sort[_ngcontent-%COMP%]:hover{color:var(--tui-text-01)}.t-bar[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:0;bottom:0;right:-1px;width:3px;justify-self:flex-end;border-left:2px solid transparent;background:var(--tui-support-12);background-clip:content-box;cursor:ew-resize;opacity:0}.t-bar[_ngcontent-%COMP%]:hover, .t-bar[_ngcontent-%COMP%]:active{opacity:1}'],changeDetection:0}),t})()},84190:(t,e,n)=>{n.d(e,{f:()=>C});var i=n(64762),o=n(74788),s=n(4797),r=n(82298),a=n(43190),c=n(88002),u=n(62818),l=n(19582),h=n(35436),d=n(57681),p=n(12057),g=n(48598);const f=["tuiTr",""];function b(t,e){if(1&t&&(o.TgZ(0,"td",5),o._uU(1),o.qZA()),2&t){const t=e.ngIf,n=o.oxw(2).$implicit;o.xp6(1),o.hij(" ",t[n]," ")}}function m(t,e){if(1&t&&(o.YNc(0,b,2,1,"td",4),o.ALo(1,"async")),2&t){const t=o.oxw(3);o.Q6J("ngIf",o.lcZ(1,1,t.item$))}}function T(t,e){if(1&t&&(o.ynx(0,2),o.YNc(1,m,2,3,"ng-template",null,3,o.W1O),o.BQk()),2&t){const t=e.$implicit,n=o.MAs(2),i=o.oxw().ngIf;o.Q6J("ngTemplateOutlet",(null==i[t]?null:i[t].template)||n)}}function _(t,e){if(1&t&&(o.ynx(0),o.YNc(1,T,3,1,"ng-container",1),o.BQk()),2&t){const t=o.oxw();o.xp6(1),o.Q6J("ngForOf",t.table.columns)}}let C=(()=>{class t{constructor(t,e){this.table=t,this.body=e,this.cells=s.EMPTY_QUERY,this.contentReady$=new r.t(1),this.cells$=this.contentReady$.pipe((0,a.w)((()=>(0,s.tuiQueryListChanges)(this.cells))),(0,c.U)((t=>t.reduce(((t,e)=>Object.assign(Object.assign({},t),{[e.tuiCell]:e})),{})))),this.item$=this.contentReady$.pipe((0,a.w)((()=>(0,s.tuiQueryListChanges)(this.body.rows))),(0,c.U)((t=>this.body.sorted[t.findIndex((t=>t===this))])))}ngAfterContentInit(){return(0,i.mG)(this,void 0,void 0,(function*(){yield Promise.resolve(),this.contentReady$.next(!0)}))}}return t.ɵfac=function(e){return new(e||t)(o.Y36((0,o.Gpc)((()=>l.c))),o.Y36((0,o.Gpc)((()=>d.j))))},t.ɵcmp=o.Xpm({type:t,selectors:[["tr","tuiTr",""]],contentQueries:function(t,e,n){if(1&t&&o.Suo(n,u.B,4),2&t){let t;o.iGM(t=o.CRH())&&(e.cells=t)}},features:[o._Bn([h.W])],attrs:f,decls:2,vars:3,consts:[[4,"ngIf"],[3,"ngTemplateOutlet",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["plain",""],["tuiTd","",4,"ngIf"],["tuiTd",""]],template:function(t,e){1&t&&(o.YNc(0,_,2,1,"ng-container",0),o.ALo(1,"async")),2&t&&o.Q6J("ngIf",o.lcZ(1,1,e.cells$))},directives:[p.O5,p.sg,p.tP,g.K],pipes:[p.Ov],encapsulation:2,changeDetection:0}),t})()},3453:(t,e,n)=>{n.d(e,{Y:()=>i});class i{}},92338:(t,e,n)=>{n.d(e,{C:()=>r});var i=n(4797),o=n(3453),s=n(74788);let r=(()=>{class t extends o.Y{constructor(){super(...arguments),this.filter=i.ALWAYS_TRUE_HANDLER}}return t.ɵfac=function(){let e;return function(n){return(e||(e=s.n5z(t)))(n||t)}}(),t.ɵdir=s.lG2({type:t,selectors:[["","tuiGenericFilter",""]],inputs:{filter:["tuiGenericFilter","filter"]},features:[s._Bn([{provide:o.Y,useExisting:t}]),s.qOj]}),t})()},98777:(t,e,n)=>{n.d(e,{X:()=>d});var i=n(23738),o=n(33742),s=n(41439),r=n(66682),a=n(59193),c=n(87519),u=n(3453),l=n(76215),h=n(74788);let d=(()=>{class t{constructor(t,e,n,i){this.head=t,this.delegate=e,this.control=n,this.filters=i,this.refresh$=(0,s.P)((()=>{var t;return(0,r.T)(this.control.valueChanges||a.E,(null===(t=this.control.statusChanges)||void 0===t?void 0:t.pipe((0,c.x)()))||a.E)}))}ngOnInit(){this.filters.register(this)}ngOnDestroy(){this.filters.unregister(this)}filter(t){const{disabled:e,value:n}=this.control;return!!e||!this.key||this.delegate.filter(t[this.key],n)}get key(){var t;return this.tuiTableFilter||(null===(t=this.head)||void 0===t?void 0:t.tuiHead)}}return t.ɵfac=function(e){return new(e||t)(h.Y36(o.DZ,8),h.Y36(u.Y),h.Y36(i.a5),h.Y36(l.w))},t.ɵdir=h.lG2({type:t,selectors:[["","tuiTableFilter",""]],inputs:{tuiTableFilter:"tuiTableFilter"}}),t})()},76215:(t,e,n)=>{n.d(e,{w:()=>l});var i=n(82298),o=n(54487),s=n(66682),r=n(43190),a=n(39761),c=n(88002),u=n(74788);let l=(()=>{class t{constructor(){this.refresh$=new i.t(1),this.filters=[]}register(t){this.filters=this.filters.concat(t),this.update()}unregister(t){this.filters=this.filters.filter((e=>e!==t)),this.update()}filter(t){return this.refresh$.pipe((0,r.w)(o.y),(0,a.O)(null),(0,c.U)((()=>t.filter((t=>this.check(t))))))}check(t){return this.filters.every((e=>e.filter(t)))}update(){this.refresh$.next((0,s.T)(...this.filters.map((({refresh$:t})=>t))))}}return t.ɵfac=function(e){return new(e||t)},t.ɵdir=u.lG2({type:t,selectors:[["","tuiTableFilters",""]]}),t})()},44910:(t,e,n)=>{n.d(e,{h:()=>s});var i=n(76215),o=n(74788);let s=(()=>{class t{constructor(t){this.filters=t}transform(t){return this.filters.filter(t)}}return t.ɵfac=function(e){return new(e||t)(o.Y36(i.w,16))},t.ɵpipe=o.Yjl({name:"tuiTableFilters",type:t,pure:!0}),t})()},38072:(t,e,n)=>{n.r(e),n.d(e,{AbstractTuiTableFilter:()=>o.Y,TUI_REORDER_DEFAULT_OPTIONS:()=>i.Kx,TUI_REORDER_OPTIONS:()=>i.ch,TUI_STUCK:()=>i.I3,TUI_STUCK_PROVIDER:()=>i.yj,TUI_TABLE_DEFAULT_OPTIONS:()=>i.dn,TUI_TABLE_OPTIONS:()=>i.Cc,TUI_TABLE_PAGINATION_DEFAULT_OPTIONS:()=>i.Vl,TUI_TABLE_PAGINATION_OPTIONS:()=>i.R9,TUI_TABLE_PAGINATION_TEXTS:()=>h.J,TUI_TABLE_PROVIDER:()=>i.Wb,TUI_TABLE_PROVIDERS:()=>i.yc,TUI_TABLE_SHOW_HIDE_MESSAGE:()=>h.s,TuiCellDirective:()=>i.Bl,TuiDirectionOrderDirective:()=>i.lk,TuiGenericFilterDirective:()=>s.C,TuiHeadDirective:()=>i.DZ,TuiReorderComponent:()=>i.eO,TuiReorderModule:()=>i.tk,TuiResizedDirective:()=>i.YX,TuiRowDirective:()=>i.LU,TuiSortByDirective:()=>i.PQ,TuiSortableDirective:()=>i.gJ,TuiTableDirective:()=>i.c4,TuiTableFilterDirective:()=>r.X,TuiTableFiltersDirective:()=>a.w,TuiTableFiltersModule:()=>u,TuiTableFiltersPipe:()=>l.h,TuiTableModule:()=>i.jz,TuiTablePaginationComponent:()=>i.WT,TuiTablePaginationModule:()=>i.y3,TuiTableSortPipe:()=>i.yS,TuiTbodyComponent:()=>i.jY,TuiTdComponent:()=>i.Kt,TuiThComponent:()=>i.Ws,TuiThGroupComponent:()=>i.EE,TuiTheadDirective:()=>i.Nx,TuiTrComponent:()=>i.fu,tuiDefaultSort:()=>d,tuiReorderOptionsProvider:()=>i.AS,tuiTableOptionsProvider:()=>i.Jz,tuiTablePaginationOptionsProvider:()=>i.PT});var i=n(33742),o=n(3453),s=n(92338),r=n(98777),a=n(76215),c=n(74788);let u=(()=>{class t{}return t.ɵfac=function(e){return new(e||t)},t.ɵmod=c.oAB({type:t}),t.ɵinj=c.cJS({}),t})();var l=n(44910),h=n(47119);const d=n(4797).tuiDefaultSort},47119:(t,e,n)=>{n.d(e,{J:()=>r,s:()=>s});var i=n(4797),o=n(72773);const s=(0,i.tuiCreateTokenFromFactory)((0,o.vv)("showHideText")),r=(0,i.tuiCreateTokenFromFactory)((0,o.vv)("paginationTexts"))}}]);