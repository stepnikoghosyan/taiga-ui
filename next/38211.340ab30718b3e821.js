(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[38211],{38211:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiTableBarModule:()=>J});var n=o(88692),a=o(69900),i=o(22864),u=o(39398),c=o(11205),s=o(78129),r=o(50675),l=o(89570),p=o(33076),d=o(38023),m=o(14813),b=o(13528),h=o(64537),g=o(76189),y=o(83074),T=o(62840),f=o(60404),Z=o(43560),B=o(93525),x=o(38868),U=o(30644);const _=["tableBarTemplate"];function w(e,t){if(1&e){const e=h.EpF();h.TgZ(0,"div",2)(1,"button",3),h._uU(2," Save "),h.qZA(),h.TgZ(3,"button",4),h.NdJ("click",(function(){const t=h.CHM(e).$implicit;return h.KtG(t())})),h._uU(4," Cancel "),h.qZA(),h.TgZ(5,"button",5),h._uU(6," Delete "),h.qZA()()}}let v=(()=>{class e{constructor(e){this.tableBarsService=e,this.subscription=new m.w0}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{hasCloseButton:!0,adaptive:!0}).subscribe()}}return e.ɵfac=function(t){return new(t||e)(h.Y36(p.TuiTableBarsService))},e.ɵcmp=h.Xpm({type:e,selectors:[["tui-table-bar-example-1"]],viewQuery:function(e,t){if(1&e&&h.Gf(_,5),2&e){let e;h.iGM(e=h.CRH())&&(t.tableBarTemplate=e.first)}},decls:4,vars:0,consts:[["size","m","tuiButton","","type","button",3,"click"],["tableBarTemplate",""],["tuiMode","onDark",1,"content"],["size","m","tuiButton","","type","button"],["appearance","flat","size","m","tuiButton","","type","button",1,"tui-space_left-3",3,"click"],["appearance","outline","icon","tuiIconTrashLarge","size","m","tuiButton","","type","button",1,"delete-button"]],template:function(e,t){1&e&&(h.TgZ(0,"button",0),h.NdJ("click",(function(){return t.showTableBar()})),h._uU(1," Show TableBar\n"),h.qZA(),h.YNc(2,w,7,0,"ng-template",null,1,h.W1O))},dependencies:[g.v,U.w],styles:[".content[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.875rem 0}.delete-button[_ngcontent-%COMP%]{margin-left:auto}"],changeDetection:0}),e})();const A=["tableBarTemplate"];function C(e,t){if(1&e&&(h.TgZ(0,"p"),h._uU(1," It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content. "),h.qZA(),h.TgZ(2,"tui-doc-example",2),h._UZ(3,"tui-table-bar-example-1"),h.qZA()),2&e){const e=h.oxw();h.xp6(2),h.Q6J("content",e.example1)}}function M(e,t){1&e&&(h.TgZ(0,"p"),h._uU(1,"Some template"),h.qZA())}function q(e,t){1&e&&h._uU(0," Adaptive content ")}function P(e,t){1&e&&h._uU(0," Enable close button ")}function N(e,t){1&e&&h._uU(0," Light / dark mode ")}function S(e,t){if(1&e){const e=h.EpF();h.TgZ(0,"div")(1,"button",3),h.NdJ("click",(function(){h.CHM(e);const t=h.oxw();return h.KtG(t.showTableBar())})),h._uU(2," Show tableBar "),h.qZA(),h.TgZ(3,"button",4),h.NdJ("click",(function(){h.CHM(e);const t=h.oxw();return h.KtG(t.destroy())})),h._uU(4," Hide tableBar "),h.qZA()(),h.YNc(5,M,2,0,"ng-template",null,5,h.W1O),h._UZ(7,"br"),h.TgZ(8,"tui-doc-documentation"),h.YNc(9,q,1,0,"ng-template",6),h.NdJ("documentationPropertyValueChange",(function(t){h.CHM(e);const o=h.oxw();return h.KtG(o.adaptive=t)})),h.YNc(10,P,1,0,"ng-template",7),h.NdJ("documentationPropertyValueChange",(function(t){h.CHM(e);const o=h.oxw();return h.KtG(o.hasCloseButton=t)})),h.YNc(11,N,1,0,"ng-template",8),h.NdJ("documentationPropertyValueChange",(function(t){h.CHM(e);const o=h.oxw();return h.KtG(o.mode=t)})),h.qZA()}if(2&e){const e=h.oxw();h.xp6(9),h.Q6J("documentationPropertyValue",e.adaptive),h.xp6(1),h.Q6J("documentationPropertyValue",e.hasCloseButton),h.xp6(1),h.Q6J("documentationPropertyValues",e.modeVariants)("documentationPropertyValue",e.mode)}}function V(e,t){if(1&e&&(h.TgZ(0,"ol",9)(1,"li")(2,"p"),h._uU(3," Add "),h.TgZ(4,"code"),h._uU(5,"TuiTableBarsHostModule"),h.qZA(),h._uU(6," into your app.module "),h.qZA(),h._UZ(7,"tui-doc-code",10),h.qZA(),h.TgZ(8,"li")(9,"p"),h._uU(10," Add "),h.TgZ(11,"code"),h._uU(12,"tui-table-bars-host"),h.qZA(),h._uU(13," into your app.template "),h.qZA(),h._UZ(14,"tui-doc-code",10),h.qZA(),h.TgZ(15,"li")(16,"p"),h._uU(17," Use "),h.TgZ(18,"code"),h._uU(19,"open"),h.qZA(),h._uU(20," method and subscribe to returned "),h.TgZ(21,"code"),h._uU(22,"Observable"),h.qZA()(),h._UZ(23,"tui-doc-code",11)(24,"tui-doc-code",12),h.qZA(),h.TgZ(25,"li")(26,"p"),h._uU(27," If you use component in lazy loading modules, do not forget to pass into "),h.TgZ(28,"code"),h._uU(29,"new PolymorpheusComponent Injector"),h.qZA(),h._uU(30," of component where you open table bar "),h.qZA(),h._UZ(31,"tui-doc-code",13),h.qZA()()),2&e){const e=h.oxw();h.xp6(7),h.Q6J("code",e.exampleModule),h.xp6(7),h.Q6J("code",e.exampleHtml),h.xp6(9),h.Q6J("code",e.exampleServiceUsageHtml),h.xp6(1),h.Q6J("code",e.exampleServiceUsage),h.xp6(7),h.Q6J("code",e.exampleLazyModule)}}let k=(()=>{class e{constructor(e){this.tableBarsService=e,this.destroy$=new d.x,this.exampleServiceUsage=o.e(39650).then(o.t.bind(o,39650,17)),this.exampleServiceUsageHtml=o.e(76247).then(o.t.bind(o,76247,17)),this.exampleLazyModule=o.e(3991).then(o.t.bind(o,3991,17)),this.exampleModule=o.e(22945).then(o.t.bind(o,22945,17)),this.exampleHtml=o.e(91077).then(o.t.bind(o,91077,17)),this.example1={TypeScript:o.e(40427).then(o.t.bind(o,40427,17)),HTML:o.e(36573).then(o.t.bind(o,36573,17)),LESS:o.e(53278).then(o.t.bind(o,53278,17))},this.modeVariants=["onLight","onDark"],this.mode=this.modeVariants[0],this.adaptive=!1,this.hasCloseButton=!1,this.subscription=new m.w0}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{adaptive:this.adaptive,mode:this.mode,hasCloseButton:this.hasCloseButton}).pipe((0,b.R)(this.destroy$)).subscribe()}destroy(){this.destroy$.next()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.ɵfac=function(t){return new(t||e)(h.Y36(p.TuiTableBarsService))},e.ɵcmp=h.Xpm({type:e,selectors:[["example-tui-table-bar"]],viewQuery:function(e,t){if(1&e&&h.Gf(A,5),2&e){let e;h.iGM(e=h.CRH())&&(t.tableBarTemplate=e.first)}},decls:4,vars:0,consts:[["header","TableBarsService","package","ADDON-TABLEBARS","path","addon-tablebars/services/table-bars.service.ts"],["pageTab",""],["id","base","heading","Basic",3,"content"],["size","m","tuiButton","","type","button",1,"tui-space_right-2",3,"click"],["size","m","tuiButton","","type","button",3,"click"],["tableBarTemplate",""],["documentationPropertyName","adaptive","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","mode","documentationPropertyType","TuiBrightness",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","my.component.html",3,"code"],["filename","my.component.ts",3,"code"],["filename","customNotification.component.ts",3,"code"]],template:function(e,t){1&e&&(h.TgZ(0,"tui-doc-page",0),h.YNc(1,C,4,1,"ng-template",1),h.YNc(2,S,12,4,"ng-template",1),h.YNc(3,V,32,5,"ng-template",1),h.qZA())},dependencies:[g.v,y.c,T.z,f.B,Z.q,B.n,x.f,v],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),e})(),J=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=h.oAB({type:e}),e.ɵinj=h.cJS({imports:[n.ez,s.TuiButtonModule,u.TuiMoneyModule,l.wq,r.TuiRadioListModule,r.TuiInputModule,s.TuiLinkModule,a.u5,s.TuiModeModule,c.fV,i.Bz.forChild((0,c.Ve)(k))]}),e})()}}]);