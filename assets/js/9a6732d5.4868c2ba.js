(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(8),i=(n(0),n(161)),o=["components"],c={title:"Guides Overview"},l={unversionedId:"guides/guides-overview",id:"guides/guides-overview",isDocsHomePage:!1,title:"Guides Overview",description:"How to use this documentation",source:"@site/../docs/guides/guides-overview.md",slug:"/guides/guides-overview",permalink:"/docs/guides/guides-overview",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/guides/guides-overview.md",version:"current",lastUpdatedBy:"Ian Carroll",lastUpdatedAt:1643876191,formattedLastUpdatedAt:"2/3/2022",sidebar:"guides",next:{title:"Introduction",permalink:"/docs/guides/introduction"}},u=[{value:"Beginner Level",id:"beginner-level",children:[]},{value:"Intermediate Level",id:"intermediate-level",children:[]},{value:"Advanced Level",id:"advanced-level",children:[]}],d={toc:u};function s(e){var t=e.components,n=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("big",null,"How to use this documentation"))),Object(i.b)("p",null,"Frictionless Framework documentation has various guides which can be grouped by an end user level in relation to the framework:"),Object(i.b)("h3",{id:"beginner-level"},"Beginner Level"),Object(i.b)("p",null,"Installation and first steps with Frictionless Framework:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/quick-start"},"Quick Start")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/basic-examples"},"Basic Examples"))),Object(i.b)("h3",{id:"intermediate-level"},"Intermediate Level"),Object(i.b)("p",null,"Main Frictionless Framework functionality: describe, extract, validate, and transform:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/describing-data"},"Describing Data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/extracting-data"},"Extracting Data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/validation-guide"},"Validating Data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/transform-guide"},"Transforming Data"))),Object(i.b)("h3",{id:"advanced-level"},"Advanced Level"),Object(i.b)("p",null,"Explor the following section for more advanced guides:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/framework/package-guide"},"Mastering the Framework")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/extension/design-guide"},"Writing an Extension"))))}s.isMDXComponent=!0},161:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),p=r,m=s["".concat(o,".").concat(p)]||s[p]||b[p]||i;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);