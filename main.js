!function(t){function e(e){for(var n,i,o=e[0],l=e[1],u=e[2],d=0,v=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&v.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);for(c&&c(e);v.length;)v.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={0:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window.webpackJsonp=window.webpackJsonp||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var c=l;r.push([14,1]),a()}([,,,,,,function(t,e,a){"use strict";a.r(e);var n=a(7),s=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e.default=s.a},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{dismissSecs:10,dismissCountDown:0,showDismissibleAlert:!1}},methods:{countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}},function(t,e,a){"use strict";a.r(e);var n=a(9),s=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e.default=s.a},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{menu:[]}},created:function(){var t=this;fetch("https://api.myjson.com/bins/pwtwz").then(function(t){return t.json()}).then(function(e){t.menu=e.products})}};e.default=n},function(t,e,a){},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-alert",{attrs:{variant:"danger",dismissible:""},model:{value:t.showDismissibleAlert,callback:function(e){t.showDismissibleAlert=e},expression:"showDismissibleAlert"}},[t._v("\n    Perfect for a festive attitude!\n  ")]),t._v(" "),a("b-button",{staticClass:"m-1",attrs:{variant:"warning"},on:{click:function(e){t.showDismissibleAlert=!0}}},[a("h3",[t._v("CHECK OUT OUR NEW OAXACAN AIR! ("+t._s(t.showDismissibleAlert?"visible":"")+")")])]),t._v(" "),a("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[a("b-carousel-slide",{attrs:{"img-src":"https://photographe-en-herbe.com/wp-content/uploads/2019/03/paysage-montagne-photographe-en-herbe-1024x576.jpg"}},[a("h1",[t._v("REVITALIZE YOURSELF")])]),t._v(" "),a("b-carousel-slide",{attrs:{"img-src":"https://voyagerloin.com/uploads/960/8390041535255.jpg"}},[a("h1",[t._v("REENERGIZE YOURSELF")])]),t._v(" "),a("b-carousel-slide",{attrs:{"img-src":"https://akm-img-a-in.tosshub.com/indiatoday/images/story/201902/sunset-3423899_1920.jpeg?yVomw0Dy4DJHpw6goGocYEp48.2zZz5A"}},[a("h1",[t._v("PURIFY YOURSELF")])])],1),t._v(" "),a("p",{staticClass:"mt-4"},[t._v("\n    Slide #: "+t._s(t.slide)),a("br"),t._v("\n    Sliding: "+t._s(t.sliding)+"\n  ")])],1)},s=[];n._withStripped=!0,a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v(" MENU")]),t._v(" "),a("ul",t._l(t.menu,function(e){return a("li",{key:e},[a("div",{staticClass:"card mb-3",staticStyle:{"max-width":"540px"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"card-img",attrs:{src:e.img,alt:"image"}})]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"alert alert-info",attrs:{role:"alert"}},[a("h5",[t._v(t._s(e.name))])]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("\n                "+t._s(e.text)+"\n              ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.quantity,expression:"product.quantity",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.quantity},on:{input:function(a){a.target.composing||t.$set(e,"quantity",t._n(a.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){e.quantity+=1}}},[t._v("\n                Add to cart\n              ")]),t._v(" "),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){e.quantity-=1}}},[t._v("\n                Remove item\n              ")])])])])])])}),0)])},s=[];n._withStripped=!0,a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},,function(t,e,a){"use strict";var n=o(a(3)),s=o(a(17)),r=o(a(26));a(22);var i=o(a(25));function o(t){return t&&t.__esModule?t:{default:t}}a(23),a(24),n.default.use(i.default),new n.default({router:s.default,render:function(t){return t(r.default)}}).$mount("#app")},,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=u(a(3)),s=u(a(18)),r=u(a(19)),i=u(a(27)),o=u(a(20)),l=u(a(28));function u(t){return t&&t.__esModule?t:{default:t}}n.default.use(s.default);var c=[{path:"/",component:r.default},{path:"/about",component:i.default},{path:"/menu",component:o.default},{path:"/contact",component:l.default}],d=new s.default({routes:c});e.default=d},,function(t,e,a){"use strict";a.r(e);var n=a(11),s=a(6);for(var r in s)"default"!==r&&function(t){a.d(e,t,function(){return s[t]})}(r);var i=a(1),o=Object(i.a)(s.default,n.a,n.b,!1,null,null,null);o.options.__file="src/pages/Home.vue",e.default=o.exports},function(t,e,a){"use strict";a.r(e);var n=a(12),s=a(8);for(var r in s)"default"!==r&&function(t){a.d(e,t,function(){return s[t]})}(r);var i=a(1),o=Object(i.a)(s.default,n.a,n.b,!1,null,null,null);o.options.__file="src/pages/Menu.vue",e.default=o.exports},function(t,e,a){"use strict";var n=a(10);a.n(n).a},function(t,e,a){},,,,function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container center-content"},[a("b-container",{staticClass:"bv-example-row"},[a("b-row",[a("b-col",{attrs:{cols:"12",offset:"0"}},[a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[a("b-navbar-brand",{attrs:{href:"#"}},[t._v("\n              AIR BAR\n            ")]),t._v(" "),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t._v(" "),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-link",{attrs:{to:"/","router-tag":"b-nav-item"}},[t._v("\n                  HOME\n                ")]),t._v(" "),a("b-link",{attrs:{to:"/about","router-tag":"b-nav-item"}},[t._v("\n                  ABOUT\n                ")]),t._v(" "),a("b-link",{attrs:{to:"/menu","router-tag":"b-nav-item"}},[t._v("\n                  MENU\n                ")]),t._v(" "),a("b-link",{attrs:{to:"/contact","router-tag":"b-nav-item"}},[t._v("\n                  CONTACT\n                ")])],1)],1)],1)],1)])],1),t._v(" "),a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("RouterView")],1)],1)],1)],1)};n._withStripped=!0;a(21);var s=a(1),r=Object(s.a)({},n,[],!1,null,"7ba5bd90",null);r.options.__file="src/App.vue";e.default=r.exports},function(t,e,a){"use strict";a.r(e);var n=function(){var t=this.$createElement;this._self._c;return this._m(0)};n._withStripped=!0;var s=a(1),r=Object(s.a)({},n,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("ABOUT US")]),this._v(" "),e("iframe",{attrs:{width:"960",height:"515",src:"https://www.youtube.com/embed/7eNibMDX9v0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],!1,null,null,null);r.options.__file="src/pages/About.vue";e.default=r.exports},function(t,e,a){"use strict";a.r(e);var n=function(){var t=this.$createElement;this._self._c;return this._m(0)};n._withStripped=!0;var s=a(1),r=Object(s.a)({},n,[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section",{staticClass:"mb-4"},[a("h2",{staticClass:"h1-responsive font-weight-bold text-center my-4"},[t._v("\n      Contact us\n    ")]),t._v(" "),a("p",{staticClass:"text-center w-responsive mx-auto mb-5"},[t._v("\n      Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within\n      a matter of hours to help you.\n    ")]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-9 mb-md-0 mb-5"},[a("form",{attrs:{id:"contact-form",name:"contact-form",action:"mail.php",method:"POST"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"md-form mb-0"},[a("input",{staticClass:"form-control",attrs:{id:"name",type:"text",name:"name"}}),t._v(" "),a("label",{attrs:{for:"name"}},[t._v("Your name")])])]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"md-form mb-0"},[a("input",{staticClass:"form-control",attrs:{id:"email",type:"text",name:"email"}}),t._v(" "),a("label",{attrs:{for:"email"}},[t._v("Your email")])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"md-form mb-0"},[a("input",{staticClass:"form-control",attrs:{id:"subject",type:"text",name:"subject"}}),t._v(" "),a("label",{attrs:{for:"subject"}},[t._v("Subject")])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"md-form"},[a("textarea",{staticClass:"form-control md-textarea",attrs:{id:"message",type:"text",name:"message",rows:"2"}}),t._v(" "),a("label",{attrs:{for:"message"}},[t._v("Your message")])])])])]),t._v(" "),a("div",{staticClass:"text-center text-md-left"},[a("a",{staticClass:"btn btn-primary",attrs:{onclick:"document.getElementById('contact-form').submit();"}},[t._v("Send")])]),t._v(" "),a("div",{staticClass:"status"})]),t._v(" "),a("div",{staticClass:"col-md-3 text-center"},[a("ul",{staticClass:"list-unstyled mb-0"},[a("li",[a("i",{staticClass:"fas fa-map-marker-alt fa-2x"}),t._v(" "),a("p",[t._v("123 Rue Croissant 75015, Paris")])]),t._v(" "),a("li",[a("i",{staticClass:"fas fa-phone mt-4 fa-2x"}),t._v(" "),a("p",[t._v("+ 01 234 567 89")])]),t._v(" "),a("li",[a("i",{staticClass:"fas fa-envelope mt-4 fa-2x"}),t._v(" "),a("p",[t._v("contact@airbar.com")])])])])])])])}],!1,null,null,null);r.options.__file="src/pages/Contact.vue";e.default=r.exports}]);