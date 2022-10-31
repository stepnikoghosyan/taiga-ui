"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[89114],{89114:(De,c,n)=>{n.r(c),n.d(c,{ExampleTuiInputDateTimeModule:()=>Ee});var s=n(12057),u=n(23738),p=n(33982),M=n(29851),D=n(72002),r=n(56757),U=n(75695),e=n(74788),i=n(36692),R=n(82880),x=n(98204),y=n(88331),h=n(37159),L=n(66596),Z=n(57068),v=n(79121),d=n(47094),E=n(64731),G=n(91030);let J=(()=>{class o{constructor(){this.testForm=new u.cw({testValue:new u.NI([new i.TuiDay(2017,2,15),null])})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-date-time-example-1"]],decls:10,vars:4,consts:function(){let a;return a=$localize`:␟bdc1ac802a9f8ebac5423e543fafda4ef101dcd5␟7402895815395298696:Form value:`,[[1,"b-form",3,"formGroup"],["formControlName","testValue"],["tuiTextfield","","placeholder","OCT 26 1985 01:22"],a]},template:function(t,T){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"tui-input-date-time",1),e._uU(2," Choose date and time "),e._UZ(3,"input",2),e.qZA(),e.TgZ(4,"p"),e.SDv(5,3),e.qZA(),e.TgZ(6,"pre"),e.TgZ(7,"code"),e._uU(8),e.ALo(9,"json"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",T.testForm),e.xp6(8),e.Oqu(e.lcZ(9,2,T.testForm.value)))},directives:[u._Y,u.JL,u.sg,d.u,E.c,u.JJ,u.u,G.M],pipes:[s.Ts],encapsulation:2,changeDetection:0}),o})(),V=(()=>{class o{constructor(){this.testForm=new u.cw({testValue:new u.NI([new i.TuiDay(2017,2,15),null])})}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-date-time-example-2"]],decls:19,vars:4,consts:function(){let a,t,T,_;return a=$localize`:␟f025901df0cbaf314e7b32707720772c7e995008␟2473136848054292961:Default:`,t=$localize`:␟bc0c7a2511bfa61dc113f7119c46786f9621dffe␟48462401577556644:With seconds:`,T=$localize`:␟2e7211f1a6997fae0f9857838493f0658007bb74␟4462643802911150950:With SS and MS:`,_=$localize`:␟bdc1ac802a9f8ebac5423e543fafda4ef101dcd5␟7402895815395298696:Form value:`,[[1,"b-form",3,"formGroup"],a,["formControlName","testValue","timeMode","HH:MM"],t,["formControlName","testValue","timeMode","HH:MM:SS"],T,["formControlName","testValue","timeMode","HH:MM:SS.MSS"],_]},template:function(t,T){1&t&&(e.TgZ(0,"form",0),e.TgZ(1,"p"),e.SDv(2,1),e.qZA(),e.TgZ(3,"tui-input-date-time",2),e._uU(4," Choose date and time "),e.qZA(),e.TgZ(5,"p"),e.SDv(6,3),e.qZA(),e.TgZ(7,"tui-input-date-time",4),e._uU(8," Choose date and time "),e.qZA(),e.TgZ(9,"p"),e.SDv(10,5),e.qZA(),e.TgZ(11,"tui-input-date-time",6),e._uU(12," Choose date and time "),e.qZA(),e.TgZ(13,"p"),e.SDv(14,7),e.qZA(),e.TgZ(15,"pre"),e.TgZ(16,"code"),e._uU(17),e.ALo(18,"json"),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("formGroup",T.testForm),e.xp6(17),e.Oqu(e.lcZ(18,2,T.testForm.value)))},directives:[u._Y,u.JL,u.sg,d.u,E.c,u.JJ,u.u],pipes:[s.Ts],encapsulation:2,changeDetection:0}),o})(),X=(()=>{class o{constructor(){this.control=new u.NI([new i.TuiDay(2017,2,15),new i.TuiTime(12,30)])}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-date-time-example-3"]],features:[e._Bn([{provide:i.TUI_DATE_FORMAT,useValue:"YMD"},{provide:i.TUI_DATE_SEPARATOR,useValue:"/"}])],decls:2,vars:1,consts:[[1,"b-form",3,"formControl"]],template:function(t,T){1&t&&(e.TgZ(0,"tui-input-date-time",0),e._uU(1," Choose date and time\n"),e.qZA()),2&t&&e.Q6J("formControl",T.control)},directives:[d.u,E.c,u.JJ,u.oH],encapsulation:2,changeDetection:0}),o})(),H=(()=>{class o{constructor(){this.separator=", "}fromControlValue(t){const[T,_=""]=t.split(this.separator);return T?[i.TuiDay.normalizeParse(T),_?i.TuiTime.fromString(_):null]:[null,null]}toControlValue([t,T]){return t?t.toString()+(T?`${this.separator}${T.toString()}`:""):""}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})(),z=(()=>{class o{constructor(){this.control=new u.NI("19.01.2022, 12:33")}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-input-date-time-example-4"]],features:[e._Bn([{provide:r.TUI_DATE_TIME_VALUE_TRANSFORMER,useClass:H}])],decls:7,vars:2,consts:[[1,"b-form",3,"formControl"]],template:function(t,T){1&t&&(e.TgZ(0,"tui-input-date-time",0),e._uU(1," Choose date and time\n"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"Stringified control value:"),e.qZA(),e.TgZ(4,"p"),e.TgZ(5,"code"),e._uU(6),e.qZA(),e.qZA()),2&t&&(e.Q6J("formControl",T.control),e.xp6(6),e.Oqu(T.control.value))},directives:[d.u,E.c,u.JJ,u.oH],encapsulation:2,changeDetection:0}),o})();var b=n(31823),Y=n(20546),Q=n(17023),W=n(54218),B=n(84848),j=n(3729),K=n(64374),w=n(68874),q=n(10200),k=n(76349);function ee(o,a){if(1&o&&(e.TgZ(0,"div",2),e.tHW(1,3),e._UZ(2,"code"),e.N_p(),e.qZA(),e.TgZ(3,"h3"),e.SDv(4,4),e.qZA(),e.TgZ(5,"dl"),e.tHW(6,5),e.TgZ(7,"dt"),e._UZ(8,"code"),e.qZA(),e.TgZ(9,"dd",6),e._UZ(10,"code"),e.qZA(),e.TgZ(11,"dt"),e._UZ(12,"code"),e.qZA(),e._UZ(13,"dd"),e.N_p(),e.qZA(),e.TgZ(14,"p",2),e.TgZ(15,"a",7),e._uU(16," See example "),e.qZA(),e._uU(17," with the usage of these tokens. "),e.qZA(),e.TgZ(18,"h3"),e.SDv(19,8),e.qZA(),e.TgZ(20,"dl"),e.tHW(21,9),e.TgZ(22,"dt"),e._UZ(23,"code"),e.qZA(),e.TgZ(24,"dd"),e._UZ(25,"code"),e.TgZ(26,"p"),e._UZ(27,"a",10),e.qZA(),e.qZA(),e.N_p(),e.qZA(),e.TgZ(28,"tui-doc-example",11),e.TgZ(29,"tui-notification",12),e._uU(30," If you need to set some attributes or listen to events on native "),e.TgZ(31,"code"),e._uU(32,"input"),e.qZA(),e._uU(33," , you can put it inside with "),e.TgZ(34,"code"),e._uU(35,"Textfield"),e.qZA(),e._uU(36," directive as shown below "),e.qZA(),e._UZ(37,"tui-input-date-time-example-1"),e.qZA(),e.TgZ(38,"tui-doc-example",13),e._UZ(39,"tui-input-date-time-example-2"),e.qZA(),e.TgZ(40,"tui-doc-example",14),e._UZ(41,"tui-input-date-time-example-3"),e.qZA(),e.TgZ(42,"tui-doc-example",15),e._UZ(43,"tui-input-date-time-example-4"),e.qZA()),2&o){const t=e.oxw();e.xp6(28),e.Q6J("content",t.example1),e.xp6(10),e.Q6J("content",t.example2),e.xp6(2),e.Q6J("content",t.example3),e.xp6(2),e.Q6J("content",t.example4)}}function te(o,a){if(1&o&&(e.TgZ(0,"tui-input-date-time",26),e._uU(1," Choose date and time "),e.qZA()),2&o){const t=e.oxw(2);e.Udp("text-align",t.textAlign),e.Q6J("disabledItemHandler",t.disabledItemHandler)("formControl",t.control)("focusable",t.focusable)("min",t.min)("max",t.max)("defaultActiveYearMonth",t.defaultActiveYearMonth)("pseudoFocus",t.pseudoFocused)("pseudoHover",t.pseudoHovered)("pseudoInvalid",t.pseudoInvalid)("readOnly",t.readOnly)("timeMode",t.mode)("tuiHintContent",t.hintContent)("tuiHintDirection",t.hintDirection)("tuiHintAppearance",t.hintAppearance)("tuiTextfieldIconLeft",t.iconLeft)("tuiTextfieldCleaner",t.cleaner)("tuiTextfieldLabelOutside",t.labelOutside)("tuiTextfieldSize",t.size)}}function oe(o,a){1&o&&(e.tHW(0,27),e._UZ(1,"code"),e.N_p())}function ne(o,a){1&o&&(e.TgZ(0,"div"),e._uU(1,"A handler that gets a date and returns true if it is disabled."),e.qZA(),e.TgZ(2,"strong"),e._uU(3,"Must be a pure function"),e.qZA())}function ae(o,a){1&o&&e.SDv(0,28)}function Te(o,a){1&o&&e.SDv(0,29)}function ue(o,a){1&o&&e.SDv(0,30)}function ie(o,a){1&o&&e.SDv(0,31)}function _e(o,a){1&o&&e.SDv(0,32)}function Fe(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"tui-doc-demo",16),e.YNc(1,te,2,20,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,oe,2,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().disabled=_}),e.YNc(4,ne,4,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().disabledItemHandler=_}),e.YNc(5,ae,1,0,"ng-template",19),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().min=_}),e.YNc(6,Te,1,0,"ng-template",20),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().max=_}),e.YNc(7,ue,1,0,"ng-template",21),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().defaultActiveYearMonth=_}),e.YNc(8,ie,1,0,"ng-template",22),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().mode=_}),e.qZA(),e._UZ(9,"inherited-documentation",23),e.TgZ(10,"tui-doc-documentation",24),e.YNc(11,_e,1,0,"ng-template",25),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().textAlign=_}),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("control",t.control),e.xp6(3),e.Q6J("documentationPropertyValue",t.disabled),e.xp6(1),e.Q6J("documentationPropertyValues",t.disabledItemHandlerVariants)("documentationPropertyValue",t.disabledItemHandler),e.xp6(1),e.Q6J("documentationPropertyValues",t.minVariants)("documentationPropertyValue",t.min),e.xp6(1),e.Q6J("documentationPropertyValues",t.maxVariants)("documentationPropertyValue",t.max),e.xp6(1),e.Q6J("documentationPropertyValues",t.defaultActiveYearMonthVariants)("documentationPropertyValue",t.defaultActiveYearMonth),e.xp6(1),e.Q6J("documentationPropertyValues",t.modeVariants)("documentationPropertyValue",t.mode),e.xp6(1),e.Q6J("dropdown",!0),e.xp6(2),e.Q6J("documentationPropertyValues",t.textAlignVariants)("documentationPropertyValue",t.textAlign)}}function le(o,a){if(1&o&&(e.TgZ(0,"ol",33),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,34),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",35),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.tHW(8,36),e._UZ(9,"code"),e._UZ(10,"code"),e.N_p(),e.qZA(),e._UZ(11,"tui-doc-code",37),e.qZA(),e.TgZ(12,"li"),e.tHW(13,38),e._UZ(14,"tui-doc-code",39),e.N_p(),e.qZA(),e.qZA()),2&o){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(6),e.Q6J("code",t.exampleForm),e.xp6(3),e.Q6J("code",t.exampleHtml)}}let de=(()=>{class o extends R.b{constructor(){super(...arguments),this.today=i.TuiDay.currentLocal(),this.exampleForm=n.e(93995).then(n.t.bind(n,93995,17)),this.exampleModule=n.e(13284).then(n.t.bind(n,13284,17)),this.exampleHtml=n.e(90794).then(n.t.bind(n,90794,17)),this.example1={TypeScript:n.e(12039).then(n.t.bind(n,12039,17)),HTML:n.e(41018).then(n.t.bind(n,41018,17))},this.example2={TypeScript:n.e(42673).then(n.t.bind(n,42673,17)),HTML:n.e(85654).then(n.t.bind(n,85654,17))},this.example3={TypeScript:n.e(34516).then(n.t.bind(n,34516,17)),HTML:n.e(17152).then(n.t.bind(n,17152,17))},this.example4={TypeScript:n.e(74832).then(n.t.bind(n,74832,17)),HTML:n.e(30855).then(n.t.bind(n,30855,17)),"value-transformer.ts":n.e(6014).then(n.t.bind(n,6014,17))},this.minVariants=[i.TUI_FIRST_DAY,new i.TuiDay(2017,2,5),new i.TuiDay(1900,0,1),[this.today.append({day:-1}),new i.TuiTime(12,20)]],this.min=this.minVariants[0],this.maxVariants=[i.TUI_LAST_DAY,new i.TuiDay(2017,11,11),new i.TuiDay(2020,2,5),new i.TuiDay(2300,0,1),[this.today.append({day:1}),new i.TuiTime(16,20)]],this.max=this.maxVariants[0],this.defaultActiveYearMonthVariants=[i.TuiMonth.currentLocal(),new i.TuiMonth(2020,2),new i.TuiMonth(2017,2)],this.defaultActiveYearMonth=this.defaultActiveYearMonthVariants[0],this.disabledItemHandlerVariants=[i.ALWAYS_FALSE_HANDLER,({day:t})=>t%3==0],this.disabledItemHandler=this.disabledItemHandlerVariants[0],this.itemsVariants=[[],[new r.TuiNamedDay(i.TUI_LAST_DAY.append({year:-1}),"Unill today")]],this.items=this.itemsVariants[0],this.autocompleteVariants=["off","bday"],this.autocomplete="",this.cleaner=!1,this.control=new u.NI(null,u.kI.required),this.modeVariants=["HH:MM","HH:MM:SS","HH:MM:SS.MSS"],this.mode=this.modeVariants[0]}}return o.\u0275fac=function(){let a;return function(T){return(a||(a=e.n5z(o)))(T||o)}}(),o.\u0275cmp=e.Xpm({type:o,selectors:[["example-tui-input-date-time"]],features:[e._Bn([{provide:x.x,useExisting:(0,e.Gpc)(()=>o)}]),e.qOj],decls:4,vars:0,consts:function(){let a,t,T,_,F,C,S,g,O,N,I,f,A,P,m,$;return a=$localize`:␟044a4dc175f6a468120b459545b576929c5ece55␟4454597240613417998:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputDateTime${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to input date and time `,t=$localize`:␟44191f6f2084b7e19ed30289598f45f6dc88ef96␟9067186024080940878:DI-tokens for date localization:`,T=$localize`:␟4a9f8a78772cf0d29d68a56ec7d2e2e4cde207ba␟7722521738393615006:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_FORMAT${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#9\ufffd"}:START_TAG_DD: active date format ( ${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:'DMY' | 'MDY' | 'YMD'${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE: ) ${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:${"[\ufffd#7\ufffd|\ufffd#11\ufffd]"}:START_TAG_DT:${"[\ufffd#8\ufffd|\ufffd#10\ufffd|\ufffd#12\ufffd]"}:START_TAG_CODE:TUI_DATE_SEPARATOR${"[\ufffd/#8\ufffd|\ufffd/#10\ufffd|\ufffd/#12\ufffd]"}:CLOSE_TAG_CODE:${"[\ufffd/#7\ufffd|\ufffd/#11\ufffd]"}:CLOSE_TAG_DT:${"\ufffd#13\ufffd"}:START_TAG_DD_1:single-character date's separator (dot, slash etc.)${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_TAG_DD:`,T=e.Zx4(T),_=$localize`:␟1e189ebe2d938d6aaa6a9a2f9adeff1e3b372aac␟4839071173512899768:DI-tokens for input-configurations:`,F=$localize`:␟9131d0fb644c4d5aaa930d7412f5df510b08e6be␟3277359903153257463:${"\ufffd#22\ufffd"}:START_TAG_DT:${"[\ufffd#23\ufffd|\ufffd#25\ufffd]"}:START_TAG_CODE:TUI_DATE_TIME_VALUE_TRANSFORMER${"[\ufffd/#23\ufffd|\ufffd/#25\ufffd]"}:CLOSE_TAG_CODE:${"\ufffd/#22\ufffd"}:CLOSE_TAG_DT:${"\ufffd#24\ufffd"}:START_TAG_DD: custom format of control output ( ${"[\ufffd#23\ufffd|\ufffd#25\ufffd]"}:START_TAG_CODE:[TuiDay | null, TuiTime | null]${"[\ufffd/#23\ufffd|\ufffd/#25\ufffd]"}:CLOSE_TAG_CODE: is default). ${"\ufffd#26\ufffd"}:START_PARAGRAPH:${"\ufffd#27\ufffd"}:START_LINK: See example ${"\ufffd/#27\ufffd"}:CLOSE_LINK: with string as control's output. ${"\ufffd/#26\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd/#24\ufffd"}:CLOSE_TAG_DD:`,F=e.Zx4(F),C=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,S=$localize`:␟c2d11aaec69642ed60bc139f0b022de0a9a109d7␟6778729094598431749:With control's output as string`,g=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,O=$localize`:␟ef3b890c694996695759808838384501533c73fc␟7105748595977480347: Min date `,N=$localize`:␟9cd5094464a3da726ac76eec86e3b2b42d383faf␟6045744383953302270: Max date `,I=$localize`:␟bc715c06fbc5fe4bc714850e286281145c441611␟777422566563462419: The default active month that is shown when you opens calendar for the first time `,f=$localize`:␟c565c714bb04a047bd1bae3404031386d26d05d8␟1953362032734413793: Time modes for SS and MS support `,A=$localize`:␟f53a375d54d7a00804c315043a43ae281c9efcb8␟226068063890007003: Custom align content by text-align `,P=$localize`:␟5ac39f9a4865e1fa1076fe6bfc72e1ff99949f29␟5541686400640412405: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputDateTimeModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,m=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,m=e.Zx4(m),$=$localize`:␟76d52ae838e90b2ba174872346714a031dbc612d␟8794844667839774096: Use in template: ${"\ufffd#14\ufffd"}:START_TAG_TUI_DOC_CODE:${"\ufffd/#14\ufffd"}:CLOSE_TAG_TUI_DOC_CODE:`,[["header","InputDateTime","package","KIT","type","components"],["pageTab",""],[1,"tui-space_bottom-9"],a,t,T,[1,"tui-space_bottom-5"],["tuiLink","","routerLink",".","fragment","date-localization"],_,F,["tuiLink","","routerLink",".","fragment","string-control-output"],["id","base","heading",C,3,"content"],[1,"tui-space_bottom-4","b-form"],["id","modes","heading","Modes",3,"content"],["id","date-localization","heading","Date localization",3,"content"],["id","string-control-output","heading",S,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","disabledItemHandler","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<TuiDay>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","TuiDay | [TuiDay, TuiTime]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","TuiDay | [TuiDay, TuiTime]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","defaultActiveYearMonth","documentationPropertyMode","input","documentationPropertyType","TuiMonth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","timeMode","documentationPropertyMode","input","documentationPropertyType","TuiTimeMode",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"dropdown"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","style.text-align",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"disabledItemHandler","formControl","focusable","min","max","defaultActiveYearMonth","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","timeMode","tuiHintContent","tuiHintDirection","tuiHintAppearance","tuiTextfieldIconLeft","tuiTextfieldCleaner","tuiTextfieldLabelOutside","tuiTextfieldSize"],g,O,N,I,f,A,[1,"b-demo-steps"],P,["filename","myComponent.module.ts",3,"code"],m,["filename","myComponent.component.ts",3,"code"],$,["filename","myComponent.template.html",3,"code"]]},template:function(t,T){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,ee,44,4,"ng-template",1),e.YNc(2,Fe,12,15,"ng-template",1),e.YNc(3,le,15,3,"ng-template",1),e.qZA())},directives:[y.q,h.n,L.V,p.yS,Z.f,v.L,J,V,X,z,b.F,Y.z,Q.B,W.w,d.u,E.c,u.JJ,u.oH,B.bZ,j.aR,K.b,w.x,q.s,k.c],encapsulation:2,changeDetection:0}),o})(),Ee=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[M.fV,U.f,u.UX,u.u5,s.ez,D.TuiLinkModule,r.TuiInputDateTimeModule,D.TuiHintModule,D.TuiTextfieldControllerModule,D.TuiNotificationModule,p.Bz.forChild((0,M.Ve)(de))]]}),o})()}}]);