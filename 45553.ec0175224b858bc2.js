(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[45553],{45553:(t,e,n)=>{n.r(e),n.d(e,{FormatService:()=>P,default:()=>k});var a=n(16727),r=n(75407),o=n(7287);function i(t){const e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new t.constructor(+t):"number"==typeof t||"[object Number]"===e||"string"==typeof t||"[object String]"===e?new Date(t):new Date(NaN)}function s(t,e){const n=i(t),a=i(e),r=n.getTime()-a.getTime();return r<0?-1:r>0?1:r}Math.pow(10,8);const u=43200;function d(t,e){const n=i(t),a=i(e),r=s(n,a),o=Math.abs(function(t,e){const n=i(t),a=i(e);return 12*(n.getFullYear()-a.getFullYear())+(n.getMonth()-a.getMonth())}(n,a));let u;if(o<1)u=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-r*o);let e=s(n,a)===-r;(function(t){const e=i(t);return+function(t){const e=i(t);return e.setHours(23,59,59,999),e}(e)==+function(t){const e=i(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}(e)})(i(t))&&1===o&&1===s(t,a)&&(e=!1),u=r*(o-Number(e))}return 0===u?0:u}const c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function h(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const l={date:h({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:h({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:h({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},m={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function f(t){return(e,n)=>{let a;if("formatting"===(n?.context?String(n.context):"standalone")&&t.formattingValues){const e=t.defaultFormattingWidth||t.defaultWidth,r=n?.width?String(n.width):e;a=t.formattingValues[r]||t.formattingValues[e]}else{const e=t.defaultWidth,r=n?.width?String(n.width):t.defaultWidth;a=t.values[r]||t.values[e]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function g(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;const i=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(s)?function(t){for(let e=0;e<t.length;e++)if(t[e].test(i))return e}(s):function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&t[e].test(i))return e}(s);let d;return d=t.valueCallback?t.valueCallback(u):u,d=n.valueCallback?n.valueCallback(d):d,{value:d,rest:e.slice(i.length)}}}var b;const y={code:"en-US",formatDistance:(t,e,n)=>{let a;const r=c[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),n?.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:l,formatRelative:(t,e,n,a)=>m[t],localize:{ordinalNumber:(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:f({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:f({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:t=>t-1}),month:f({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:f({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:f({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(b={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:t=>parseInt(t,10)},(t,e={})=>{const n=t.match(b.matchPattern);if(!n)return null;const a=n[0],r=t.match(b.parsePattern);if(!r)return null;let o=b.valueCallback?b.valueCallback(r[0]):r[0];return o=e.valueCallback?e.valueCallback(o):o,{value:o,rest:t.slice(a.length)}}),era:g({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:t=>t+1}),month:g({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};let p={};function w(){return p}function v(t){const e=i(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}var M=n(44046),W=n(76145),D=n(55514);let P=(()=>{var t;class e extends o.tiV{constructor(){super(...arguments),this.delay$=(0,a.UE)((0,r.WQX)(r.Agw))?(0,M.O)(0,1e3):(0,W.of)(0)}format(t){return this.delay$.pipe((0,D.T)((()=>function(t,e,n){const a=w().locale??y,r=s(t,e);if(isNaN(r))throw new RangeError("Invalid time value");const o=Object.assign({},n,{addSuffix:n?.addSuffix,comparison:r});let c,h;r>0?(c=i(e),h=i(t)):(c=i(t),h=i(e));const l=function(t,e,n){const a=function(t,e){return+i(t)-+i(e)}(t,e)/1e3;return(r=n?.roundingMethod,t=>{const e=(r?Math[r]:Math.trunc)(t);return 0===e?0:e})(a);var r}(h,c),m=(v(h)-v(c))/1e3,f=Math.round((l-m)/60);let g;if(f<2)return 0===f?a.formatDistance("lessThanXMinutes",1,o):a.formatDistance("xMinutes",f,o);if(f<45)return a.formatDistance("xMinutes",f,o);if(f<90)return a.formatDistance("aboutXHours",1,o);if(f<1440){const t=Math.round(f/60);return a.formatDistance("aboutXHours",t,o)}if(f<2520)return a.formatDistance("xDays",1,o);if(f<u){const t=Math.round(f/1440);return a.formatDistance("xDays",t,o)}if(f<86400)return g=Math.round(f/u),a.formatDistance("aboutXMonths",g,o);if(g=d(h,c),g<12){const t=Math.round(f/u);return a.formatDistance("xMonths",t,o)}{const t=g%12,e=Math.trunc(g/12);return t<3?a.formatDistance("aboutXYears",e,o):t<9?a.formatDistance("overXYears",e,o):a.formatDistance("almostXYears",e+1,o)}}(t,Date.now()))))}}return(t=e).ɵfac=function(){let e;return function(n){return(e||(e=r.xGo(t)))(n||t)}}(),t.ɵprov=r.jDH({token:t,factory:t.ɵfac}),e})();const k=(()=>{var t;class e{constructor(){this.now=Date.now()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=r.VBU({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"Example1",features:[r.Jv_([{provide:o.tiV,useClass:P}]),r.aNF],decls:3,vars:5,template:function(t,e){1&t&&(r.EFF(0),r.nI1(1,"async"),r.nI1(2,"tuiFormatDate")),2&t&&r.SpI("Page refreshed ",r.bMT(1,1,r.bMT(2,3,e.now))," ago\n")},dependencies:[o.IKu,a.Jj],encapsulation:2,changeDetection:0}),e})()}}]);