(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[98378],{98378:(t,e,n)=>{n.r(e),n.d(e,{default:()=>d});var i=n(35548),o=n(96038),r=n(42436),c=n(37109),s=n(68018);const u=["preview"],l=["contentSample"];function a(t,e){if(1&t&&i._UZ(0,"img",10),2&t){const t=e.polymorpheusOutlet;i.Q6J("src",t,i.LSH)}}function p(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"tui-preview",4),i.NdJ("tuiSwipe",(function(e){i.CHM(t);const n=i.oxw();return i.KtG(n.onSwipe(e))})),i.TgZ(1,"tui-preview-title"),i._uU(2),i.qZA(),i.TgZ(3,"tui-preview-pagination",5),i.NdJ("indexChange",(function(e){i.CHM(t);const n=i.oxw();return i.KtG(n.index=e)})),i.qZA(),i.TgZ(4,"button",6),i.NdJ("click",(function(){i.CHM(t);const e=i.oxw();return i.KtG(e.delete())})),i._uU(5," Delete "),i.qZA(),i.TgZ(6,"button",7),i.NdJ("click",(function(){i.CHM(t);const e=i.oxw();return i.KtG(e.download())})),i._uU(7," Download "),i.qZA(),i.TgZ(8,"button",8),i.NdJ("click",(function(){const e=i.CHM(t).$implicit;return i.KtG(e.complete())})),i._uU(9," Close "),i.qZA(),i.YNc(10,a,1,1,"img",9),i.qZA()}if(2&t){const t=i.oxw();i.Q6J("rotatable",!0),i.xp6(2),i.Oqu(t.titles[t.index]),i.xp6(1),i.Q6J("length",t.length)("index",t.index),i.xp6(7),i.Q6J("polymorpheusOutlet",t.previewContent)}}function h(t,e){1&t&&(i.TgZ(0,"div",11)(1,"h1"),i._uU(2,"Important document"),i.qZA(),i.TgZ(3,"p"),i._uU(4,"Hello everyone! This is some important document in A4 format, although it is made using html"),i.qZA(),i.TgZ(5,"p"),i._uU(6," This shows that the component preview can work with absolutely any content: this way you can show any template, image, pdf or even iframe with your favorite site. We will put this content in the center of the portal and provide the user with control over it, and we will provide you with convenient levers to change it and process actions. "),i.qZA(),i._UZ(7,"img",12),i.qZA())}const d=(()=>{var t;class e{constructor(){this.previewService=(0,i.f3M)(c.iK2),this.alerts=(0,i.f3M)(r.J9F),this.index=0,this.length=2,this.titles=["Transaction cert.jpg","My face.jpg"]}get previewContent(){return 0===this.index&&this.contentSample?this.contentSample:"https://avatars.githubusercontent.com/u/10106368"}show(){this.previewService.open(this.preview||"").subscribe({complete:()=>console.info("complete")})}download(){this.alerts.open("Downloading...").subscribe()}delete(){this.alerts.open("Deleting...").subscribe()}onSwipe(t){"left"===t.direction&&(this.index=(0,o.Kiv)(this.index+1,0,this.length-1)),"right"===t.direction&&(this.index=(0,o.Kiv)(this.index-1,0,this.length-1))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=i.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(t,e){if(1&t&&(i.Gf(u,5),i.Gf(l,5)),2&t){let t;i.iGM(t=i.CRH())&&(e.preview=t.first),i.iGM(t=i.CRH())&&(e.contentSample=t.first)}},standalone:!0,exportAs:"Example1",features:[i.jDz],decls:8,vars:0,consts:[[1,"tui-space_bottom-2"],["size","m","tuiButton","","type","button",1,"tui-space_bottom-4",3,"click"],["preview",""],["contentSample",""],[3,"rotatable","tuiSwipe"],[3,"length","index","indexChange"],["iconStart","@tui.trash","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["iconStart","@tui.download","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["iconStart","@tui.x","tuiIconButton","","tuiPreviewAction","","type","button",3,"click"],["alt","preview",3,"src",4,"polymorpheusOutlet"],["alt","preview",3,"src"],[1,"content"],["alt","logo","src","https://raw.githubusercontent.com/taiga-family/ng-polymorpheus/main/projects/demo/assets/logo.svg",1,"polymorpheus"]],template:function(t,e){1&t&&(i.TgZ(0,"div",0),i._uU(1,"With all features"),i.qZA(),i.TgZ(2,"button",1),i.NdJ("click",(function(){return e.show()})),i._uU(3," Show preview\n"),i.qZA(),i.YNc(4,p,11,5,"ng-template",null,2,i.W1O),i.YNc(6,h,8,0,"ng-template",null,3,i.W1O))},dependencies:[r.xGO,c.mEE,c.KXg,c.PYO,c.N8p,o.tBv,s.s$],styles:[".content[_ngcontent-%COMP%]{font:var(--tui-font-text-xl);background-color:var(--tui-background-base);width:50rem;height:68.75rem;padding:3.75rem;box-sizing:border-box;border-radius:.75rem}.polymorpheus[_ngcontent-%COMP%]{padding:2.5rem 10.375rem}"],changeDetection:0}),e})()}}]);