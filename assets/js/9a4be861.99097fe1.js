(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{129:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(8),o=(r(0),r(161)),i=["components"],l={title:"HTML Tutorial",sidebar_label:"HTML",goodread:{cleanup:["rm table.html"]}},c={unversionedId:"tutorials/formats/html-tutorial",id:"tutorials/formats/html-tutorial",isDocsHomePage:!1,title:"HTML Tutorial",description:"This functionality requires an experimental html plugin. Read More",source:"@site/../docs/tutorials/formats/html-tutorial.md",slug:"/tutorials/formats/html-tutorial",permalink:"/docs/tutorials/formats/html-tutorial",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/main/docs/../docs/tutorials/formats/html-tutorial.md",version:"current",lastUpdatedBy:"roll",lastUpdatedAt:1623750302,formattedLastUpdatedAt:"6/15/2021",sidebar_label:"HTML",sidebar:"tutorials",previous:{title:"Google Sheets Tutorial",permalink:"/docs/tutorials/formats/gsheets-tutorial"},next:{title:"Inline Tutorial",permalink:"/docs/tutorials/formats/inline-tutorial"}},s=[{value:"Reading Data",id:"reading-data",children:[]},{value:"Writing Data",id:"writing-data",children:[]},{value:"Configuring Data",id:"configuring-data",children:[]}],u={toc:s};function p(e){var t=e.components,r=Object(a.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This functionality requires an experimental ",Object(o.b)("inlineCode",{parentName:"p"},"html")," plugin. ",Object(o.b)("a",{parentName:"p",href:"/docs/references/plugins-reference"},"Read More"))),Object(o.b)("p",null,"Frictionless supports parsing HTML format:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="CLI"',title:'"CLI"'},"pip install frictionless[html]\n")),Object(o.b)("h2",{id:"reading-data"},"Reading Data"),Object(o.b)("p",null,"You can this file format using ",Object(o.b)("inlineCode",{parentName:"p"},"Package/Resource"),", for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import Resource\n\nresource = Resource(path='data/table1.html')\npprint(resource.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[{'id': 1, 'name': 'english'}, {'id': 2, 'name': '\u4e2d\u56fd\u4eba'}]\n")),Object(o.b)("h2",{id:"writing-data"},"Writing Data"),Object(o.b)("p",null,"The same is actual for writing:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'goodread title="Python"',goodread:!0,title:'"Python"'},"from pprint import pprint\nfrom frictionless import Resource\n\nsource = Resource(data=[['id', 'name'], [1, 'english'], [2, 'german']])\ntarget = source.write('table.html')\npprint(target)\npprint(target.read_rows())\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"{'path': 'table.html'}\n[{'id': 1, 'name': 'english'}, {'id': 2, 'name': 'german'}]\n")),Object(o.b)("h2",{id:"configuring-data"},"Configuring Data"),Object(o.b)("p",null,"There is a dialect to configure HTML, for example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-python",metastring:'title="Python"',title:'"Python"'},"from frictionless import Resource\nfrom frictionless.plugins.html import HtmlDialect\n\nresource = Resource(path='data/table1.html', dialect=HtmlDialect(selector='#id'))\nprint(resource.read_rows())\n")),Object(o.b)("p",null,"References:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/references/formats-reference#html"},"Html Dialect"))))}p.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return r?a.a.createElement(b,l(l({ref:t},s),{},{components:r})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);