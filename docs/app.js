parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"X3fF":[function(require,module,exports) {
var define;
var global = arguments[3];
var e,t=arguments[3];!function(t,n){if("function"==typeof e&&e.amd)e(["module","exports"],n);else if("undefined"!=typeof exports)n(module,exports);else{var i={exports:{}};n(i,i.exports),t.WOW=i.exports}}(this,function(e,t){"use strict";var n,i;function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function a(e,t){return t.indexOf(e)>=0}function r(e,t,n){null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n}function l(e,t,n){null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]}var u=window.WeakMap||window.MozWeakMap||function(){function e(){o(this,e),this.keys=[],this.values=[]}return s(e,[{key:"get",value:function(e){for(var t=0;t<this.keys.length;t++){if(this.keys[t]===e)return this.values[t]}}},{key:"set",value:function(e,t){for(var n=0;n<this.keys.length;n++){if(this.keys[n]===e)return this.values[n]=t,this}return this.keys.push(e),this.values.push(t),this}}]),e}(),c=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(i=n=function(){function e(){o(this,e),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return s(e,[{key:"observe",value:function(){}}]),e}(),n.notSupported=!0,i),h=window.getComputedStyle||function(e){var t=/(\-([a-z]){1})/g;return{getPropertyValue:function(n){"float"===n&&(n="styleFloat"),t.test(n)&&n.replace(t,function(e,t){return t.toUpperCase()});var i=e.currentStyle;return(null!=i?i[n]:void 0)||null}}},d=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];o(this,e),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},this.animate="requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()},this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=function(e,t){for(var n in t)if(null==e[n]){var i=t[n];e[n]=i}return e}(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new u,this.wowEvent=function(e){var t=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],n=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],i=arguments.length<=3||void 0===arguments[3]?null:arguments[3],o=void 0;return null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(e,t,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=e:o.eventName=e,o}(this.config.boxClass)}return s(e,[{key:"init",value:function(){this.element=window.document.documentElement,a(document.readyState,["interactive","complete"])?this.start():r(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var e=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var t=0;t<this.boxes.length;t++){var n=this.boxes[t];this.applyStyle(n,!0)}(this.disabled()||(r(this.config.scrollContainer||window,"scroll",this.scrollHandler),r(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)&&new c(function(t){for(var n=0;n<t.length;n++)for(var i=t[n],o=0;o<i.addedNodes.length;o++){var s=i.addedNodes[o];e.doSync(s)}}).observe(document.body,{childList:!0,subtree:!0})}},{key:"stop",value:function(){this.stopped=!0,l(this.config.scrollContainer||window,"scroll",this.scrollHandler),l(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){c.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(e){if(null==e&&(e=this.element),1===e.nodeType)for(var t=(e=e.parentNode||e).querySelectorAll("."+this.config.boxClass),n=0;n<t.length;n++){var i=t[n];a(i,this.all)||(this.boxes.push(i),this.all.push(i),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(i,!0),this.scrolled=!0)}}},{key:"show",value:function(e){var t,n;return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),t=e,n=this.wowEvent,null!=t.dispatchEvent?t.dispatchEvent(n):n in(null!=t)?t[n]():"on"+n in(null!=t)&&t["on"+n](),r(e,"animationend",this.resetAnimation),r(e,"oanimationend",this.resetAnimation),r(e,"webkitAnimationEnd",this.resetAnimation),r(e,"MSAnimationEnd",this.resetAnimation),e}},{key:"applyStyle",value:function(e,t){var n=this,i=e.getAttribute("data-wow-duration"),o=e.getAttribute("data-wow-delay"),s=e.getAttribute("data-wow-iteration");return this.animate(function(){return n.customStyle(e,t,i,o,s)})}},{key:"resetStyle",value:function(){for(var e=0;e<this.boxes.length;e++){this.boxes[e].style.visibility="visible"}}},{key:"resetAnimation",value:function(e){if(e.type.toLowerCase().indexOf("animationend")>=0){var t=e.target||e.srcElement;t.className=t.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(e,t,n,i,o){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),i&&this.vendorSet(e.style,{animationDelay:i}),o&&this.vendorSet(e.style,{animationIterationCount:o}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e}},{key:"vendorSet",value:function(e,t){for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];e[""+n]=i;for(var o=0;o<this.vendors.length;o++){e[""+this.vendors[o]+n.charAt(0).toUpperCase()+n.substr(1)]=i}}}},{key:"vendorCSS",value:function(e,t){for(var n=h(e),i=n.getPropertyCSSValue(t),o=0;o<this.vendors.length;o++){var s=this.vendors[o];i=i||n.getPropertyCSSValue("-"+s+"-"+t)}return i}},{key:"animationName",value:function(e){var t=void 0;try{t=this.vendorCSS(e,"animation-name").cssText}catch(n){t=h(e).getPropertyValue("animation-name")}return"none"===t?"":t}},{key:"cacheAnimationName",value:function(e){return this.animationNameCache.set(e,this.animationName(e))}},{key:"cachedAnimationName",value:function(e){return this.animationNameCache.get(e)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var e=[],t=0;t<this.boxes.length;t++){var n=this.boxes[t];if(n){if(this.isVisible(n)){this.show(n);continue}e.push(n)}}this.boxes=e,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;)t+=(e=e.offsetParent).offsetTop;return t}},{key:"isVisible",value:function(e){var t=e.getAttribute("data-wow-offset")||this.config.offset,n=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,i=n+Math.min(this.element.clientHeight,"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight)-t,o=this.offsetTop(e),s=o+e.clientHeight;return o<=i&&s>=n}},{key:"disabled",value:function(){return!this.config.mobile&&(e=navigator.userAgent,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e));var e}}]),e}();t.default=d,e.exports=t.default});
},{}],"e6gj":[function(require,module,exports) {
"use strict";function t(){return(t=Object.assign||function(t){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function s(t,s){var e=this,i=void 0!==s?s:{};this.version="3.7.7",this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={customStickyChangeNumber:i.customStickyChangeNumber||null,noStyles:i.noStyles||!1,stickyBitStickyOffset:i.stickyBitStickyOffset||0,parentClass:i.parentClass||"js-stickybit-parent",scrollEl:"string"==typeof i.scrollEl?document.querySelector(i.scrollEl):i.scrollEl||window,stickyClass:i.stickyClass||"js-is-sticky",stuckClass:i.stuckClass||"js-is-stuck",stickyChangeClass:i.stickyChangeClass||"js-is-sticky--change",useStickyClasses:i.useStickyClasses||!1,useFixed:i.useFixed||!1,useGetBoundingClientRect:i.useGetBoundingClientRect||!1,verticalPosition:i.verticalPosition||"top",applyStyle:i.applyStyle||function(t,s){return e.applyStyle(t,s)}},this.props.positionVal=this.definePosition()||"fixed",this.instances=[];var n=this.props,o=n.positionVal,a=n.verticalPosition,l=n.noStyles,r=n.stickyBitStickyOffset,c="top"!==a||l?"":r+"px",p="fixed"!==o?o:"";this.els="string"==typeof t?document.querySelectorAll(t):t,"length"in this.els||(this.els=[this.els]);for(var u=0;u<this.els.length;u++){var f,h=this.els[u],y=this.addInstance(h,this.props);this.props.applyStyle({styles:(f={},f[a]=c,f.position=p,f),classes:{}},y),this.manageState(y),this.instances.push(y)}}var e=s.prototype;return e.definePosition=function(){var t;if(this.props.useFixed)t="fixed";else{for(var s=["","-o-","-webkit-","-moz-","-ms-"],e=document.head.style,i=0;i<s.length;i+=1)e.position=s[i]+"sticky";t=e.position?e.position:"fixed",e.position=""}return t},e.addInstance=function(t,s){var e=this,i={el:t,parent:t.parentNode,props:s};if("fixed"===s.positionVal||s.useStickyClasses){this.isWin=this.props.scrollEl===window;var n=this.isWin?window:this.getClosestParent(i.el,i.props.scrollEl);this.computeScrollOffsets(i),this.toggleClasses(i.parent,"",s.parentClass),i.state="default",i.stateChange="default",i.stateContainer=function(){return e.manageState(i)},n.addEventListener("scroll",i.stateContainer)}return i},e.getClosestParent=function(t,s){var e=s,i=t;if(i.parentElement===e)return e;for(;i.parentElement!==e;)i=i.parentElement;return e},e.getTopPosition=function(t){if(this.props.useGetBoundingClientRect)return t.getBoundingClientRect().top+(this.props.scrollEl.pageYOffset||document.documentElement.scrollTop);var s=0;do{s=t.offsetTop+s}while(t=t.offsetParent);return s},e.computeScrollOffsets=function(t){var s=t,e=s.props,i=s.el,n=s.parent,o=!this.isWin&&"fixed"===e.positionVal,a="bottom"!==e.verticalPosition,l=o?this.getTopPosition(e.scrollEl):0,r=o?this.getTopPosition(n)-l:this.getTopPosition(n),c=null!==e.customStickyChangeNumber?e.customStickyChangeNumber:i.offsetHeight,p=r+n.offsetHeight;s.offset=o?0:l+e.stickyBitStickyOffset,s.stickyStart=a?r-s.offset:0,s.stickyChange=s.stickyStart+c,s.stickyStop=a?p-(i.offsetHeight+s.offset):p-window.innerHeight},e.toggleClasses=function(t,s,e){var i=t,n=i.className.split(" ");e&&-1===n.indexOf(e)&&n.push(e);var o=n.indexOf(s);-1!==o&&n.splice(o,1),i.className=n.join(" ")},e.manageState=function(s){var e=this,i=s,n=i.props,o=i.state,a=i.stateChange,l=i.stickyStart,r=i.stickyChange,c=i.stickyStop,p=n.positionVal,u=n.scrollEl,f=n.stickyClass,h=n.stickyChangeClass,y=n.stuckClass,d=n.verticalPosition,g="bottom"!==d,k=n.applyStyle,v=n.noStyles,m=function(t){t()},C=this.isWin&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)||m,S=this.isWin?window.scrollY||window.pageYOffset:u.scrollTop,w=g&&S<=l&&("sticky"===o||"stuck"===o),x=S>=c&&"sticky"===o;S>l&&S<c&&("default"===o||"stuck"===o)?i.state="sticky":w?i.state="default":x&&(i.state="stuck");var O=S>=r&&S<=c;S<r/2||S>c?i.stateChange="default":O&&(i.stateChange="sticky"),o===i.state&&a===i.stateChange||C(function(){var o,a,l,r,c,u,g={sticky:{styles:(o={position:p,top:"",bottom:""},o[d]=n.stickyBitStickyOffset+"px",o),classes:(a={},a[f]=!0,a)},default:{styles:(l={},l[d]="",l),classes:{}},stuck:{styles:t((r={},r[d]="",r),"fixed"===p&&!v||!e.isWin?{position:"absolute",top:"",bottom:"0"}:{}),classes:(c={},c[y]=!0,c)}};"fixed"===p&&(g.default.styles.position="");var m=g[i.state];m.classes=((u={})[y]=!!m.classes[y],u[f]=!!m.classes[f],u[h]=O,u),k(m,s)})},e.applyStyle=function(t,s){var e=t.styles,i=t.classes,n=s,o=n.el,a=n.props,l=o.style,r=a.noStyles,c=o.className.split(" ");for(var p in i){if(i[p])-1===c.indexOf(p)&&c.push(p);else{var u=c.indexOf(p);-1!==u&&c.splice(u,1)}}if(o.className=c.join(" "),e.position&&(l.position=e.position),!r)for(var f in e)l[f]=e[f]},e.update=function(t){var s=this;return void 0===t&&(t=null),this.instances.forEach(function(e){if(s.computeScrollOffsets(e),t)for(var i in t)e.props[i]=t[i]}),this},e.removeInstance=function(t){var s,e,i=t.el,n=t.props;this.applyStyle({styles:(s={position:""},s[n.verticalPosition]="",s),classes:(e={},e[n.stickyClass]="",e[n.stuckClass]="",e)},t),this.toggleClasses(i.parentNode,n.parentClass)},e.cleanup=function(){for(var t=0;t<this.instances.length;t+=1){var s=this.instances[t];s.stateContainer&&s.props.scrollEl.removeEventListener("scroll",s.stateContainer),this.removeInstance(s)}this.manageState=!1,this.instances=[]},s}();function e(t,e){return new s(t,e)}var i=e;exports.default=i;
},{}],"A2T1":[function(require,module,exports) {
"use strict";var e=t(require("wow.js")),o=t(require("stickybits"));function t(e){return e&&e.__esModule?e:{default:e}}(new e.default).init();var a=(0,o.default)(".sticky-selector");function s(){var e=window.pageYOffset;window.onscroll=function(){console.log("dasd");var o=window.pageYOffset;this.window.pageYOffset>105?($(".header .container-fluid").addClass("scrolled"),document.getElementById("header").style.top=e>o?"16px":"-145px",e=o):$(".header .container-fluid").removeClass("scrolled")}}$(".intro__carousel").owlCarousel({loop:!0,dots:!0,lazyLoad:!0,margin:0,responsiveClass:!0,autoplay:!0,autoplayHoverPause:!0,items:1}),$(".about__carousel").owlCarousel({loop:!0,dots:!0,lazyLoad:!0,margin:0,responsiveClass:!0,autoplay:!0,autoplayHoverPause:!0,items:1}),$(".offer__carousel").owlCarousel({loop:!0,lazyLoad:!0,margin:12,responsiveClass:!0,autoplayHoverPause:!0,responsive:{0:{items:1,dots:!0},480:{items:1,dots:!0},768:{items:3,dots:!1},1200:{items:4,dots:!1}},autoplayTimeout:2e3}),$(document).ready(function(){$("a[href*='#']:not([href='#])").click(function(){var e=$(this).attr("href");$("html,body").stop().animate({scrollTop:$(e).offset().top-10},1e3),event.preventDefault(),$(".header__nav").removeClass("header__nav--entered"),$(".nav-toggle").removeClass("nav-toggle--entered")}),s(),$('a[href^="#"]').click(function(){document.getElementById("header").style.top="0"}),$(window).bind("scroll",function(){var e=$(window).scrollTop();$(".scrollspy").each(function(o){var t=$(this).offset().top-100,a=t+$(this).height();if(e>=t&&e<=a){var s=$(this).attr("id");$('a[href="#'+s+'"]').addClass("active").siblings().removeClass("active")}})}),$(".header__logo").click(function(){$("html,body").stop().animate({scrollTop:0},1e3)}),$(".nav-toggle").click(function(){$(".header__nav").toggleClass("header__nav--entered"),$(".nav-toggle").toggleClass("nav-toggle--entered")})});
},{"wow.js":"X3fF","stickybits":"e6gj"}]},{},["A2T1"], null)
//# sourceMappingURL=app.js.map