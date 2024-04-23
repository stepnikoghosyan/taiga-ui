(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[65767],{65767:(e,t,n)=>{n.r(t),n.d(t,{ExampleTuiExpandModule:()=>M});var o=n(76733),a=n(72133),i=n(42932),r=n(33898),s=n(87253),d=n(11746),p=n(20755),c=n(62022),u=n(1925),l=n(79242),m=n(16002),h=n(73097),f=n(38404),g=n(65004),y=n(43894),x=n(17894),b=n(97967),v=n(25530),w=n(612);function C(e,t){if(1&e&&(p.TgZ(0,"p"),p._uU(1,"Component to show expandable content"),p.qZA(),p.TgZ(2,"tui-doc-example",2),p._UZ(3,"tui-expand-example-1"),p.qZA()),2&e){const e=p.oxw();p.xp6(2),p.Q6J("content",e.example1)}}function T(e,t){1&e&&(p.TgZ(0,"div")(1,"p"),p._uU(2,"Luke's father."),p.qZA(),p.TgZ(3,"p",8),p._uU(4," Also Tyler Durden doesn't actually exist (hover for mode details) "),p.TgZ(5,"span",9),p._uU(6," Fight Club reference (notice how spoiler has "),p.TgZ(7,"code"),p._uU(8,"overflow: visible;"),p.qZA(),p._uU(9," when it's open). "),p.qZA()(),p.TgZ(10,"div"),p._uU(11,' A spoiler is an element of a disseminated summary or description of any piece of fiction that reveals any plot elements which threaten to give away important details. Typically, the details of the conclusion of the plot, including the climax and ending, are especially regarded as spoiler material. It can also be used to refer to any piece of information regarding any part of a given media that a potential consumer would not want to know beforehand. Because enjoyment of fiction depends a great deal upon the suspense of revealing plot details through standard narrative progression, the prior revelation of how things will turn out can "spoil" the enjoyment that some consumers of the narrative would otherwise have experienced. Spoilers can be found in message boards, articles, reviews, commercials, and movie trailers. '),p.qZA()())}function Z(e,t){if(1&e&&p.YNc(0,T,12,0,"div",7),2&e){const e=p.oxw(2);p.Q6J("ngIf",!e.delayed)}}function _(e,t){1&e&&(p._uU(0," Waits for a custom event "),p.TgZ(1,"code"),p._uU(2,"TUI_EXPAND_LOADED"),p.qZA(),p._uU(3," before opening. Content is initialized when opening starts "))}function P(e,t){1&e&&p._uU(0," Open / close state ")}function E(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"tui-doc-demo"),p._uU(1," Darth Vader is (spoilers below): "),p.TgZ(2,"tui-expand",3),p.YNc(3,Z,1,1,"ng-template",4),p.qZA()(),p.TgZ(4,"tui-doc-documentation"),p.YNc(5,_,4,0,"ng-template",5),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const n=p.oxw();return p.KtG(n.async=t)})),p.YNc(6,P,1,0,"ng-template",6),p.NdJ("documentationPropertyValueChange",(function(t){p.CHM(e);const n=p.oxw();return p.KtG(n.onExpandedChange(t))})),p.qZA()}if(2&e){const e=p.oxw();p.xp6(2),p.Q6J("async",e.async)("expanded",e.expanded),p.xp6(3),p.Q6J("documentationPropertyValue",e.async),p.xp6(1),p.Q6J("documentationPropertyValue",e.expanded)}}function U(e,t){if(1&e&&p._UZ(0,"tui-setup",10),2&e){const e=p.oxw();p.Q6J("import",e.exampleModule)("template",e.exampleHtml)}}let A=(()=>{var e;class t{constructor(){this.cdr=(0,p.f3M)(p.sBO),this.destroyRef=(0,p.f3M)(p.ktI),this.exampleModule=n.e(7916).then(n.t.bind(n,7916,17)),this.exampleHtml=n.e(17383).then(n.t.bind(n,17383,17)),this.example1={TypeScript:n.e(73109).then(n.t.bind(n,73109,17)),HTML:n.e(37863).then(n.t.bind(n,37863,17))},this.expanded=!1,this.async=!1,this.delayed=!1}onExpandedChange(e){this.expanded=e,this.delayed=this.async&&e,this.async&&this.expanded&&(0,u.H)(5e3).pipe((0,c.sL)(this.destroyRef)).subscribe((()=>{const e=new CustomEvent(d.TUI_EXPAND_LOADED,{bubbles:!0});this.delayed=!1,this.cdr.detectChanges(),this.expand?.nativeElement.dispatchEvent(e)}))}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["example-expand"]],viewQuery:function(e,t){if(1&e&&p.Gf(d.TuiExpandComponent,5,p.SBq),2&e){let e;p.iGM(e=p.CRH())&&(t.expand=e.first)}},decls:4,vars:0,consts:[["header","Expand","package","CORE","type","components"],["pageTab",""],["id","base","heading","Basic",3,"content"],[3,"async","expanded"],["tuiExpandContent",""],["documentationPropertyMode","input","documentationPropertyName","async","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","expanded","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[4,"ngIf"],[1,"tooltip"],[1,"bubble"],[3,"import","template"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,C,4,1,"ng-template",1),p.YNc(2,E,7,4,"ng-template",1),p.YNc(3,U,1,2,"ng-template",1),p.qZA())},dependencies:[l.S,m.I,o.O5,h.F,f.z,g.B,y.q,x.n,b.f,v.U,w.TuiExpandExample1],styles:['.tooltip[_ngcontent-%COMP%]{position:relative}.tooltip[_ngcontent-%COMP%]:hover   .bubble[_ngcontent-%COMP%]{opacity:1}.bubble[_ngcontent-%COMP%]{transition-property:opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;left:3.125rem;bottom:1.875rem;width:15.625rem;background:var(--tui-text-01);color:var(--tui-base-01);border-radius:.25rem;padding:.625rem;opacity:0}.bubble[_ngcontent-%COMP%]:after{content:"";position:absolute;left:50%;bottom:-15px;border-top:15px solid var(--tui-text-01);border-left:10px solid transparent;border-right:10px solid transparent;transform:translate(-10px)}'],changeDetection:0}),t})(),M=(()=>{var e;class t{}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[d.TuiExpandModule,o.ez,a.u5,a.UX,s.fV,i.Bz.forChild((0,s.Ve)(A)),r.UY]}),t})()}}]);