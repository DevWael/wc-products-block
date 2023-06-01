(()=>{"use strict";var e={n:t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,o=window.wp.element,r=window.wp.blockEditor,l=window.wp.components,a=window.wp.i18n,c=window.wp.serverSideRender;var n=e.n(c);const d=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"devwael/wc-products","version":"0.1.0","title":"WC Products","category":"widgets","icon":"store","description":"Gutenberg block to show woocommerce products","supports":{"html":false},"textdomain":"wc-products","editorScript":"file:./index.js","attributes":{"gridGap":{"type":"number","default":10},"displaySaleTag":{"type":"boolean","default":true},"displayProductTitle":{"type":"boolean","default":true},"displayProductPrice":{"type":"boolean","default":true},"displayAddToCartButton":{"type":"boolean","default":true},"productTitleColor":{"type":"string","default":"#000000"},"productPriceColor":{"type":"string","default":"#000000"},"productButtonTextColor":{"type":"string","default":"#ffffff"},"productButtonBgColor":{"type":"string","default":"#000000"}}}');(0,t.registerBlockType)(d,{edit:function(e){let{attributes:t,setAttributes:c}=e;return(0,o.createElement)("div",(0,r.useBlockProps)(),(0,o.createElement)(l.__experimentalHeading,null,(0,a.__)("Products list settings","wc-products")),(0,o.createElement)(l.RangeControl,{label:(0,a.__)("Grid Gap","wc-products"),value:t.gridGap,min:0,max:50,onChange:e=>c({gridGap:e})}),(0,o.createElement)(l.ToggleControl,{label:(0,a.__)("Display Sale Tag","wc-products"),checked:t.displaySaleTag,onChange:e=>c({displaySaleTag:e})}),(0,o.createElement)(l.ToggleControl,{label:(0,a.__)("Display Product Title","wc-products"),checked:t.displayProductTitle,onChange:e=>c({displayProductTitle:e})}),(0,o.createElement)(l.ToggleControl,{label:(0,a.__)("Display Product Price","wc-products"),checked:t.displayProductPrice,onChange:e=>c({displayProductPrice:e})}),(0,o.createElement)(l.ToggleControl,{label:(0,a.__)("Display Add To Cart Button","wc-products"),checked:t.displayAddToCartButton,onChange:e=>c({displayAddToCartButton:e})}),(0,o.createElement)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},className:"colorPickerControlWrapper"},t.displayProductTitle&&(0,o.createElement)(l.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Product Title Color","wc-products"),id:"productTitleColor"},(0,o.createElement)(l.ColorPicker,{color:t.productTitleColor,onChange:e=>c({productTitleColor:e})})),t.displayProductPrice&&(0,o.createElement)(l.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Product Price Color","wc-products"),id:"productPriceColor"},(0,o.createElement)(l.ColorPicker,{color:t.productPriceColor,onChange:e=>c({productPriceColor:e})}))),t.displayAddToCartButton&&(0,o.createElement)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},className:"colorPickerControlWrapper"},(0,o.createElement)(l.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Product Button Text Color","wc-products"),id:"productButtonTextColor"},(0,o.createElement)(l.ColorPicker,{color:t.productButtonTextColor,onChange:e=>c({productButtonTextColor:e})})),(0,o.createElement)(l.BaseControl,{__nextHasNoMarginBottom:!0,label:(0,a.__)("Product Button Background Color","wc-products"),id:"productButtonBgColor"},(0,o.createElement)(l.ColorPicker,{color:t.productButtonBgColor,onChange:e=>c({productButtonBgColor:e})}))),(0,o.createElement)(l.__experimentalDivider,null),(0,o.createElement)(l.__experimentalHeading,null,(0,a.__)("Products preview","wc-products")),(0,o.createElement)(n(),{block:"devwael/wc-products",attributes:t}))},save:function(){return null}})})();