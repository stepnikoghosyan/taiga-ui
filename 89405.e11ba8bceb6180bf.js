(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[89405],{89405:(t,n,i)=>{i.r(n),i.d(n,{default:()=>m});var e=i(16727),o=i(49493),u=i(7287),a=i(75407),c=i(46654);function s(t,n){if(1&t&&(a.j41(0,"th",7),a.EFF(1),a.k0s()),2&t){const t=a.XpG().$implicit;a.R7$(1),a.SpI(" ",t," ")}}function d(t,n){if(1&t&&(a.qex(0),a.DNE(1,s,2,1,"th",6),a.bVm()),2&t){const t=n.$implicit;a.R7$(1),a.Y8G("tuiHead",t)}}function l(t,n){if(1&t&&(a.j41(0,"td",12),a.EFF(1),a.k0s()),2&t){const t=a.XpG().$implicit,n=a.XpG().$implicit;a.R7$(1),a.SpI(" ",n[t]," ")}}function r(t,n){if(1&t&&(a.qex(0),a.DNE(1,l,2,1,"td",11),a.bVm()),2&t){const t=n.$implicit;a.R7$(1),a.Y8G("tuiCell",t)}}function p(t,n){if(1&t&&(a.j41(0,"tr",10),a.DNE(1,r,2,1,"ng-container",4),a.k0s()),2&t){const t=a.XpG(2);a.R7$(1),a.Y8G("ngForOf",t.columns)}}function f(t,n){if(1&t&&(a.j41(0,"tbody",8),a.DNE(1,p,2,1,"tr",9),a.k0s()),2&t){const t=n.tuiLet;a.Y8G("data",t),a.R7$(1),a.Y8G("ngForOf",t)}}const m=(()=>{var t;class n{constructor(){this.data=[{id:1,name:"name"}]}get columns(){return Object.keys(this.data[0]??{})}addColumn(){this.data=this.data.map((t=>({...t,[`extra-${this.columns.length+1}`]:`extra column ${this.columns.length+1}`})))}addRows(){this.data=[...this.data,{...this.data[0],id:this.data.length+1}]}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=a.VBU({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"Example6",features:[a.aNF],decls:10,vars:5,consts:[["size","s","tuiButton","","type","button",3,"click"],["size","s","tuiButton","","type","button",1,"tui-space_left-2",3,"click"],["tuiTable","",1,"table","tui-space_top-3",3,"columns"],["tuiThGroup",""],[4,"ngFor","ngForOf"],["tuiTbody","",3,"data",4,"tuiLet"],["tuiTh","",4,"tuiHead"],["tuiTh",""],["tuiTbody","",3,"data"],["tuiTr","",4,"ngFor","ngForOf"],["tuiTr",""],["tuiTd","",4,"tuiCell"],["tuiTd",""]],template:function(t,n){1&t&&(a.j41(0,"button",0),a.bIt("click",(function(){return n.addColumn()})),a.EFF(1," Add column\n"),a.k0s(),a.j41(2,"button",1),a.bIt("click",(function(){return n.addRows()})),a.EFF(3," Add row\n"),a.k0s(),a.j41(4,"table",2)(5,"thead")(6,"tr",3),a.DNE(7,d,2,1,"ng-container",4),a.k0s()(),a.DNE(8,f,2,2,"tbody",5),a.nI1(9,"tuiTableSort"),a.k0s()),2&t&&(a.R7$(4),a.Y8G("columns",n.columns),a.R7$(3),a.Y8G("ngForOf",n.columns),a.R7$(1),a.Y8G("tuiLet",a.bMT(9,3,n.data)))},dependencies:[e.Sq,c.gJ,c.hO,c.ke,c.z2,c.z8,c.zv,c.nS,c.JO,c.Jx,o.cOJ,u.paf],styles:[".table[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),n})()}}]);