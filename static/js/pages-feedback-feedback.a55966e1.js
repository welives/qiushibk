(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-feedback-feedback"],{"0ae5":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-collapse"},[t._t("default")],2)},l=[]},2114:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("39ad")),l=n(i("f9af")),o={components:{uniCollapse:a.default,uniCollapseItem:l.default},data:function(){return{}},methods:{}};e.default=o},"28d7":function(t,e,i){"use strict";i.r(e);var n=i("c1b4"),a=i("ac29");for(var l in a)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(l);var o,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"2d2cd7eb",null,!1,n["a"],o);e["default"]=r.exports},"30b8":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-collapse-cell",class:{"uni-collapse-cell--disabled":t.disabled,"uni-collapse-cell--notdisabled":!t.disabled,"uni-collapse-cell--open":t.isOpen,"uni-collapse-cell--hide":!t.isOpen}},[i("v-uni-view",{staticClass:"uni-collapse-cell__title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.thumb?i("v-uni-image",{staticClass:"uni-collapse-cell__title-img",attrs:{src:t.thumb}}):t._e(),i("v-uni-text",{staticClass:"uni-collapse-cell__title-text"},[t._v(t._s(t.title))]),i("uni-icons",{staticClass:"uni-collapse-cell__title-arrow",class:{"uni-collapse-cell__title-arrow-active":t.isOpen,"uni-collapse-cell--animation":!0===t.showAnimation},attrs:{color:"#bbb",size:"20",type:"arrowdown"}})],1),i("v-uni-view",{staticClass:"uni-collapse-cell__content",class:{"uni-collapse-cell__content--hide":!t.isOpen}},[i("v-uni-view",{staticClass:"uni-collapse-cell__wrapper",class:{"uni-collapse-cell--animation":!0===t.showAnimation},style:{transform:t.isOpen?"translateY(0)":"translateY(-50%)","-webkit-transform":t.isOpen?"translateY(0)":"translateY(-50%)"}},[t._t("default")],2)],1)],1)},l=[]},"39ad":function(t,e,i){"use strict";i.r(e);var n=i("0ae5"),a=i("3ee0");for(var l in a)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(l);i("4ddf");var o,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"8efb8a3c",null,!1,n["a"],o);e["default"]=r.exports},"3ee0":function(t,e,i){"use strict";i.r(e);var n=i("6765"),a=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(l);e["default"]=a.a},"4ddf":function(t,e,i){"use strict";var n=i("8640"),a=i.n(n);a.a},"66ec":function(t,e,i){var n=i("ad7c");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("5a5567d7",n,!0,{sourceMap:!1,shadowMode:!1})},6765:function(t,e,i){"use strict";i("4160"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var t=[];this.childrens.forEach((function(e,i){e.isOpen&&t.push(e.nameSync)})),this.$emit("change",t)}}};e.default=n},8640:function(t,e,i){var n=i("92ac");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("bd407590",n,!0,{sourceMap:!1,shadowMode:!1})},"88d5":function(t,e,i){"use strict";var n=i("4ea4");i("4160"),i("a9e3"),i("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("9d9d")),l={name:"UniCollapseItem",components:{uniIcons:a.default},props:{title:{type:String,default:""},name:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!1},open:{type:Boolean,default:!1},thumb:{type:String,default:""}},data:function(){return{isOpen:!1}},watch:{open:function(t){this.isOpen=t}},inject:["collapse"],created:function(){if(this.isOpen=this.open,this.nameSync=this.name?this.name:this.collapse.childrens.length,this.collapse.childrens.push(this),"true"===String(this.collapse.accordion)&&this.isOpen){var t=this.collapse.childrens[this.collapse.childrens.length-2];t&&(this.collapse.childrens[this.collapse.childrens.length-2].isOpen=!1)}},methods:{onClick:function(){var t=this;this.disabled||("true"===String(this.collapse.accordion)&&this.collapse.childrens.forEach((function(e){e!==t&&(e.isOpen=!1)})),this.isOpen=!this.isOpen,this.collapse.onChange&&this.collapse.onChange(),this.$forceUpdate())}}};e.default=l},"92ac":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-collapse[data-v-8efb8a3c]{box-sizing:border-box}.uni-collapse[data-v-8efb8a3c]{\nwidth:100%;display:-webkit-box;display:-webkit-flex;display:flex;\n\n\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff}",""]),t.exports=e},ac29:function(t,e,i){"use strict";i.r(e);var n=i("2114"),a=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(l);e["default"]=a.a},ad7c:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-collapse-cell[data-v-5c21ff35],\n.uni-collapse-cell__title[data-v-5c21ff35],\n.uni-collapse-cell__title-img[data-v-5c21ff35],\n.uni-collapse-cell__title-arrow[data-v-5c21ff35],\n.uni-collapse-cell__title-arrow-active[data-v-5c21ff35],\n.uni-collapse-cell__title-text[data-v-5c21ff35],\n.uni-collapse-cell__content[data-v-5c21ff35],\n.uni-collapse-cell__wrapper[data-v-5c21ff35]{box-sizing:border-box}.uni-collapse-cell[data-v-5c21ff35]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;border-color:#e5e5e5;border-bottom-width:1px;border-bottom-style:solid}.uni-collapse-cell--hover[data-v-5c21ff35]{background-color:#f1f1f1}.uni-collapse-cell--open[data-v-5c21ff35]{background-color:#f1f1f1}.uni-collapse-cell--disabled[data-v-5c21ff35]{background-color:#f1f1f1\n\t\t/* opacity: 0.3;\n */}.uni-collapse-cell--hide[data-v-5c21ff35]{height:48px}.uni-collapse-cell--animation[data-v-5c21ff35]{\n\t\t/* transition: transform 0.3s ease;\n */-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease}.uni-collapse-cell__title[data-v-5c21ff35]{padding:12px 12px;position:relative;\ndisplay:-webkit-box;display:-webkit-flex;display:flex;width:100%;box-sizing:border-box;\nheight:48px;line-height:24px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-collapse-cell__title[data-v-5c21ff35]:active{background-color:#f1f1f1}.uni-collapse-cell__title-img[data-v-5c21ff35]{height:26px;width:26px;margin-right:10px}.uni-collapse-cell__title-arrow[data-v-5c21ff35]{width:20px;height:20px;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:center center;transform-origin:center center}.uni-collapse-cell__title-arrow-active[data-v-5c21ff35]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-collapse-cell__title-text[data-v-5c21ff35]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:14px;\nwhite-space:nowrap;color:inherit;\n\n\noverflow:hidden;text-overflow:ellipsis}.uni-collapse-cell__content[data-v-5c21ff35]{overflow:hidden}.uni-collapse-cell__wrapper[data-v-5c21ff35]{\ndisplay:-webkit-box;display:-webkit-flex;display:flex;\n-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-collapse-cell__content--hide[data-v-5c21ff35]{height:0;line-height:0}",""]),t.exports=e},bbf6:function(t,e,i){"use strict";var n=i("66ec"),a=i.n(n);a.a},c1b4:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return l})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("uni-collapse",{staticClass:"py-2",attrs:{accordion:!0}},[i("uni-collapse-item",{attrs:{title:"一文不名",showAnimation:!0}},[i("v-uni-text",{staticClass:"bg-light p-2"},[t._v("今天，是我拿到驾照的10周年。我的驾驶记录非常完美：0事故，0罚单。今天也是距离我最后一次开车10周年的日子。FML")])],1),i("uni-collapse-item",{attrs:{title:"浪漫已死",showAnimation:!0}},[i("v-uni-text",{staticClass:"bg-light p-2"},[t._v("今天，我正在进行一场非常重要的视频员工会议。结果我的男朋友下班回家，边开门边吼道：“宝贝儿！我的小丁丁已经准备好啦！”我当时没静音。FML")])],1),i("uni-collapse-item",{attrs:{title:"宕鸡",showAnimation:!0}},[i("v-uni-text",{staticClass:"bg-light p-2"},[t._v("我因为头部受重伤住了院，最近刚回家。我的医生警告我说局部皮肤可能会出现麻木无感，结果还真让他说中了。是我的小和尚。什么都感觉不到啊。我们还是在床上发现的，变着花儿都叫不起来它，这家伙彻底凉了。FML")])],1)],1),i("v-uni-view",{staticClass:"px-4 pt-5"},[i("v-uni-button",{staticClass:"border-0 bg-main text-white",staticStyle:{"border-radius":"60rpx","letter-spacing":"6rpx"},attrs:{type:"primary"}},[t._v("意见反馈")])],1)],1)},l=[]},e2e7:function(t,e,i){"use strict";i.r(e);var n=i("88d5"),a=i.n(n);for(var l in n)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(l);e["default"]=a.a},f9af:function(t,e,i){"use strict";i.r(e);var n=i("30b8"),a=i("e2e7");for(var l in a)["default"].indexOf(l)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(l);i("bbf6");var o,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"5c21ff35",null,!1,n["a"],o);e["default"]=r.exports}}]);