(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-friend-list-friend-list"],{"05cd":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".uni-status-bar[data-v-611f6ff8]{box-sizing:border-box}.uni-status-bar[data-v-611f6ff8]{width:%?750?%;height:20px\n\t\t/* height: var(--status-bar-height);\n */}",""]),t.exports=e},"0893":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"flex align-center w-100",staticStyle:{height:"80rpx"}},[t._l(t.tabBars,(function(e,a){return[n("v-uni-view",{key:a+"_0",staticClass:"flex-fill text-center font-weight-bold",class:t.tabIndex===a?"text-main font-lg":"font-md",staticStyle:{height:"100%"},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.tabIndex=a}}},[t._v(t._s(e.name)),e.count>0?n("v-uni-text",{staticClass:"ml-1 font-sm text-muted"},[t._v(t._s(e.count))]):t._e()],1)]}))],2),n("v-uni-swiper",{style:"height: "+t.scrollHeight+"px;",attrs:{current:t.tabIndex,duration:150},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changeSwiper.apply(void 0,arguments)}}},t._l(t.dataList,(function(e,a){return n("v-uni-swiper-item",{key:a},[n("v-uni-scroll-view",{staticStyle:{height:"100%"},attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore(a)}}},[e.list.length>0?[t._l(e.list,(function(t,e){return[n("user-list",{key:e+"_0",attrs:{item:t,index:a}})]})),n("load-more",{attrs:{loadText:e.list.length>t.limit?t.load.text[t.load.type]:t.load.text[2]}})]:[n("no-data")]],2)],1)})),1)],1)},r=[]},"0d3f":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar"},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.backgroundColor}},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header uni-navbar__content_view",style:{color:t.color,backgroundColor:t.backgroundColor}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left uni-navbar__content_view",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t.leftIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.color,type:t.leftIcon,size:"24"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length}},[n("v-uni-text",{style:{color:t.color,fontSize:"14px"}},[t._v(t._s(t.leftText))])],1):t._e(),t._t("left")],2),n("v-uni-view",{staticClass:"uni-navbar__header-container uni-navbar__content_view"},[t.title.length?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner uni-navbar__content_view"},[n("v-uni-text",{staticClass:"uni-nav-bar-text",style:{color:t.color}},[t._v(t._s(t.title))])],1):t._e(),t._t("default")],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__content_view",class:t.title.length?"uni-navbar__header-btns-right":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.color,type:t.rightIcon,size:"24"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text uni-navbar__content_view"},[n("v-uni-text",{staticClass:"uni-nav-bar-right-text"},[t._v(t._s(t.rightText))])],1):t._e(),t._t("right")],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("uni-status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view"})],1):t._e()],1)},r=[]},"0d6f":function(t,e,n){"use strict";n.r(e);var a=n("59df"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"0da0":function(t,e,n){"use strict";n.r(e);var a=n("d6e5"),i=n("0d6f");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var o,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"4f3980c4",null,!1,a["a"],o);e["default"]=c.exports},"0f2b":function(t,e,n){var a=n("bf0a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("7d6822ca",a,!0,{sourceMap:!1,shadowMode:!1})},"0f76":function(t,e,n){"use strict";var a=n("8971"),i=n.n(a);i.a},1482:function(t,e,n){"use strict";n.r(e);var a=n("0d3f"),i=n("21bb");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("ebaf");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"bd667014",null,!1,a["a"],o);e["default"]=c.exports},"1c7b":function(t,e,n){"use strict";n.r(e);var a=n("91a5"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"1df7":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("25a8")),r=a(n("9d9d")),o={name:"UniNavBar",components:{uniStatusBar:i.default,uniIcons:r.default},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0}},mounted:function(){uni.report&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")}}};e.default=o},"1f64":function(t,e,n){"use strict";n("d3b7"),n("e25e"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={getHoroscope:function(t){var e=["摩羯","水瓶","双鱼","白羊","金牛","双子","巨蟹","狮子","处女","天秤","天蝎","射手","摩羯"];t=new Date(t);var n=t.getMonth()+1,a=t.getDate(),i=n-(a-14<"865778999988".charAt(n));return e[i]+"座"},sumAge:function(t){var e=new Date(t.replace(/-/g,"/")),n=new Date,a=n.getTime()-e.getTime(),i=Math.floor(a/864e5),r=a%864e5,o=Math.floor(r/36e5),u=r%36e5,c=(Math.floor(u/6e4),u%6e4);Math.round(c/1e3);return i+"天 "+o+"小时 "},getChatTime:function(t,e){if(t=t.toString().length<13?1e3*t:t,e=e.toString().length<13?1e3*e:e,(parseInt(t)-parseInt(e))/1e3>300)return this.getTime(t)},getTime:function(t){t=t.toString().length<13?1e3*t:t;var e=(new Date).getTime(),n=(e-parseInt(t))/1e3;return n<43200?this.dateFormat(new Date(t),"{A} {t}:{ii}"):n<518400?this.dateFormat(new Date(t),"{Mon}月{DD}日 {A} {t}:{ii}"):this.dateFormat(new Date(t),"{Y}-{MM}-{DD} {A} {t}:{ii}")},parseNumber:function(t){return t<10?"0"+t:t},dateFormat:function(t,e){var n={},a=/\{([^}]+)\}/,i=["1","2","3","4","5","6","7","8","9","10","11","12"];n["Y"]=t.getFullYear(),n["M"]=t.getMonth()+1,n["MM"]=this.parseNumber(n["M"]),n["Mon"]=i[n["M"]-1],n["D"]=t.getDate(),n["DD"]=this.parseNumber(n["D"]),n["h"]=t.getHours(),n["hh"]=this.parseNumber(n["h"]),n["t"]=n["h"]>12?n["h"]-12:n["h"],n["tt"]=this.parseNumber(n["t"]),n["A"]=n["h"]>12?"下午":"上午",n["i"]=t.getMinutes(),n["ii"]=this.parseNumber(n["i"]),n["s"]=t.getSeconds(),n["ss"]=this.parseNumber(n["s"]);while(a.test(e))e=e.replace(a,n[RegExp.$1]);return e},getAgeByBirthday:function(t){var e=new Date(t.replace(/-/g,"/")),n=new Date;return n.getFullYear()-e.getFullYear()-(n.getMonth()<e.getMonth()||n.getMonth()==e.getMonth()&&n.getDate()<e.getDate()?1:0)}};e.default=a},"21bb":function(t,e,n){"use strict";n.r(e);var a=n("1df7"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"25a8":function(t,e,n){"use strict";n.r(e);var a=n("c2cc"),i=n("48cf");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("0f76");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"611f6ff8",null,!1,a["a"],o);e["default"]=c.exports},"45cc":function(t,e,n){"use strict";var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a49b")),r={dataList:[{avatar:"".concat(i.default.ossUrl,"/userpic/14.jpg"),username:"靓女",sex:2,age:18,isFollow:!0},{avatar:"".concat(i.default.ossUrl,"/userpic/10.jpg"),username:"靓仔",sex:1,age:23,isFollow:!1},{avatar:"".concat(i.default.ossUrl,"/default.jpg"),username:"煎蛋",sex:0,age:30,isFollow:!0},{avatar:"".concat(i.default.ossUrl,"/userpic/8.jpg"),username:"川普",sex:1,age:66,isFollow:!1}]};e.default=r},4790:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".uni-badge[data-v-39520cae]{box-sizing:border-box}.uni-badge[data-v-39520cae]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;overflow:hidden;\n-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:20px;line-height:20px;color:#333;border-radius:100px;background-color:#f1f1f1;background-color:initial;text-align:center;font-family:Helvetica Neue,Helvetica,sans-serif;font-size:12px;padding:0 6px}.uni-badge--inverted[data-v-39520cae]{padding:0 5px 0 0;color:#f1f1f1}.uni-badge--default[data-v-39520cae]{color:#333;background-color:#f1f1f1}.uni-badge--default-inverted[data-v-39520cae]{color:#999;background-color:initial}.uni-badge--primary[data-v-39520cae]{color:#fff;background-color:#007aff}.uni-badge--primary-inverted[data-v-39520cae]{color:#007aff;background-color:initial}.uni-badge--success[data-v-39520cae]{color:#fff;background-color:#4cd964}.uni-badge--success-inverted[data-v-39520cae]{color:#4cd964;background-color:initial}.uni-badge--warning[data-v-39520cae]{color:#fff;background-color:#f0ad4e}.uni-badge--warning-inverted[data-v-39520cae]{color:#f0ad4e;background-color:initial}.uni-badge--error[data-v-39520cae]{color:#fff;background-color:#dd524d}.uni-badge--error-inverted[data-v-39520cae]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-39520cae]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}",""]),t.exports=e},"48cf":function(t,e,n){"use strict";n.r(e);var a=n("abf6"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"4a4d":function(t,e,n){"use strict";var a=n("5051"),i=n.n(a);i.a},5051:function(t,e,n){var a=n("4790");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("7f325cdc",a,!0,{sourceMap:!1,shadowMode:!1})},"59df":function(t,e,n){"use strict";var a=n("4ea4");n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("d31c")),r={props:{item:Object,index:Number},components:{uniBadge:i.default}};e.default=r},"5bb1":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.text?n("v-uni-view",{staticClass:"uni-badge",class:t.inverted?"uni-badge--"+t.type+" uni-badge--"+t.size+" uni-badge--"+t.type+"-inverted":"uni-badge--"+t.type+" uni-badge--"+t.size,style:t.badgeStyle,on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.onClick()}}},[t._t("default"),t._v(t._s(t.text))],2):t._e()},r=[]},6590:function(t,e,n){"use strict";var a=n("4ea4");n("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("1f64")),r={data:function(){return{load:{type:0,text:["上拉加载更多...","加载中...","真的一滴都没有了"]},page:1,limit:10,limits:[5,7,10,13,15],tabDbClick:!1}},filters:{formatTime:function(t){return i.default.getTime(t)}},methods:{back:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;uni.navigateBack({delta:t})},navigateTo:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";uni.navigateTo({url:e?"/pages/".concat(t,"/").concat(t,"?").concat(e):"/pages/".concat(t,"/").concat(t)})},doRefresh:function(){var t=this;this.tabDbClick&&uni.startPullDownRefresh(),this.tabDbClick=!0,setTimeout((function(){t.tabDbClick=!1}),200)}}};e.default=r},"6fca":function(t,e,n){"use strict";n.r(e);var a=n("c9c4"),i=n("1c7b");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var o,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"6448fc0b",null,!1,a["a"],o);e["default"]=c.exports},8971:function(t,e,n){var a=n("05cd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("77675d73",a,!0,{sourceMap:!1,shadowMode:!1})},"91a5":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={props:["loadText"]};e.default=a},abf6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync().statusBarHeight+"px",i={name:"UniStatusBar",data:function(){return{statusBarHeight:a}}};e.default=i},b647:function(t,e,n){"use strict";n.r(e);var a=n("db25"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},b9e0:function(t,e,n){"use strict";n.r(e);var a=n("c008"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},bf0a:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".uni-nav-bar-text[data-v-bd667014],\n.uni-nav-bar-right-text[data-v-bd667014],\n.uni-navbar__content[data-v-bd667014],\n.uni-navbar__content_view[data-v-bd667014],\n.uni-navbar__header[data-v-bd667014],\n.uni-navbar__header-btns[data-v-bd667014],\n.uni-navbar__header-btns-left[data-v-bd667014],\n.uni-navbar__header-btns-right[data-v-bd667014],\n.uni-navbar__header-container[data-v-bd667014],\n.uni-navbar__header-container-inner[data-v-bd667014],\n.uni-navbar__placeholder-view[data-v-bd667014]{box-sizing:border-box}.uni-nav-bar-text[data-v-bd667014]{\n\n\nfont-size:16\n}.uni-nav-bar-right-text[data-v-bd667014]{font-size:14px}.uni-navbar__content[data-v-bd667014]{position:relative;background-color:#fff;overflow:hidden}.uni-navbar__content_view[data-v-bd667014]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row\n\t\t/* background-color: #FFFFFF;\n */}.uni-navbar__header[data-v-bd667014]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;height:44px;line-height:44px;font-size:16px\n\t\t/* background-color: #ffffff;\n */}.uni-navbar__header-btns[data-v-bd667014]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-flex-wrap:nowrap;flex-wrap:nowrap;width:%?120?%;padding:0 6px;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-navbar__header-btns-left[data-v-bd667014]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?150?%;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.uni-navbar__header-btns-right[data-v-bd667014]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\nwidth:%?150?%;padding-right:%?30?%;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.uni-navbar__header-container[data-v-bd667014]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.uni-navbar__header-container-inner[data-v-bd667014]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:14px}.uni-navbar__placeholder-view[data-v-bd667014]{height:44px}.uni-navbar--fixed[data-v-bd667014]{position:fixed;z-index:998}.uni-navbar--shadow[data-v-bd667014]{\nbox-shadow:0 1px 6px #ccc\n}.uni-navbar--border[data-v-bd667014]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#e5e5e5}",""]),t.exports=e},c008:function(t,e,n){"use strict";var a=n("4ea4");n("99af"),n("d81d"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2909")),r=a(n("5530")),o=a(n("45cc")),u=a(n("6590")),c=a(n("0da0")),l=a(n("6fca")),d=a(n("d31c")),s=a(n("1482")),f={components:{userList:c.default,loadMore:l.default,uniBadge:d.default,uniNavBar:s.default},mixins:[u.default],data:function(){return{scrollHeight:600,tabIndex:0,tabBars:[{id:1,name:"关注",key:"follow",count:5},{id:2,name:"粉丝",key:"fans",count:10},{id:3,name:"互关",key:"eachOther",count:0}],dataList:[]}},computed:{},onLoad:function(){var t=uni.getSystemInfoSync();this.scrollHeight=t.windowHeight-uni.upx2px(80),this.initData()},onNavigationBarSearchInputClicked:function(){this.navigateTo("search","type=user")},onNavigationBarButtonTap:function(t){uni.navigateBack({delta:1})},methods:{initData:function(){this.dataList=this.tabBars.map((function(t,e){return e<2?{list:o.default.dataList.map((function(t){return(0,r.default)({},t)}))}:{list:[]}}))},changeSwiper:function(t){this.tabIndex=t.detail.current},loadMore:function(t){var e=this;if(2!==this.load.type){if(1===this.load.type)return;var n=this.dataList[t].list;setTimeout((function(){e.load.type=1,e.dataList[t].list=[].concat((0,i.default)(n),(0,i.default)(n)),e.load.type=0}),500)}}}};e.default=f},c2cc:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)},r=[]},c9c4:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"flex align-center justify-center text-light-muted",staticStyle:{height:"80rpx"}},[t._v(t._s(t.loadText))])},r=[]},d31c:function(t,e,n){"use strict";n.r(e);var a=n("5bb1"),i=n("b647");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("4a4d");var o,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"39520cae",null,!1,a["a"],o);e["default"]=c.exports},d6e5:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"px-2",attrs:{"hover-class":"bg-light"}},[n("v-uni-view",{staticClass:"flex align-center py-2 border-bottom border-light-secondary"},[n("v-uni-image",{staticClass:"rounded-circle flex-shrink-0",staticStyle:{width:"80rpx",height:"80rpx"},attrs:{src:t.item.avatar||"/static/default.jpg",mode:""}}),n("v-uni-view",{staticClass:"mx-2 flex-fill flex flex-column",staticStyle:{"line-height":"1.5"}},[n("v-uni-text",{staticClass:"font-md"},[t._v(t._s(t.item.username))]),n("uni-badge",{attrs:{text:t.item.age,type:t.item.sex?1===t.item.sex?"primary":"error":"warning",size:"small",width:t.item.sex?"40":""}},[t.item.sex?n("v-uni-text",{staticClass:"iconfont font-sm mr-1",class:1===t.item.sex?"icon-nan":"icon-nv"}):t._e()],1)],1),n("v-uni-view",{staticClass:"flex-shrink-0 m-1"},[n("v-uni-text",{staticClass:"uni-icon uni-icon-checkbox-filled",class:t.item.isFollow?"text-main":"text-light-muted"})],1)],1)],1)},r=[]},db25:function(t,e,n){"use strict";n("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"},width:{type:String,default:""}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(this.width?this.width:8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=a},df6c:function(t,e,n){"use strict";n.r(e);var a=n("0893"),i=n("b9e0");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);var o,u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"7580d456",null,!1,a["a"],o);e["default"]=c.exports},ebaf:function(t,e,n){"use strict";var a=n("0f2b"),i=n.n(a);i.a}}]);