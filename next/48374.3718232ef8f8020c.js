(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[48374],{48374:(e,o,t)=>{t.r(o),t.d(o,{default:()=>d});var r=t(4594),s=t(35548),n=t(66094),a=t(26443),c=t(42436),p=t(48369),i=t(51160),u=t(59756),l=t(74922);const d=(()=>{var e;class o{constructor(){this.format=(0,s.f3M)(c.TUI_NUMBER_FORMAT),this.alerts=(0,s.f3M)(c.TuiAlertService),this.value=12345.67,this.numberProcessor$=this.format.pipe((0,i.U)((e=>o=>o.replace(e.decimalSeparator,".").replaceAll(new RegExp(e.thousandSeparator,"g"),"")))),this.textProcessor=e=>e.toUpperCase()}onCopy(e){this.alerts.open(e.clipboardData?.getData("text/plain")??"").subscribe()}}return(e=o).ɵfac=function(o){return new(o||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["ng-component"]],hostBindings:function(e,o){1&e&&s.NdJ("copy",(function(e){return o.onCopy(e)}))},standalone:!0,exportAs:"ExampleComponent1",features:[s.jDz],decls:5,vars:5,consts:[[1,"tui-space_bottom-2",3,"tuiCopyProcessor","ngModel","ngModelChange"],[3,"tuiCopyProcessor"]],template:function(e,o){1&e&&(s.TgZ(0,"tui-input-number",0),s.NdJ("ngModelChange",(function(e){return o.value=e})),s.ALo(1,"async"),s._uU(2," Copy this\n"),s.qZA(),s.TgZ(3,"div",1),s._uU(4,"Try copy this text"),s.qZA()),2&e&&(s.Q6J("tuiCopyProcessor",s.lcZ(1,3,o.numberProcessor$))("ngModel",o.value),s.xp6(3),s.Q6J("tuiCopyProcessor",o.textProcessor))},dependencies:[p._Hh,u.q,l.g,a.TuiCopyProcessorDirective,n.u5,n.JJ,n.On,r.Ov],encapsulation:2,changeDetection:0}),o})()}}]);