(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[14399],{14399:(e,n,t)=>{t.r(n),t.d(n,{default:()=>r});var o=t(16727),h=t(49493),a=t(7287),d=t(75407);function i(e,n){if(1&e&&(d.j41(0,"div"),d.EFF(1),d.k0s()),2&e){const e=d.XpG();d.R7$(1),d.SpI("Chosen dates: ",e.value,"")}}const r=(()=>{var e;class n{constructor(){this.value=null,this.firstMonth=h.x_Y.currentLocal(),this.middleMonth=h.x_Y.currentLocal().append({month:1}),this.lastMonth=h.x_Y.currentLocal().append({month:2}),this.hoveredItem=null}onDayClick(e){this.value?.isSingleDay||(this.value=new h.aBC(e,e)),this.value=h.aBC.sort(this.value.from,e)}onMonthChangeFirst(e){this.firstMonth=e,this.middleMonth=e.append({month:1}),this.lastMonth=e.append({month:2})}onMonthChangeMiddle(e){this.firstMonth=e.append({month:-1}),this.middleMonth=e,this.lastMonth=e.append({month:1})}onMonthChangeLast(e){this.firstMonth=e.append({month:-2}),this.middleMonth=e.append({month:-1}),this.lastMonth=e}}return(e=n).ɵfac=function(n){return new(n||e)},e.ɵcmp=d.VBU({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"Example2",features:[d.aNF],decls:5,vars:17,consts:[[1,"wrapper"],[3,"maxViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[3,"maxViewedMonth","minViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[3,"minViewedMonth","month","showAdjacent","value","hoveredItem","hoveredItemChange","dayClick","monthChange"],[4,"ngIf"]],template:function(e,n){1&e&&(d.j41(0,"div",0)(1,"tui-calendar",1),d.bIt("hoveredItemChange",(function(e){return n.hoveredItem=e}))("dayClick",(function(e){return n.onDayClick(e)}))("monthChange",(function(e){return n.onMonthChangeFirst(e)})),d.k0s(),d.j41(2,"tui-calendar",2),d.bIt("hoveredItemChange",(function(e){return n.hoveredItem=e}))("dayClick",(function(e){return n.onDayClick(e)}))("monthChange",(function(e){return n.onMonthChangeMiddle(e)})),d.k0s(),d.j41(3,"tui-calendar",3),d.bIt("hoveredItemChange",(function(e){return n.hoveredItem=e}))("dayClick",(function(e){return n.onDayClick(e)}))("monthChange",(function(e){return n.onMonthChangeLast(e)})),d.k0s()(),d.DNE(4,i,2,1,"div",4)),2&e&&(d.R7$(1),d.Y8G("maxViewedMonth",n.firstMonth)("month",n.firstMonth)("showAdjacent",!1)("value",n.value)("hoveredItem",n.hoveredItem),d.R7$(1),d.Y8G("maxViewedMonth",n.middleMonth)("minViewedMonth",n.middleMonth)("month",n.middleMonth)("showAdjacent",!1)("value",n.value)("hoveredItem",n.hoveredItem),d.R7$(1),d.Y8G("minViewedMonth",n.lastMonth)("month",n.lastMonth)("showAdjacent",!1)("value",n.value)("hoveredItem",n.hoveredItem),d.R7$(1),d.Y8G("ngIf",n.value))},dependencies:[o.bT,a.R5k],styles:[".wrapper[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),n})()}}]);