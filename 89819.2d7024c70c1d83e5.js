(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[89819],{12200:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var n=r(16727),o=r(87742),a=r(49493),i=r(7287),s=r(89684),l=r(26197),u=r(75407),c=r(7437),h=r(17478),m=r(35630),p=r(25083),d=r(36626),f=r(25751);const g=["phoneErrorContent"];function b(e,t){1&e&&u.EFF(0,"Invalid phone number length")}const F=function(){return[]};function y(e,t){if(1&e){const e=u.RV6();u.j41(0,"label",4),u.EFF(1),u.j41(2,"span",5)(3,"tui-input-phone",6),u.nrm(4,"input",7),u.k0s(),u.j41(5,"button",8),u.bIt("click",(function(){const t=u.eBV(e).index,r=u.XpG();return u.Njj(r.removePhone(t))})),u.EFF(6," Delete phone number "),u.k0s()(),u.DNE(7,b,1,0,"ng-template",null,9,u.C5r),u.nrm(9,"tui-error",10),u.nI1(10,"async"),u.nI1(11,"tuiFieldError"),u.k0s()}if(2&e){const e=t.index;u.R7$(1),u.SpI(" Phone number ",e+1," "),u.R7$(2),u.FS9("formControlName",e),u.Y8G("tuiTextfieldLabelOutside",!0),u.R7$(6),u.FS9("formControlName",e),u.Y8G("error",u.bMT(10,5,u.bMT(11,7,u.lJ4(9,F))))}}const k=(()=>{var e;class t{constructor(){this.testForm=new o.gE({phones:new o.Yp([new o.MJ("",[o.k0.required,this.getPhoneLengthValidator()])],[this.getPhoneArrayValidator()])})}get formData(){return this.testForm.get("phones")}addPhone(){this.formData.push(new o.MJ("",this.addValidators()))}removePhone(e){this.formData.removeAt(e);let t=0;for(;t<=1&&this.formData.controls[t];)this.formData.controls[t]?.setValidators([o.k0.required,this.getPhoneLengthValidator()]),t++}addValidators(){return this.formData.controls.length<2?[o.k0.required,this.getPhoneLengthValidator()]:null}getPhoneLengthValidator(){return e=>12!==e.value.length?{length:new a.MxN(this.phoneErrorContent)}:null}getPhoneArrayValidator(){return e=>e.controls.length<2||e.controls.filter((e=>e.errors)).length&&e.controls.length?{length:new a.MxN("You should add at least 2 phone number")}:null}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.VBU({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){if(1&e&&u.GBs(g,5),2&e){let e;u.mGM(e=u.lsd())&&(t.phoneErrorContent=e.first)}},standalone:!0,exportAs:"Example4",features:[u.aNF],decls:7,vars:8,consts:[[3,"formGroup"],["formArrayName","phones","tuiLabel","","class","tui-space_bottom-4",4,"ngFor","ngForOf"],["formArrayName","phones",1,"form-array-error",3,"error"],["size","s","tuiButton","","type","button",1,"tui-space_top-4",3,"click"],["formArrayName","phones","tuiLabel","",1,"tui-space_bottom-4"],[1,"row"],["tuiTextfieldSize","m",1,"input",3,"formControlName","tuiTextfieldLabelOutside"],["autocomplete","new-password","tuiTextfieldLegacy",""],["appearance","icon","iconStart","@tui.trash","size","m","tuiIconButton","","type","button",1,"tui-space_left-2","icon",3,"click"],["phoneErrorContent",""],[3,"formControlName","error"]],template:function(e,t){1&e&&(u.j41(0,"form",0),u.DNE(1,y,12,10,"label",1),u.nrm(2,"tui-error",2),u.nI1(3,"async"),u.nI1(4,"tuiFieldError"),u.j41(5,"button",3),u.bIt("click",(function(){return t.addPhone()})),u.EFF(6," Add a phone number "),u.k0s()()),2&e&&(u.Y8G("formGroup",t.testForm),u.R7$(1),u.Y8G("ngForOf",t.formData.controls),u.R7$(1),u.Y8G("error",u.bMT(3,3,u.bMT(4,5,u.lJ4(7,F)))))},dependencies:[o.X1,o.qT,o.BC,o.cb,o.j4,o.JD,o.v8,n.Sq,l.NyH,c.e,h.y,m.B,p.z,i.TB_,l.CNI,d.k,f.G,i.paf,i.J6n,s.bsk,n.Jj],styles:[".input[_ngcontent-%COMP%]{width:20rem}.row[_ngcontent-%COMP%]{display:flex;align-items:center}.form-array-error[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),t})()}}]);