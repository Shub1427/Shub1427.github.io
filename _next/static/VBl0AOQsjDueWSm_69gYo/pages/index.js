(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/EDR":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var n=t("23aj");return{page:n.default||n}}])},"23aj":function(n,e,t){"use strict";t.r(e);var r=t("0iUn"),i=t("sLSF"),o=t("MI3g"),a=t("a7VT"),c=t("Tit0"),u=t("rt45"),s=t("vOnD");function l(){var n=Object(u.a)(["\n      box-shadow: 0 3px 15px -5px rgba(0, 0, 0, 0.8);\n    "]);return l=function(){return n},n}function f(){var n=Object(u.a)(["\n      border: 3px solid ",";\n    "]);return f=function(){return n},n}function p(){var n=Object(u.a)(["\n  width: ","px;\n  height: ","px;\n  border-radius: ",'px;\n  background-image: url("','");\n  background-position: center center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  ',"\n  ","\n"]);return p=function(){return n},n}var h=s.d.div(p(),function(n){return n.size},function(n){return n.size},function(n){return n.size},function(n){return n.src},function(n){return n.bordered&&Object(s.c)(f(),n.color)},function(n){return n.withShadow&&Object(s.c)(l())}),d=t("q1tI"),v=t.n(d),b=t("YFqc"),g=t.n(b),m=v.a.createElement;function w(){var n=Object(u.a)(["\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  .highlighter {\n    background-color: ",";\n    height: 2px;\n    width: 100%;\n    margin-top: 3px;\n    transform: scale(0, 1);\n    transition: transform 0.2s ease-out;\n  }\n\n  &:hover {\n    .highlighter {\n      transform: scale(1, 1);\n    }\n  }\n"]);return w=function(){return n},n}var y=Object(s.d)(function(n){return m("div",{className:n.className},n.withNextRoute?m(g.a,{href:n.href},m("a",null,n.children)):m("a",{href:n.href},n.children),n.highlight&&m("div",{className:"highlighter"}))})(w(),function(n){return n.highlight}),x=v.a.createElement;function j(){var n=Object(u.a)(["\n  display: inline-block;\n  margin-left: 30px;\n\n  & + & {\n    margin-right: 0;\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font-size: 24px;\n  color: ",";\n"]);return O=function(){return n},n}function k(){var n=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 15px 30px;\n  box-sizing: border-box;\n\n  .banner {\n    margin-right: 30px;\n\n    .banner-image {\n      height: 72px;\n    }\n  }\n"]);return k=function(){return n},n}var E=s.d.div(k()),N=s.d.ul(O(),function(n){return n.theme.colors.white}),T=s.d.li(j()),U=function(n){var e=Object(d.useContext)(s.a);return x(E,null,x(y,{className:"banner",href:n.bannerUrl,withNextRoute:!0},x("div",{className:"banner-image"},n.banner)),x(N,{theme:e},n.links.map(function(n){return x(T,{key:n.label},x(y,{href:n.url,highlight:"#f2f2f2",withNextRoute:!n.newTab},n.label))})))};function C(){var n=Object(u.a)(["\n  font-family: ",";\n  font-size: ","px;\n  font-weight: ",";\n"]);return C=function(){return n},n}var z=s.d.span(C(),function(n){return function(n){switch(n.type){case"h1":case"h2":case"title":case"subTitle":return"".concat(n.theme.typography.font.special,", serif");default:return"".concat(n.theme.typography.font.default,", sans-serif")}}(n)},function(n){return n.theme.typography.size[n.type]},function(n){return function(n){switch(n.weight){case"medium":return 600;case"bold":return 900;default:return 400}}(n)}),R=[{label:"Blogs",newTab:!0,url:"/blogs"},{label:"Projects",newTab:!0,url:"/projects"}],_=v.a.createElement;function L(){var n=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n\n  .profile-avatar-wrapper {\n    position: relative;\n    transform: translate(0, -50%);\n  }\n\n  .about-wrapper {\n    margin-top: -90px;\n  }\n"]);return L=function(){return n},n}function q(){var n=Object(u.a)(["\n  align-items: center;\n  background: ",";\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  width: 100%;\n  min-height: 250px;\n"]);return q=function(){return n},n}var D=s.d.div(q(),function(n){return n.theme.colors.blackDark}),F=s.d.div(L()),I=function(n){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(c.a)(e,n),Object(i.a)(e,[{key:"render",value:function(){return _(v.a.Fragment,null,_(D,null,_(U,{banner:_("img",{height:"100%",src:"/static/images/logo-small.png",alt:"Shub's logo"}),bannerUrl:"/",links:R})),_(F,null,_("div",{className:"profile-avatar-wrapper"},_(h,{size:200,src:"/static/images/profile.png",bordered:!0,withShadow:!0,color:"#FFAB00"})),_("div",{className:"about-wrapper"},_(z,{type:"h1",weight:"bold"},"Subroto Biswas"))))}}]),e}(v.a.Component),M=Object(s.e)(I);t.d(e,"default",function(){return P});var K=v.a.createElement,P=function(n){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(a.a)(e).apply(this,arguments))}return Object(c.a)(e,n),Object(i.a)(e,[{key:"render",value:function(){return K("div",{style:{minHeight:"100vh"}},K(M,null))}}]),e}(v.a.Component)},YFqc:function(n,e,t){n.exports=t("cTJO")},cTJO:function(n,e,t){"use strict";var r=t("/HRN"),i=t("WaGi"),o=t("ZDA2"),a=t("/+P4"),c=t("N9n2"),u=t("5Uuq"),s=t("KI45");e.__esModule=!0,e.default=void 0;var l,f=s(t("LX0d")),p=t("CxY0"),h=u(t("q1tI")),d=(s(t("17x9")),s(t("nOHt"))),v=(t("KA3u"),t("Bu4q"));function b(n){return n&&"object"===typeof n?(0,v.formatWithValidation)(n):n}var g=new f.default,m=window.IntersectionObserver;function w(){return l||(m?l=new m(function(n){n.forEach(function(n){if(g.has(n.target)){var e=g.get(n.target);(n.isIntersecting||n.intersectionRatio>0)&&(l.unobserve(n.target),g.delete(n.target),e())}})},{rootMargin:"200px"}):void 0)}var y=function(n){function e(n){var t;return r(this,e),(t=o(this,a(e).call(this,n))).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(n){var e=null,t=null,r=null;return function(i,o){if(r&&i===e&&o===t)return r;var a=n(i,o);return e=i,t=o,r=a,a}}(function(n,e){return{href:b(n),as:e?b(e):e}}),t.linkClicked=function(n){var e=n.currentTarget,r=e.nodeName,i=e.target;if("A"!==r||!(i&&"_self"!==i||n.metaKey||n.ctrlKey||n.shiftKey||n.nativeEvent&&2===n.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),a=o.href,c=o.as;if(function(n){var e=(0,p.parse)(n,!1,!0),t=(0,p.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===t.protocol&&e.host===t.host}(a)){var u=window.location.pathname;a=(0,p.resolve)(u,a),c=c?(0,p.resolve)(u,c):a,n.preventDefault();var s=t.props.scroll;null==s&&(s=c.indexOf("#")<0),d.default[t.props.replace?"replace":"push"](a,c,{shallow:t.props.shallow}).then(function(n){n&&s&&(window.scrollTo(0,0),document.body.focus())})}}},t.p=!1!==n.prefetch,t}return c(e,n),i(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(n){var e=this;this.p&&m&&n&&n.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(n,e){var t=w();return t?(t.observe(n),g.set(n,e),function(){t.unobserve(n),g.delete(n)}):function(){}}(n,function(){e.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var n=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href,t=(0,p.resolve)(n,e);d.default.prefetch(t)}}},{key:"render",value:function(){var n=this,e=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,i=t.as;"string"===typeof e&&(e=h.default.createElement("a",null,e));var o=h.Children.only(e),a={ref:function(e){n.handleRef(e),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(e):"object"===typeof o.ref&&(o.ref.current=e))},onMouseEnter:function(e){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),n.prefetch()},onClick:function(e){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(e),e.defaultPrevented||n.linkClicked(e)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=i||r),h.default.cloneElement(o,a)}}]),e}(h.Component);y.propTypes=void 0;var x=y;e.default=x}},[["/EDR",1,0]]]);