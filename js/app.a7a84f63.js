(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],d=0,m=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/JanGviO/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"099f":function(t,e,a){"use strict";var r=a("22f8"),i=a.n(r);i.a},"09fb":function(t,e,a){},1195:function(t,e,a){t.exports=a.p+"img/avatar.17b08a8e.png"},1771:function(t,e,a){var r={"./Male-Avatar.png":"b082","./add.svg":"eef4","./avatar.png":"1195","./black.svg":"2eef","./card.jpg":"243f","./comment.svg":"cf89","./explore.svg":"6fb7","./following.svg":"7ab2","./full_comment.svg":"60df","./happy.svg":"5582","./jangvio.svg":"d409","./loading.gif":"cf1c","./premium.svg":"2832","./search.svg":"51f2","./share.svg":"6f2b"};function i(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}i.keys=function(){return Object.keys(r)},i.resolve=n,t.exports=i,i.id="1771"},"22f8":function(t,e,a){},"243f":function(t,e,a){t.exports=a.p+"img/card.d7d5441e.jpg"},2832:function(t,e,a){t.exports=a.p+"img/premium.0af00831.svg"},2913:function(t,e,a){"use strict";var r=a("703e"),i=a.n(r);i.a},"2eef":function(t,e,a){t.exports=a.p+"img/black.8311a06b.svg"},4404:function(t,e,a){},4547:function(t,e,a){"use strict";var r=a("4ec4"),i=a.n(r);i.a},"4ec4":function(t,e,a){},"51f2":function(t,e,a){t.exports=a.p+"img/search.d144783b.svg"},5582:function(t,e,a){t.exports=a.p+"img/happy.1bd91a28.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-light",attrs:{id:"app"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.get_loading,expression:"$store.getters.get_loading"}]},[a("Loading")],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.$store.getters.get_loading,expression:"!$store.getters.get_loading"}]},[a("NavBar"),a("router-view")],1)])},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"navbar navbar-expand-lg navbar-light bg-white ml-5 fixed-top",attrs:{id:"main-nav"}},[t._m(0),r("div",{staticClass:"main-links ml-auto pl-5 bg-white"},[t._l(t.mainLinks,(function(e,i){return r("div",{key:i,staticClass:"bg-white",class:{avatar:i===t.activeItem},style:t.varColor,on:{click:function(e){return t.selectItem(i)}}},[r("router-link",{attrs:{to:e.path}},[r("img",{staticClass:"target bg-white",class:{invisible:e.invisible},attrs:{src:a("1771")("./"+e.src),width:"30",height:"30",alt:"Profile Avatar",id:e.tooltip}})]),r("b-tooltip",{attrs:{target:e.tooltip,placement:"bottom",offset:"0",variant:"primary"}},[t._v(t._s(e.tooltip))])],1)})),r("div",{staticClass:"bg-white",style:t.varColor},[r("div",{directives:[{name:"b-modal",rawName:"v-b-modal.searchBtn",modifiers:{searchBtn:!0}}]},[r("img",{staticClass:"target bg-white",attrs:{src:a("51f2"),width:"30",height:"30",alt:"Profile Avatar",id:"searchModal"}})]),r("b-tooltip",{attrs:{target:"searchModal",placement:"bottom",offset:"0",variant:"primary"}},[t._v("Search")])],1)],2),r("div",{staticClass:"pl-2",attrs:{id:"addBtn"}},[r("addBtn")],1),r("div",{staticClass:"nav-buttons ml-auto bg-white"},[r("button",{directives:[{name:"b-modal",rawName:"v-b-modal.signInModal",modifiers:{signInModal:!0}}],staticClass:"btn btn-sm px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right",class:{"btn-outline-primary":"/premium"!==t.$router.currentRoute.fullPath,"btn-outline-secondary":"/premium"===t.$router.currentRoute.fullPath},attrs:{type:"button"}},[t._v("Sign In")]),r("button",{directives:[{name:"b-modal",rawName:"v-b-modal.signUpModal",modifiers:{signUpModal:!0}}],staticClass:"btn btn-sm px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right",class:{"btn-danger":"/premium"!==t.$router.currentRoute.fullPath,"btn-warning":"/premium"===t.$router.currentRoute.fullPath},attrs:{type:"button"}},[t._v("Sign Up")]),r("div",{staticClass:"position-fixed"},[r("SignInModal"),r("SignUpModal"),r("SearchModal")],1)])]),r("header",{staticClass:"navbar navbar-light bg-white flex-column fixed-bottom h-100",attrs:{id:"aside"}},[t._m(1),r("div",{staticClass:"mb-auto bg-transparent mt-5"},t._l(t.sideLinks,(function(e,i){return r("div",{key:i,staticClass:"mb-5",class:{sideAvatar:i===t.sideActiveItem},style:t.varColor,on:{click:function(e){return t.selectSideItem(i)}}},[r("img",{staticClass:"bg-white",attrs:{src:a("1195"),width:"30",height:"30",alt:"Profile Avatar",id:e.tooltip}}),r("b-tooltip",{staticClass:"tooltip-right",attrs:{target:e.tooltip,placement:"right",offset:"0",variant:"primary"}},[t._v(t._s(e.tooltip))])],1)})),0)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column align-items-left ml-5",attrs:{href:"#"}},[a("span",{staticClass:"bg-white h5 mb-0"},[t._v("JanGvio")]),a("small",{staticClass:"bg-white text-muted"},[t._v("Lorem Ipsem Maseep!")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"bg-white pt-1 mb-5",attrs:{href:"#"}},[r("img",{staticClass:"bg-white logo-shadow-sm",attrs:{src:a("d409"),width:"40",alt:"JanGvio Logo"}})])}],l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:t.varColor},[r("div",{staticClass:"container wrap"},[r("ul",{staticClass:"bg-white rounded-full",attrs:{id:"menu"}},[r("a",{staticClass:"menu-button d-flex justify-content-center",attrs:{href:t.triggerHREF,title:t.triggerStatus},on:{click:t.toggleState}},[r("img",{staticClass:"target-addBtn bg-transparent",attrs:{src:a("eef4"),width:"26",alt:"Add Button Icon SVG"}})]),t._m(0),t._m(1),t._m(2),t._m(3)])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#menu"}},[a("span",{staticClass:"fas fa-github"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#menu"}},[a("span",{staticClass:"fas fa-linkedin"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#menu"}},[a("span",{staticClass:"fas fa-instagram"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"menu-item"},[a("a",{attrs:{href:"#menu"}},[a("span",{staticClass:"fas fa-twitter"})])])}],u={data:function(){return{triggerHREF:"#0",triggerStatus:"Show Navigation",variableColor:"#1fb6ff"}},methods:{toggleState:function(){var t=document.querySelector(".target-addBtn");console.log(t),"#menu"===this.triggerHREF?(this.triggerHREF="#0",this.triggerStatus="Hide Navigation",t.classList.remove("rotate-forward"),t.classList.add("rotate-back")):(this.triggerHREF="#menu",this.triggerStatus="Show Navigation",t.classList.add("rotate-forward"),t.classList.remove("rotate-back"))}},computed:{varColor:function(){return{"--var-color":this.variableColor}},curRoute:function(){return this.$route.fullPath}},mounted:function(){"/premium"===this.$route.fullPath?this.variableColor="gold":this.variableColor="#1fb6ff"},watch:{curRoute:function(){"/premium"===this.$route.fullPath?this.variableColor="gold":this.variableColor="#1fb6ff"}}},d=u,m=(a("c34d"),a("2877")),p=Object(m["a"])(d,l,c,!1,null,"d92de00c",null),f=p.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{id:"signInModal",size:"md",centered:"true","button-size":"sm","title-class":"h5 bg-transparent text-white",title:"Sign In","header-bg-variant":"primary","header-border-variant":"primary","header-close-variant":"white","header-class":"rounded-0","footer-class":"button border-0","modal-class":"my-class","content-class":"custom-shadow border-0","dialog-class":"bg-transparent","footer-bg-variant":"light","ok-title":"Sign In","ok-variant":"primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right","cancel-variant":"outline-primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"}},[a("div",{staticClass:"px-4 pt-3"},[a("SignInForm")],1)])],1)},b=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-group",{attrs:{id:"name-input-group-signin",label:"Your Name:","label-for":"nameInput"}},[a("b-form-input",{attrs:{id:"nameInput",required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-form-group",{attrs:{id:"email-input-group-signin",label:"Email address:","label-for":"emailInput"}},[a("b-form-input",{attrs:{id:"emailInput",type:"email",required:"",placeholder:"Enter email","aria-describedby":""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("b-form-text",{attrs:{id:"email-help-block"}},[t._v("We'll never share your email with anyone else.")])],1),a("b-form-group",{attrs:{id:"password-input-group-signin",label:"Password:","label-for":"passwordInput"}},[a("b-input",{attrs:{type:"password",id:"passwordInput","aria-describedby":"password-help-block"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),a("b-form-text",{attrs:{id:"password-help-block"}},[t._v(" Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji. ")])],1)],1):t._e()],1)},v=[],w={data:function(){return{form:{email:"",name:"",password:""},show:!0}}},C=w,_=Object(m["a"])(C,h,v,!1,null,null,null),x=_.exports,y={components:{SignInForm:x}},S=y,k=(a("099f"),Object(m["a"])(S,g,b,!1,null,"46c61352",null)),$=k.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-modal",{attrs:{id:"signUpModal",size:"md",centered:"true","button-size":"sm","title-class":"h5 bg-transparent text-white",title:"Sign Up","header-bg-variant":"primary","header-border-variant":"primary","header-close-variant":"white","header-class":"rounded-0","footer-class":"button border-0","modal-class":"my-class","content-class":"custom-shadow border-0","dialog-class":"bg-transparent","footer-bg-variant":"light","ok-title":"Sign Up","ok-variant":"primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right","cancel-variant":"outline-primary px-3 ml-2 rounded-top-left rounded-top-right rounded-bottom-left rounded-bottom-right"}},[a("div",{staticClass:"px-4 pt-3"},[a("SignUpForm")],1)])],1)},P=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.show?a("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[a("b-form-group",{attrs:{id:"name-input-group-signup",label:"Your Name:","label-for":"nameInput"}},[a("b-form-input",{attrs:{id:"nameInput",required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),a("b-form-group",{attrs:{id:"email-input-group-signup",label:"Email address:","label-for":"emailInput"}},[a("b-form-input",{attrs:{id:"emailInput",type:"email",required:"",placeholder:"Enter email","aria-describedby":""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("b-form-text",{attrs:{id:"email-help-block"}},[t._v("We'll never share your email with anyone else.")])],1),a("b-form-group",{attrs:{id:"password-input-group-signup",label:"Password:","label-for":"passwordInput"}},[a("b-input",{attrs:{type:"password",id:"passwordInput","aria-describedby":"password-help-block"}}),a("b-form-text",{attrs:{id:"password-help-block"}},[t._v(" Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji. ")])],1),a("b-form-group",{attrs:{id:"confirm-password-input-group-signup",label:"Confirm Password:","label-for":"confirmPasswordInput"}},[a("b-input",{attrs:{type:"password",id:"confirmPasswordInput"}})],1)],1):t._e()],1)},j=[],O={data:function(){return{form:{email:"",name:"",food:""},show:!0}}},M=O,B=Object(m["a"])(M,E,j,!1,null,null,null),T=B.exports,R={components:{SignUpForm:T}},L=R,F=(a("6eaf"),Object(m["a"])(L,I,P,!1,null,"138b4c18",null)),N=F.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-modal",{attrs:{id:"searchBtn",size:"lg","hide-header":"true","hide-footer":"true","modal-class":"my-class","body-bg-variant":"transparent","content-class":"custom-shadow border-0","dialog-class":"bg-transparent"}},[r("div",{staticClass:"input-group my-5 bg-transparent shadow-lg"},[r("input",{staticClass:"form-control px-5 padding-top-bottom bg-white border-0",attrs:{type:"text",placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"button-addon2"}}),r("div",{staticClass:"input-group-append bg-transparent"},[r("button",{staticClass:"btn btn-light border-0 px-5 padding-top-bottom",style:{backgroundImage:"url("+a("1771")("./"+t.searchImg)+")"},attrs:{type:"button",id:"button-addon2"}})])])])],1)},U=[],A={data:function(){return{searchImg:"search.svg"}}},W=A,G=(a("bb29"),Object(m["a"])(W,H,U,!1,null,"3262e881",null)),J=G.exports,q={components:{addBtn:f,SignInModal:$,SignUpModal:N,SearchModal:J},data:function(){return{mainLinks:[{path:"/",tooltip:"Explore",invisible:!1,src:"explore.svg",id:"exploreBtn"},{path:"/premium",tooltip:"Premium",invisible:!1,src:"premium.svg",id:"premiumBtn"},{path:"",tooltip:"Empty",invisible:!0,src:"avatar.png",id:""},{path:"/following",tooltip:"Following",invisible:!1,src:"following.svg",id:"followingBtn"}],sideLinks:[{tooltip:"One"}],activeItem:0,sideActiveItem:null,variableColor:"#1fb6ff"}},methods:{selectItem:function(t){this.activeItem=t},selectSideItem:function(t){this.sideActiveItem=t}},computed:{curPath:function(){return this.$router.currentRoute.fullPath},varColor:function(){return{"--var-color":this.variableColor}},curRoute:function(){return this.$route.fullPath}},mounted:function(){for(var t=0;t<this.mainLinks.length;t++)this.curPath===this.mainLinks[t].path&&(this.activeItem=t);"/premium"===this.$route.fullPath?this.variableColor="gold":this.variableColor="#1fb6ff"},watch:{curRoute:function(){this.sideActiveItem=null,"/premium"===this.$route.fullPath?this.variableColor="gold":this.variableColor="#1fb6ff"}}},z=q,V=(a("9d01"),Object(m["a"])(z,s,o,!1,null,"7a30f662",null)),Y=V.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},K=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"loading-page bg-white"},[r("div",{staticClass:"custom-loading bg-transparent"},[r("img",{staticClass:"logo-shadow-lg",attrs:{src:a("d409"),alt:"JanGviO SVG"}}),r("img",{staticClass:"card-img mt-5",attrs:{src:a("cf1c"),alt:"Loading GIF"}})])])}],Q={},X=Q,Z=(a("affa"),Object(m["a"])(X,D,K,!1,null,"7fe0f60c",null)),tt=Z.exports,et={components:{NavBar:Y,Loading:tt},beforeMount:function(){var t=this;setTimeout((function(){t.$store.commit("toggle_loading")}),2e3)}},at=et,rt=(a("5c0b"),Object(m["a"])(at,i,n,!1,null,null,null)),it=rt.exports,nt=a("8c4f"),st=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"display-4 text-fade"},[t._v("Explore")]),a("TagScroll",{attrs:{premium:!1}}),a("div",{staticClass:"card-container"},[a("div",{staticClass:"card-group",attrs:{id:"post-wrap"}},t._l(12,(function(t,e){return a("CardPost",{key:e,attrs:{cardHeight:"18rem",cardWidth:"auto",cardBorder:!1,premium:!1}})})),1)])],1)},ot=[],lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card bg-img shadow rounded-all",class:{flashing:t.$store.getters.get_loadingPost,"border-0":!t.cardBorder,"premium-border-bgImg":t.premium},style:{backgroundImage:"url("+a("1771")("./"+t.image)+")",height:t.cardHeight,width:t.cardWidth}},[r("div",{staticClass:"d-flex card-img-overlay bg-transparent"},[r("div",{staticClass:"card-title bg-light rounded-all card-profile shadow-lg",class:{"premium-border-avatar":t.premium},style:{backgroundImage:"url("+a("1771")("./"+t.profile)+")"}},[r("div",{staticClass:"profile-details mt-3 bg-transparent"},[r("span",{staticClass:"d-flex flex-column justify-content-center"},[r("div",{staticClass:"color-fade font-weight-bold",class:{"text-primary":!t.premium,"text-warning":t.premium}},[t._v(" @ UserName ")]),r("small",{staticClass:"text-muted"},[t._v("6 days ago - 03/05/2020")])])])]),t._m(0)])])},ct=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"feed align-self-end"},[r("div",{staticClass:"strip px-3 py-2 rounded-all shadow-lg d-flex justify-content-around text-muted bg-light"},[r("span",{staticClass:"bg-transparent"},[r("img",{staticClass:"bg-transparent",attrs:{src:a("5582"),width:"25",height:"25",alt:"Happy Emogi"}})]),r("span",{staticClass:"bg-transparent"},[r("img",{staticClass:"bg-transparent",attrs:{src:a("6f2b"),width:"25",height:"25",alt:"Share"}})]),r("span",{staticClass:"bg-transparent"},[r("img",{staticClass:"bg-transparent",attrs:{src:a("cf89"),width:"25",height:"25",alt:"Comment"}})])])])}],ut={props:["cardHeight","cardWidth","cardBorder","premium"],data:function(){return{image:"card.jpg",profile:"Male-Avatar.png"}},beforeMount:function(){var t=this;setTimeout((function(){t.$store.commit("toggle_loadingPost")}),4e3)}},dt=ut,mt=(a("fa17"),Object(m["a"])(dt,lt,ct,!1,null,"360c6575",null)),pt=mt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-1 mb-5 mx-4"},[a("VueSlickCarousel",t._b({style:t.varColor},"VueSlickCarousel",t.settings,!1),t._l(23,(function(e,r){return a("div",{key:r,staticClass:"text-center py-2"},[a("span",{staticClass:"bg-white text-secondary px-4 py-2 mx-2 rounded-tip",class:{"primary-hover":!t.premium,"premium-hover":t.premium}},[t._v("span")])])})),0)],1)},gt=[],bt=a("a7ab"),ht=a.n(bt),vt=(a("7b8d"),a("6a2c"),{props:["premium"],name:"MyComponent",components:{VueSlickCarousel:ht.a},data:function(){return{settings:{slidesToShow:12,slidesToScroll:6,variableWidth:!0,focusOnSelect:!0,adaptiveHeight:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},variableColor:"#007bff"}},computed:{varColor:function(){return{"--var-color":this.variableColor}}},mounted:function(){this.premium&&(this.variableColor="gold")}}),wt=vt,Ct=(a("6ff8"),Object(m["a"])(wt,ft,gt,!1,null,null,null)),_t=Ct.exports,xt={name:"Home",components:{CardPost:pt,TagScroll:_t}},yt=xt,St=(a("2913"),Object(m["a"])(yt,st,ot,!1,null,"3a922566",null)),kt=St.exports,$t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"display-4 text-fade"},[t._v("Premium")]),a("TagScroll",{attrs:{premium:!0}}),a("div",{staticClass:"card-group",attrs:{id:"post-wrap"}},t._l(12,(function(t,e){return a("CardPost",{key:e,attrs:{cardHeight:"30rem",cardWidth:"auto",cardBorder:!0,premium:!0}})})),1)],1)},It=[],Pt={name:"Premium",components:{CardPost:pt,TagScroll:_t}},Et=Pt,jt=(a("985b"),Object(m["a"])(Et,$t,It,!1,null,"b5c2c776",null)),Ot=jt.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"display-4 text-fade"},[t._v("Following")]),a("TagScroll",{attrs:{premium:!1}}),a("div",{staticClass:"card-container"},[a("div",{staticClass:"card-group",attrs:{id:"post-wrap"}},t._l(12,(function(t,e){return a("CardPost",{key:e,attrs:{cardHeight:"22rem",cardWidth:"auto",cardBorder:!1,premium:!1}})})),1)])],1)},Bt=[],Tt={name:"Following",components:{CardPost:pt,TagScroll:_t}},Rt=Tt,Lt=(a("4547"),Object(m["a"])(Rt,Mt,Bt,!1,null,"74d4ab1a",null)),Ft=Lt.exports;r["default"].use(nt["a"]);var Nt=[{path:"/",name:"Explore",component:kt},{path:"/menu",name:"Menu",component:kt},{path:"/0",name:"MenuClose",component:kt},{path:"/premium",name:"Premium",component:Ot},{path:"/following",name:"Following",component:Ft}],Ht=new nt["a"]({routes:Nt,scrollBehavior:function(){return{x:0,y:0}}}),Ut=Ht,At=a("2f62");r["default"].use(At["a"]);var Wt=new At["a"].Store({state:{loading:!0,loadingPost:!0},getters:{get_loading:function(t){return t.loading},get_loadingPost:function(t){return t.loadingPost}},mutations:{toggle_loading:function(t){t.loading=!t.loading},toggle_loadingPost:function(t){t.loadingPost=!1}},actions:{},modules:{}}),Gt=(a("4989"),a("ab8b"),a("3e48"),a("2dd8"),a("5f5b")),Jt=a("b1e0");a("f9e3");r["default"].use(Gt["a"]),r["default"].use(Jt["a"]),new r["default"]({router:Ut,store:Wt,render:function(t){return t(it)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),i=a.n(r);i.a},"60df":function(t,e,a){t.exports=a.p+"img/full_comment.6aee5e4b.svg"},"6eaf":function(t,e,a){"use strict";var r=a("09fb"),i=a.n(r);i.a},"6f2b":function(t,e,a){t.exports=a.p+"img/share.45115f8c.svg"},"6fb7":function(t,e,a){t.exports=a.p+"img/explore.939d5235.svg"},"6ff8":function(t,e,a){"use strict";var r=a("7078"),i=a.n(r);i.a},"703e":function(t,e,a){},7078:function(t,e,a){},"7a93":function(t,e,a){},"7ab2":function(t,e,a){t.exports=a.p+"img/following.7ae84624.svg"},"93ad":function(t,e,a){},"985b":function(t,e,a){"use strict";var r=a("ac39"),i=a.n(r);i.a},"9c0c":function(t,e,a){},"9d01":function(t,e,a){"use strict";var r=a("7a93"),i=a.n(r);i.a},ac39:function(t,e,a){},affa:function(t,e,a){"use strict";var r=a("b075"),i=a.n(r);i.a},b075:function(t,e,a){},b082:function(t,e,a){t.exports=a.p+"img/Male-Avatar.54075a4d.png"},bb29:function(t,e,a){"use strict";var r=a("93ad"),i=a.n(r);i.a},c34d:function(t,e,a){"use strict";var r=a("4404"),i=a.n(r);i.a},c41c:function(t,e,a){},cf1c:function(t,e,a){t.exports=a.p+"img/loading.ac2da226.gif"},cf89:function(t,e,a){t.exports=a.p+"img/comment.39d905e7.svg"},d409:function(t,e,a){t.exports=a.p+"img/jangvio.9703b876.svg"},eef4:function(t,e,a){t.exports=a.p+"img/add.2d19df0d.svg"},fa17:function(t,e,a){"use strict";var r=a("c41c"),i=a.n(r);i.a}});
//# sourceMappingURL=app.a7a84f63.js.map