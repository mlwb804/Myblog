(function(t){function e(e){for(var r,i,o=e[0],s=e[1],u=e[2],f=0,d=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1994:function(t,e,n){"use strict";n("1b2b")},"1b2b":function(t,e,n){},"387e":function(t,e,n){t.exports=n.p+"img/github.529c172f.svg"},4792:function(t,e,n){},"54e6":function(t,e,n){t.exports=n.p+"img/instagram.c7a227cc.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("router-view")],1)},c=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("MyBlog")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[t._v(" Home ")]),n("b-nav-item",{attrs:{to:"/about"}},[t._v(" About ")]),n("b-nav-item",{attrs:{to:"/login"}},[t._v(" Login ")])],1),n("b-nav-form",[n("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"},model:{value:t.searchKey,callback:function(e){t.searchKey=e},expression:"searchKey"}}),n("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"},on:{click:function(e){return e.preventDefault(),t.submitSearchKey(e)}}},[t._v("Search")])],1)],1)],1)],1)],1)},o=[],s=n("5530"),u=n("2f62"),l={data:function(){return{searchKey:""}},methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["changeSearchKey"])),{},{submitSearchKey:function(){this.changeSearchKey(this.searchKey)}}),watch:{searchKey:function(){""===this.searchKey&&this.submitSearchKey()}}},f=l,d=(n("e0a9"),n("2877")),m=Object(d["a"])(f,i,o,!1,null,"56eb98a4",null),p=m.exports,b={mounted:function(){this.$store.dispatch("fetchArticles")},components:{Header:p}},h=b,v=(n("5c0b"),Object(d["a"])(h,a,c,!1,null,null,null)),g=v.exports,_=n("8c4f"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("section",{attrs:{calss:"home-articles"}},t._l(t.filterBySearchKey,(function(e,r){return n("article",{key:r},[n("h3",{on:{click:function(n){return t.routerToArticle(e.id)}}},[t._v(" "+t._s(e.title)+" ")]),n("i",[t._v(" "+t._s(t._f("toDate")(e.date)))]),n("span",[t._v(" "+t._s(t._f("subContent")(e.content))+" ")])])})),0),n("section",{staticClass:"home-side-bar"},[n("SideBar",{attrs:{articles:t.articles}})],1),n("section",[n("Icon")],1)])},A=[],w=(n("99af"),n("a15b"),n("fb6a"),n("bc3a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",[t._v("最新文章")]),n("hr"),n("ul",t._l(t.articles,(function(e,r){return n("li",{key:r,on:{click:function(n){return t.routerToArticle(e.id)}}},[t._v(t._s(e.title)+" ")])})),0)])}),j=[],x={props:{articles:Array},methods:{routerToArticle:function(t){this.$router.push({name:"Article",params:{id:t}})}}},O=x,k=(n("f43b"),Object(d["a"])(O,w,j,!1,null,"06075886",null)),D=k.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box-control"},[r("div",{staticClass:"box"},[r("a",{attrs:{href:t.instagramUrl}},[r("img",{attrs:{width:"50px",src:n("54e6"),alt:"instagram"}})])]),r("div",{staticClass:"box"},[r("a",{attrs:{href:t.faceUrl}},[r("img",{attrs:{width:"50px",src:n("aaa3"),alt:"facebook"}})])]),r("div",{staticClass:"box"},[r("a",{attrs:{href:t.gitUrl}},[r("img",{attrs:{width:"50px",src:n("387e"),alt:"github"}})])])])},C=[],I={data:function(){return{faceUrl:"https://www.facebook.com/profile.php?id=100000313497680",instagramUrl:"https://www.instagram.com/mlwb804/",gitUrl:"https://github.com/mlwb804"}}},S=I,K=(n("a469"),Object(d["a"])(S,$,C,!1,null,"f6306dea",null)),E=K.exports,B={name:"Home",components:{SideBar:D,Icon:E},methods:{routerToArticle:function(t){this.$router.push({name:"Article",params:{id:t}})}},computed:Object(s["a"])(Object(s["a"])({},Object(u["d"])(["articles"])),Object(u["c"])(["filterBySearchKey"])),filters:{subContent:function(t){return t.substring(0,150)},toDate:function(t){var e=new Date(t),n=e.getFullYear(),r=e.getMonth(),a=e.getDate(),c=e.getHours(),i=(Array(2).join("0")+e.getMinutes()).slice(-2);return"".concat(n,"/").concat(r+1,"/").concat(a," ").concat(c,":").concat(i)}}},H=B,T=(n("ab9f"),Object(d["a"])(H,y,A,!1,null,"8171b522",null)),F=T.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid no-gutters"},[n("div",{staticClass:"row"},[t._m(0),t._m(1),n("Icon",{staticClass:"iconBox col-"})],1)])},R=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pic col- col-md-4 col-xl-3 padding-0"},[r("div",{staticClass:"pic-control"},[r("img",{attrs:{src:n("b0df"),alt:""}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"txt col- col-md-7 col-xl-8 padding-0"},[n("h1",[t._v("謝政霖")]),n("h4",[t._v("一個初入前端的菜鳥")]),n("p",[t._v("我是一位前端新手,大學畢業前沒有任何寫程式的經驗,當兵時認識了兩個資工好友,"),n("br"),t._v(" 當時的我對於未來有些迷惘,並不清楚自己想做什麼,於是在他們的建議下決定踏入前端這個廣闊的世界。 "),n("br"),n("br"),t._v(" 我學習程式的方法主要是靠網路上的資源以及書籍來自學, "),n("br"),t._v(" 用影片的講解以及書本的理論來理解程式的邏輯,並透過練習以加深記憶。"),n("br"),n("br"),t._v(" 平時的興趣除了寫寫code以外,也喜歡調酒,攝影以及電影。"),n("br"),t._v(" 喜歡拍攝風景照,也喜歡在假日的晚上小酌一杯,因為酒吧太貴所以學會了簡單的調酒(笑)。 ")])])}],P={components:{Icon:E}},U=P,z=(n("7bda"),Object(d["a"])(U,M,R,!1,null,"2780dbb4",null)),G=z.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.articles?n("article",[n("h2",[t._v(" "+t._s(t.filterById.title)+" ")]),n("i",[t._v(t._s(t._f("toDate")(t.filterById.date)))]),n("span",{domProps:{innerHTML:t._s(t.filterById.content)}})]):t._e()])},Y=[],q={mounted:function(){var t=this.$route.params.id;this.artId=t,this.$store.dispatch("changeFocusId",t)},data:function(){return{artId:null,articles:[]}},computed:Object(s["a"])({},Object(u["c"])(["filterById"])),filters:{toDate:function(t){var e=new Date(t),n=e.getFullYear(),r=e.getMonth(),a=e.getDate(),c=e.getHours(),i=(Array(2).join("0")+e.getMinutes()).slice(-2);return"".concat(n,"/").concat(r+1,"/").concat(a," ").concat(c,":").concat(i)}}},J=q,N=(n("8b54"),Object(d["a"])(J,L,Y,!1,null,"ac7ce9ac",null)),Q=N.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("管理員登入")]),n("b-form",[n("b-form-group",{attrs:{id:"input-group-1",label:"輸入管理員帳號","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Enter Account"},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"登入密碼","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:function(e){return e.preventDefault(),t.routerToAdmin(e)}}},[t._v("登入")]),n("b-button",{attrs:{type:"submit",variant:"danger"},on:{click:t.reset}},[t._v("清除")])],1)],1)},W=[],X={data:function(){return{form:{account:"",password:""}}},methods:{routerToAdmin:function(){this.$router.push({name:"Admin-Home"})},reset:function(){this.form.account="",this.form.password=""}}},Z=X,tt=(n("1994"),Object(d["a"])(Z,V,W,!1,null,"62f664ba",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{staticClass:"home",attrs:{to:"/admin"}},[n("b-button",[t._v("文章列表")])],1),n("router-link",{staticClass:"add",attrs:{to:"/admin/add"}},[n("b-button",[t._v("新增文章")])],1),n("router-view")],1)},rt=[],at=(n("c2af"),{}),ct=Object(d["a"])(at,nt,rt,!1,null,"09a6d302",null),it=ct.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("b-form",[n("b-form-group",{attrs:{id:"input-group-1",label:"文章標題","label-for":"input-1"}},[n("b-form-input",{attrs:{id:"input-1",type:"text",required:"",placeholder:"Enter Title"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"文章內容","label-for":"textarea"}},[n("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"8","max-rows":"10"},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}})],1),t.submited?t._e():n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:function(e){return e.preventDefault(),t.submitFormData(e)}}},[t._v("送出")]),t.submited?n("b-spinner",{attrs:{label:"Spinning"}}):n("b-button",{attrs:{variant:"danger"},on:{click:function(e){return e.preventDefault(),t.resetFormData(e)}}},[t._v("清除")])],1)],1)},st=[],ut=(n("b0c0"),{computed:Object(s["a"])(Object(s["a"])({},Object(u["d"])(["account","articleChanged"])),Object(u["c"])(["filterById"])),data:function(){return{mode:"add",formData:{title:"",date:"",content:""},submited:!1,thisAccount:null}},mounted:function(){if("Admin-Edit"===this.$route.name){var t=this.$route.params.id;this.mode="edit",this.$store.dispatch("changeFocusId",t)}this.thisAccount=this.$store.state.account},methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["addArticle","updateArticle"])),{},{resetFormData:function(){this.formData={title:"",date:"",content:""}},submitFormData:function(){var t=this;this.submited=!0,this.formData.date=(new Date).getTime(),"edit"===this.mode?this.updateArticle({id:this.$route.params.id,newArticle:this.formData}):this.addArticle(this.formData).then((function(e){console.log(e),t.$router.push({name:"Admin-Home"})}))}}),watch:{filterById:function(){this.formData.title=this.filterById.title,this.formData.content=this.filterById.content}}}),lt=ut,ft=Object(d["a"])(lt,ot,st,!1,null,"5c58fce6",null),dt=ft.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("b-table",{attrs:{fields:t.fields,items:t.articles},scopedSlots:t._u([{key:"cell(date)",fn:function(e){return[t._v(" "+t._s(t._f("toDate")(e.value))+" ")]}},{key:"cell(content)",fn:function(e){return[t._v(" "+t._s(t._f("subContent")(e.value))+" ")]}},{key:"cell(id)",fn:function(e){return[n("b-button-group",[n("b-button",{on:{click:function(n){return t.editArticle(e.value)}}},[t._v("修改")]),n("b-button",{on:{click:function(n){return t.delArticle(e.value)}}},[t._v("刪除")])],1)]}}])})],1)])},pt=[],bt={data:function(){return{fields:[{key:"title",label:"文章標題"},{key:"date",label:"上傳日期"},{key:"content",label:"文章內容"},{key:"id",label:"修改/刪除"}]}},methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["fetchArticles","deleteArticle"])),{},{editArticle:function(t){this.$router.push({name:"Admin-Edit",params:{id:t}})},delArticle:function(t){var e=confirm("請問是否刪除文章");e&&this.deleteArticle(t)}}),computed:Object(s["a"])({},Object(u["d"])(["account","articles"])),filters:{subContent:function(t){return t.substring(0,50)+"..."},toDate:function(t){var e=new Date(t),n=e.getFullYear(),r=e.getMonth(),a=e.getDate(),c=e.getHours(),i=(Array(2).join("0")+e.getMinutes()).slice(-2);return"".concat(n,"/").concat(r+1,"/").concat(a," ").concat(c,":").concat(i)}}},ht=bt,vt=Object(d["a"])(ht,mt,pt,!1,null,null,null),gt=vt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("404")]),n("h4",[t._v("This Page is NotFound")]),n("b-button",{on:{click:t.goBackHome}},[t._v("Go Back")])],1)},yt=[],At={methods:{goBackHome:function(){this.$router.push({name:"Home"})}}},wt=At,jt=Object(d["a"])(wt,_t,yt,!1,null,null,null),xt=jt.exports;r["default"].use(_["a"]);var Ot=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:G},{path:"/article/:id",name:"Article",component:Q},{path:"/login",name:"Login",component:et},{path:"/admin",name:"Admin",component:it,children:[{path:"/",name:"Admin-Home",component:gt},{path:"add",name:"Admin-Add",component:dt},{path:"edit/:id",name:"Admin-Edit",component:dt}]},{path:"*",name:"NotFound404",component:xt}],kt=new _["a"]({routes:Ot}),Dt=kt,$t=(n("4de4"),n("4160"),n("c975"),n("d81d"),n("a434"),n("159b"),n("96cf"),n("1da1")),Ct=n("2909"),It=(n("2ef0"),n("260b")),St=(n("e71f"),{apiKey:"AIzaSyAfYtYOzRQSMmcc30DgmGTA0ybn4C1Mojs",authDomain:"myblog-80c7e.firebaseapp.com",databaseURL:"https://myblog-80c7e.firebaseio.com",projectId:"myblog-80c7e",storageBucket:"myblog-80c7e.appspot.com",messagingSenderId:"441604310208",appId:"1:441604310208:web:6f92bc977bb071c4461925",measurementId:"G-R72R3GT4HL"});It["a"].initializeApp(St);var Kt=It["a"].firestore();r["default"].use(u["a"]);var Et=new u["a"].Store({state:{articles:[],searchKey:"",account:"Glove",focusId:"",articleChanged:!1},mutations:{fetchArticles:function(t,e){t.articles=e},changeSearchKey:function(t,e){t.searchKey=e},changeFocusId:function(t,e){t.focusId=e},addArticle:function(t,e){t.articles=[e].concat(Object(Ct["a"])(t.articles)),t.articleChanged=!t.articleChanged},updateArticle:function(t,e){var n=e.id,r=e.newArticle,a=t.articles.map((function(t){return t.id})).indexOf(n);t.articles[a]=r,t.articleChanged=!t.articleChanged},deleteArticle:function(t,e){var n=t.articles.map((function(t){return t.id})).indexOf(e);t.articles.splice(n,1)}},actions:{fetchArticles:function(){var t=Object($t["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,r=Kt.collection("Articles"),t.next=4,r.get();case 4:a=t.sent,c=[],a.forEach((function(t){c.push(Object(s["a"])({id:t.id},t.data()))})),n("fetchArticles",c);case 8:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),changeSearchKey:function(t,e){var n=t.commit;n("changeSearchKey",e)},changeFocusId:function(t,e){var n=t.commit;n("changeFocusId",e)},addArticle:function(){var t=Object($t["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,a=Kt.collection("Articles"),t.next=4,a.add(n);case 4:return c=t.sent,r("addArticle",Object(s["a"])({id:c.id},n)),t.abrupt("return",c.id);case 7:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),updateArticle:function(){var t=Object($t["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,a=Kt.collection("Articles").doc(n.id),t.next=4,a.update(n.newArticle);case 4:r("updateArticle",n);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),deleteArticle:function(){var t=Object($t["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,a=Kt.collection("Articles").doc(n),t.next=4,a.delete();case 4:r("deleteArticle",n);case 5:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}()},getters:{filterBySearchKey:function(t){if(t.articles.length)return""===t.searchKey?t.articles:t.articles.filter((function(e){return e.title===t.searchKey}))},filterById:function(t){if(t.articles.length)return t.articles.filter((function(e){return e.id===t.focusId}))[0]}}}),Bt=n("5f5b"),Ht=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(Bt["a"]),r["default"].use(Ht["a"]),r["default"].config.productionTip=!1,new r["default"]({router:Dt,store:Et,render:function(t){return t(g)}}).$mount("#app")},5768:function(t,e,n){},"5c0b":function(t,e,n){"use strict";n("9c0c")},"631a":function(t,e,n){},"797d":function(t,e,n){},"7bda":function(t,e,n){"use strict";n("4792")},"81f6":function(t,e,n){},"8a35":function(t,e,n){},"8b54":function(t,e,n){"use strict";n("8a35")},"986e":function(t,e,n){},"9c0c":function(t,e,n){},a469:function(t,e,n){"use strict";n("797d")},aaa3:function(t,e,n){t.exports=n.p+"img/facebook.443db6ac.svg"},ab9f:function(t,e,n){"use strict";n("631a")},b0df:function(t,e,n){t.exports=n.p+"img/me.fbbceab8.jpg"},c2af:function(t,e,n){"use strict";n("81f6")},e0a9:function(t,e,n){"use strict";n("986e")},f43b:function(t,e,n){"use strict";n("5768")}});
//# sourceMappingURL=app.36ab0df3.js.map