(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[26856],{26856:(t,e,n)=>{n.r(e),n.d(e,{TUI_AMOUNT_DEFAULT_OPTIONS:()=>tt,TUI_AMOUNT_OPTIONS:()=>et,TUI_BIN_TABLE:()=>f,TUI_CARD_CVC_TEXTS:()=>G,TUI_CARD_EXPIRY_TEXTS:()=>N,TUI_CARD_NUMBER_TEXTS:()=>U,TUI_CODE_DICTIONARY:()=>p,TUI_CURRENCY_DICTIONARY:()=>m,TUI_INPUT_CARD_DEFAULT_OPTIONS:()=>Y,TUI_INPUT_CARD_GROUPED_DEFAULT_OPTIONS:()=>lt,TUI_INPUT_CARD_GROUPED_OPTIONS:()=>dt,TUI_INPUT_CARD_GROUPED_TEXTS:()=>gt,TUI_INPUT_CARD_OPTIONS:()=>K,TUI_MASK_CARD:()=>D,TUI_MASK_CARD_HOLDER:()=>S,TUI_MASK_CVC:()=>k,TUI_MASK_EXPIRE:()=>E,TUI_PAYMENT_SYSTEM_ICONS:()=>z,TuiAmountPipe:()=>at,TuiCurrency:()=>u,TuiCurrencyCode:()=>c,TuiCurrencyPipe:()=>rt,TuiFormatCardPipe:()=>ot,TuiInputCVC:()=>xt,TuiInputCard:()=>$,TuiInputCardGroup:()=>yt,TuiInputExpire:()=>Dt,TuiThumbnailCard:()=>At,tuiAmountOptionsProvider:()=>nt,tuiCardExpireValidator:()=>Ut,tuiCardNumberValidator:()=>Nt,tuiCreateLuhnValidator:()=>Gt,tuiDefaultCardValidator:()=>x,tuiFormatCurrency:()=>d,tuiFormatSignSymbol:()=>it,tuiGetCodeByCurrency:()=>h,tuiGetCurrencyByCode:()=>g,tuiGetCurrencySymbol:()=>l,tuiGetPaymentSystem:()=>C,tuiInputCardGroupedOptionsProvider:()=>pt,tuiInputCardOptionsProvider:()=>J,tuiIsCardLengthValid:()=>M,tuiIsCardNumberValid:()=>P,tuiIsElectron:()=>I,tuiIsExpireValid:()=>y,tuiIsMaestro:()=>_,tuiIsMastercard:()=>b,tuiIsMir:()=>T,tuiIsVisa:()=>v});var i=n(84911),a=n(35548),r=n(66094),o=n(15514),s=n(61887),u=function(t){return t.ArmenianDram="AMD",t.AustralianDollar="AUD",t.AzerbaijaniManat="AZN",t.Baht="THB",t.BahrainiDinar="BHD",t.BelarusianRuble="BYN",t.BrazilianReal="BRL",t.CanadianDollar="CAD",t.CzechKoruna="CZK",t.Dirham="AED",t.Dollar="USD",t.EastCaribbeanDollar="XCD",t.Euro="EUR",t.Forint="HUF",t.GeorgianLari="GEL",t.HongKongDollar="HKD",t.Hryvnia="UAH",t.IndianRupee="INR",t.IndonesianRupiah="IDR",t.IranianRial="IRR",t.IsraeliShekel="ILS",t.KyrgyzstanSom="KGS",t.MalaysianRinggit="MYR",t.MexicanPeso="MXN",t.MoldovanLeu="MDL",t.MongolianTugrik="MNT",t.NewTurkmenManat="TMT",t.PolandZloty="PLN",t.Pound="GBP",t.Ruble="RUB",t.SaudiRiyal="SAR",t.SerbianDinar="RSD",t.SingaporeDollar="SGD",t.SouthAfricanRand="ZAR",t.SriLankanRupee="LKR",t.SwissFranc="CHF",t.TajikistaniSomoni="TJS",t.Tenge="KZT",t.TurkishLira="TRY",t.UzbekSum="UZS",t.VietnameseDong="VND",t.Won="KRW",t.Yen="JPY",t.YuanRenminbi="CNY",t}(u||{}),c=function(t){return t.ArmenianDram="051",t.AustralianDollar="036",t.AzerbaijaniManat="944",t.Baht="764",t.BahrainiDinar="048",t.BelarusianRuble="933",t.BrazilianReal="986",t.CanadianDollar="124",t.CzechKoruna="203",t.Dirham="784",t.Dollar="840",t.EastCaribbeanDollar="951",t.Euro="978",t.Forint="348",t.GeorgianLari="981",t.HongKongDollar="344",t.Hryvnia="980",t.IndianRupee="356",t.IndonesianRupiah="360",t.IranianRial="364",t.IsraeliShekel="376",t.KyrgyzstanSom="417",t.MalaysianRinggit="458",t.MexicanPeso="484",t.MoldovanLeu="498",t.MongolianTugrik="496",t.NewTurkmenManat="934",t.PolandZloty="985",t.Pound="826",t.Ruble="643",t.SaudiRiyal="682",t.SerbianDinar="941",t.SingaporeDollar="702",t.SouthAfricanRand="710",t.SriLankanRupee="144",t.SwissFranc="756",t.TajikistaniSomoni="972",t.Tenge="398",t.TurkishLira="949",t.UzbekSum="860",t.VietnameseDong="704",t.Won="410",t.Yen="392",t.YuanRenminbi="156",t}(c||{});function l(t){switch(t){case u.Ruble:case c.Ruble:return"₽";case u.Dollar:case c.Dollar:case u.MexicanPeso:case c.MexicanPeso:return"$";case u.SingaporeDollar:case c.SingaporeDollar:return"S$";case u.AustralianDollar:case c.AustralianDollar:return"A$";case u.BahrainiDinar:case c.BahrainiDinar:return"BD";case u.CzechKoruna:case c.CzechKoruna:return"Kč";case u.HongKongDollar:case c.HongKongDollar:return"HK$";case u.CanadianDollar:case c.CanadianDollar:return"C$";case u.EastCaribbeanDollar:case c.EastCaribbeanDollar:return"EC$";case u.Euro:case c.Euro:return"€";case u.Forint:case c.Forint:return"Ft";case u.Pound:case c.Pound:return"£";case u.Baht:case c.Baht:return"฿";case u.TurkishLira:case c.TurkishLira:return"₺";case u.YuanRenminbi:case c.YuanRenminbi:return"CN¥";case u.Yen:case c.Yen:return"¥";case u.IsraeliShekel:case c.IsraeliShekel:return"₪";case u.IndianRupee:case c.IndianRupee:return"₹";case u.SwissFranc:case c.SwissFranc:return"₣";case u.ArmenianDram:case c.ArmenianDram:return"֏";case u.Won:case c.Won:return"₩";case u.Tenge:case c.Tenge:return"₸";case u.Hryvnia:case c.Hryvnia:return"₴";case u.UzbekSum:case c.UzbekSum:return"So'm";case u.KyrgyzstanSom:case c.KyrgyzstanSom:return"c";case u.Dirham:case c.Dirham:return"Dh";case u.TajikistaniSomoni:case c.TajikistaniSomoni:return"SM";case u.MalaysianRinggit:case c.MalaysianRinggit:return"RM";case u.BelarusianRuble:case c.BelarusianRuble:return"Br";case u.GeorgianLari:case c.GeorgianLari:return"₾";case u.AzerbaijaniManat:case c.AzerbaijaniManat:return"₼";case u.SriLankanRupee:case c.SriLankanRupee:return"Rs.";case u.SerbianDinar:case c.SerbianDinar:return"DIN";case u.SaudiRiyal:case c.SaudiRiyal:return"SR";case u.MoldovanLeu:case c.MoldovanLeu:return"L";case u.MongolianTugrik:case c.MongolianTugrik:return"₮";case u.PolandZloty:case c.PolandZloty:return"zł";case u.SouthAfricanRand:case c.SouthAfricanRand:return"R";case u.IranianRial:case c.IranianRial:return"IR";case u.IndonesianRupiah:case c.IndonesianRupiah:return"Rp";case u.VietnameseDong:case c.VietnameseDong:return"đ";case u.NewTurkmenManat:case c.NewTurkmenManat:return"TMT";case u.BrazilianReal:case c.BrazilianReal:return"R$";default:return null}}function d(t){const e=function(t){return null===t||(0,s.tuiIsString)(t)?t||"":String(t).padStart(3,"0")}(t);return l(e)||e}const p={[u.Ruble]:c.Ruble,[u.Dollar]:c.Dollar,[u.MexicanPeso]:c.MexicanPeso,[u.MoldovanLeu]:c.MoldovanLeu,[u.PolandZloty]:c.PolandZloty,[u.SingaporeDollar]:c.SingaporeDollar,[u.AustralianDollar]:c.AustralianDollar,[u.HongKongDollar]:c.HongKongDollar,[u.CanadianDollar]:c.CanadianDollar,[u.CzechKoruna]:c.CzechKoruna,[u.EastCaribbeanDollar]:c.EastCaribbeanDollar,[u.Euro]:c.Euro,[u.Forint]:c.Forint,[u.Pound]:c.Pound,[u.Baht]:c.Baht,[u.BahrainiDinar]:c.BahrainiDinar,[u.TurkishLira]:c.TurkishLira,[u.YuanRenminbi]:c.YuanRenminbi,[u.Yen]:c.Yen,[u.IsraeliShekel]:c.IsraeliShekel,[u.IndianRupee]:c.IndianRupee,[u.SwissFranc]:c.SwissFranc,[u.ArmenianDram]:c.ArmenianDram,[u.Won]:c.Won,[u.Tenge]:c.Tenge,[u.Hryvnia]:c.Hryvnia,[u.UzbekSum]:c.UzbekSum,[u.KyrgyzstanSom]:c.KyrgyzstanSom,[u.Dirham]:c.Dirham,[u.TajikistaniSomoni]:c.TajikistaniSomoni,[u.MalaysianRinggit]:c.MalaysianRinggit,[u.BelarusianRuble]:c.BelarusianRuble,[u.GeorgianLari]:c.GeorgianLari,[u.AzerbaijaniManat]:c.AzerbaijaniManat,[u.SriLankanRupee]:c.SriLankanRupee,[u.SerbianDinar]:c.SerbianDinar,[u.SaudiRiyal]:c.SaudiRiyal,[u.MongolianTugrik]:c.MongolianTugrik,[u.SouthAfricanRand]:c.SouthAfricanRand,[u.IranianRial]:c.IranianRial,[u.IndonesianRupiah]:c.IndonesianRupiah,[u.VietnameseDong]:c.VietnameseDong,[u.NewTurkmenManat]:c.NewTurkmenManat,[u.BrazilianReal]:c.BrazilianReal};function h(t){return p[t]??null}const m={[c.Ruble]:u.Ruble,[c.Dollar]:u.Dollar,[c.MexicanPeso]:u.MexicanPeso,[c.MoldovanLeu]:u.MoldovanLeu,[c.PolandZloty]:u.PolandZloty,[c.SingaporeDollar]:u.SingaporeDollar,[c.AustralianDollar]:u.AustralianDollar,[c.HongKongDollar]:u.HongKongDollar,[c.CanadianDollar]:u.CanadianDollar,[c.CzechKoruna]:u.CzechKoruna,[c.EastCaribbeanDollar]:u.EastCaribbeanDollar,[c.Euro]:u.Euro,[c.Forint]:u.Forint,[c.Pound]:u.Pound,[c.Baht]:u.Baht,[c.BahrainiDinar]:u.BahrainiDinar,[c.TurkishLira]:u.TurkishLira,[c.YuanRenminbi]:u.YuanRenminbi,[c.Yen]:u.Yen,[c.IsraeliShekel]:u.IsraeliShekel,[c.IndianRupee]:u.IndianRupee,[c.SwissFranc]:u.SwissFranc,[c.ArmenianDram]:u.ArmenianDram,[c.Won]:u.Won,[c.Tenge]:u.Tenge,[c.Hryvnia]:u.Hryvnia,[c.UzbekSum]:u.UzbekSum,[c.KyrgyzstanSom]:u.KyrgyzstanSom,[c.Dirham]:u.Dirham,[c.TajikistaniSomoni]:u.TajikistaniSomoni,[c.MalaysianRinggit]:u.MalaysianRinggit,[c.BelarusianRuble]:u.BelarusianRuble,[c.GeorgianLari]:u.GeorgianLari,[c.AzerbaijaniManat]:u.AzerbaijaniManat,[c.SriLankanRupee]:u.SriLankanRupee,[c.SerbianDinar]:u.SerbianDinar,[c.SaudiRiyal]:u.SaudiRiyal,[c.MongolianTugrik]:u.MongolianTugrik,[c.SouthAfricanRand]:u.SouthAfricanRand,[c.IranianRial]:u.IranianRial,[c.IndonesianRupiah]:u.IndonesianRupiah,[c.VietnameseDong]:u.VietnameseDong,[c.NewTurkmenManat]:u.NewTurkmenManat,[c.BrazilianReal]:u.BrazilianReal};function g(t){return m[t]??null}const f=[["mir",2200,2204],["mastercard",2221,2720],["jcb",3528,3589],["amex",34],["amex",37],["dinersclub",36],["electron",4026],["electron",4175],["electron",4405],["electron",4508],["electron",4844],["electron",4913],["electron",4917],["visa",4],["verve",506099,506198],["verve",507865,507964],["maestro",5018],["maestro",5020],["maestro",5038],["maestro",5090],["maestro",5890],["maestro",5893],["rupay",508],["maestro",50],["mastercard",51,55],["maestro",56],["maestro",58],["mastercard",5],["maestro",6e3],["maestro",6304],["maestro",6759,6763],["verve",650002,650027],["maestro",676770],["maestro",676774],["discover",644,649],["discover",6011],["rupay",60],["unionpay",62],["discover",65],["maestro",6],["rupay",81,82],["uzcard",8600],["humo",9860]];function C(t,e){if(!t)return null;const n=f.find((([n,i,a=i])=>{const r=Number.parseInt(t.slice(0,String(i).length),10);return r>=i&&r<=a&&(!e?.length||e.includes(n))}));return n?.[0]??null}function _(t,e,n){return 6===n||50===e||e>55&&e<59||!(t<500)&&t<510}function b(t,e,n){return 5===n||!(e<10)&&(e>50&&e<56||!(t<1e3)&&t>2220&&t<2721)}function T(t){return t>2199&&t<2205}function I(t){switch(t){case 4026:case 4175:case 4405:case 4508:case 4844:case 4913:case 4917:return!0;default:return!1}}function v(t){return 4===t}function M(t){const{length:e}=t;switch(C(t)){case"electron":return 16===e;case"maestro":return e>11&&e<20;case"mastercard":case"mir":return e>15&&e<20;case"visa":return e>12&&e<20;default:return e>8&&e<20}}function P(t){const e=String(t).replace(s.TUI_NON_DIGITS_REGEXP,""),{length:n}=e;return!(e.split("").map(((t,e)=>{const i=parseInt(t,10);if((e+n)%2==0){const t=2*i;return t>9?t-9:t}return i})).reduce(((t,e)=>t+e),0)%10)}function y(t,e=new Date){const n=e.getMonth()+1,i=e.getFullYear()-2e3,a=(0,s.tuiClamp)(parseInt(t.slice(0,2),10),1,12),r=(0,s.tuiClamp)(parseInt(t.slice(-2),10),0,99);return r>i||i===r&&a>=n}const x=t=>t.length>11&&M(t)&&P(t),D={mask:[s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP," ",s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP," ",s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP," ",s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP," ",s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP,s.TUI_DIGIT_REGEXP]},R={А:"F",В:"D",Г:"U",Д:"L",Е:"T",З:"P",И:"B",Й:"Q",К:"R",Л:"K",М:"V",Н:"Y",О:"J",П:"G",Р:"H",С:"C",Т:"N",У:"E",Ф:"A",Ц:"W",Ч:"X",Ш:"I",Щ:"O",Ы:"S",Ь:"M",Я:"Z"};function O(t){return t.toUpperCase().split("").map((t=>R[t]||t)).join("")}const S={mask:/^[a-z\s]+$/i,preprocessors:[({elementState:t,data:e})=>{const{value:n,selection:i}=t;return{elementState:{selection:i,value:O(n)},data:O(e)}}]},k=t=>({mask:new Array(t).fill(s.TUI_DIGIT_REGEXP)}),E=(0,n(64793).tr)({mode:"mm/yy",separator:"/"});var w=n(75653),A=n(97318);const U=(0,s.tuiCreateTokenFromFactory)((0,w.vv)("cardNumber")),N=(0,s.tuiCreateTokenFromFactory)((0,w.vv)("cardExpiry")),G=(0,s.tuiCreateToken)((0,A.of)(["CVC","CVC/CVV"])),z=(0,s.tuiCreateToken)({mir:"@tui.mir",visa:"@tui.visa",electron:"@tui.electron",mastercard:"@tui.mastercard",maestro:"@tui.maestro",amex:"@tui.amex",dinersclub:"@tui.diners-club",discover:"@tui.discover",humo:"@tui.humo",jcb:"@tui.jcb",rupay:"@tui.ru-pay",unionpay:"@tui.union-pay",uzcard:"@tui.uzcard",verve:"@tui.verve"});var L=n(12569),F=n(84439),V=n(275),B=n(51160),Z=n(905),j=n(24815),H=n(67271);const Y={icon:null,paymentSystemHandler:C,autocomplete:!1},K=(0,s.tuiCreateToken)(Y);function J(t){return(0,s.tuiProvideOptions)(K,t,Y)}var X;class ${constructor(){this.icons=(0,a.f3M)(z),this.options=(0,a.f3M)(K),this.resolver=(0,a.f3M)(L.TUI_ICON_RESOLVER),this.control=(0,a.f3M)(r.a5),this.mask=(0,a.f3M)(o.ro),this.accessor=(0,a.f3M)(r.Fj,{self:!0,optional:!0}),this.autocomplete=this.options.autocomplete,this.icon=this.options.icon,this.binChange=(0,F.H)(0).pipe((0,V.w)((()=>(0,s.tuiControlValue)(this.control))),(0,B.U)((t=>t.length<6?null:t.replace(" ","").slice(0,6))),(0,Z.O)(null),(0,j.x)(),(0,H.T)(1))}ngOnInit(){if(this.mask.options=D,this.mask.ngOnChanges(),!this.accessor)return;const t=this.accessor.onChange.bind(this.accessor);this.accessor.onChange=e=>t(e.replaceAll(" ",""))}get backgroundImage(){const t=this.getPaymentSystem(this.control.value),e=this.icon||t&&this.resolver(this.icons[t]);return e&&""!==this.icon?`url(${e})`:null}getPaymentSystem(t){return this.options.paymentSystemHandler(t)}}(X=$).ɵfac=function(t){return new(t||X)},X.ɵdir=a.lG2({type:X,selectors:[["input","tuiInputCard",""]],hostAttrs:["inputmode","numeric","placeholder","0000 0000 0000 0000"],hostVars:3,hostBindings:function(t,e){2&t&&(a.Ikx("autocomplete",e.autocomplete?"cc-number":"off"),a.Udp("background-image",e.backgroundImage))},inputs:{autocomplete:"autocomplete",icon:"icon"},outputs:{binChange:"binChange"},standalone:!0,features:[a.zW0([o.ro])]}),(0,i.gn)([s.tuiPure],$.prototype,"getPaymentSystem",null);var Q=n(4594),W=n(54795),q=n(12660);const tt={currency:null,currencyAlign:"right",sign:"negative-only"},et=(0,s.tuiCreateToken)(tt);function nt(t){return(0,s.tuiProvideOptions)(et,t,tt)}function it(t,e){return"never"===e||!t||"negative-only"===e&&t>0?"":"force-negative"===e||t<0&&"force-positive"!==e?s.CHAR_MINUS:s.CHAR_PLUS}let at=(()=>{var t;class e{constructor(){this.options=(0,a.f3M)(et),this.format=(0,a.f3M)(L.TUI_NUMBER_FORMAT)}transform(t,e=this.options.currency,n=this.options.currencyAlign){return this.format.pipe((0,B.U)((i=>{const a=it(t,this.options.sign),r=d(e),o=(0,L.tuiFormatNumber)(Math.abs(t),{...i,precision:Number.isNaN(i.precision)?2:i.precision}),u=r?.length>1||"right"===n?s.CHAR_NO_BREAK_SPACE:"";return"right"===n?`${a}${o}${u}${r}`:`${a}${r}${u}${o}`})))}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=a.Yjl({name:"tuiAmount",type:t,pure:!0,standalone:!0}),e})(),rt=(()=>{var t;class e{transform(t){return d(t)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=a.Yjl({name:"tuiCurrency",type:t,pure:!0,standalone:!0}),e})(),ot=(()=>{var t;class e{transform(t="",e=!1){return t&&!e?t.split("").map(((t,e)=>e&&e%4==0?` ${t}`:t)).join(""):""}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵpipe=a.Yjl({name:"tuiFormatCard",type:t,pure:!0,standalone:!0}),e})();var st=n(29722),ut=n(68018),ct=n(19403);const lt={...Y,cardValidator:x,exampleText:"0000 0000 0000 0000",exampleTextCVC:"000",cvcHidden:!0},dt=(0,s.tuiCreateToken)(lt);function pt(t){return(0,s.tuiProvideOptions)(dt,t,lt)}var ht=n(71778),mt=n(29963);const gt=(0,s.tuiCreateTokenFromFactory)((()=>{const t=(0,a.f3M)(ht.m9),e=(0,a.f3M)(U),n=(0,a.f3M)(N),i=(0,a.f3M)(G),{desktopSmall:r}=(0,a.f3M)(L.TUI_MEDIA),o=t.matchMedia(`screen and (min-width: ${(r-1)/16}em)`);return(0,s.tuiTypedFromEvent)(o,"change").pipe((0,Z.O)(null),(0,V.w)((()=>(0,mt.a)([(0,A.of)(Number(o.matches)),e,n,i]))),(0,B.U)((([t,e,n,i])=>({cardNumberText:e[t],expiryText:n[t],cvcText:i[t]}))))}));var ft;const Ct=["inputCard"],_t=["inputExpire"],bt=["inputCVC"];function Tt(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"label",3),a.NdJ("click.silent.prevent",(function(){return 0})),a.TgZ(1,"input",14,15),a.NdJ("focus",(function(){return 0}))("ngModelChange",(function(e){a.CHM(t);const n=a.oxw();return a.KtG(n.onCardChange(e))})),a.ALo(3,"tuiMapper"),a.qZA(),a.TgZ(4,"span",16),a.NdJ("waResizeObserver",(function(){return 0})),a._UZ(5,"span",17,18),a.TgZ(7,"span",19)(8,"span",20),a._uU(9),a.qZA()()(),a.TgZ(10,"div",6),a._uU(11),a.qZA()()}if(2&t){const t=e.tuiLet,n=a.MAs(6),i=a.oxw();let r;a.xp6(1),a.ekj("t-input_hidden",!i.card.length&&i.focus())("t-input_inert",i.cardPrefilled),a.Q6J("autocomplete",i.autocomplete?"cc-number":"off")("disabled",i.disabled())("maskito",i.maskCard)("ngModel",t)("placeholder",i.cardPrefilled?"":i.exampleText)("readOnly",i.readOnly())("tabIndex",i.cardFocusable?0:-1),a.uIk("aria-invalid",!i.cardPrefilled&&!a.xi3(3,23,i.card,i.cardValidator))("id",i.id+"_card"),a.xp6(3),a.ekj("t-collapsed_enable-mask",i.cardCollapsed),a.uIk("data-before",i.masked),a.xp6(1),a.Q6J("textContent",t.slice(-i.tailLength)),a.xp6(3),a.Udp("transform",i.transform(n)),a.xp6(1),a.hij(" ",t," "),a.xp6(1),a.ekj("t-label_raised",i.labelRaised()),a.xp6(1),a.hij(" ",null==(r=i.texts())?null:r.cardNumberText," ")}}function It(t,e){if(1&t&&(a._UZ(0,"img",23),a.ALo(1,"tuiIcon")),2&t){const t=e.polymorpheusOutlet;a.Q6J("src",a.lcZ(1,1,t),a.LSH)}}function vt(t,e){if(1&t&&(a.TgZ(0,"div",21),a.YNc(1,It,2,3,"img",22),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("polymorpheusOutlet",t.content)}}function Mt(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"tui-icon",24),a.NdJ("click",(function(){a.CHM(t);const e=a.oxw();return a.KtG(e.clear())})),a.qZA()}if(2&t){const t=a.oxw();a.Q6J("icon",t.icons.close)}}function Pt(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"tui-icon",25),a.NdJ("click",(function(){a.CHM(t);const e=a.oxw();return a.KtG(e.toggle())})),a.qZA()}}class yt extends s.TuiControl{constructor(){super(...arguments),this.expirePrefilled=!1,this.paymentSystems=(0,a.f3M)(z),this.options=(0,a.f3M)(dt),this.el=(0,s.tuiInjectElement)(),this.hover=(0,s.tuiHovered)(),this.focusedIn=(0,W.O4)((0,ct.T)((0,s.tuiTypedFromEvent)(this.el,"focusin"),(0,s.tuiTypedFromEvent)(this.el,"focusout")).pipe((0,B.U)((()=>(0,s.tuiIsNativeFocusedIn)(this.el)))),{initialValue:!1}),this.exampleTextCVC=this.options.exampleTextCVC,this.cvcHidden=this.options.cvcHidden,this.maskCVC=k(3),this.dropdown=(0,a.f3M)(L.TuiDropdownDirective),this.maskCard=D,this.maskExpire=E,this.icons=(0,a.f3M)(L.TUI_COMMON_ICONS),this.texts=(0,W.O4)((0,a.f3M)(gt)),this.open=(0,s.tuiDirectiveBinding)(L.TuiDropdownOpen,"tuiDropdownOpen",!1),this.state=(0,s.tuiDirectiveBinding)(L.TuiAppearance,"tuiAppearanceState",(0,a.Flj)((()=>this.disabled()?"disabled":this.hover()?"hover":null))),this.focus=(0,s.tuiDirectiveBinding)(L.TuiAppearance,"tuiAppearanceFocus",(0,a.Flj)((()=>this.open()||this.focusedIn()))),this.sub=(0,a.f3M)(L.TuiDropdownOpen).tuiDropdownOpenChange.pipe((0,W.sL)()).subscribe((t=>{this.open.set(t)})),this.labelRaised=(0,a.Flj)((()=>this.focus()&&!this.readOnly()||!!this.value()?.card)),this.hasCleaner=(0,a.Flj)((()=>!!this.value()?.card&&this.interactive())),this.exampleText=this.options.exampleText,this.cardValidator=this.options.cardValidator,this.icon=this.options.icon,this.id=(0,a.f3M)(s.TuiIdService).generate(),this.autocomplete=this.options.autocomplete,this.binChange=new a.vpe}set codeLength(t){this.exampleTextCVC="0".repeat(t),this.maskCVC=k(t)}get bin(){return this.card.length<6?null:this.card.slice(0,6)}writeValue(t){const{bin:e}=this;super.writeValue(t),this.updateBin(e),this.expirePrefilled=!!this.expire&&this.cardPrefilled}focusCard(){this.inputCard?.nativeElement.focus({preventScroll:!0})}focusExpire(){this.inputExpire?.nativeElement.focus({preventScroll:!0})}focusCVC(){this.inputCVC?.nativeElement.focus({preventScroll:!0})}handleOption(t){const{card:e="",expire:n="",cvc:i=""}=t||{},{bin:a}=this,r=!e&&this.inputCard?.nativeElement||!n&&this.inputExpire?.nativeElement||this.inputCVC?.nativeElement;this.onChange({card:e,expire:n,cvc:i}),this.updateBin(a),this.open.set(!1),this.expirePrefilled=!!n,r?.focus()}clear(){this.expirePrefilled=!1,this.onChange(null),this.focusCard()}get content(){const t=this.getPaymentSystem(this.card);return this.icon||t&&this.paymentSystems[t]}get card(){return this.value()?.card||""}get expire(){return this.value()?.expire||""}get cvc(){return this.value()?.cvc||""}get cardCollapsed(){return this.isFocusable(this.card)&&!(0,s.tuiIsNativeFocused)(this.inputCard?.nativeElement)}get tailLength(){return this.card.length%4>0?5:4}get cardPrefilled(){return!!this.card.match(s.TUI_NON_DIGIT_REGEXP)}get cvcPrefilled(){return!!this.cvc.match(s.TUI_NON_DIGIT_REGEXP)}get cardFocusable(){return!this.cardPrefilled}get expireFocusable(){return this.isFocusable(this.card)&&!this.expirePrefilled}get cvcFocusable(){return this.isFocusable(this.card)}get masked(){return this.cardPrefilled?`*${this.card.slice(-4)}`:"*"}onCardChange(t){const{value:e,bin:n}=this,i=t.split(" ").join("");e()?.card!==i&&(this.updateProperty(i,"card"),this.updateBin(n),this.cardValidator(this.card)&&!e()?.expire&&this.inputExpire&&this.focusExpire())}onExpireChange(t){this.updateProperty(t,"expire"),5===Number(this.inputExpire?.nativeElement.selectionStart)&&this.focusCVC()}onCVCChange(t){this.updateProperty(t,"cvc")}transform({offsetWidth:t}){return this.cardCollapsed?`translate3d(${t}px, 0, 0)`:""}onMouseDown(t){(0,s.tuiIsElement)(t.target)&&(0,s.tuiIsInput)(t.target)||(t.preventDefault(),this.focusInput())}toggle(){this.open.set(!this.open())}isFocusable(t){return this.cardValidator(t)||this.cardPrefilled}getPaymentSystem(t){return this.options.paymentSystemHandler(t)}updateBin(t){const{bin:e}=this;e===t||this.cardPrefilled||this.binChange.emit(e)}updateProperty(t,e){const{card:n="",expire:i="",cvc:a=""}=this.value()||{},r={card:n,expire:i,cvc:a};r[e]=t,this.onChange(r.expire||r.cvc||r.card?r:null)}focusInput(){const t=this.cardFocusable&&this.inputCard?.nativeElement||this.expireFocusable&&this.inputExpire?.nativeElement||this.inputCVC?.nativeElement;t?.focus()}}(ft=yt).ɵfac=function(){let t;return function(e){return(t||(t=a.n5z(ft)))(e||ft)}}(),ft.ɵcmp=a.Xpm({type:ft,selectors:[["tui-input-card-grouped"]],viewQuery:function(t,e){if(1&t&&(a.Gf(Ct,5),a.Gf(_t,5),a.Gf(bt,5)),2&t){let t;a.iGM(t=a.CRH())&&(e.inputCard=t.first),a.iGM(t=a.CRH())&&(e.inputExpire=t.first),a.iGM(t=a.CRH())&&(e.inputCVC=t.first)}},hostAttrs:["data-size","l"],hostVars:1,hostBindings:function(t,e){1&t&&a.NdJ("mousedown",(function(t){return e.onMouseDown(t)})),2&t&&a.uIk("data-mode",e.mode())},inputs:{exampleText:"exampleText",cardValidator:"cardValidator",icon:"icon",id:"id",autocomplete:"autocomplete",codeLength:"codeLength"},outputs:{binChange:"binChange"},standalone:!0,features:[a._Bn([(0,L.tuiAsDataListHost)(ft),(0,s.tuiAsControl)(ft),(0,L.tuiDropdownOptionsProvider)({limitWidth:"fixed"}),(0,L.tuiAppearanceOptionsProvider)(L.TUI_TEXTFIELD_OPTIONS),s.TuiHoveredService]),a.qOj,a.jDz,a.zW0([L.TuiAppearance,L.TuiDropdownDirective,L.TuiWithDataList,{directive:L.TuiDropdownOpen,inputs:["tuiDropdownOpen","open"],outputs:["tuiDropdownOpenChange","openChange"]}])],decls:19,vars:39,consts:[[1,"t-wrapper"],[3,"click.silent.prevent",4,"tuiLet"],[1,"t-wrapper","t-wrapper_expire"],[3,"click.silent.prevent"],["automation-id","tui-input-card-grouped__expire","inputmode","numeric","placeholder","00/00","translate","no",1,"t-input",3,"autocomplete","disabled","maskito","ngModel","readOnly","tabIndex","focus","ngModelChange"],["inputExpire",""],[1,"t-label"],[1,"t-wrapper","t-wrapper_cvc"],["automation-id","tui-input-card-grouped__cvc","inputmode","numeric","translate","no","type","text",1,"t-input",3,"autocomplete","disabled","maskito","ngModel","placeholder","readOnly","tabIndex","focus","ngModelChange"],["inputCVC",""],[1,"t-icons"],["class","t-icon-outlet",4,"ngIf"],["automation-id","tui-input-card-grouped__cleaner","tuiAppearance","icon","class","t-icon",3,"icon","click",4,"ngIf"],["automation-id","tui-input-card-grouped__dropdown","tuiAppearance","icon","tuiChevron","",3,"click",4,"ngIf"],["automation-id","tui-input-card-grouped__card","inputmode","numeric","translate","no","type","text",1,"t-input","t-input_card",3,"autocomplete","disabled","maskito","ngModel","placeholder","readOnly","tabIndex","focus","ngModelChange"],["inputCard",""],["aria-hidden","true","translate","no",1,"t-collapsed",3,"waResizeObserver"],[1,"t-ghost",3,"textContent"],["ghost",""],[1,"t-collapsed-wrapper"],[1,"t-value"],[1,"t-icon-outlet"],["alt","","automation-id","tui-input-card-grouped__icon","class","t-card",3,"src",4,"polymorpheusOutlet"],["alt","","automation-id","tui-input-card-grouped__icon",1,"t-card",3,"src"],["automation-id","tui-input-card-grouped__cleaner","tuiAppearance","icon",1,"t-icon",3,"icon","click"],["automation-id","tui-input-card-grouped__dropdown","tuiAppearance","icon","tuiChevron","",3,"click"]],template:function(t,e){if(1&t&&(a.TgZ(0,"div",0),a.YNc(1,Tt,12,26,"label",1),a.ALo(2,"tuiFormatCard"),a.qZA(),a.TgZ(3,"div",2)(4,"label",3),a.NdJ("click.silent.prevent",(function(){return 0})),a.TgZ(5,"input",4,5),a.NdJ("focus",(function(){return 0}))("ngModelChange",(function(t){return e.onExpireChange(t)})),a.qZA(),a.TgZ(7,"div",6),a._uU(8),a.qZA()()(),a.TgZ(9,"div",7)(10,"label",3),a.NdJ("click.silent.prevent",(function(){return 0})),a.TgZ(11,"input",8,9),a.NdJ("focus",(function(){return 0}))("ngModelChange",(function(t){return e.onCVCChange(t)})),a.qZA(),a.TgZ(13,"div",6),a._uU(14),a.qZA()()(),a.TgZ(15,"div",10),a.YNc(16,vt,2,1,"div",11),a.YNc(17,Mt,1,1,"tui-icon",12),a.YNc(18,Pt,1,0,"tui-icon",13),a.qZA()),2&t){let t,n,i;a.xp6(1),a.Q6J("tuiLet",a.xi3(2,36,null==(t=e.value())?null:t.card,e.cardPrefilled)),a.xp6(2),a.ekj("t-wrapper_active",e.cardCollapsed),a.xp6(2),a.ekj("t-input_inert",!e.expireFocusable),a.Q6J("autocomplete",e.autocomplete?"cc-exp":"off")("disabled",e.disabled())("maskito",e.maskExpire)("ngModel",e.expire)("readOnly",e.readOnly())("tabIndex",e.expireFocusable?0:-1),a.uIk("id",e.id+"_expire")("name",e.autocomplete?"ccexpiryyear":null),a.xp6(2),a.ekj("t-label_raised",e.labelRaised()),a.xp6(1),a.hij(" ",null==(n=e.texts())?null:n.expiryText," "),a.xp6(1),a.ekj("t-wrapper_active",e.cardCollapsed),a.xp6(2),a.ekj("t-input_cvc_hidden",e.cvcHidden)("t-input_prefilled",e.cvcPrefilled),a.Q6J("autocomplete",e.autocomplete?"cc-csc":"off")("disabled",e.disabled())("maskito",e.maskCVC)("ngModel",e.cvc)("placeholder",e.cvcPrefilled?"•••":e.exampleTextCVC)("readOnly",e.readOnly()||e.cvcPrefilled)("tabIndex",e.cvcFocusable?0:-1),a.uIk("id",e.id+"_cvc"),a.xp6(2),a.ekj("t-label_raised",e.labelRaised()),a.xp6(1),a.hij(" ",null==(i=e.texts())?null:i.cvcText," "),a.xp6(2),a.Q6J("ngIf",e.content),a.xp6(1),a.Q6J("ngIf",e.hasCleaner()),a.xp6(1),a.Q6J("ngIf",e.dropdown.content)}},dependencies:[Q.O5,r.u5,r.Fj,r.JJ,r.On,o.ro,q.P,ut.s$,ot,s.TuiMapperPipe,s.TuiLet,L.TuiIcon,st.TuiChevron,L.TuiAppearance,L.TuiIconPipe],styles:['[_nghost-%COMP%]{position:relative;display:block;height:var(--tui-height-l);width:29.5rem;border-radius:var(--tui-radius-l);overflow:clip}[_nghost-%COMP%]   tui-root._mobile[_nghost-%COMP%], tui-root._mobile   [_nghost-%COMP%]{width:18rem}.t-outline[_ngcontent-%COMP%]{height:100%;width:100%}.t-wrapper[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;width:100%;height:100%}.t-wrapper_cvc[_ngcontent-%COMP%]{margin-left:7.1875rem;transform:translate3d(100%,0,0)}tui-root._mobile[_nghost-%COMP%]   .t-wrapper_cvc[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-wrapper_cvc[_ngcontent-%COMP%]{margin-left:4.0625rem}.t-wrapper_expire[_ngcontent-%COMP%]{transform:translate3d(100%,0,0)}.t-wrapper_active[_ngcontent-%COMP%]{transform:translate3d(6.5625rem,0,0)}tui-root._mobile[_nghost-%COMP%]   .t-wrapper_active[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .t-wrapper_active[_ngcontent-%COMP%]{transform:translate3d(4.125rem,0,0)}.t-card[_ngcontent-%COMP%]{width:2rem;height:2rem}.t-collapsed[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;padding:1.25rem var(--tui-padding-l) 0;box-sizing:border-box;font:var(--tui-font-text-s);line-height:2.25rem;color:var(--tui-text-01);white-space:nowrap;pointer-events:none}.t-collapsed_enable-mask[_ngcontent-%COMP%]:before{content:attr(data-before)}.t-collapsed_enable-mask[_ngcontent-%COMP%]   .t-collapsed-wrapper[_ngcontent-%COMP%]{left:1.375rem}.t-collapsed-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;display:block;width:100%;height:100%;overflow:hidden}.t-value[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;bottom:0;right:100%;display:block;transform:translate3d(100%,0,0)}.t-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;border:0;margin:0;padding:1.25rem var(--tui-padding-l) 0;outline:none;background:transparent;box-sizing:border-box;font:var(--tui-font-text-s);color:var(--tui-text-01)}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03)}.t-input.t-input.t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden), .t-input.t-input.t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden)::placeholder, .t-input.t-input.t-input_card[_ngcontent-%COMP%]:not(.t-input_hidden):-webkit-autofill{caret-color:var(--tui-base-09);color:transparent!important;-webkit-text-fill-color:transparent!important}.t-input.t-input.t-input_card[_ngcontent-%COMP%]::-webkit-credit-card-auto-fill-button{content:none!important;position:absolute;left:-62.4375rem;top:-62.4375rem;z-index:-999;display:none!important;background:transparent!important;pointer-events:none!important}.t-input_inert[_ngcontent-%COMP%]{pointer-events:none}.t-input_cvc_hidden[_ngcontent-%COMP%]{-webkit-text-security:disc}@supports (-webkit-touch-callout: none){.t-input[_ngcontent-%COMP%]:active{font-size:1rem}}.t-icons[_ngcontent-%COMP%]{position:absolute;right:.75rem;display:flex;align-items:center;height:100%}.t-icon-outlet[_ngcontent-%COMP%]{display:flex;margin-right:.25rem}.t-icon[_ngcontent-%COMP%]{cursor:pointer;border:.25rem solid transparent}.t-label[_ngcontent-%COMP%]{transition-property:all;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:1.125rem 1rem;font:var(--tui-font-text-m);line-height:1.25rem;color:var(--tui-text-02)}.t-label_raised[_ngcontent-%COMP%]{font-size:.8156rem;transform:translateY(-.7em)}[data-mode="invalid"][_nghost-%COMP%]   .t-label[_ngcontent-%COMP%]{color:var(--tui-negative)}[data-focus="true"][_nghost-%COMP%]   .t-label[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-ghost[_ngcontent-%COMP%]{visibility:hidden}'],changeDetection:0}),(0,i.gn)([s.tuiPure],yt.prototype,"isFocusable",null),(0,i.gn)([s.tuiPure],yt.prototype,"getPaymentSystem",null);let xt=(()=>{var t;class e{constructor(){this.mask=(0,a.f3M)(o.ro),this.autocomplete=(0,a.f3M)(K).autocomplete,this.hidden=!0,this.length=3}ngOnInit(){this.refresh()}ngOnChanges(){this.refresh()}refresh(){this.mask.options=k(this.length),this.mask.ngOnChanges()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=a.lG2({type:t,selectors:[["input","tuiInputCVC",""]],hostAttrs:["inputmode","numeric"],hostVars:4,hostBindings:function(t,e){1&t&&a.NdJ("copy.prevent",(function(){return 0})),2&t&&(a.Ikx("autocomplete",e.autocomplete?"cc-csc":"off")("placeholder","0".repeat(e.length)),a.Udp("-webkit-text-security",e.hidden?"disc":null))},inputs:{autocomplete:"autocomplete",hidden:"hidden",length:"length"},standalone:!0,features:[a.TTD,a.zW0([o.ro])]}),e})(),Dt=(()=>{var t;class e{constructor(){this.mask=(0,a.f3M)(o.ro),this.autocomplete=(0,a.f3M)(K).autocomplete}ngOnInit(){this.mask.options=E,this.mask.ngOnChanges()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵdir=a.lG2({type:t,selectors:[["input","tuiInputExpire",""]],hostAttrs:["inputmode","numeric","placeholder","00/00","translate","no"],hostVars:1,hostBindings:function(t,e){2&t&&a.Ikx("autocomplete",e.autocomplete?"cc-exp":"off")},inputs:{autocomplete:"autocomplete"},standalone:!0,features:[a.zW0([o.ro])]}),e})();function Rt(t,e){if(1&t&&(a.TgZ(0,"div",5),a._UZ(1,"tui-icon",6),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("icon",t.iconLeft)}}function Ot(t,e){if(1&t&&(a.TgZ(0,"div",7),a._UZ(1,"tui-icon",6),a.qZA()),2&t){const t=a.oxw();a.xp6(1),a.Q6J("icon",t.iconRight)}}function St(t,e){if(1&t&&a._UZ(0,"tui-icon",10),2&t){const t=a.oxw(2);a.Q6J("icon",t.paymentIcons[t.paymentSystem])}}function kt(t,e){if(1&t&&(a._UZ(0,"img",11),a.ALo(1,"tuiIcon")),2&t){const t=a.oxw(2);a.Q6J("alt",t.paymentSystem)("src",a.lcZ(1,2,t.paymentIcons[t.paymentSystem]),a.LSH)}}function Et(t,e){if(1&t&&(a.ynx(0),a.YNc(1,St,1,1,"tui-icon",8),a.YNc(2,kt,2,4,"ng-template",null,9,a.W1O),a.BQk()),2&t){const t=a.MAs(3),e=a.oxw();a.xp6(1),a.Q6J("ngIf",e.isMono)("ngIfElse",t)}}const wt=["*"];let At=(()=>{var t;class e{constructor(){this.paymentIcons=(0,a.f3M)(z),this.size="m",this.paymentSystem=null,this.iconLeft="",this.iconRight=""}get isMono(){switch(this.paymentSystem){case"mir":case"visa":case"electron":return!0;default:return!1}}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=a.Xpm({type:t,selectors:[["tui-thumbnail-card"]],hostVars:1,hostBindings:function(t,e){2&t&&a.uIk("data-size",e.size)},inputs:{size:"size",paymentSystem:"paymentSystem",iconLeft:"iconLeft",iconRight:"iconRight"},standalone:!0,features:[a.jDz],ngContentSelectors:wt,decls:6,vars:3,consts:[[1,"t-front"],["class","t-left",4,"ngIf"],["class","t-right",4,"ngIf"],[4,"ngIf"],[1,"t-back"],[1,"t-left"],[1,"t-icon",3,"icon"],[1,"t-right"],["class","t-logo",3,"icon",4,"ngIf","ngIfElse"],["colored",""],[1,"t-logo",3,"icon"],[1,"t-logo",3,"alt","src"]],template:function(t,e){1&t&&(a.F$t(),a.TgZ(0,"div",0),a.YNc(1,Rt,2,1,"div",1),a.YNc(2,Ot,2,1,"div",2),a.Hsn(3),a.YNc(4,Et,4,2,"ng-container",3),a.qZA(),a._UZ(5,"div",4)),2&t&&(a.xp6(1),a.Q6J("ngIf",e.iconLeft),a.xp6(1),a.Q6J("ngIf",e.iconRight),a.xp6(2),a.Q6J("ngIf",e.paymentSystem))},dependencies:[L.TuiIcon,Q.O5,L.TuiIconPipe],styles:['[_nghost-%COMP%]{position:relative;display:inline-flex;flex-shrink:0;background:#000;color:#fff;transform-style:preserve-3d;overflow:hidden}[_nghost-%COMP%]:before{position:absolute;top:0;left:0;width:100%;height:100%;content:""}[data-size=s][_nghost-%COMP%]{width:2.5rem;height:1.625rem;border-radius:.25rem;font-size:0}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.125rem,.125rem) scale(.625)}[data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{display:none}[data-size=s][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:-.375rem;transform:scale(.55)}[data-size=m][_nghost-%COMP%]{width:3rem;height:2rem;border-radius:.3125rem;text-indent:.1875rem;font:normal .5625rem/.875rem var(--tui-font-text)}[data-size=m][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.1875rem,.25rem) scale(.75)}[data-size=m][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{transform:translate(-.1875rem,.1875rem) scale(.875)}[data-size=m][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:scale(.714)}[data-size=m][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:-.3125rem;transform:scale(.55)}[data-size=l][_nghost-%COMP%]{width:3.375rem;height:2.25rem;border-radius:.375rem;text-indent:.3125rem;font:normal .625rem/1.125rem var(--tui-font-text)}[data-size=l][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{transform:translate(.1875rem,.1875rem)}[data-size=l][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{transform:translate(-.1875rem,.1875rem)}[data-size=l][_nghost-%COMP%]   .t-logo[_ngcontent-%COMP%]{bottom:-.1875rem;transform:scale(.75)}.t-left[_ngcontent-%COMP%], .t-right[_ngcontent-%COMP%]{position:absolute;top:0;display:flex}.t-left[_ngcontent-%COMP%]{left:0;transform-origin:top left}.t-right[_ngcontent-%COMP%]{right:0;transform-origin:top right}.t-right[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background:currentColor;opacity:.35}.t-right[_ngcontent-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:#fff;transform:scale(.625)}.t-logo[_ngcontent-%COMP%]{position:absolute;right:.1875rem;width:1.5rem;height:1.5rem;transform-origin:right}.t-icon[_ngcontent-%COMP%]{width:1rem;height:1rem}.t-front[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:flex-end;-webkit-backface-visibility:hidden;backface-visibility:hidden;box-shadow:inset 0 0 0 1px var(--tui-clear);border-radius:inherit}.t-back[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(180deg) translateZ(1px);background:#b0b0b0;border-radius:inherit}.t-back[_ngcontent-%COMP%]:after{position:absolute;left:0;right:0;content:"";top:20%;bottom:60%;background:#959595}'],changeDetection:0}),e})();function Ut({value:t}){return 5!==t?.expire?.length||y(t?.expire)?null:{expire:new s.TuiValidationError("Expire date")}}function Nt({value:t}){return t?.card&&!P(t.card)?{card:new s.TuiValidationError("Invalid card number")}:null}function Gt(t){return({value:e})=>P(e)?null:{luhn:new s.TuiValidationError(t)}}}}]);