(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"23aj":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return ce}));var n=a("q1tI"),o=a.n(n),r=a("R/WZ"),i=a("Ji2X"),c=a("y+Nh"),l=a("rePB"),s=a("YFqc"),d=a.n(s),u=a("/Tr7"),f=a("jIYg");function p(e,t){Object(f.a)(2,arguments);var a=Object(u.a)(e),n=Object(u.a)(t),o=a.getTime()-n.getTime();return o<0?-1:o>0?1:o}function m(e,t){Object(f.a)(2,arguments);var a=Object(u.a)(e),n=Object(u.a)(t),o=p(a,n),r=Math.abs(function(e,t){Object(f.a)(2,arguments);var a=Object(u.a)(e),n=Object(u.a)(t);return 12*(a.getFullYear()-n.getFullYear())+(a.getMonth()-n.getMonth())}(a,n));a.setMonth(a.getMonth()-o*r);var i=o*(r-(p(a,n)===-o));return 0===i?0:i}function h(e,t){Object(f.a)(2,arguments);var a=function(e,t){Object(f.a)(2,arguments);var a=Object(u.a)(e),n=Object(u.a)(t);return a.getTime()-n.getTime()}(e,t)/1e3;return a>0?Math.floor(a):Math.ceil(a)}var b=a("iSMj");function g(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var a in t=t||{})t.hasOwnProperty(a)&&(e[a]=t[a]);return e}({},e)}var v=a("JCDJ"),y=1440,k=2520,w=43200,O=86400;function j(e,t,a){Object(f.a)(2,arguments);var n=a||{},o=n.locale||b.a;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var r=p(e,t);if(isNaN(r))throw new RangeError("Invalid time value");var i,c,l=g(n);l.addSuffix=Boolean(n.addSuffix),l.comparison=r,r>0?(i=Object(u.a)(t),c=Object(u.a)(e)):(i=Object(u.a)(e),c=Object(u.a)(t));var s,d=h(c,i),j=(Object(v.a)(c)-Object(v.a)(i))/1e3,C=Math.round((d-j)/60);if(C<2)return n.includeSeconds?d<5?o.formatDistance("lessThanXSeconds",5,l):d<10?o.formatDistance("lessThanXSeconds",10,l):d<20?o.formatDistance("lessThanXSeconds",20,l):d<40?o.formatDistance("halfAMinute",null,l):d<60?o.formatDistance("lessThanXMinutes",1,l):o.formatDistance("xMinutes",1,l):0===C?o.formatDistance("lessThanXMinutes",1,l):o.formatDistance("xMinutes",C,l);if(C<45)return o.formatDistance("xMinutes",C,l);if(C<90)return o.formatDistance("aboutXHours",1,l);if(C<y){var x=Math.round(C/60);return o.formatDistance("aboutXHours",x,l)}if(C<k)return o.formatDistance("xDays",1,l);if(C<w){var S=Math.round(C/y);return o.formatDistance("xDays",S,l)}if(C<O)return s=Math.round(C/w),o.formatDistance("aboutXMonths",s,l);if((s=m(c,i))<12){var T=Math.round(C/w);return o.formatDistance("xMonths",T,l)}var E=s%12,R=Math.floor(s/12);return E<3?o.formatDistance("aboutXYears",R,l):E<9?o.formatDistance("overXYears",R,l):o.formatDistance("almostXYears",R+1,l)}var C,x,S=a("9jPY"),T=a("ofer"),E=a("eD//"),R=a("tVbE"),D=a("30+C"),N=a("oa/T"),M=a("o4QW"),A=a("Z3vd"),I=a("k333");!function(e){e[e.CREATED_AT=0]="CREATED_AT"}(C||(C={})),function(e){e[e.ASC=0]="ASC",e[e.DESC=1]="DESC"}(x||(x={}));var P=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x.ASC,n=[];switch(t){case C.CREATED_AT:n=e.map((function(e){return e})).sort((function(e,t){return a===x.ASC?+e.createdAt-+t.createdAt:+t.createdAt-+e.createdAt}))}return n},L=o.a.createElement,q=Object(r.a)((function(e){return{root:Object(l.a)({margin:"0 auto",padding:"32px 16px",width:"90%"},e.breakpoints.down("xs"),{width:"100%",padding:0}),heading:{display:"flex",justifyContent:"center",fontFamily:"'Oswald', sans-serif",fontWeight:200,marginBottom:32},item:{"& + &":{marginTop:32}},tags:{fontSize:14,marginBottom:12},tagItem:{"& + &":{marginLeft:8}},title:{display:"block",textAlign:"center",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",color:"".concat(e.palette.secondary.dark),padding:"0 0 16px",fontFamily:"'Oswald', sans-serif",fontWeight:300},description:{display:"-webkit-box","-webkit-line-clamp":3,"-webkit-box-orient":"vertical",overflow:"hidden"},dates:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",color:"#aaa",fontSize:"0.8rem",marginBottom:16}}})),J=function(e,t){return e.tags.map((function(e){return L(S.a,{key:e,className:t.tagItem,label:e,size:"small"})}))};function U(){var e=q(),t=P(I.a,C.CREATED_AT,x.DESC);return L("div",{className:e.root},L(T.a,{className:e.heading,variant:"h2"},"Archives"),L(E.a,{component:"nav","aria-label":"main mailbox folders"},t.map((function(t){return L(R.a,{className:e.item,key:t.key},L(D.a,{className:e.root,elevation:4},L(N.a,null,L("div",{className:e.tags},J(t,e)),L(T.a,{className:e.title,variant:"h4",component:"h2"},t.title),L("div",{className:e.dates},L("span",null,"Updated: ",j(t.updatedAt,new Date)," ago"),L("span",null,"Created: ",j(t.createdAt,new Date)," ago")),L(T.a,{className:e.description,variant:"body2",component:"p"},t.description)),L(M.a,null,L(d.a,{href:t.link},L(A.a,{disabled:!t.isPublished,color:"primary",fullWidth:!0},L("b",null,"Visit"))))))}))))}var z=a("PsDL"),V=a("wx14"),$=a("LXLv"),_=a.n($),H=a("JkEI"),W=a.n(H),B=a("y9eO"),F=a.n(B),X=a("lJuC"),Y=a.n(X),K=o.a.createElement,G=function(e){return K("svg",Object(V.a)({"aria-hidden":"true",focusable:"false","data-icon":"stack-overflow",role:"img",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 384 512"},e),K("path",{fill:"inherit",d:"M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"}))},Q=[{key:"twitter",mode:"light",link:"https://twitter.com/Shub7241",color:"rgb(29, 161, 242)",icon:_.a},{key:"github",mode:"light",link:"https://github.com/Shub1427",color:"#24292e",icon:W.a},{key:"stackoverflow",mode:"light",link:"https://stackoverflow.com/users/2849127/subroto",color:"#adb5bd",icon:G},{key:"gmail",mode:"light",link:"mailto:sub14biswas@gmail.com",color:"#D44638",icon:F.a},{key:"linkedin",mode:"light",link:"https://www.linkedin.com/in/shub1427/",color:"#0077b5",icon:Y.a}],Z=[{key:"twitter",mode:"dark",link:"https://twitter.com/Shub7241",color:"rgb(29, 161, 242)",icon:_.a},{key:"github-light",mode:"dark",link:"https://github.com/Shub1427",color:"#f2f2f2",icon:W.a},{key:"stackoverflow",mode:"dark",link:"https://stackoverflow.com/users/2849127/subroto",color:"#adb5bd",icon:G},{key:"gmail",mode:"dark",link:"mailto:sub14biswas@gmail.com",color:"#D44638",icon:F.a},{key:"linkedin",mode:"dark",link:"https://www.linkedin.com/in/shub1427/",color:"#0088d7",icon:Y.a}],ee=a("FbnM"),te=a("2Dfw"),ae=o.a.createElement,ne=Object(r.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignContent:"center",alignItems:"center",justifyContent:"center",margin:"0 auto",padding:"32px 16px"},title:{fontFamily:"'Oswald', sans-serif",fontWeight:200},description:{marginTop:16,wordSpacing:3,lineHeight:1.7,fontWeight:400,color:"dark"===e.palette.type?e.palette.common.white:"#666"},highlight:{color:"".concat(e.palette.primary.light),fontWeight:"bold"},socialWrapper:{display:"flex",justifyContent:"center",width:"100%",padding:16}}}));function oe(){var e=ne(),t=Object(ee.a)().darkMode?Z:Q;return ae("div",{className:e.root},ae(te.a,null),ae("img",{height:"100%",src:"/images/logo-small.png",alt:"Shub's logo"}),ae(T.a,{className:e.title,variant:"h2",color:"primary"},"Subroto Biswas"),ae(T.a,{variant:"subtitle1",className:e.description},"Subroto Biswas is a working professional, currently working at \xa0",ae("span",{className:e.highlight},"upGrad"),", as a Senior Software Engineer. This site is about his work, learnings and research. He is interested in various kinds of Graphics programming and is a student by heart. Most of his professional work, involves Web Development, using Javascript and ReactJS, but he is also quite fond of Graphics and in his leisure time he works on Game Dev and Render engines using Rust Lang."),ae("div",{className:e.socialWrapper},t.map((function(e){return ae(z.a,{key:e.key,href:e.link,target:"_blank",color:"secondary","aria-label":e.key},ae(e.icon,{style:{fill:e.color}}))}))))}var re=o.a.createElement,ie=Object(r.a)({root:{position:"relative",minHeight:"100vh"}});function ce(){var e=ie();return re(i.a,{maxWidth:"md",className:e.root},re(c.a,null),re(oe,null),re(U,null))}},"8/g6":function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.memo(r.default.forwardRef((function(t,a){return r.default.createElement(i.default,(0,o.default)({ref:a},t),e)})));0;return a.muiName=i.default.muiName,a};var o=n(a("pVnL")),r=n(a("q1tI")),i=n(a("UJJ5"))},"9jPY":function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=a.n(r),c=(a("17x9"),a("iuhU")),l=a("HR5l");var s=function(e,t){var a=i.a.memo(i.a.forwardRef((function(t,a){return i.a.createElement(l.a,Object(n.a)({ref:a},t),e)})));return a.muiName=l.a.muiName,a}(r.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"})),d=a("H2TA"),u=a("ye/S"),f=a("bfFb"),p=a("NqtD"),m=a("VD++");function h(e){return"Backspace"===e.key||"Delete"===e.key}var b=r.forwardRef((function(e,t){var a=e.avatar,i=e.classes,l=e.className,d=e.clickable,u=e.color,b=void 0===u?"default":u,g=e.component,v=e.deleteIcon,y=e.disabled,k=void 0!==y&&y,w=e.icon,O=e.label,j=e.onClick,C=e.onDelete,x=e.onKeyDown,S=e.onKeyUp,T=e.size,E=void 0===T?"medium":T,R=e.variant,D=void 0===R?"default":R,N=Object(o.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),M=r.useRef(null),A=Object(f.a)(M,t),I=function(e){e.stopPropagation(),C&&C(e)},P=!(!1===d||!j)||d,L="small"===E,q=g||(P?m.a:"div"),J=q===m.a?{component:"div"}:{},U=null;if(C){var z=Object(c.a)("default"!==b&&("default"===D?i["deleteIconColor".concat(Object(p.a)(b))]:i["deleteIconOutlinedColor".concat(Object(p.a)(b))]),L&&i.deleteIconSmall);U=v&&r.isValidElement(v)?r.cloneElement(v,{className:Object(c.a)(v.props.className,i.deleteIcon,z),onClick:I}):r.createElement(s,{className:Object(c.a)(i.deleteIcon,z),onClick:I})}var V=null;a&&r.isValidElement(a)&&(V=r.cloneElement(a,{className:Object(c.a)(i.avatar,a.props.className,L&&i.avatarSmall,"default"!==b&&i["avatarColor".concat(Object(p.a)(b))])}));var $=null;return w&&r.isValidElement(w)&&($=r.cloneElement(w,{className:Object(c.a)(i.icon,w.props.className,L&&i.iconSmall,"default"!==b&&i["iconColor".concat(Object(p.a)(b))])})),r.createElement(q,Object(n.a)({role:P||C?"button":void 0,className:Object(c.a)(i.root,l,"default"!==b&&[i["color".concat(Object(p.a)(b))],P&&i["clickableColor".concat(Object(p.a)(b))],C&&i["deletableColor".concat(Object(p.a)(b))]],"default"!==D&&[i.outlined,{primary:i.outlinedPrimary,secondary:i.outlinedSecondary}[b]],k&&i.disabled,L&&i.sizeSmall,P&&i.clickable,C&&i.deletable),"aria-disabled":!!k||void 0,tabIndex:P||C?0:void 0,onClick:j,onKeyDown:function(e){e.currentTarget===e.target&&h(e)&&e.preventDefault(),x&&x(e)},onKeyUp:function(e){e.currentTarget===e.target&&(C&&h(e)?C(e):"Escape"===e.key&&M.current&&M.current.blur()),S&&S(e)},ref:A},J,N),V||$,r.createElement("span",{className:Object(c.a)(i.label,L&&i.labelSmall)},O),U)}));t.a=Object(d.a)((function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],a=Object(u.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(u.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(u.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(u.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(u.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(u.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(u.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(u.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:a,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(u.c)(a,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(u.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(u.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(u.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(u.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(b)},Bldr:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("23aj")}])},JkEI:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");t.default=r},LXLv:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");t.default=r},MquD:function(e,t,a){"use strict";var n=a("q1tI"),o=n.createContext({});t.a=o},Q88C:function(e,t,a){"use strict";var n;a.d(t,"a",(function(){return n})),function(e){e.TUTORIAL="tutorial",e.PROJECT="project",e.RESEARCH="research",e.RUST="rust",e.JS="javascript",e.REACT="reactjs"}(n||(n={}))},UJJ5:function(e,t,a){"use strict";a.r(t);var n=a("HR5l");a.d(t,"default",(function(){return n.a}))},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var n=a("lwsE"),o=a("W8MJ"),r=a("7W2i"),i=a("a1gu"),c=a("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=c(e);if(t){var o=c(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return i(this,a)}}var s=a("TqRt"),d=a("284h");t.__esModule=!0,t.default=void 0;var u,f=d(a("q1tI")),p=a("QmWs"),m=a("g/15"),h=s(a("nOHt")),b=a("elyg");function g(e){return e&&"object"===typeof e?(0,m.formatWithValidation)(e):e}var v=new Map,y=window.IntersectionObserver,k={};function w(){return u||(y?u=new y((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var O=function(e){r(a,e);var t=l(a);function a(e){var o;return n(this,a),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,a=null,n=null;return function(o,r){if(n&&o===t&&r===a)return n;var i=e(o,r);return t=o,a=r,n=i,i}}((function(e,t){return{href:(0,b.addBasePath)(g(e)),as:t?(0,b.addBasePath)(g(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,a=t.nodeName,n=t.target;if("A"!==a||!(n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var r=o.formatUrls(o.props.href,o.props.as),i=r.href,c=r.as;if(function(e){var t=(0,p.parse)(e,!1,!0),a=(0,p.parse)((0,m.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(i)){var l=window.location.pathname;i=(0,p.resolve)(l,i),c=c?(0,p.resolve)(l,c):i,e.preventDefault();var s=o.props.scroll;null==s&&(s=c.indexOf("#")<0),h.default[o.props.replace?"replace":"push"](i,c,{shallow:o.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(a,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),a=t.href,n=t.as,o=(0,p.resolve)(e,a);return[o,n?(0,p.resolve)(e,n):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),k[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var a=w();return a?(a.observe(e),v.set(e,t),function(){try{a.unobserve(e)}catch(t){console.error(t)}v.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),k[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,o=a.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var r=f.Children.only(t),i={ref:function(t){e.handleRef(t),r&&"object"===typeof r&&r.ref&&("function"===typeof r.ref?r.ref(t):"object"===typeof r.ref&&(r.ref.current=t))},onMouseEnter:function(t){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==r.type||"href"in r.props)||(i.href=o||n),f.default.cloneElement(r,i)}}]),a}(f.Component);t.default=O},"eD//":function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("MquD"),s=r.forwardRef((function(e,t){var a=e.children,c=e.classes,s=e.className,d=e.component,u=void 0===d?"ul":d,f=e.dense,p=void 0!==f&&f,m=e.disablePadding,h=void 0!==m&&m,b=e.subheader,g=Object(o.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),v=r.useMemo((function(){return{dense:p}}),[p]);return r.createElement(l.a.Provider,{value:v},r.createElement(u,Object(n.a)({className:Object(i.a)(c.root,s,p&&c.dense,!h&&c.padding,b&&c.subheader),ref:t},g),b,a))}));t.a=Object(c.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(s)},k333:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r}));var n=a("Q88C"),o={"performance-reactjs":{key:"performance-reactjs",link:"/performance-reactjs",title:"Performance Improvements in JS and ReactJS",description:"Recent Performance related findings of mine, which I am jotting down here for later reference",tags:[n.a.RESEARCH,n.a.JS,n.a.REACT],createdAt:new Date("2020/05/07 09:15:00"),updatedAt:new Date("2020/05/09 23:15:00"),isPublished:!0},"upload-client-logs":{key:"upload-client-logs",link:"/upload-client-logs",title:"Client Browser Log to your Server",description:"Sometimes (like to get details on performance) there is a requirement to log data       from end-user's browser to you own servers, for which this note will talk about.",tags:[n.a.PROJECT,n.a.JS,n.a.REACT],createdAt:new Date("2020/04/29 08:30:00"),updatedAt:new Date("2020/05/09 12:30:00"),isPublished:!0},"word-counter":{key:"word-counter",link:"/word-counter",title:"Word Counter in Rust",description:"Just a fun bin script for my project, to count words in my MDX files.",tags:[n.a.PROJECT,n.a.RUST],createdAt:new Date("2020/04/26 22:00:00"),updatedAt:new Date("2020/04/26 22:00:00"),isPublished:!0},"gfx-hal-basics":{key:"gfx-hal-basics",link:"/gfx-hal-initials",title:"Basics on Vulkan using gfx-hal",description:"Reference Notes for me (and others) to help get started with Rust and Vulkan",tags:[n.a.TUTORIAL,n.a.RUST],createdAt:new Date("2020/04/26 10:00:00"),updatedAt:new Date("2020/04/26 16:00:00"),isPublished:!0},"astro-v2":{key:"astro-v2",link:"/astro-v2",title:"Astro Blaster v2 in Rust",description:"A very minimal game making tutorial in Rust using ggez",tags:[n.a.TUTORIAL,n.a.RUST],createdAt:new Date("2020/04/10"),updatedAt:new Date("2020/04/12"),isPublished:!0}},r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,a){return Object.prototype.hasOwnProperty.call(e,a)&&t.push(e[a]),t}),[])}(o)},lJuC:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");t.default=r},o4QW:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=r.forwardRef((function(e,t){var a=e.disableSpacing,c=void 0!==a&&a,l=e.classes,s=e.className,d=Object(o.a)(e,["disableSpacing","classes","className"]);return(r.createElement("div",Object(n.a)({className:Object(i.a)(l.root,s,!c&&l.spacing),ref:t},d)))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(l)},"oa/T":function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=r.forwardRef((function(e,t){var a=e.classes,c=e.className,l=e.component,s=void 0===l?"div":l,d=Object(o.a)(e,["classes","className","component"]);return(r.createElement(s,Object(n.a)({className:Object(i.a)(a.root,c),ref:t},d)))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(l)},tVbE:function(e,t,a){"use strict";var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),c=a("H2TA"),l=a("VD++");var s=a("bfFb"),d=a("MquD"),u=a("i8i4"),f="undefined"===typeof window?r.useEffect:r.useLayoutEffect,p=r.forwardRef((function(e,t){var a=e.alignItems,c=void 0===a?"center":a,p=e.autoFocus,m=void 0!==p&&p,h=e.button,b=void 0!==h&&h,g=e.children,v=e.classes,y=e.className,k=e.component,w=e.ContainerComponent,O=void 0===w?"li":w,j=e.ContainerProps,C=(j=void 0===j?{}:j).className,x=Object(o.a)(j,["className"]),S=e.dense,T=void 0!==S&&S,E=e.disabled,R=void 0!==E&&E,D=e.disableGutters,N=void 0!==D&&D,M=e.divider,A=void 0!==M&&M,I=e.focusVisibleClassName,P=e.selected,L=void 0!==P&&P,q=Object(o.a)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),J=r.useContext(d.a),U={dense:T||J.dense||!1,alignItems:c},z=r.useRef(null);f((function(){m&&z.current&&z.current.focus()}),[m]);var V,$,_=r.Children.toArray(g),H=_.length&&(V=_[_.length-1],$=["ListItemSecondaryAction"],r.isValidElement(V)&&-1!==$.indexOf(V.type.muiName)),W=r.useCallback((function(e){z.current=u.findDOMNode(e)}),[]),B=Object(s.a)(W,t),F=Object(n.a)({className:Object(i.a)(v.root,y,U.dense&&v.dense,!N&&v.gutters,A&&v.divider,R&&v.disabled,b&&v.button,"center"!==c&&v.alignItemsFlexStart,H&&v.secondaryAction,L&&v.selected),disabled:R},q),X=k||"li";return b&&(F.component=k||"div",F.focusVisibleClassName=Object(i.a)(v.focusVisible,I),X=l.a),H?(X=F.component||k?X:"div","li"===O&&("li"===X?X="div":"li"===F.component&&(F.component="div")),r.createElement(d.a.Provider,{value:U},r.createElement(O,Object(n.a)({className:Object(i.a)(v.container,C),ref:B},x),r.createElement(X,F,_),_.pop()))):r.createElement(d.a.Provider,{value:U},r.createElement(X,Object(n.a)({ref:B},F),_))}));t.a=Object(c.a)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(p)},y9eO:function(e,t,a){"use strict";var n=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a("q1tI")),r=(0,n(a("8/g6")).default)(o.default.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.default=r}},[["Bldr",0,1,2,3]]]);