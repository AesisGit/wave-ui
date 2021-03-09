(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["rating-examples-vue"],{"59e3":function(t,n,a){"use strict";a.r(n);var r=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("title-link",{attrs:{h2:""}},[t._v("Default")]),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v("<w-rating></w-rating>\n")]},proxy:!0}])},[a("w-rating")],1),a("title-link",{attrs:{h2:""}},[t._v("V-model")]),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-rating v-model="rating1"></w-rating>\n<div class="mt2">\n  <strong class="mr2">v-model:</strong>\n  <code>'+t._s("{{ rating1 }}")+'</code>\n</div>\n\n<w-rating class="mt4" v-model="rating2"></w-rating>\n<div class="mt2">\n  <strong class="mr2">v-model:</strong>\n  <code>'+t._s("{{ rating2 }}")+"</code>\n</div>")]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  rating1: 3,\n  rating2: 3.42\n})\n")]},proxy:!0}])},[a("w-rating",{model:{value:t.rating1,callback:function(n){t.rating1=n},expression:"rating1"}}),a("div",{staticClass:"mt2"},[a("strong",{staticClass:"mr2"},[t._v("v-model:")]),a("code",[t._v(t._s(t.rating1))])]),a("w-rating",{staticClass:"mt4",model:{value:t.rating2,callback:function(n){t.rating2=n},expression:"rating2"}}),a("div",{staticClass:"mt2"},[a("strong",{staticClass:"mr2"},[t._v("v-model:")]),a("code",[t._v(t._s(t.rating2))])])],1),a("title-link",{attrs:{h2:""}},[t._v("Color")]),t._m(0),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-rating\n  class="my2"\n  color="green">\n</w-rating>\n\n<br />\n\n<w-rating\n  class="my2"\n  bg-color="light-green"\n  color="yellow">\n</w-rating>\n')]},proxy:!0}])},[a("w-rating",{staticClass:"my2",attrs:{color:"green"}}),a("br"),a("w-rating",{staticClass:"my2",attrs:{"bg-color":"light-green",color:"yellow"}})],1),a("title-link",{attrs:{h2:""}},[t._v("Custom Icons")]),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-rating\n  class="my2"\n  icon="mdi mdi-heart"\n  :value="3">\n</w-rating>\n\n<br />\n\n<w-rating\n  class="my2"\n  icon="mdi mdi-heart-outline"\n  :value="3">\n</w-rating>\n')]},proxy:!0}])},[a("w-rating",{staticClass:"my2",attrs:{icon:"mdi mdi-heart",value:3.4}}),a("br"),a("w-rating",{staticClass:"my2",attrs:{icon:"mdi mdi-heart-outline",value:3.4}})],1),a("title-link",{attrs:{h2:"",slug:"max"}},[t._v("Max (number of buttons)")]),t._m(1),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-rating class="my2" :value="2" :max="3"></w-rating>\n<br />\n<w-rating class="my2" :value="6" :max="10"></w-rating>\n')]},proxy:!0}])},[a("w-rating",{staticClass:"my2",attrs:{value:2,max:3}}),a("br"),a("w-rating",{staticClass:"my2",attrs:{value:6,max:10}})],1),a("title-link",{attrs:{h2:""}},[t._v("Sizes")]),t._m(2),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-rating class="my2" xs></w-rating>\n<br />\n<w-rating class="my2" sm></w-rating>\n<br />\n<w-rating class="my2" md></w-rating>\n<br />\n<w-rating class="my2" lg></w-rating>\n<br />\n<w-rating class="my2" xl></w-rating>\n')]},proxy:!0}])},[a("w-rating",{staticClass:"my2",attrs:{xs:""}}),a("br"),a("w-rating",{staticClass:"my2",attrs:{sm:""}}),a("br"),a("w-rating",{staticClass:"my2",attrs:{md:""}}),a("br"),a("w-rating",{staticClass:"my2",attrs:{lg:""}}),a("br"),a("w-rating",{staticClass:"my2",attrs:{xl:""}})],1),a("title-link",{attrs:{h2:""}},[t._v("Disabled & readonly")]),a("p",[t._v("Use the disabled or readonly options to display a rating but prevent user votes.")]),a("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-rating class="my2" :value="3" disabled></w-rating>\n<br />\n<w-rating class="my2" :value="3" readonly></w-rating>')]},proxy:!0}])},[a("w-rating",{staticClass:"my2",attrs:{value:3,disabled:""}}),a("br"),a("w-rating",{staticClass:"my2",attrs:{value:3,readonly:""}})],1)],1)},e=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",[t._v("Like in most components, you can set a "),a("code",[t._v("color")]),t._v(" for the foreground icons (when on) and a "),a("code",[t._v("bg-color")]),t._v(" for the\nbackground icons when off."),a("br"),t._v("\nThe default background color is grey and the default active color is "),a("code",[t._v("primary")]),t._v(".")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",[t._v("The number of buttons is set via the "),a("code",[t._v("max")]),t._v(" prop."),a("br"),t._v("\nAs expected, the "),a("code",[t._v("max")]),t._v(" prop also sets the maximum number you can set or display via the\n"),a("span",{staticClass:"code"},[t._v("w-rating")]),t._v(" component."),a("br"),t._v("\nWhen setting a rating, the component will always return an integer between 1 and "),a("code",[t._v("max")]),t._v(" included.")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("p",[t._v("The rating component's size can be controlled via the preset sizes "),a("code",[t._v("xs")]),t._v(", "),a("code",[t._v("sm")]),t._v(",\n"),a("code",[t._v("md")]),t._v(", "),a("code",[t._v("lg")]),t._v(", "),a("code",[t._v("xl")]),t._v(" or via CSS override.\n")])}],s={data:function(){return{rating1:3,rating2:3.42}}},i=s,l=a("2877"),o=Object(l["a"])(i,r,e,!1,null,null,null);n["default"]=o.exports}}]);
//# sourceMappingURL=rating-examples-vue.b60aef14.js.map