(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7440ee95"],{"16b7":function(t,e,o){"use strict";o("a9e3");var i=o("2b0e");e["a"]=i["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var o=this;this.clearDelay();var i=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){o.isActive={open:!0,close:!1}[t]},i)}}})},"20f6":function(t,e,o){},"2fa4":function(t,e,o){"use strict";o("20f6");var i=o("80d2");e["a"]=Object(i["h"])("spacer","div","v-spacer")},"3a66":function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var i=o("fe6c"),n=o("58df");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(n["a"])(Object(i["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,o=e.length;t<o;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"5e23":function(t,e,o){},"8b0d":function(t,e,o){},"8e07":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app-bar",{attrs:{id:"app-bar",absolute:"",app:"",color:"transparent",flat:"",height:"75"}},[o("v-btn",{staticClass:"mr-3",attrs:{elevation:"1",fab:"",small:""},on:{click:function(e){return t.setDrawer(!t.drawer)}}},[t.value?o("v-icon",[t._v(" mdi-view-quilt ")]):o("v-icon",[t._v(" mdi-dots-vertical ")])],1),o("v-toolbar-title",{staticClass:"hidden-sm-and-down font-weight-light",domProps:{textContent:t._s(t.$route.name)}}),o("v-spacer")],1)},n=[],r=o("5530"),s=o("16b7"),l=o("f2e7"),a=o("58df"),c=o("d9bd"),h=Object(a["a"])(s["a"],l["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(c["c"])("v-hover should only contain a single element",this),t)):(Object(c["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}}),d=o("da13"),p=o("2f62"),u={name:"DashboardCoreAppBar",components:{AppBarItem:{render:function(t){var e=this;return t(h,{scopedSlots:{default:function(o){var i=o.hover;return t(d["a"],{attrs:e.$attrs,class:{"black--text":!i,"white--text secondary elevation-12":i},props:Object(r["a"])({activeClass:"",dark:i,link:!0},e.$attrs)},e.$slots.default)}}})}}},props:{value:{type:Boolean,default:!1}},data:function(){return{notifications:["Mike John Responded to your email","You have 5 new tasks","You're now friends with Andrew","Another Notification","Another one"]}},computed:Object(r["a"])({},Object(p["c"])(["drawer"])),methods:Object(r["a"])({},Object(p["b"])({setDrawer:"SET_DRAWER"}))},f=u,v=o("2877"),m=o("6544"),b=o.n(m),g=(o("a9e3"),o("b680"),o("c7cd"),o("8b0d"),o("0481"),o("4160"),o("4069"),o("3835")),S=(o("5e23"),o("8dd9")),O=o("adda"),y=o("80d2"),T=S["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(r["a"])(Object(r["a"])({},S["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(r["a"])(Object(r["a"])({},this.measurableStyles),{},{height:Object(y["g"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var o=Object(g["a"])(e,2),i=o[0],n=o[1];t.$attrs.hasOwnProperty(i)&&Object(c["a"])(i,n,t)}))},methods:{genBackground:function(){var t={height:Object(y["g"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(O["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(y["g"])(this.computedContentHeight)}},Object(y["r"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(y["g"])(this.extensionHeight)}},Object(y["r"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],o=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,o,e)}}),j=o("53ca");function x(t,e){var o=e.modifiers||{},i=o.self,n=void 0!==i&&i,r=e.value,s="object"===Object(j["a"])(r)&&r.options||{passive:!0},l="function"===typeof r||"handleEvent"in r?r:r.handler,a=n?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",l,s),t._onScroll={handler:l,options:s,target:n?void 0:a})}function w(t){if(t._onScroll){var e=t._onScroll,o=e.handler,i=e.options,n=e.target,r=void 0===n?t:n;r.removeEventListener("scroll",o,i),delete t._onScroll}}var B={inserted:x,unbind:w},A=B,$=o("3a66"),_=o("2b0e"),C=_["a"].extend({name:"scrollable",directives:{Scroll:B},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!==typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(c["c"])("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),E=o("d10f"),k=Object(a["a"])(T,C,E["a"],l["a"],Object($["a"])("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"])),H=k.extend({name:"v-app-bar",directives:{Scroll:A},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return C.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return Object(r["a"])(Object(r["a"])({},T.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},computedContentHeight:function(){if(!this.shrinkOnScroll)return T.options.computed.computedContentHeight.call(this);var t=this.computedOriginalHeight,e=this.dense?48:56,o=t,i=o-e,n=i/this.computedScrollThreshold,r=this.currentScroll*n;return Math.max(e,o-r)},computedFontSize:function(){if(this.isProminent){var t=this.dense?96:128,e=t-this.computedContentHeight,o=.00347;return Number((1.5-e*o).toFixed(2))}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll){var t=Math.max((this.computedScrollThreshold-this.currentScroll)/this.computedScrollThreshold,0);return Number(parseFloat(t).toFixed(2))}},computedOriginalHeight:function(){var t=T.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:T.options.computed.isCollapsed.call(this)},isProminent:function(){return T.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return Object(r["a"])(Object(r["a"])({},T.options.computed.styles.call(this)),{},{fontSize:Object(y["g"])(this.computedFontSize,"rem"),marginTop:Object(y["g"])(this.computedMarginTop),transform:"translateY(".concat(Object(y["g"])(this.computedTransform),")"),left:Object(y["g"])(this.computedLeft),right:Object(y["g"])(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=T.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var e=T.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}}),P=o("8336"),M=o("132d"),D=o("2fa4"),U=Object(y["h"])("v-toolbar__title"),L=(Object(y["h"])("v-toolbar__items"),Object(v["a"])(f,i,n,!1,null,null,null));e["default"]=L.exports;b()(L,{VAppBar:H,VBtn:P["a"],VIcon:M["a"],VSpacer:D["a"],VToolbarTitle:U})}}]);
//# sourceMappingURL=chunk-7440ee95.a588c9c0.js.map