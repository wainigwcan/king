(function(t){function e(e){for(var a,r,c=e[0],l=e[1],o=e[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&p.push(i[r][0]),i[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,c=1;c<s.length;c++){var l=s[c];0!==i[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var d=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},1399:function(t,e,s){"use strict";var a=s("bfc3"),i=s.n(a);i.a},"21bb":function(t,e,s){"use strict";var a=s("68c8"),i=s.n(a);i.a},"23af":function(t,e,s){},4836:function(t,e,s){t.exports=s.p+"img/6da9003b743b65f4c0ccd295cc484e57.1559116998.82e0eaa75cff42ffae8870dd2ed4aa11.230x140_21456.c3ceb97a.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);s("a133"),s("ed0d"),s("f09c"),s("e117");var a=s("a593"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],r=s("9ca4"),c={},l=Object(r["a"])(c,i,n,!1,null,null,null),o=l.exports,d=s("3211"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),t._m(1),s("router-view")],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"topbar bg-black py-2 px-4 d-flex ai-center"},[a("img",{staticStyle:{height:"2rem"},attrs:{src:s("cf05")}}),a("div",{staticClass:"px-2 flex-1"},[a("div",{staticClass:"text-white"},[t._v("王者荣耀")]),a("div",{staticClass:"text-grey pt-1"},[t._v("团队成就更多")])]),a("button",{staticClass:"btn bg-primary",attrs:{type:"button"}},[t._v("立即下载")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-primary p-2"},[s("div",{staticClass:"nav nav-inverse d-flex text-white jc-around"},[s("div",{staticClass:"nav-item active"},[s("div",{staticClass:"nav-link"},[t._v("首页")])]),s("div",{staticClass:"nav-item"},[s("div",{staticClass:"nav-link"},[t._v("攻略中心")])]),s("div",{staticClass:"nav-item"},[s("div",{staticClass:"nav-link"},[t._v("赛事中心")])])])])}],f={},v=f,m=(s("a006"),Object(r["a"])(v,u,p,!1,null,null,null)),_=m.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("swiper",{attrs:{options:t.swiperOption}},[a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("4836"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("4836"),alt:""}})]),a("swiper-slide",[a("img",{staticClass:"w-100",attrs:{src:s("4836"),alt:""}})]),a("div",{staticClass:"swiper-pagination pagination-home text-right px-3 pb-1",attrs:{slot:"pagination"},slot:"pagination"})],1),a("div",{staticClass:"icons bg-white mt-3 text-center pt-3 text-dark-1"},[a("div",{staticClass:"d-flex flex-wrap"},t._l(10,(function(e){return a("div",{key:e,staticClass:"nav-item mb-3"},[a("i",{staticClass:"sprite sprite-news"}),a("div",{staticClass:"py-2"},[t._v("爆料站")])])})),0),t._m(0)]),a("list-card",{attrs:{title:"新闻资讯",icon:"menu1",categories:t.newCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return t._l(s.newsList,(function(e,s){return a("router-link",{key:s,staticClass:"d-flex fs-lg py-2",attrs:{tag:"div",to:"/articles/"+e._id}},[a("span",{staticClass:"text-info"},[t._v("["+t._s(e.categoryName)+"]")]),a("span",{staticClass:"px-2"},[t._v("|")]),a("span",{staticClass:"flex-1 text-ellipsis text-dark-1"},[t._v(t._s(e.title))]),a("span",{staticClass:"fs-sm text-grey-1"},[t._v(t._s(t._f("date")(e.createdAt)))])])}))}}])}),a("list-card",{attrs:{title:"英雄列表",icon:"card-hero",categories:t.heroCats},scopedSlots:t._u([{key:"items",fn:function(e){var s=e.category;return[a("div",{staticClass:"d-flex flex-wrap text-center",staticStyle:{margin:"0 -.6rem"}},t._l(s.heroList,(function(e,s){return a("router-link",{key:s,staticClass:"p-2",staticStyle:{width:"20%"},attrs:{tag:"div",to:"/heroes/"+e._id}},[a("img",{staticClass:"w-100",attrs:{src:e.avatar}}),a("div",[t._v(t._s(e.name))])])})),1)]}}])})],1)},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light py-2 fs-sm"},[s("i",{staticClass:"sprite sprite-arrow mr-1"}),s("span",[t._v("收起")])])}],b=(s("6a61"),s("cf7f")),g=s("2d9f"),x=s.n(g),y={filters:{date:function(t){return x()(t).format("MM/DD")}},data:function(){return{swiperOption:{pagination:{el:".pagination-home"}},newCats:[],heroCats:[]}},methods:{fatchNewsCard:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("news/list");case 2:s=e.sent,t.newCats=s.data;case 4:case"end":return e.stop()}}),e)})))()},fatchHeroCard:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/list");case 2:s=e.sent,t.heroCats=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fatchNewsCard(),this.fatchHeroCard()}},w=y,k=(s("21bb"),Object(r["a"])(w,C,h,!1,null,null,null)),j=k.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.model?s("div",{staticClass:"page-article"},[s("div",{staticClass:"d-flex ai-center p-2 border-bottom"},[s("div",{staticClass:"iconfont icon-Back text-info",on:{click:function(e){return t.$router.go(-1)}}}),s("div",{staticClass:"flex-1 text-info px-2"},[t._v(t._s(t.model.title))]),s("div",{staticClass:"text-grey fs-xs"},[t._v("09/01")])]),s("div",{staticClass:"px-3 fs-xl body",domProps:{innerHTML:t._s(t.model.body)}}),s("div",{staticClass:"footer"},[t._m(0),s("div",{staticClass:"p-2"},t._l(t.model.related,(function(e){return s("router-link",{key:e._id,staticClass:"fs-lg py-1",attrs:{tag:"div",to:"/articles/"+e._id}},[t._v(t._s(e.title))])})),1)])]):t._e()},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"p-2"},[s("i",{staticClass:"iconfont icon-menu"}),s("span",{staticClass:"ml-1 text-info"},[t._v("相关资讯")])])}],$={props:{id:{required:!0}},watch:{id:"fatch"},data:function(){return{model:null}},methods:{fatch:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("articles/".concat(t.id));case 2:s=e.sent,t.model=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fatch()}},E=$,P=(s("1399"),Object(r["a"])(E,S,O,!1,null,null,null)),R=P.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.model?a("div",{staticClass:"page-hero"},[a("header",{staticClass:"topbar bg-black text-white py-2 px-4 d-flex ai-center"},[a("img",{staticStyle:{height:"2rem"},attrs:{src:s("cf05")}}),t._m(0),a("router-link",{attrs:{tag:"span",to:"/"}},[t._v("更多英雄 ···")])],1),a("div",{staticClass:"top",style:{"background-image":"url("+t.model.banner+")"}},[a("div",{staticClass:"info text-white h-100 p-3 d-flex flex-column jc-end"},[a("div",{staticClass:"fs-sm"},[t._v(t._s(t.model.title))]),a("h2",{staticClass:"my-1"},[t._v(t._s(t.model.name))]),a("div",{staticClass:"pb-1 fs-sm"},[t._v(t._s(t.model.categories.map((function(t){return t.name})).join("/")))]),a("div",{staticClass:"d-flex jc-between pb-2"},[t.model.scores?a("div",{staticClass:"scores d-flex ai-center"},[a("span",[t._v("难度")]),a("span",{staticClass:"badge bg-primary"},[t._v(t._s(t.model.scores.difficult))]),a("span",[t._v("技能")]),a("span",{staticClass:"badge bg-blue-1"},[t._v(t._s(t.model.scores.skills))]),a("span",[t._v("攻击")]),a("span",{staticClass:"badge bg-danger"},[t._v(t._s(t.model.scores.attack))]),a("span",[t._v("生存")]),a("span",{staticClass:"badge bg-dark-1"},[t._v(t._s(t.model.scores.survive))])]):t._e(),a("router-link",{staticClass:"text-grey fs-sm",attrs:{to:"/",tag:"div"}},[t._v("皮肤: 2 >")])],1)])]),a("div",[a("div",{staticClass:"px-3 bg-white border-bottom"},[t._m(1),a("swiper",[a("swiper-slide",[a("div",[a("div",{staticClass:"p-3 border-bottom"},[a("div",{staticClass:"d-flex jc-around"},[a("router-link",{staticClass:"btn btn-lg flex-1",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v(" 英雄介绍视频 ")]),a("router-link",{staticClass:"btn btn-lg flex-1 ml-2",attrs:{tag:"button",to:"/"}},[a("i",{staticClass:"iconfont icon-menu1"}),t._v(" 英雄介绍视频 ")])],1),a("div",{staticClass:"skills mt-3"},[a("div",{staticClass:"d-flex jc-around"},t._l(t.model.skills,(function(e,s){return a("img",{key:e._id,staticClass:"icon",class:{active:t.currentSkillsIndex===s},attrs:{src:e.icon,width:"60",height:"60",alt:""},on:{click:function(e){t.currentSkillsIndex=s}}})})),0),t.currentSkill?a("div",[a("div",{staticClass:"d-flex ai-center pt-3 pb-2"},[a("h3",{staticClass:"m-0"},[t._v(t._s(t.currentSkill.name))]),a("span",{staticClass:"text-grey ml-3"},[t._v("(冷却值: "+t._s(t.currentSkill.cost)+"消耗: "+t._s(t.currentSkill.delay)+")")])]),a("p",[t._v(t._s(t.currentSkill.description))]),a("div",{staticClass:"border-bottom"}),a("p",{staticClass:"text-grey"},[t._v("小提示: "+t._s(t.currentSkill.tips))])]):t._e()])])])]),a("swiper-slide")],1)],1),a("m-card",{staticClass:"hero-items",attrs:{plain:"",icon:"menu1",title:"出装推荐"}},[a("div",{staticClass:"fs-xl py-3"},[t._v("顺风出装")]),a("div",{staticClass:"d-flex border-bottom pb-1 jc-around text-center"},t._l(t.model.items1,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon,alt:""}}),a("div",{staticClass:"fs-xxs"},[t._v(t._s(e.name))])])})),0),a("div",{staticClass:"fs-xl py-3"},[t._v("逆风出装")]),a("div",{staticClass:"d-flex border-bottom pb-1 jc-around text-center"},t._l(t.model.items2,(function(e){return a("div",{key:e.name},[a("img",{staticClass:"icon",attrs:{src:e.icon,alt:""}}),a("div",{staticClass:"fs-xxs"},[t._v(t._s(e.name))])])})),0)]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"使用技巧"}},[a("p",[t._v(t._s(t.model.usageTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"对抗技巧"}},[a("p",[t._v(t._s(t.model.battleTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"团战思路"}},[a("p",[t._v(t._s(t.model.teamTips))])]),a("m-card",{attrs:{plain:"",icon:"menu1",title:"英雄关系"}},[a("div",{staticClass:"fs-xl py-3"},[t._v("最佳搭档")]),t._l(t.model.partners,(function(e){return a("div",{key:e._id,staticClass:"d-flex py-2 ai-center"},[a("img",{attrs:{src:e.hero.avatar,height:"40",alt:""}}),a("div",{staticClass:"flex-1 fs-xxs ml-2"},[t._v(t._s(e.description))])])})),a("div",{staticClass:"border-bottom my-3"})],2)],1)]):t._e()},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"pl-3 flex-1 pt-1"},[s("span",[t._v("王者荣耀")]),s("span",{staticClass:"px-2"},[t._v("攻略战")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav d-flex pt-3 pb-2 jc-around"},[s("div",{staticClass:"nav-item active"},[s("div",{staticClass:"nav-link"},[t._v("英雄出事")])]),s("div",{staticClass:"nav-item"},[s("div",{staticClass:"nav-link"},[t._v("境界功率")])])])}],M={props:{id:{required:!0}},data:function(){return{model:null,currentSkillsIndex:0}},computed:{currentSkill:function(){return this.model.skills[this.currentSkillsIndex]}},methods:{fatch:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("heroes/".concat(t.id));case 2:s=e.sent,t.model=s.data;case 4:case"end":return e.stop()}}),e)})))()}},created:function(){this.fatch()}},I=M,L=(s("6e94"),Object(r["a"])(I,T,q,!1,null,null,null)),A=L.exports;a["default"].use(d["a"]);var N=[{path:"/",component:_,children:[{path:"/",name:"home",component:j},{path:"/articles/:id",name:"article",component:R,props:!0}]},{path:"/heroes/:id",name:"hero",component:A,props:!0}],H=new d["a"]({routes:N}),U=H,B=(s("78a7"),s("be35"),s("5976")),D=s.n(B),J=s("d02f"),V=s.n(J),z=(s("8c3f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card bg-white px-2 py-2 mt-3"},[s("div",{staticClass:"card-header pb-2 d-flex ai-center",class:{"border-bottom":!t.plain}},[s("i",{staticClass:"iconfont",class:"icon-"+t.icon}),s("div",{staticClass:"fs-ls px-2 flex-1"},[t._v(t._s(t.title))]),t.plain?t._e():s("i",{staticClass:"iconfont icon-menu"})]),s("div",{staticClass:"card-body"},[t._t("default")],2)])}),F=[],G={props:{title:{type:String,required:!0},icon:{type:String,required:!0},plain:{type:Boolean}}},K=G,Q=Object(r["a"])(K,z,F,!1,null,null,null),W=Q.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("m-card",{attrs:{title:t.title,icon:t.icon}},[s("div",{staticClass:"mt-3 px-2"},[s("div",{staticClass:"nav jc-between"},t._l(t.categories,(function(e,a){return s("div",{key:a,staticClass:"nav-item",class:{active:t.index===a},on:{click:function(e){return t.$refs.list.$swiper.slideTo(a)}}},[s("div",{staticClass:"nav-link"},[t._v(t._s(e.name))])])})),0)]),s("div",{staticClass:"mt-2 px-2"},[s("swiper",{ref:"list",attrs:{options:{autoHeight:!0}},on:{"slide-change":function(){return t.index=t.$refs.list.$swiper.realIndex}}},t._l(t.categories,(function(e,a){return s("swiper-slide",{key:a},[t._t("items",null,{category:e})],2)})),1)],1)])},Y=[],Z={props:{title:{type:String,required:!0},icon:{type:String,required:!0},categories:{type:Array,required:!0}},data:function(){return{index:0}}},tt=Z,et=Object(r["a"])(tt,X,Y,!1,null,null,null),st=et.exports;a["default"].prototype.$http=D.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"/web/api"}),a["default"].use(V.a),a["default"].component("m-card",W),a["default"].component("list-card",st),a["default"].config.productionTip=!1,new a["default"]({router:U,render:function(t){return t(o)}}).$mount("#app")},"68c8":function(t,e,s){},"6e94":function(t,e,s){"use strict";var a=s("23af"),i=s.n(a);i.a},"78a7":function(t,e,s){},a006:function(t,e,s){"use strict";var a=s("bd4e"),i=s.n(a);i.a},bd4e:function(t,e,s){},be35:function(t,e,s){},bfc3:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.fc64bf07.png"}});
//# sourceMappingURL=app.42d86cba.js.map