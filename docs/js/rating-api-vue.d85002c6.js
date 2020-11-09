(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["rating-api-vue"],{1382:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"w-divider my12"}),o("title-link",{staticClass:"title1",attrs:{h2:""}},[e._v("API")]),o("api",{staticClass:"mt0",attrs:{items:e.props,descriptions:e.propsDescs,title:"Props"}}),o("api",{attrs:{items:e.slots,title:"Slots"}}),o("api",{attrs:{items:e.events,title:"Events"}})],1)},r=[],a=(o("13d5"),o("c57b")),i={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Dictates the current rating value. When the user rates, the <code>v-model</code> value will be updated.',max:"The total count of buttons (usually stars) to display in the rating component.",icon:"Sets the icon (star by default) of each button of the rating component.<br>Accepts a string: e.g. <code>mdi mdi-home</code>.",color:'Sets the color of the rating active icons (when hovering or when showing the current rating).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',bgColor:'Sets color of the background icons (grey by default).<br>Accepts all the color names of the color palette, status colors, or custom colors (learn more about the colors in the <a href="/colors">colors</a> knowledge base page).<br>Providing a color hex, rgb(a) or hsl(a) will not work.',xs:"Sets the size of the rating component (font-size).",sm:"Sets the size of the rating component (font-size).",md:"Sets the size of the rating component (font-size).",lg:"Sets the size of the rating component (font-size).",xl:"Sets the size of the rating component (font-size).",name:"Provide a native HTML <code>name</code> attribute to the rating component. If not provided, a unique name will be computed.",disabled:"Disables the rating component making it unreactive to user interactions.",readonly:"The rating component will still look like an interactive rating component except that it is read-only: its current value cannot be changed by user interaction.",required:"Applies the native HTML <code>required</code> attribute to the rating component.",validators:'<span class="deep-orange">Only for validation, when the rating component is wrapped into a <strong class="code">w-form</strong></span>.<br>An array of functions determining the validity of the rating component. Each function will be executed on rating component validation and should return true when valid, or a string containing an error message when invalid. When one of the validators fails, the returned error message will appear underneath the rating component.'},s={item:{description:"Provide a custom content for each item.",params:{index:"The item index, starting at 1."}}},c={input:{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Number]":"The current rating."}},"update:modelValue":{description:"Emitted each time the rating changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Number]":"The current rating."}},focus:{description:"Emitted when the rating component is focused (any button).",params:{"[DOM event object]":"The associated focus DOM event."}}},l={data:function(){return{propsDescs:i,slots:s}},computed:{props:function(){return a["a"].props},events:function(){return a["a"].emits.reduce((function(e,t){return(e[t]=c[t]||{})&&e}),{})}}},d=l,h=o("2877"),u=Object(h["a"])(d,n,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=rating-api-vue.d85002c6.js.map