(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[90089],{90089:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiMobileCalendarModule:()=>O});var o=n(88692),a=n(69900),i=n(22864),r=n(11205),l=n(4820),u=n(78129),c=n(43345),d=n(50675),s=n(64537),p=n(66596),m=n(73104),g=n(83074),h=n(10977),y=n(62840),T=n(60404),_=n(43560),f=n(93525),x=n(38868),Z=n(89570),b=n(15696),A=n(27969),C=n(76189);let M=(()=>{class e{constructor(e,t,n){this.dialogs=e,this.injector=t,this.months$=n,this.control=new a.p4(null),this.dialog$=this.dialogs.open(new Z.Al(l.TuiMobileCalendarDialogComponent,s.zs3.create({providers:[{provide:d.TUI_CALENDAR_DATE_STREAM,useValue:(0,c.tuiControlValue)(this.control)}],parent:this.injector})),{size:"fullscreen",closeable:!1,data:{single:!0,min:c.TuiDay.currentLocal()}}),this.date$=(0,b.a)([(0,c.tuiControlValue)(this.control),this.months$]).pipe((0,A.U)((([e,t])=>e?`${t[e.month]} ${e.day}, ${e.year}`:"Choose a date")))}get empty(){return!this.control.value}onClick(){this.dialog$.subscribe((e=>this.control.setValue(e)))}}return e.ɵfac=function(t){return new(t||e)(s.Y36(u.TuiDialogService),s.Y36(s.zs3),s.Y36(u.TUI_MONTHS))},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-mobile-calendar-example-1"]],decls:5,vars:5,consts:[[1,"wrapper"],["appearance","secondary","icon","tuiIconCalendarLarge","shape","rounded","title","Choose a date","tuiIconButton","","type","button",3,"click"],[1,"date"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0)(1,"button",1),s.NdJ("click",(function(){return t.onClick()})),s.qZA(),s.TgZ(2,"span",2),s._uU(3),s.ALo(4,"async"),s.qZA()()),2&e&&(s.xp6(2),s.ekj("date_empty",t.empty),s.xp6(1),s.hij(" ",s.lcZ(4,3,t.date$)," "))},dependencies:[C.v,o.Ov],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],changeDetection:0}),e})(),U=(()=>{class e{constructor(){this.min=new c.TuiDay((new Date).getFullYear(),(new Date).getMonth(),1),this.max=new c.TuiDay((new Date).getFullYear(),(new Date).getMonth(),10)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-mobile-calendar-example-2"]],decls:2,vars:3,consts:[[1,"example"],[3,"max","min","single"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0),s._UZ(1,"tui-mobile-calendar",1),s.qZA()),2&e&&(s.xp6(1),s.Q6J("max",t.max)("min",t.min)("single",!1))},dependencies:[m.F],styles:[".example[_ngcontent-%COMP%]{height:35rem}"],changeDetection:0}),e})(),D=(()=>{class e{constructor(){this.min=c.TuiDay.currentLocal()}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-mobile-calendar-example-3"]],features:[s._Bn([{provide:u.TUI_FIRST_DAY_OF_WEEK,useValue:c.TuiDayOfWeek.Sunday}])],decls:1,vars:1,consts:[[3,"min"]],template:function(e,t){1&e&&s._UZ(0,"tui-mobile-calendar",0),2&e&&s.Q6J("min",t.min)},dependencies:[m.F],styles:["tui-mobile-calendar[_ngcontent-%COMP%]{max-width:20rem;height:30rem}"],changeDetection:0}),e})(),P=(()=>{class e{constructor(e,t,n){this.dialogs=e,this.injector=t,this.months$=n,this.control=new a.p4(null),this.dialog$=this.dialogs.open(new Z.Al(l.TuiMobileCalendarDialogComponent,s.zs3.create({providers:[{provide:d.TUI_CALENDAR_DATE_STREAM,useValue:(0,c.tuiControlValue)(this.control)}],parent:this.injector})),{size:"fullscreen",closeable:!1,data:{min:new c.TuiDay(2018,2,10)}}),this.date$=(0,b.a)([(0,c.tuiControlValue)(this.control),this.months$]).pipe((0,A.U)((([e,t])=>e?e.isSingleDay?`${t[e.from.month]} ${e.from.day}, ${e.from.year}`:`${t[e.from.month]} ${e.from.day}, ${e.from.year} - ${t[e.to.month]} ${e.to.day}, ${e.to.year}`:"Choose a date range")))}get empty(){return!this.control.value}onClick(){this.dialog$.subscribe((e=>this.control.setValue(e)))}}return e.ɵfac=function(t){return new(t||e)(s.Y36(u.TuiDialogService),s.Y36(s.zs3),s.Y36(u.TUI_MONTHS))},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-mobile-calendar-example-4"]],decls:5,vars:5,consts:[[1,"wrapper"],["appearance","secondary","icon","tuiIconCalendarLarge","shape","rounded","tuiIconButton","","type","button",3,"click"],[1,"date"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0)(1,"button",1),s.NdJ("click",(function(){return t.onClick()})),s.qZA(),s.TgZ(2,"span",2),s._uU(3),s.ALo(4,"async"),s.qZA()()),2&e&&(s.xp6(2),s.ekj("date_empty",t.empty),s.xp6(1),s.hij(" ",s.lcZ(4,3,t.date$)," "))},dependencies:[C.v,o.Ov],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],changeDetection:0}),e})(),w=(()=>{class e{constructor(e,t,n){this.dialogs=e,this.injector=t,this.months$=n,this.control=new a.p4(null),this.dialog$=this.dialogs.open(new Z.Al(l.TuiMobileCalendarDialogComponent,s.zs3.create({providers:[{provide:d.TUI_CALENDAR_DATE_STREAM,useValue:(0,c.tuiControlValue)(this.control)}],parent:this.injector})),{size:"fullscreen",closeable:!1,data:{multi:!0,min:new c.TuiDay(2018,2,10)}}),this.date$=(0,b.a)([(0,c.tuiControlValue)(this.control),this.months$]).pipe((0,A.U)((([e,t])=>(null==e?void 0:e.length)?e.map((e=>`${t[e.month]} ${e.day}, ${e.year}`)).join("; "):"Choose dates")))}get empty(){var e;return!(null===(e=this.control.value)||void 0===e?void 0:e.length)}onClick(){this.dialog$.subscribe((e=>this.control.setValue(e)))}}return e.ɵfac=function(t){return new(t||e)(s.Y36(u.TuiDialogService),s.Y36(s.zs3),s.Y36(u.TUI_MONTHS))},e.ɵcmp=s.Xpm({type:e,selectors:[["tui-mobile-calendar-example-5"]],decls:5,vars:5,consts:[[1,"wrapper"],["appearance","secondary","icon","tuiIconCalendarLarge","shape","rounded","tuiIconButton","","type","button",3,"click"],[1,"date"]],template:function(e,t){1&e&&(s.TgZ(0,"div",0)(1,"button",1),s.NdJ("click",(function(){return t.onClick()})),s.qZA(),s.TgZ(2,"span",2),s._uU(3),s.ALo(4,"async"),s.qZA()()),2&e&&(s.xp6(2),s.ekj("date_empty",t.empty),s.xp6(1),s.hij(" ",s.lcZ(4,3,t.date$)," "))},dependencies:[C.v,o.Ov],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}.date[_ngcontent-%COMP%]{margin-left:1rem}.date_empty[_ngcontent-%COMP%]{color:var(--tui-text-03)}"],changeDetection:0}),e})();function V(e,t){1&e&&(s._uU(0," Use "),s.TgZ(1,"a",9),s._uU(2," TUI_FIRST_DAY_OF_WEEK "),s.qZA(),s._uU(3," token to change start day of the week (Monday by default). "))}const v=function(){return["/components/input-date"]},I=function(){return["/components/input-date-range"]};function q(e,t){if(1&e&&(s.TgZ(0,"p"),s._uU(1," A calendar for mobile devices. It is used in "),s.TgZ(2,"a",2),s._uU(3," InputDate "),s.qZA(),s._uU(4," and "),s.TgZ(5,"a",2),s._uU(6," InputDateRange "),s.qZA(),s._uU(7," if "),s.TgZ(8,"code"),s._uU(9,"TuiMobileCalendarDialogModule"),s.qZA(),s._uU(10," and "),s.TgZ(11,"code"),s._uU(12,"TuiDialogModule"),s.qZA(),s._uU(13," are both imported once in the main module "),s.qZA(),s.TgZ(14,"p"),s._uU(15," You can use "),s.TgZ(16,"code"),s._uU(17,"TUI_CALENDAR_DATE_STREAM"),s.qZA(),s._uU(18," token to set value from outside (see samples) "),s.qZA(),s.TgZ(19,"strong"),s._uU(20,"Component should be used on mobile devices as fullscreen dialog"),s.qZA(),s.TgZ(21,"tui-doc-example",3),s._UZ(22,"tui-mobile-calendar-example-1"),s.qZA(),s.TgZ(23,"tui-doc-example",4),s._UZ(24,"tui-mobile-calendar-example-2"),s.qZA(),s.TgZ(25,"tui-doc-example",5),s.YNc(26,V,4,0,"ng-template",null,6,s.W1O),s._UZ(28,"tui-mobile-calendar-example-3"),s.qZA(),s.TgZ(29,"tui-doc-example",7),s._UZ(30,"tui-mobile-calendar-example-4"),s.qZA(),s.TgZ(31,"tui-doc-example",8),s._UZ(32,"tui-mobile-calendar-example-5"),s.qZA()),2&e){const e=s.MAs(27),t=s.oxw();s.xp6(2),s.Q6J("routerLink",s.DdM(8,v)),s.xp6(3),s.Q6J("routerLink",s.DdM(9,I)),s.xp6(16),s.Q6J("content",t.example1),s.xp6(2),s.Q6J("content",t.example2),s.xp6(2),s.Q6J("content",t.example3)("description",e),s.xp6(4),s.Q6J("content",t.example4),s.xp6(2),s.Q6J("content",t.example5)}}function k(e,t){1&e&&(s.TgZ(0,"div"),s._uU(1,"A handler that gets a date and returns true if it is disabled."),s.qZA(),s.TgZ(2,"strong"),s._uU(3,"Must be a pure function"),s.qZA())}function L(e,t){1&e&&s._uU(0," Max date ")}function N(e,t){1&e&&s._uU(0," Min date ")}function S(e,t){1&e&&s._uU(0," Single date or a range ")}function $(e,t){1&e&&s._uU(0,' "Cancel" clicked ')}function E(e,t){1&e&&s._uU(0,' "Confirm" button clicked ')}function H(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tui-doc-demo")(1,"tui-mobile-calendar",10),s.NdJ("cancel",(function(t){s.CHM(e);const n=s.MAs(8);return s.KtG(n.emitEvent(t))}))("confirm",(function(t){s.CHM(e);const n=s.MAs(10);return s.KtG(n.emitEvent(t))})),s.qZA()(),s.TgZ(2,"tui-doc-documentation"),s.YNc(3,k,4,0,"ng-template",11),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.disabledItemHandler=t)})),s.YNc(4,L,1,0,"ng-template",12),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.max=t)})),s.YNc(5,N,1,0,"ng-template",13),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.min=t)})),s.YNc(6,S,1,0,"ng-template",14),s.NdJ("documentationPropertyValueChange",(function(t){s.CHM(e);const n=s.oxw();return s.KtG(n.single=t)})),s.YNc(7,$,1,0,"ng-template",15,16,s.W1O),s.YNc(9,E,1,0,"ng-template",17,18,s.W1O),s.qZA()}if(2&e){const e=s.oxw();s.xp6(1),s.Q6J("disabledItemHandler",e.disabledItemHandler)("max",e.max)("min",e.min)("single",e.single),s.xp6(2),s.Q6J("documentationPropertyValues",e.disabledItemHandlerVariants)("documentationPropertyValue",e.disabledItemHandler),s.xp6(1),s.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),s.xp6(1),s.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),s.xp6(1),s.Q6J("documentationPropertyValue",e.single)}}function Y(e,t){if(1&e&&(s.TgZ(0,"ol",19)(1,"li")(2,"p"),s._uU(3," Import "),s.TgZ(4,"code"),s._uU(5,"TuiDialogModule"),s.qZA(),s._uU(6," and "),s.TgZ(7,"code"),s._uU(8,"TuiMobileCalendarModule"),s.qZA(),s._uU(9," once into the main module "),s.qZA(),s._UZ(10,"tui-doc-code",20),s.qZA(),s.TgZ(11,"li")(12,"p"),s._uU(13," Import "),s.TgZ(14,"code"),s._uU(15,"TuiMobileCalendarDialogModule"),s.qZA(),s._uU(16," for automatic use with "),s.TgZ(17,"code"),s._uU(18,"TuiInputDate"),s.qZA(),s._uU(19," or "),s.TgZ(20,"code"),s._uU(21,"TuiInputDateRange"),s.qZA(),s._uU(22," : "),s.qZA(),s._UZ(23,"tui-doc-code",20),s.qZA(),s.TgZ(24,"li")(25,"p"),s._uU(26,"Add to the template:"),s.qZA(),s._UZ(27,"tui-doc-code",21),s.qZA()()),2&e){const e=s.oxw();s.xp6(10),s.Q6J("code",e.exampleModule),s.xp6(13),s.Q6J("code",e.exampleImportDialogModule),s.xp6(4),s.Q6J("code",e.exampleHtml)}}let J=(()=>{class e{constructor(){this.exampleHtml=n.e(87147).then(n.t.bind(n,87147,17)),this.exampleModule=n.e(38346).then(n.t.bind(n,38346,17)),this.exampleImportDialogModule=n.e(60697).then(n.t.bind(n,60697,17)),this.example1={TypeScript:n.e(96985).then(n.t.bind(n,96985,17)),HTML:n.e(82551).then(n.t.bind(n,82551,17)),LESS:n.e(95840).then(n.t.bind(n,95840,17))},this.example2={TypeScript:n.e(38739).then(n.t.bind(n,38739,17)),HTML:n.e(65382).then(n.t.bind(n,65382,17))},this.example3={TypeScript:n.e(8863).then(n.t.bind(n,8863,17)),HTML:n.e(58130).then(n.t.bind(n,58130,17)),LESS:n.e(1468).then(n.t.bind(n,1468,17))},this.example4={TypeScript:n.e(96790).then(n.t.bind(n,96790,17)),HTML:n.e(69787).then(n.t.bind(n,69787,17)),LESS:n.e(3557).then(n.t.bind(n,3557,17))},this.example5={TypeScript:n.e(88574).then(n.t.bind(n,88574,17)),HTML:n.e(96570).then(n.t.bind(n,96570,17)),LESS:n.e(27550).then(n.t.bind(n,27550,17))},this.minVariants=[c.TUI_FIRST_DAY,new c.TuiDay(2017,2,5),new c.TuiDay(1900,0,1)],this.min=this.minVariants[0],this.maxVariants=[c.TUI_LAST_DAY,new c.TuiDay(2020,2,5),new c.TuiDay(2300,0,1)],this.max=this.maxVariants[0],this.single=!0,this.disabledItemHandlerVariants=[c.ALWAYS_FALSE_HANDLER,({day:e})=>e%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.control=new a.p4,this.stream=(0,c.tuiControlValue)(this.control)}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["example-tui-mobile-calendar"]],features:[s._Bn([{provide:d.TUI_CALENDAR_DATE_STREAM,deps:[e],useFactory:e=>e.stream}])],decls:4,vars:0,consts:[["header","MobileCalendar","package","ADDON-MOBILE","type","components"],["pageTab",""],["tuiLink","",3,"routerLink"],["id","dropdown","heading","Custom dropdown",3,"content"],["id","range","heading","Range",3,"content"],["id","localization","heading","Localization",3,"content","description"],["localizationDescription",""],["id","dropdown-range","heading","Custom dropdown (range)",3,"content"],["id","dropdown-multi","heading","Custom dropdown (multi)",3,"content"],["fragment","first-day-of-week","routerLink","/utils/tokens","tuiLink",""],[1,"calendar",3,"disabledItemHandler","max","min","single","cancel","confirm"],["documentationPropertyMode","input","documentationPropertyName","disabledItemHandler","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","max","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","min","documentationPropertyType","TuiDay",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","single","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","cancel","documentationPropertyType","void"],["documentationPropertyCancel","documentationProperty"],["documentationPropertyMode","output","documentationPropertyName","confirm","documentationPropertyType","TuiDayRange | TuiDay"],["documentationPropertyConfirm","documentationProperty"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(s.TgZ(0,"tui-doc-page",0),s.YNc(1,q,33,10,"ng-template",1),s.YNc(2,H,11,11,"ng-template",1),s.YNc(3,Y,28,3,"ng-template",1),s.qZA())},dependencies:[p.V,m.F,g.c,h.F,y.z,T.B,_.q,f.n,x.f,i.rH,M,U,D,P,w],styles:[".calendar[_ngcontent-%COMP%]{height:28.75rem}"],changeDetection:0}),e})(),O=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=s.oAB({type:e}),e.ɵinj=s.cJS({imports:[o.ez,a.UX,u.TuiLinkModule,u.TuiButtonModule,l.TuiMobileCalendarModule,l.TuiMobileCalendarDialogModule,r.fV,i.Bz.forChild((0,r.Ve)(J))]}),e})()}}]);