(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"9Jkg":function(e,t,a){e.exports=a("HAE9")},HAE9:function(e,t,a){var n=a("p9MR"),r=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return r.stringify.apply(r,arguments)}},RNiq:function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),r=a("sLSF"),l=a("MI3g"),o=a("a7VT"),i=a("Tit0"),c=a("q1tI"),s=a.n(c),u=a("m/Pd"),f=a.n(u),p=a("AT/M"),d=a("hfKm"),h=a.n(d);a("5aCR"),a("RjQN");var m=function(e){function t(){var e,a,r,i,c;Object(n.default)(this,t);for(var s=arguments.length,u=new Array(s),f=0;f<s;f++)u[f]=arguments[f];return a=Object(l.default)(this,(e=Object(o.default)(t)).call.apply(e,[this].concat(u))),r=Object(p.default)(a),c={},(i="state")in r?h()(r,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[i]=c,a}return Object(i.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return s.a.createElement("div",{class:"container"},s.a.createElement("div",{class:"row"},s.a.createElement("div",{class:"one-half column"},s.a.createElement("div",{class:"bannerWrapper"},s.a.createElement("div",{class:"image123"},s.a.createElement("div",{class:"imgContainer"},s.a.createElement("img",{class:"frontLogo"})),s.a.createElement("div",{class:"tech-slideshow"},s.a.createElement("div",{class:"mover-1"}),s.a.createElement("div",{class:"mover-2"})))))))}}]),t}(s.a.Component),v=a("YFqc"),E=a.n(v),b=function(){return s.a.createElement("nav",{className:"navbar navbar-expand navbar-dark bg-dark mb-4"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"collapse navbar-collapse"},s.a.createElement("ul",{className:"navbar-nav ml-auto"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(E.a,{href:"/"},s.a.createElement("a",{className:"nav-link"},"Home"))),s.a.createElement("li",{className:"nav-item"},s.a.createElement(E.a,{href:"/about"},s.a.createElement("a",{className:"nav-link"},"About")))))))},y=function(e){return s.a.createElement("div",null,s.a.createElement(f.a,null,s.a.createElement("title",null,"Audio-Boy")),s.a.createElement(b,null),s.a.createElement("div",{className:"container"},e.children))},w=(a("lHBs"),function(e){function t(){return Object(n.default)(this,t),Object(l.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(i.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return s.a.createElement(y,null,s.a.createElement(m,null))}}]),t}(s.a.Component));t.default=w},YFqc:function(e,t,a){e.exports=a("cTJO")},cTJO:function(e,t,a){"use strict";var n=a("KI45"),r=n(a("9Jkg")),l=n(a("/HRN")),o=n(a("WaGi")),i=n(a("ZDA2")),c=n(a("/+P4")),s=n(a("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=a("CxY0"),d=u(a("q1tI")),h=(f(a("17x9")),u(a("nOHt"))),m=a("Bu4q");function v(e){return e&&"object"==typeof e?m.formatWithValidation(e):e}var E=function(e){function t(){var e,a,n,r,o;return(0,l.default)(this,t),(e=(0,i.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(a=function(e,t){return{href:v(e),as:v(t)}},n=null,r=null,o=null,function(e,t){if(e===n&&t===r)return o;var l=a(e,t);return n=e,r=t,o=l,l}),e.linkClicked=function(t){var a=t.currentTarget,n=a.nodeName,r=a.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var l=e.formatUrls(e.props.href,e.props.as),o=l.href,i=l.as;if(function(e){var t=p.parse(e,!1,!0),a=p.parse(m.getLocationOrigin(),!1,!0);return!t.host||t.protocol===a.protocol&&t.host===a.host}(o)){var c=window.location.pathname;o=p.resolve(c,o),i=i?p.resolve(c,i):o,t.preventDefault();var s=e.props.scroll;null==s&&(s=i.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](o,i,{shallow:e.props.shallow}).then(function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,r.default)(this.props.href)!==(0,r.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,a=p.resolve(e,t);h.default.prefetch(a)}}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.formatUrls(this.props.href,this.props.as),n=a.href,r=a.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var l=d.Children.only(t),o={onClick:function(t){l.props&&"function"==typeof l.props.onClick&&l.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==l.type||"href"in l.props)||(o.href=r||n),o.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=h.Router._rewriteUrlForNextExport(o.href)),d.default.cloneElement(l,o)}}]),t}(d.Component);t.default=E},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=a("RNiq");return{page:e.default||e}}])}},[["vlRD","5d41","9da1","ad9d"]]]);