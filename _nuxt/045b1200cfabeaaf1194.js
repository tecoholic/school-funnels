(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{171:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});const r=t=>Math.round(10*t)/10,o=t=>Number(t).toFixed().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},173:function(t,e,n){"use strict";n.d(e,"b",function(){return h}),n.d(e,"c",function(){return d}),n.d(e,"a",function(){return l}),n.d(e,"e",function(){return r}),n.d(e,"d",function(){return o});const r=(element,t)=>{"object"==typeof t&&Object.keys(t).forEach(e=>{element.setAttribute(e,t[e])})},o=(element,...t)=>{t.forEach(t=>{element.removeAttribute(t)})},l=(element,t,e)=>{const n=document.createElementNS("http://www.w3.org/2000/svg",element);return"object"==typeof e&&r(n,e),void 0!==t&&t.appendChild(n),n},h=(t,e="horizontal")=>"string"==typeof t?`background-color: ${t}`:1===t.length?`background-color: ${t[0]}`:`background-image: linear-gradient(${"horizontal"===e?"to right, ":""}${t.join(", ")})`,c=["#FF4589","#FF5050","#05DF9D","#4FF2FD","#2D9CDB","#A0BBFF","#FFD76F","#F2C94C","#FF9A9A","#FFB178"],d=t=>{const e=[...c],n=[];for(let i=0;i<t;i++){const t=Math.abs(Math.round(Math.random()*(e.length-1)));n.push(e[t]),e.splice(t,1)}return n}},174:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return j});var r=n(184),o=n(175),l=n.n(o),h=n(176),c=n.n(h),d=n(171),f=n(173),script=(n(177),n(179),{name:"VueFunnelGraph",props:{animated:{type:Boolean,default:!1},width:[String,Number],height:[String,Number],values:Array,labels:Array,colors:{type:Array,default:function(){return[]}},subLabels:Array,direction:{type:String,default:"horizontal"},gradientDirection:{type:String,default:"horizontal"},displayPercentage:{type:Boolean,default:!0}},data:function(){return{paths:[],prevPaths:[],graph:null,tween:null,defaultColors:Object(f.c)(10)}},computed:{valuesFormatted:function(){return this.graph.is2d()?this.graph.getValues2d().map(function(t){return Object(d.a)(t)}):this.values.map(function(t){return Object(d.a)(t)})},colorSet:function(){for(var t=[],e=0,i=0;i<this.paths.length;i++){var n=this.graph.is2d()?this.getColors[i]:this.getColors,r="string"==typeof n||1===n.length?"solid":"gradient";"gradient"===r&&(e+=1),t.push({values:n,fillMode:r,fill:"solid"===r?n:"url('#funnelGradient-"+e+"')"})}return t},gradientSet:function(){var t=[];return this.colorSet.forEach(function(e){"gradient"===e.fillMode&&t.push(e)}),t},getColors:function(){return this.colors instanceof Array&&0===this.colors.length?Object(f.c)(this.is2d()?this.values[0].length:2):this.colors.length<this.paths.length?[].concat(this.colors).concat([].concat(this.defaultColors).splice(this.paths.length,this.paths.length-this.colors.length)):this.colors},gradientAngle:function(){return"rotate("+("vertical"===this.gradientDirection?90:0)+")"}},methods:{enterTransition:function(t,e){this.animated||e(),setTimeout(function(){return e()},700)},leaveTransition:function(t,e){this.animated||e(),setTimeout(function(){return e()},700)},is2d:function(){return this.graph.is2d()},percentages:function(){return this.graph.createPercentages()},twoDimPercentages:function(){return this.is2d()?this.graph.getPercentages2d():[]},subLabelBackgrounds:function(t){return this.is2d()?Object(f.b)(this.getColors[t],this.gradientDirection):[]},offsetColor:function(t,e){return Math.round(100*t/(e-1))+"%"},makeAnimations:function(){var t=this;null!==this.tween&&this.tween.stop();var e=[],n=this.prevPaths.length!==this.paths.length,o={x:.5,y:.5};n&&(o={x:0,y:.5},this.graph.isVertical()&&(o={x:1,y:1}),this.graph.is2d()||(o={x:0,y:1})),this.paths.forEach(function(path,l){var h=t.prevPaths[l]||t.graph.getPathMedian(l);n&&(h=t.graph.getPathMedian(l));var c=Object(r.a)([h,path],{addPoints:1,origin:o,optimize:"fill",precision:1});e.push(c)});var h={value:0};this.tween=new l.a.Tween(h).to({value:1},700).easing(l.a.Easing.Cubic.InOut).onUpdate(function(){for(var n=0;n<t.paths.length;n++)t.paths[n]=e[n](h.value),t.paths.__ob__.dep.notify()}),this.tween.start(),function animate(){l.a.update()&&requestAnimationFrame(animate)}()},drawPaths:function(){var t=this;this.prevPaths=this.paths,this.paths=[],this.graph.getPathDefinitions().forEach(function(e){t.paths.push(e)})}},beforeMount:function(){this.graph=new c.a({height:this.height,width:this.width,data:{labels:this.labels,values:this.values}}),this.drawPaths(),this.animated&&this.makeAnimations()},watch:{values:function(){this.graph.setValues(this.values),this.drawPaths(),this.animated&&this.makeAnimations()},direction:function(){this.graph.setDirection(this.direction).setWidth(this.width).setHeight(this.height),this.drawPaths()}}});var v=function(template,style,script,t,e,n,r,o,l,h){"boolean"!=typeof r&&(l=o,o=r,r=!1);var c,d="function"==typeof script?script.options:script;if(template&&template.render&&(d.render=template.render,d.staticRenderFns=template.staticRenderFns,d._compiled=!0,e&&(d.functional=!0)),t&&(d._scopeId=t),n?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=c):style&&(c=r?function(){style.call(this,h(this.$root.$options.shadowRoot))}:function(t){style.call(this,o(t))}),c)if(d.functional){var f=d.render;d.render=function(t,e){return c.call(e),f(t,e)}}else{var v=d.beforeCreate;d.beforeCreate=v?[].concat(v,c):[c]}return script},_="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());var m=document.head||document.getElementsByTagName("head")[0],y={};var j=v({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"funnel svg-funnel-js",class:{"svg-funnel-js--vertical":"vertical"===t.direction}},[n("div",{staticClass:"svg-funnel-js__container"},[n("svg",{attrs:{width:t.width,height:t.height}},[n("defs",t._l(t.gradientSet,function(e,r){return n("linearGradient",{key:r,attrs:{id:"funnelGradient-"+(r+1),gradientTransform:t.gradientAngle}},t._l(e.values,function(r,o){return n("stop",{key:o,attrs:{"stop-color":r,offset:t.offsetColor(o,e.values.length)}})}),1)}),1),t._v(" "),t._l(t.paths,function(path,e){return n("path",{key:e,attrs:{fill:t.colorSet[e].fill,stroke:t.colorSet[e].fill,d:path}})})],2)]),t._v(" "),n("transition-group",{staticClass:"svg-funnel-js__labels",attrs:{name:"appear",tag:"div"},on:{enter:t.enterTransition,leave:t.leaveTransition}},t._l(t.valuesFormatted,function(e,r){return n("div",{key:t.labels[r].toLowerCase().split(" ").join("-"),staticClass:"svg-funnel-js__label",class:"label-"+(r+1)},[n("div",{staticClass:"label__value"},[t._v(t._s(e))]),t._v(" "),t.labels?n("div",{staticClass:"label__title"},[t._v(t._s(t.labels[r]))]):t._e(),t._v(" "),t.displayPercentage&&100!==t.percentages()[r]?n("div",{staticClass:"label__percentage"},[t._v("\n                "+t._s(t.percentages()[r])+"%\n            ")]):t._e(),t._v(" "),t.is2d()?n("div",{staticClass:"label__segment-percentages"},[n("ul",{staticClass:"segment-percentage__list"},t._l(t.subLabels,function(e,o){return n("li",{key:o},[t._v("\n                        "+t._s(e)+":\n                        "),n("span",{staticClass:"percentage__list-label"},[t._v(t._s(t.twoDimPercentages()[r][o])+"%")])])}),0)]):t._e()])}),0),t._v(" "),n("transition",{attrs:{name:"fade"},on:{enter:t.enterTransition,leave:t.leaveTransition}},[t.is2d()?n("div",{staticClass:"svg-funnel-js__subLabels"},t._l(t.subLabels,function(e,r){return n("div",{key:r,class:"svg-funnel-js__subLabel svg-funnel-js__subLabel-"+(r+1)},[n("div",{staticClass:"svg-funnel-js__subLabel--color",style:t.subLabelBackgrounds(r)}),t._v(" "),n("div",{staticClass:"svg-funnel-js__subLabel--title"},[t._v(t._s(e))])])}),0):t._e()])],1)},staticRenderFns:[]},function(t){t&&t("data-v-6203abd4_0",{source:".appear-enter-active[data-v-6203abd4],.appear-leave-active[data-v-6203abd4]{transition:all .7s ease-in-out}.appear-enter-to[data-v-6203abd4],.appear-leave[data-v-6203abd4]{max-width:100%;max-height:100%;opacity:1}.appear-enter[data-v-6203abd4],.appear-leave-to[data-v-6203abd4]{max-width:0;max-height:0;opacity:0}.fade-enter-active[data-v-6203abd4],.fade-leave-active[data-v-6203abd4]{transition:all .3s ease}.fade-enter-to[data-v-6203abd4],.fade-leave[data-v-6203abd4]{opacity:1}.fade-enter[data-v-6203abd4],.fade-leave-to[data-v-6203abd4]{opacity:0}",map:void 0,media:void 0})},script,"data-v-6203abd4",!1,void 0,function(t){return function(t,style){return function(t,e){var n=_?e.media||"default":t,style=y[n]||(y[n]={ids:new Set,styles:[]});if(!style.ids.has(t)){style.ids.add(t);var code=e.source;if(e.map&&(code+="\n/*# sourceURL="+e.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),style.element||(style.element=document.createElement("style"),style.element.type="text/css",e.media&&style.element.setAttribute("media",e.media),m.appendChild(style.element)),"styleSheet"in style.element)style.styles.push(code),style.element.styleSheet.cssText=style.styles.filter(Boolean).join("\n");else{var r=style.ids.size-1,o=document.createTextNode(code),l=style.element.childNodes;l[r]&&style.element.removeChild(l[r]),l.length?style.element.insertBefore(o,l[r]):style.element.appendChild(o)}}}(t,style)}},void 0),w=Object.freeze({VueFunnelGraph:j});var x={install:function t(e){t.installed||(t.installed=!0,Object.keys(w).forEach(function(t){e.component(t,w[t])}))}},C=null;"undefined"!=typeof window?C=window.Vue:void 0!==t&&(C=t.Vue),C&&C.use(x)}).call(this,n(26))},175:function(t,e,n){(function(n){var r,o=function(){this._tweens={},this._tweensAddedDuringUpdate={}};o.prototype={getAll:function(){return Object.keys(this._tweens).map(function(t){return this._tweens[t]}.bind(this))},removeAll:function(){this._tweens={}},add:function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},remove:function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},update:function(time,t){var e=Object.keys(this._tweens);if(0===e.length)return!1;for(time=void 0!==time?time:l.now();e.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<e.length;i++){var n=this._tweens[e[i]];n&&!1===n.update(time)&&(n._isPlaying=!1,t||delete this._tweens[e[i]])}e=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var a,l=new o;l.Group=o,l._nextId=0,l.nextId=function(){return l._nextId++},"undefined"==typeof window&&void 0!==n&&n.hrtime?l.now=function(){var time=n.hrtime();return 1e3*time[0]+time[1]/1e6}:"undefined"!=typeof window&&void 0!==window.performance&&void 0!==window.performance.now?l.now=window.performance.now.bind(window.performance):void 0!==Date.now?l.now=Date.now:l.now=function(){return(new Date).getTime()},l.Tween=function(object,t){this._object=object,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=l.Easing.Linear.None,this._interpolationFunction=l.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=t||l,this._id=l.nextId()},l.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(t,e){return this._valuesEnd=t,void 0!==e&&(this._duration=e),this},start:function(time){for(var t in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=void 0!==time?"string"==typeof time?l.now()+parseFloat(time):time:l.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[t]instanceof Array){if(0===this._valuesEnd[t].length)continue;this._valuesEnd[t]=[this._object[t]].concat(this._valuesEnd[t])}void 0!==this._object[t]&&(this._valuesStart[t]=this._object[t],this._valuesStart[t]instanceof Array==!1&&(this._valuesStart[t]*=1),this._valuesStartRepeat[t]=this._valuesStart[t]||0)}return this},stop:function(){return this._isPlaying?(this._group.remove(this),this._isPlaying=!1,null!==this._onStopCallback&&this._onStopCallback(this._object),this.stopChainedTweens(),this):this},end:function(){return this.update(this._startTime+this._duration),this},stopChainedTweens:function(){for(var i=0,t=this._chainedTweens.length;i<t;i++)this._chainedTweens[i].stop()},group:function(t){return this._group=t,this},delay:function(t){return this._delayTime=t,this},repeat:function(t){return this._repeat=t,this},repeatDelay:function(t){return this._repeatDelayTime=t,this},yoyo:function(t){return this._yoyo=t,this},easing:function(t){return this._easingFunction=t,this},interpolation:function(t){return this._interpolationFunction=t,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(t){return this._onStartCallback=t,this},onUpdate:function(t){return this._onUpdateCallback=t,this},onComplete:function(t){return this._onCompleteCallback=t,this},onStop:function(t){return this._onStopCallback=t,this},update:function(time){var t,e,n;if(time<this._startTime)return!0;for(t in!1===this._onStartCallbackFired&&(null!==this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),e=(time-this._startTime)/this._duration,e=0===this._duration||e>1?1:e,n=this._easingFunction(e),this._valuesEnd)if(void 0!==this._valuesStart[t]){var r=this._valuesStart[t]||0,o=this._valuesEnd[t];o instanceof Array?this._object[t]=this._interpolationFunction(o,n):("string"==typeof o&&(o="+"===o.charAt(0)||"-"===o.charAt(0)?r+parseFloat(o):parseFloat(o)),"number"==typeof o&&(this._object[t]=r+(o-r)*n))}if(null!==this._onUpdateCallback&&this._onUpdateCallback(this._object),1===e){if(this._repeat>0){for(t in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if("string"==typeof this._valuesEnd[t]&&(this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(this._valuesEnd[t])),this._yoyo){var l=this._valuesStartRepeat[t];this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=l}this._valuesStart[t]=this._valuesStartRepeat[t]}return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=time+this._repeatDelayTime:this._startTime=time+this._delayTime,!0}null!==this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var i=0,h=this._chainedTweens.length;i<h;i++)this._chainedTweens[i].start(this._startTime+this._duration);return!1}return!0}},l.Easing={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){var s=1.70158;return t*t*((s+1)*t-s)},Out:function(t){var s=1.70158;return--t*t*((s+1)*t+s)+1},InOut:function(t){var s=2.5949095;return(t*=2)<1?t*t*((s+1)*t-s)*.5:.5*((t-=2)*t*((s+1)*t+s)+2)}},Bounce:{In:function(t){return 1-l.Easing.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*l.Easing.Bounce.In(2*t):.5*l.Easing.Bounce.Out(2*t-1)+.5}}},l.Interpolation={Linear:function(t,e){var n=t.length-1,r=n*e,i=Math.floor(r),o=l.Interpolation.Utils.Linear;return e<0?o(t[0],t[1],r):e>1?o(t[n],t[n-1],n-r):o(t[i],t[i+1>n?n:i+1],r-i)},Bezier:function(t,e){for(var b=0,n=t.length-1,r=Math.pow,o=l.Interpolation.Utils.Bernstein,i=0;i<=n;i++)b+=r(1-e,n-i)*r(e,i)*t[i]*o(n,i);return b},CatmullRom:function(t,e){var n=t.length-1,r=n*e,i=Math.floor(r),o=l.Interpolation.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(i=Math.floor(r=n*(1+e))),o(t[(i-1+n)%n],t[i],t[(i+1)%n],t[(i+2)%n],r-i)):e<0?t[0]-(o(t[0],t[0],t[1],t[1],-r)-t[0]):e>1?t[n]-(o(t[n],t[n],t[n-1],t[n-1],r-n)-t[n]):o(t[i?i-1:0],t[i],t[n<i+1?n:i+1],t[n<i+2?n:i+2],r-i)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,i){var e=l.Interpolation.Utils.Factorial;return e(t)/e(i)/e(t-i)},Factorial:(a=[1],function(t){var s=1;if(a[t])return a[t];for(var i=t;i>1;i--)s*=i;return a[t]=s,s}),CatmullRom:function(t,e,n,r,o){var l=.5*(n-t),h=.5*(r-e),c=o*o;return(2*e-2*n+l+h)*(o*c)+(-3*e+3*n-2*l-h)*c+l*o+e}}},void 0===(r=function(){return l}.apply(e,[]))||(t.exports=r)}).call(this,n(66))},176:function(t,e,n){t.exports=n(185).default},177:function(t,e,n){var content=n(178);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("1b41a2b0",content,!0,{sourceMap:!1})},178:function(t,e,n){(t.exports=n(32)(!1)).push([t.i,".svg-funnel-js {\n  display: inline-block;\n  position: relative;\n}\n\n.svg-funnel-js svg {\n  display: block;\n}\n\n.svg-funnel-js .svg-funnel-js__labels {\n  position: absolute;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n}\n\n.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__labels {\n  flex-direction: column;\n}\n",""])},179:function(t,e,n){var content=n(180);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("9f3d8b58",content,!0,{sourceMap:!1})},180:function(t,e,n){(e=t.exports=n(32)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);",""]),e.push([t.i,'body {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.svg-funnel-js {\n  font-family: "Open Sans", sans-serif;\n}\n\n.svg-funnel-js .svg-funnel-js__container {\n  width: 100%;\n  height: 100%;\n}\n\n.svg-funnel-js .svg-funnel-js__labels {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label {\n  flex: 1 1 0;\n  position: relative;\n}\n\n.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__value {\n  font-size: 24px;\n  color: #fff;\n  line-height: 18px;\n  margin-bottom: 6px;\n}\n\n.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__title {\n  font-size: 12px;\n  font-weight: bold;\n  color: #21ffa2;\n}\n\n.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__percentage {\n  font-size: 16px;\n  font-weight: bold;\n  color: #9896dc;\n}\n\n.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__segment-percentages {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 100%;\n  left: 0;\n  padding: 8px 24px;\n  box-sizing: border-box;\n  background-color: rgba(8, 7, 48, .8);\n  margin-top: 24px;\n  opacity: 0;\n  transition: opacity .1s ease;\n  cursor: default;\n}\n\n.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__segment-percentages ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__segment-percentages ul li {\n  font-size: 13px;\n  line-height: 16px;\n  color: #fff;\n  margin: 18px 0;\n}\n\n.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label .label__segment-percentages ul li .percentage__list-label {\n  font-weight: bold;\n  color: #05df9d;\n}\n\n.svg-funnel-js .svg-funnel-js__labels .svg-funnel-js__label:hover .label__segment-percentages {\n  opacity: 1;\n}\n\n.svg-funnel-js:not(.svg-funnel-js--vertical) {\n  padding-top: 64px;\n  padding-bottom: 16px;\n}\n\n.svg-funnel-js:not(.svg-funnel-js--vertical) .svg-funnel-js__label {\n  padding-left: 24px;\n}\n\n.svg-funnel-js:not(.svg-funnel-js--vertical) .svg-funnel-js__label:not(:first-child) {\n  border-left: 1px solid #9896dc;\n}\n\n.svg-funnel-js.svg-funnel-js--vertical {\n  padding-left: 120px;\n  padding-right: 16px;\n}\n\n.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label {\n  padding-top: 24px;\n}\n\n.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label:not(:first-child) {\n  border-top: 1px solid #9896dc;\n}\n\n.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label .label__segment-percentages {\n  margin-top: 0;\n  margin-left: 106px;\n  width: calc(100% - 106px);\n}\n\n.svg-funnel-js.svg-funnel-js--vertical .svg-funnel-js__label .label__segment-percentages .segment-percentage__list {\n  display: flex;\n  justify-content: space-around;\n}\n\n.svg-funnel-js .svg-funnel-js__subLabels {\n  display: flex;\n  justify-content: center;\n  margin-top: 24px;\n  position: absolute;\n  width: 100%;\n  left: 0;\n}\n\n.svg-funnel-js .svg-funnel-js__subLabels .svg-funnel-js__subLabel {\n  display: flex;\n  font-size: 12px;\n  color: #fff;\n  line-height: 16px;\n}\n\n.svg-funnel-js .svg-funnel-js__subLabels .svg-funnel-js__subLabel:not(:first-child) {\n  margin-left: 16px;\n}\n\n.svg-funnel-js .svg-funnel-js__subLabels .svg-funnel-js__subLabel .svg-funnel-js__subLabel--color {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  margin: 2px 8px 2px 0;\n}\n',""])},184:function(t,e,n){"use strict";const r=void 0,o="V",l="H",h="L",c="Z",d="M",f="C",v="S",_="Q",m="T",y="A",j=" ",w="fill",x="none";function C(t){return"string"==typeof t}const S=Math,P=S.abs,O=S.min,A=S.max,L=S.floor,M=S.round,k=S.sqrt,E=S.pow,D=S.cos,T=S.asin,F=S.sin,I=S.tan,$=S.PI,z=2/3,V=E(2,-52);function G(){throw new Error(Array.prototype.join.call(arguments,j))}function H(t,e){for(let n in e)t.hasOwnProperty(n)||(t[n]=e[n]);return t}var U="undefined"!=typeof window&&window.navigator.userAgent;const R=/(MSIE |Trident\/|Edge\/)/i.test(U)?Array:Float32Array;function B(t){return new R(t)}function N(t,e,n,r){return k((t-n)*(t-n)+(e-r)*(e-r))}function W(t,e,n){let o=n.length;if(n[o-2]!==n[0]||n[o-1]!==n[1])return;const l=n.slice(2);let h,c;o=l.length;for(let i=0;i<o;i+=6){const n=N(t,e,l[i],l[i+1]);(c===r||n<c)&&(c=n,h=i)}!function(t,e){const n=t.length,r=n-e,o=B(e);let i;for(i=0;i<e;i++)o[i]=t[i];for(i=e;i<n;i++)t[i-e]=t[i];for(i=0;i<e;i++)t[r+i]=o[i]}(l,h),n[0]=l[o-2],n[1]=l[o-1];for(let i=0;i<l.length;i++)n[i+2]=l[i]}function Q(t,e){let n=e-t.length;const r=Math.ceil(n/t.length),o=B(e);o[0]=t[0],o[1]=t[1];let l=1,h=1;for(;h<e-1;){o[++h]=t[++l],o[++h]=t[++l],o[++h]=t[++l],o[++h]=t[++l];const e=o[++h]=t[++l],c=o[++h]=t[++l];if(n)for(let t=0;t<r&&n;t++)o[h+5]=o[h+3]=o[h+1]=e,o[h+6]=o[h+4]=o[h+2]=c,h+=6,n-=6}return o}function Z(a,b){return b.p-a.p}function J(t,e,n){const r=X(t),o=X(e),l=n.origin,h=l.x,c=l.y,d=l.absolute;r.length!==o.length&&(n.optimize===w?function t(e,n,r){const o=e.length,l=n.length;if(o<l)return t(n,e,r);n.length=o;for(let i=l;i<o;i++){const t=e[i],o=B(t.d.length);for(let e=0;e<t.d.length;e+=2)o[e]=r.absolute?r.x:t.x+t.w*r.x,o[e+1]=r.absolute?r.y:t.y+t.y*r.y;n[i]=H({d:o},t)}}(r,o,n.origin):G("optimize:none requires equal lengths"));const f=Array(2);if(f[0]=r.map(Y),f[1]=o.map(Y),n.optimize!==x)for(let i=0;i<r.length;i++){const t=r[i],e=o[i];W(d?h:t.x+t.w*h,d?c:t.y+t.h*c,f[0][i]),W(d?h:e.x+e.w*h,d?c:e.y+e.h*c,f[1][i])}return n.optimize===w&&function(t,e){const n=t[0].length;for(let i=0;i<n;i++){const n=t[0][i],r=t[1][i],o=A(n.length+e,r.length+e);t[0][i]=Q(n,o),t[1][i]=Q(r,o)}}(f,6*n.addPoints),f}function X(path){return path.data.slice().sort(Z)}function Y(p){return p.d}const K={addPoints:0,optimize:w,origin:{x:0,y:0},precision:0};function tt(t,e){e=H(e,K),(!t||t.length<2)&&G("invalid arguments");const n=t.length-1,r=Array(n);for(let o=0;o<n;o++)r[o]=et(t[o],t[o+1],e);const o=e.precision?t=>t.toFixed(e.precision):M;return t=>{const e=n*t,l=O(L(e),n-1);return function(t,e){if(C(t))return t;let n=[];for(let i=0;i<t.length;i++){const r=t[i];let o;n.push(d,e(r[0]),e(r[1]),f);for(let t=2;t<r.length;t+=6){const l=e(r[t]),h=e(r[t+1]),c=e(r[t+2]),d=e(r[t+3]),f=e(r[t+4]),v=e(r[t+5]);l==f&&c==f&&h==v&&d==v&&o==(o=""+l+h+c+d+f+v)||n.push(l,h,c,d,f,v)}}return n.join(j)}(r[l]((e-l)/(l+1)),o)}}function et(t,e,n){const r=J(t,e,n),o=r[0].length;return n=>{if(P(n-0)<V)return t.path;if(P(n-1)<V)return e.path;const l=Array(o);for(let t=0;t<o;t++)l[t]=nt(r[0][t],r[1][t],n);return l}}function nt(a,b,t){const e=a.length,n=B(e);for(let i=0;i<e;i++)n[i]=a[i]+(b[i]-a[i])*t;return n}function it(t,e){return t===r?e:t}const st=120*$/180,at=2*$;function ot(t,e,n,r,o,l,h,c,d,f,v,_,m){if(n<=0||r<=0)return[t,e,c,d,c,d];const y=$/180*(+o||0),j=D(y),w=F(y),x=!!f;if(!x){const o=t,y=c,x=((t=o*j-e*-w)-(c=y*j-d*-w))/2,C=((e=o*-w+e*j)-(d=y*-w+d*j))/2;let S=x*x/(n*n)+C*C/(r*r);S>1&&(n*=S=k(S),r*=S);const O=(l===h?-1:1)*k(P((n*n*r*r-n*n*C*C-r*r*x*x)/(n*n*C*C+r*r*x*x)));_=O*n*C/r+(t+c)/2,f=T((e-(m=O*-r*x/n+(e+d)/2))/r),v=T((d-m)/r),t<_&&(f=$-f),c<_&&(v=$-v),f<0&&(f+=at),v<0&&(v+=at),h&&f>v&&(f-=at),!h&&v>f&&(v-=at)}let C;if(P(v-f)>st){const t=v,e=c,l=d;C=ot(c=_+n*D(v=f+st*(h&&v>f?1:-1)),d=m+r*F(v),n,r,o,0,h,e,l,v,t,_,m)}else C=[];const S=4/3*I((v-f)/4);if(C.splice(0,0,2*t-(t+S*n*F(f)),2*e-(e-S*r*D(f)),c+S*n*F(v),d-S*r*D(v),c,d),!x)for(let i=0,t=C.length;i<t;i+=2){const t=C[i],e=C[i+1];C[i]=t*j-e*w,C[i+1]=t*w+e*j}return C}const lt={M:2,H:1,V:1,L:2,Z:0,C:6,S:4,Q:4,T:2,A:7};function ut(t,e,n,r,o,l,h){const c=t.x,d=t.y;t.x=it(l,c),t.y=it(h,d),t.p.push(it(e,c),n=it(n,d),r=it(r,c),o=it(o,d),t.x,t.y),t.lc=t.c}function ht(t){const e=t.c,n=t.t,r=t.x,h=t.y;if(e===o)n[0]+=h;else if(e===l)n[0]+=r;else if(e===y)n[5]+=r,n[6]+=h;else for(let t=0;t<n.length;t+=2)n[t]+=r,n[t+1]+=h}function ct(t){return t.split(j).map(ft)}function ft(t,i){return 0===i?t:+t}function gt(t){const e={x:0,y:0,s:[]},n=function(t){return t.replace(/[\^\s]*([mhvlzcsqta]|\-?\d*\.?\d+)[,\$\s]*/gi," $1").replace(/([mhvlzcsqta])/gi," $1").trim().split("  ").map(ct)}(t);for(let i=0;i<n.length;i++){const t=n[i],j=t[0],w=j.toUpperCase(),x=w!==c&&w!==j;e.c=w;const C=lt[w],S=t;let P=1;do{e.t=1===S.length?S:S.slice(P,P+C),x&&ht(e);const t=e.t,n=e.x,j=e.y;let O,A,L,M,k,E;if(w===d)e.s.push(e.p=[e.x=t[0],e.y=t[1]]);else if(w===l)ut(e,r,r,r,r,t[0],r);else if(w===o)ut(e,r,r,r,r,r,t[0]);else if(w===h)ut(e,r,r,r,r,t[0],t[1]);else if(w===c)ut(e,r,r,r,r,e.p[0],e.p[1]);else if(w===f)ut(e,t[0],t[1],t[2],t[3],t[4],t[5]),e.cx=t[2],e.cy=t[3];else if(w===v){const o=e.lc!==v&&e.lc!==f;ut(e,O=o?r:2*n-e.cx,A=o?r:2*j-e.cy,t[0],t[1],t[2],t[3]),e.cx=t[0],e.cy=t[1]}else if(w===_){const r=t[0],o=t[1];L=t[2],M=t[3],ut(e,n+(r-n)*z,j+(o-j)*z,L+(r-L)*z,M+(o-M)*z,L,M),e.cx=r,e.cy=o}else if(w===m)L=t[0],M=t[1],e.lc===_||e.lc===m?(O=n+(2*n-e.cx-n)*z,A=j+(2*j-e.cy-j)*z,k=L+(2*n-e.cx-L)*z,E=M+(2*j-e.cy-M)*z):(O=k=n,A=E=j),ut(e,O,A,k,E,L,M),e.cx=k,e.cy=E;else if(w===y){const r=ot(n,j,t[0],t[1],t[2],t[3],t[4],t[5],t[6]);for(let t=0;t<r.length;t+=6)ut(e,r[t],r[t+1],r[t+2],r[t+3],r[t+4],r[t+5])}else G(e.c," is not supported");P+=C}while(P<S.length)}return e.s}function pt(t){const e=t.length;let n=t[e-2],r=t[e-1],p=0;for(let i=0;i<e;i+=6)p+=N(t[i],t[i+1],n,r),n=t[i],r=t[i+1];return L(p)}function vt(t){let e=t[0],n=t[1],r=n,o=e;for(let i=2;i<t.length;i+=6){let l=t[i+4],h=t[i+5];e=O(e,l),o=A(o,l),n=O(n,h),r=A(r,h)}return{d:t,x:e,y:n,w:o-e,h:r-n,p:pt(t)}}const _t=/^([#|\.]|path)/i;function bt(t){return function(t){return{path:t,data:gt(t).map(vt)}}(function(t){if(C(t)){if(!_t.test(t))return t;t=document.querySelector(t)}return t.getAttribute("d")}(t))}function mt(t,e){return tt(t.map(bt),e||{})}n.d(e,"a",function(){return mt})},185:function(t,e,n){"use strict";n.r(e);var r=n(171);const o=(t,e,n,o)=>` C${Object(r.b)((n+t)/2)},${e} `+`${Object(r.b)((n+t)/2)},${o} ${n},${o}`,l=(t,e,n,o)=>` C${t},${Object(r.b)((o+e)/2)} `+`${n},${Object(r.b)((o+e)/2)} ${n},${o}`,h=(t,e,n,r)=>{let l=`M${e[0]},${n[0]}`;for(let i=0;i<e.length-1;i++)l+=o(e[i],n[i],e[i+1],n[i+1]);l+=` L${[...e].pop()},${[...r].pop()}`;for(let i=e.length-1;i>0;i--)l+=o(e[i],r[i],e[i-1],r[i-1]);return l+=" Z"},c=(t,e,n,r)=>{let o=`M${e[0]},${r[0]}`;for(let i=0;i<e.length-1;i++)o+=l(e[i],r[i],e[i+1],r[i+1]);o+=` L${[...n].pop()},${[...r].pop()}`;for(let i=e.length-1;i>0;i--)o+=l(n[i],r[i],n[i-1],r[i-1]);return o+=" Z"};var d=n(173);class f{constructor(t){this.containerSelector=t.container,this.gradientDirection=t.gradientDirection&&"vertical"===t.gradientDirection?"vertical":"horizontal",this.direction=t.direction&&"vertical"===t.direction?"vertical":"horizontal",this.labels=f.getLabels(t),this.subLabels=f.getSubLabels(t),this.values=f.getValues(t),this.percentages=this.createPercentages(),this.colors=t.data.colors||Object(d.c)(this.is2d()?this.getSubDataSize():2),this.displayPercent=t.displayPercent||!1,this.data=t.data,this.height=t.height,this.width=t.width,this.subLabelValue=t.subLabelValue||"percent"}getMainAxisPoints(){const t=this.getDataSize(),e=[],n=this.isVertical()?this.getHeight():this.getWidth();for(let i=0;i<=t;i++)e.push(Object(r.b)(n*i/t));return e}getCrossAxisPoints(){const t=[],e=this.getFullDimension(),n=e/2;if(this.is2d()){const o=this.getValues2d(),l=Math.max(...o);o.push([...o].pop()),t.push(o.map(t=>Object(r.b)((l-t)/l*n)));const h=this.getPercentages2d(),c=t[0];for(let i=1;i<this.getSubDataSize();i++){const p=t[i-1],n=[];for(let t=0;t<this.getDataSize();t++)n.push(Object(r.b)(p[t]+(e-2*c[t])*(h[t][i-1]/100)));n.push([...n].pop()),t.push(n)}t.push(c.map(t=>e-t))}else{const o=Math.max(...this.values),l=[...this.values].concat([...this.values].pop());t.push(l.map(t=>Object(r.b)((o-t)/o*n))),t.push(t[0].map(t=>e-t))}return t}getGraphType(){return this.values&&this.values[0]instanceof Array?"2d":"normal"}is2d(){return"2d"===this.getGraphType()}isVertical(){return"vertical"===this.direction}getDataSize(){return this.values.length}getSubDataSize(){return this.values[0].length}getFullDimension(){return this.isVertical()?this.getWidth():this.getHeight()}static getSubLabels(t){if(!t.data)throw new Error("Data is missing");const{data:data}=t;return void 0===data.subLabels?[]:data.subLabels}static getLabels(t){if(!t.data)throw new Error("Data is missing");const{data:data}=t;return void 0===data.labels?[]:data.labels}addLabels(){const t=document.createElement("div");t.setAttribute("class","svg-funnel-js__labels"),this.percentages.forEach((e,n)=>{const o=document.createElement("div");o.setAttribute("class",`svg-funnel-js__label label-${n+1}`);const title=document.createElement("div");title.setAttribute("class","label__title"),title.textContent=this.labels[n]||"";const l=document.createElement("div");l.setAttribute("class","label__value");const h=this.is2d()?this.getValues2d()[n]:this.values[n];l.textContent=Object(r.a)(h);const c=document.createElement("div");if(c.setAttribute("class","label__percentage"),100!==e&&(c.textContent=`${e.toString()}%`),o.appendChild(l),o.appendChild(title),this.displayPercent&&o.appendChild(c),this.is2d()){const t=document.createElement("div");t.setAttribute("class","label__segment-percentages");let e='<ul class="segment-percentage__list">';const l=this.getPercentages2d();this.subLabels.forEach((t,o)=>{const h="percent"===this.subLabelValue?`${l[n][o]}%`:Object(r.a)(this.values[n][o]);e+=`<li>${this.subLabels[o]}:\n    <span class="percentage__list-label">${h}</span>\n </li>`}),e+="</ul>",t.innerHTML=e,o.appendChild(t)}t.appendChild(o)}),this.container.appendChild(t)}addSubLabels(){if(this.subLabels){const t=document.createElement("div");t.setAttribute("class","svg-funnel-js__subLabels");let e="";this.subLabels.forEach((t,n)=>{e+=`<div class="svg-funnel-js__subLabel svg-funnel-js__subLabel-${n+1}">\n    <div class="svg-funnel-js__subLabel--color" \n        style="${Object(d.b)(this.colors[n],this.gradientDirection)}"></div>\n    <div class="svg-funnel-js__subLabel--title">${t}</div>\n</div>`}),t.innerHTML=e,this.container.appendChild(t)}}createContainer(){if(!this.containerSelector)throw new Error("Container is missing");this.container=document.querySelector(this.containerSelector),this.container.classList.add("svg-funnel-js"),this.graphContainer=document.createElement("div"),this.graphContainer.classList.add("svg-funnel-js__container"),this.container.appendChild(this.graphContainer),"vertical"===this.direction&&this.container.classList.add("svg-funnel-js--vertical")}setValues(t){return this.values=t,this}setDirection(t){return this.direction=t,this}setHeight(t){return this.height=t,this}setWidth(t){return this.width=t,this}static getValues(t){if(!t.data)return[];const{data:data}=t;return"object"==typeof data?data.values:[]}getValues2d(){const t=[];return this.values.forEach(e=>{t.push(e.reduce((t,e)=>t+e,0))}),t}getPercentages2d(){const t=[];return this.values.forEach(e=>{const n=e.reduce((t,e)=>t+e,0);t.push(e.map(t=>Object(r.b)(100*t/n)))}),t}createPercentages(){let t=[];t=this.is2d()?this.getValues2d():[...this.values];const e=Math.max(...t);return t.map(t=>Object(r.b)(100*t/e))}applyGradient(svg,path,t,e){const defs=null===svg.querySelector("defs")?Object(d.a)("defs",svg):svg.querySelector("defs"),n=`funnelGradient-${e}`,r=Object(d.a)("linearGradient",defs,{id:n});"vertical"===this.gradientDirection&&Object(d.e)(r,{x1:"0",x2:"0",y1:"0",y2:"1"});const o=t.length;for(let i=0;i<o;i++)Object(d.a)("stop",r,{"stop-color":t[i],offset:`${Math.round(100*i/(o-1))}%`});Object(d.e)(path,{fill:`url("#${n}")`,stroke:`url("#${n}")`})}makeSVG(){const svg=Object(d.a)("svg",this.graphContainer,{width:this.getWidth(),height:this.getHeight()}),t=this.getCrossAxisPoints().length-1;for(let i=0;i<t;i++){const path=Object(d.a)("path",svg),t=this.is2d()?this.colors[i]:this.colors,e="string"==typeof t||1===t.length?"solid":"gradient";"solid"===e?Object(d.e)(path,{fill:t,stroke:t}):"gradient"===e&&this.applyGradient(svg,path,t,i+1),svg.appendChild(path)}this.graphContainer.appendChild(svg)}getSVG(){const svg=this.container.querySelector("svg");if(!svg)throw new Error("No SVG found inside of the container");return svg}getWidth(){return this.width||this.graphContainer.clientWidth}getHeight(){return this.height||this.graphContainer.clientHeight}getPathDefinitions(){const t=this.getCrossAxisPoints().length-1,e=[];for(let i=0;i<t;i++)if(this.isVertical()){const t=this.getCrossAxisPoints()[i],n=this.getCrossAxisPoints()[i+1],r=this.getMainAxisPoints(),o=c(i,t,n,r);e.push(o)}else{const t=this.getMainAxisPoints(),n=this.getCrossAxisPoints()[i],r=this.getCrossAxisPoints()[i+1],o=h(i,t,n,r);e.push(o)}return e}getPathMedian(i){if(this.isVertical()){const t=this.getCrossAxisPoints()[i],e=this.getCrossAxisPoints()[i+1],n=this.getMainAxisPoints(),r=[],o=[];return t.forEach((t,n)=>{const l=(t+e[n])/2;r.push(l-1),o.push(l+1)}),c(i,r,o,n)}const t=this.getMainAxisPoints(),e=this.getCrossAxisPoints()[i],n=this.getCrossAxisPoints()[i+1],r=[],o=[];return e.forEach((t,e)=>{const l=(t+n[e])/2;r.push(l-1),o.push(l+1)}),h(i,t,r,o)}drawPaths(){const t=this.getSVG().querySelectorAll("path");this.getPathDefinitions().forEach((e,n)=>{t[n].setAttribute("d",e)})}draw(){this.createContainer(),this.makeSVG(),this.addLabels(),this.is2d()&&this.addSubLabels(),this.drawPaths()}makeVertical(){if("vertical"===this.direction)return!0;this.direction="vertical",this.container.classList.add("svg-funnel-js--vertical");const svg=this.getSVG(),t=this.getHeight(),e=this.getWidth();return Object(d.e)(svg,{height:t,width:e}),this.drawPaths(),!0}makeHorizontal(){if("horizontal"===this.direction)return!0;this.direction="horizontal",this.container.classList.remove("svg-funnel-js--vertical");const svg=this.getSVG(),t=this.getHeight(),e=this.getWidth();return Object(d.e)(svg,{height:t,width:e}),this.drawPaths(),!0}toggleDirection(){"horizontal"===this.direction?this.makeVertical():this.makeHorizontal()}gradientMakeVertical(){if("vertical"===this.gradientDirection)return!0;return this.gradientDirection="vertical",this.graphContainer.querySelectorAll("linearGradient").forEach(t=>{Object(d.e)(t,{x1:"0",x2:"0",y1:"0",y2:"1"})}),!0}gradientMakeHorizontal(){if("horizontal"===this.gradientDirection)return!0;return this.gradientDirection="horizontal",this.graphContainer.querySelectorAll("linearGradient").forEach(t=>{Object(d.d)(t,"x1","x2","y1","y2")}),!0}gradientToggleDirection(){"horizontal"===this.gradientDirection?this.gradientMakeVertical():this.gradientMakeHorizontal()}updateWidth(t){this.width=t;const svg=this.getSVG(),e=this.getWidth();return Object(d.e)(svg,{width:e}),this.drawPaths(),!0}updateHeight(t){this.height=t;const svg=this.getSVG(),e=this.getHeight();return Object(d.e)(svg,{height:e}),this.drawPaths(),!0}updateData(t){void 0!==t.labels&&(this.container.querySelector(".svg-funnel-js__labels").remove(),this.labels=f.getLabels({data:t}),this.addLabels()),void 0!==t.colors&&(this.colors=t.colors||Object(d.c)(this.is2d()?this.getSubDataSize():2)),void 0!==t.values&&(Object.prototype.toString.call(t.values[0])!==Object.prototype.toString.call(this.values[0])?(this.container.querySelector("svg").remove(),this.values=f.getValues({data:t}),this.makeSVG(),this.drawPaths()):(this.values=f.getValues({data:t}),this.drawPaths())),void 0!==t.subLabels&&(this.container.querySelector(".svg-funnel-js__subLabels").remove(),this.subLabels=f.getSubLabels({data:t}),this.addSubLabels())}update(t){void 0!==t.displayPercent&&this.displayPercent!==t.displayPercent&&(!0===this.displayPercent?this.container.querySelectorAll(".label__percentage").forEach(label=>{label.remove()}):this.container.querySelectorAll(".svg-funnel-js__label").forEach((label,t)=>{const e=this.percentages[t],n=document.createElement("div");n.setAttribute("class","label__percentage"),100!==e&&(n.textContent=`${e.toString()}%`,label.appendChild(n))})),void 0!==t.height&&this.updateHeight(t.height),void 0!==t.width&&this.updateWidth(t.width),void 0!==t.gradientDirection&&("vertical"===t.gradientDirection?this.gradientMakeVertical():"horizontal"===t.gradientDirection&&this.gradientMakeHorizontal()),void 0!==t.direction&&("vertical"===t.direction?this.makeVertical():"horizontal"===t.direction&&this.makeHorizontal()),void 0!==t.data&&this.updateData(t.data)}}e.default=f}}]);