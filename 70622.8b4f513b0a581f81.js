(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[70622],{70622:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});var n=s(16727),i=s(49493),a=s(7287),l=s(89684),u=s(75407);function c(e,t){if(1&e){const e=u.RV6();u.j41(0,"p")(1,"button",2),u.bIt("click",(function(){u.eBV(e);const t=u.XpG();return u.Njj(t.reset())})),u.EFF(2," Reset "),u.k0s()()}}function r(e,t){if(1&e){const e=u.RV6();u.j41(0,"button",2),u.bIt("click",(function(){u.eBV(e);const t=u.XpG(2);return u.Njj(t.toggle())})),u.EFF(1),u.k0s()}if(2&e){const e=u.XpG(2);u.R7$(1),u.SpI(" Switch to ",e.opposite," ")}}function o(e,t){if(1&e&&(u.j41(0,"p"),u.EFF(1),u.DNE(2,r,2,1,"button",3),u.k0s()),2&e){const e=u.XpG();u.R7$(1),u.SpI(" You are seeing ",e.selected,". "),u.R7$(1),u.Y8G("ngIf",!e.isLastVisible)}}const h=i.JKS.currentLocal(),d=h.append({day:-h.dayOfWeek()}),f=h.append({day:1-h.day}),p=f.append({month:-f.month%3}),g=(()=>{var e;class t{constructor(){this.items=[new l.r6T(new i.aBC(h.append({day:-30}),h),"Default"),new l.r6T(new i.aBC(d,h),"Week"),new l.r6T(new i.aBC(f,h),"Month"),new l.r6T(new i.aBC(p,h),"Quarter")],this.selected=this.default,this.value=this.default.range}get default(){return this.items[0]}get isDefault(){return this.selected===this.default}get isSelected(){return!!this.items.find((e=>e===this.selected))}get isLastVisible(){return this.selected===this.items[this.items.length-1]}get opposite(){if(!this.isSelected)return null;switch(this.selected){case this.default:return null;case this.items[1]:return this.items[2];case this.items[2]:return this.items[3];case this.items[3]:default:return null}}onValue(e){this.value=e}reset(){this.selected=this.default,this.value=this.selected.range}toggle(){this.selected=this.opposite,this.value=this.selected?.range??null}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=u.VBU({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"Example5",features:[u.aNF],decls:3,vars:5,consts:[[3,"items","value","item","itemChange","valueChange"],[4,"ngIf"],["tuiLink","",3,"click"],["tuiLink","",3,"click",4,"ngIf"]],template:function(e,t){1&e&&(u.j41(0,"tui-calendar-range",0),u.bIt("itemChange",(function(e){return t.selected=e}))("valueChange",(function(e){return t.onValue(e)})),u.k0s(),u.DNE(1,c,3,0,"p",1),u.DNE(2,o,3,2,"p",1)),2&e&&(u.Y8G("items",t.items)("value",t.value)("item",t.selected),u.R7$(1),u.Y8G("ngIf",t.isLastVisible),u.R7$(1),u.Y8G("ngIf",t.isSelected&&!t.isDefault))},dependencies:[l.OKf,n.bT,a.Jc3],encapsulation:2,changeDetection:0}),t})()}}]);