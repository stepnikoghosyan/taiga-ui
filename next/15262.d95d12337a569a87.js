(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[15262,37419,11116,30191,37573,12086],{37419:(e,t,i)=>{i.d(t,{f:()=>d});var a=i(20755),s=i(72133),n=i(58733),r=i(64064),o=i(81749),u=i(17841);const c=["type","checkbox","tuiCheckbox",""];let d=(()=>{var e;class t{constructor(){this.appearance=(0,a.f3M)(r.TuiAppearanceDirective),this.options=(0,a.f3M)(u.Y2),this.resolver=(0,a.f3M)(r.TUI_ICON_RESOLVER),this.destroy$=(0,a.f3M)(n.TuiDestroyService,{self:!0}),this.el=(0,a.f3M)(a.SBq).nativeElement,this.size=this.options.size,this.control=(0,a.f3M)(s.a5,{optional:!0})}ngOnInit(){this.control?.valueChanges&&(0,n.tuiControlValue)(this.control).pipe((0,o.R)(this.destroy$)).subscribe((e=>{this.el.indeterminate=null===e}))}ngDoCheck(){this.appearance.tuiAppearance=this.options.appearance(this.el)}getIcon(e){const t=this.options.icons[e],i=(0,n.tuiIsString)(t)?t:t(this.size);return`url(${this.resolver(i)})`}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=a.Xpm({type:e,selectors:[["input","type","checkbox","tuiCheckbox",""]],hostVars:8,hostBindings:function(e,t){2&e&&(a.Ikx("disabled",!t.control||t.control.disabled),a.uIk("data-size",t.size),a.Udp("--t-checked",t.getIcon("checked"))("--t-indeterminate",t.getIcon("indeterminate")),a.ekj("_readonly",!t.control))},inputs:{size:"size"},features:[a._Bn([n.TuiDestroyService]),a.zW0([{directive:r.TuiAppearanceDirective,inputs:["tuiAppearance","appearance","tuiAppearanceState","tuiAppearanceState","tuiAppearanceFocus","tuiAppearanceFocus"]},n.TuiNativeValidatorDirective])],attrs:c,decls:0,vars:0,template:function(e,t){},styles:['[_nghost-%COMP%]{--t-size: 1.5rem;--t-radius: var(--tui-radius-s);width:var(--t-size);height:var(--t-size);border-radius:var(--t-radius);cursor:pointer;margin:0;flex-shrink:0}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;width:100%;height:100%;content:"";background:currentColor;-webkit-mask:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>\') center / 100%;mask:url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"></svg>\') center / 100%;transform:scale(0);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s var(--tui-duration) ease-in-out,-webkit-mask 0s var(--tui-duration) ease-in-out}[_nghost-%COMP%]:disabled._readonly{opacity:1}[_nghost-%COMP%]:checked:before, [_nghost-%COMP%]:indeterminate:before{-webkit-mask-image:var(--t-checked);mask-image:var(--t-checked);transform:scale(1);transition:transform var(--tui-duration) ease-in-out,-webkit-mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out;transition:transform var(--tui-duration) ease-in-out,mask 0s ease-in-out,-webkit-mask 0s ease-in-out}[_nghost-%COMP%]:indeterminate:before{-webkit-mask-image:var(--t-indeterminate);mask-image:var(--t-indeterminate)}[data-size=s][_nghost-%COMP%]{--t-size: 1rem;--t-radius: var(--tui-radius-xs)}'],changeDetection:0}),t})()},17841:(e,t,i)=>{i.d(t,{Y2:()=>n,im:()=>r});var a=i(58733);const s={size:"m",appearance:e=>e.checked||e.indeterminate?"primary":"whiteblock",icons:{checked:e=>"m"===e?"tuiIconCheckLarge":"tuiIconCheck",indeterminate:e=>"m"===e?"tuiIconMinusLarge":"tuiIconMinus"}},n=(0,a.tuiCreateToken)(s);function r(e){return(0,a.tuiProvideOptions)(n,e,s)}}}]);