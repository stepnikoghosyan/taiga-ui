(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[98797],{98797:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L,passwordValidator:()=>T,superComputerValidator:()=>A});var o=r(4594),a=r(66094),u=r(39050),i=r(58578),n=r(42436),l=r(59551),s=r(48369),c=r(24815),d=r(35548),p=r(21805),f=r(7911),m=r(10188),h=r(85454);const Z=function(){return[]},g=/^[a-zA-Z]+$/;function T(e){return e.value&&g.test(e.value)?null:{other:"Only latin letters are allowed"}}function A(e){return"42"===e.value?null:{other:"Wrong"}}const L=(()=>{var e;class t{constructor(){this.routes=i.o,this.testValue1=new a.NI("",[a.kI.required,T]),this.testValue3=new a.NI("",[a.kI.required,T]),this.testForm=new a.cw({testValue1:this.testValue1,testValue2:new a.NI("",[a.kI.required,A])},(e=>Object.values(e.controls).every((({valid:e})=>e))?null:{other:"Form is invalid"})),this.testValue1.valueChanges.pipe((0,c.x)()).subscribe((()=>{this.testValue1.markAsTouched()}))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=d.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent1",features:[d.jDz],decls:38,vars:22,consts:[[3,"formGroup"],["tuiLabel","",1,"tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue2",3,"error"],["tuiLabel",""],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["formControlName","testValue1",3,"error"],["fragment","mark-control-as-touched-and-validate","href","/utils/miscellaneous#mark-control-as-touched-and-validate","tuiLink","",3,"routerLink"],["href","https://angular.io/api/forms/NgControl","rel","noreferrer","target","_blank","tuiLink",""],["href","https://angular.io/api/forms/ControlContainer","rel","noreferrer","target","_blank","tuiLink",""],[3,"error"]],template:function(e,t){1&e&&(d.TgZ(0,"form",0)(1,"label",1),d._uU(2," Type the ultimate answer "),d.TgZ(3,"tui-input",2),d._uU(4," to the Question of Life, the Universe, and Everything "),d.qZA(),d._UZ(5,"tui-error",3),d.ALo(6,"async"),d.ALo(7,"tuiFieldError"),d.qZA(),d.TgZ(8,"label",4),d._uU(9," Set a password "),d.TgZ(10,"tui-input",5),d._uU(11," Latin letters only "),d.qZA(),d._UZ(12,"tui-error",6),d.ALo(13,"async"),d.ALo(14,"tuiFieldError"),d.qZA(),d.TgZ(15,"p"),d._uU(16," If you want to show a validation message as soon as a user starts typing, subscribe on form value changes and call markAsTouched on control on first value change. You can also use "),d.TgZ(17,"a",7)(18,"code"),d._uU(19,"tuiMarkControlAsTouchedAndValidate"),d.qZA()()(),d.TgZ(20,"p")(21,"code"),d._uU(22,"tuiFieldError"),d.qZA(),d._uU(23," pipe can be used inside your controls to show error messages for parent "),d.TgZ(24,"a",8),d._uU(25," NgControl "),d.qZA(),d._uU(26," or "),d.TgZ(27,"a",9),d._uU(28," ControlContainer "),d.qZA(),d._uU(29," through DI without explicit directive on "),d.TgZ(30,"code"),d._uU(31,"tui-error"),d.qZA(),d._uU(32," . "),d.qZA(),d.TgZ(33,"p"),d._uU(34,"Below is an error for the entire form:"),d.qZA(),d._UZ(35,"tui-error",10),d.ALo(36,"async"),d.ALo(37,"tuiFieldError"),d.qZA()),2&e&&(d.Q6J("formGroup",t.testForm),d.xp6(3),d.Q6J("tuiTextfieldLabelOutside",!0),d.xp6(2),d.Q6J("error",d.lcZ(6,7,d.lcZ(7,9,d.DdM(19,Z)))),d.xp6(5),d.Q6J("tuiTextfieldLabelOutside",!0),d.xp6(2),d.Q6J("error",d.lcZ(13,11,d.lcZ(14,13,d.DdM(20,Z)))),d.xp6(5),d.Q6J("routerLink",t.routes.Miscellaneous),d.xp6(18),d.Q6J("error",d.lcZ(36,15,d.lcZ(37,17,d.DdM(21,Z)))))},dependencies:[a.UX,a._Y,a.JJ,a.JL,a.sg,a.u,n.TuiLabel,s.QfL,p.K,f.w,s.cnw,m.x,h.s,n.TuiError,l.TuiFieldErrorPipe,o.Ov,n.TuiLink,u.rH],encapsulation:2,changeDetection:0}),t})()}}]);