(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[78304],{78304:(t,e,r)=>{r.r(e),r.d(e,{default:()=>x});var o=r(4594),n=r(66094),i=r(61887),u=r(12569),l=r(29722),a=r(2004),s=r(35548),c=r(70705),m=r(7911),d=r(10188),p=r(85454);const f=["errorContent"],b=["bigErrorContent"];function g(t,e){1&t&&(s._uU(0," Secret number must contain "),s.TgZ(1,"strong"),s._uU(2,"10 or 12 digits"),s.qZA(),s._uU(3," . "))}function Z(t,e){1&t&&(s._uU(0," This company is already registered "),s.TgZ(1,"button",13),s._uU(2," It is mine "),s.qZA())}const C=function(){return["required","inn"]},T=function(){return[]},h=/^\d{10}$/,_=/^\d{12}$/,x=(()=>{var t;class e{constructor(){this.testValue2=new n.NI(""),this.testForm=new n.cw({testValue1:new n.NI("",[n.kI.required,this.getSecretValidator()]),testValue2:this.testValue2,testValue3:new n.NI(!1,[n.kI.requiredTrue])}),this.companyValidator=t=>t.value?{inn:new i.TuiValidationError(this.bigErrorContent)}:null}ngOnInit(){this.testValue2.setValidators([n.kI.required,this.companyValidator])}onSubmit(){(0,i.tuiMarkControlAsTouchedAndValidate)(this.testForm)}getSecretValidator(){return t=>t.value&&(h.test(t.value)||_.test(t.value))?null:{secret:new i.TuiValidationError(this.errorContent)}}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=s.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(s.Gf(f,5),s.Gf(b,5)),2&t){let t;s.iGM(t=s.CRH())&&(e.errorContent=t.first),s.iGM(t=s.CRH())&&(e.bigErrorContent=t.first)}},standalone:!0,exportAs:"ExampleComponent3",features:[s.jDz],decls:26,vars:21,consts:[[3,"formGroup","submit"],["tuiLabel",""],["formControlName","testValue1","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["errorContent",""],["formControlName","testValue1",3,"error"],["tuiLabel","",1,"tui-space_top-4","tui-space_bottom-4"],["formControlName","testValue2","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["bigErrorContent",""],["formControlName","testValue2",3,"error"],[1,"checkbox"],["formControlName","testValue3","size","s","tuiCheckbox","","type","checkbox"],["formControlName","testValue3",3,"error"],["size","m","tuiButton","","type","submit",1,"tui-space_top-4"],["tuiButton","","type","button",1,"tui-space_top-2"]],template:function(t,e){1&t&&(s.TgZ(0,"form",0),s.NdJ("submit",(function(){return e.onSubmit()})),s.TgZ(1,"label",1),s._uU(2," Secret number "),s._UZ(3,"tui-input",2),s.YNc(4,g,4,0,"ng-template",null,3,s.W1O),s._UZ(6,"tui-error",4),s.ALo(7,"async"),s.ALo(8,"tuiFieldError"),s.qZA(),s.TgZ(9,"label",5),s._uU(10," Enter company name "),s._UZ(11,"tui-input",6),s.YNc(12,Z,3,0,"ng-template",null,7,s.W1O),s._UZ(14,"tui-error",8),s.ALo(15,"async"),s.ALo(16,"tuiFieldError"),s.qZA(),s.TgZ(17,"label")(18,"div",9),s._UZ(19,"input",10),s._uU(20," I agree on the conditions "),s.qZA(),s._UZ(21,"tui-error",11),s.ALo(22,"async"),s.ALo(23,"tuiFieldError"),s.qZA(),s.TgZ(24,"button",12),s._uU(25," Submit "),s.qZA()()),2&t&&(s.Q6J("formGroup",e.testForm),s.xp6(3),s.Q6J("tuiTextfieldLabelOutside",!0),s.xp6(3),s.Q6J("error",s.lcZ(7,6,s.lcZ(8,8,s.DdM(18,C)))),s.xp6(5),s.Q6J("tuiTextfieldLabelOutside",!0),s.xp6(3),s.Q6J("error",s.lcZ(15,10,s.lcZ(16,12,s.DdM(19,T)))),s.xp6(7),s.Q6J("error",s.lcZ(22,14,s.lcZ(23,16,s.DdM(20,T)))))},dependencies:[n.UX,n._Y,n.Wl,n.JJ,n.JL,n.sg,n.u,u.TuiLabel,a.QfL,c.K,m.w,a.cnw,d.x,p.s,u.TuiError,l.TuiFieldErrorPipe,o.Ov,l.TuiCheckboxComponent,u.TuiButton],styles:[".checkbox[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem}"],changeDetection:0}),e})()}}]);