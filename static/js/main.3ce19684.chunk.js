(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(5),l=a.n(n),r=(a(12),a(4)),i=a(2);var j=()=>Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",style:{position:"fixed",width:"100%",top:"0",zIndex:"1000",boxShadow:"3px 0 8px"},children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(r.b,{className:"navbar-brand",to:"/",children:"Newz"}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link","aria-current":"page",to:"/general",children:"Home"})}),Object(i.jsxs)("div",{style:{display:"flex",flexDirection:"row",position:"absolute",right:"40px"},children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/general",children:"General"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/business",children:"Business"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/entertainment",children:"Entertainment"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/health",children:"Health"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/science",children:"Science"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/sports",children:"Sports"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(r.b,{className:"nav-link",to:"/technology",children:"Technology"})})]})]})})]})})});var o=e=>{let{title:t,description:a,imageUrl:c,newsUrl:s,author:n,date:l,source:r}=e;return Object(i.jsx)("div",{className:"my-4",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",position:"absolute",right:"0"},children:Object(i.jsxs)("span",{className:"badge bg-danger",style:{left:"80%",zIndex:"1"},children:[" ",r," "]})}),Object(i.jsx)("img",{src:c||"https://th.bing.com/th/id/OIP.Xjv4jj8-pdUIXFaDZ-JqAQHaD6?rs=1&pid=ImgDetMain",className:"card-img-top",alt:"...",style:{height:"180px"}}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("h5",{className:"card-title",children:t}),Object(i.jsx)("p",{className:"card-text",children:a}),Object(i.jsxs)("p",{className:"card-text",children:[" ",Object(i.jsxs)("small",{className:"text-body-secondary text-muted",children:[" ",Object(i.jsx)("strong",{children:" By "})," ",n||"unknown"," ",Object(i.jsx)("strong",{children:" at "})," ",new Date(l).toGMTString()," "]})," "]}),Object(i.jsx)("a",{rel:"noreferrer",href:s,target:"_blank",className:"btn btn-sm btn-dark rounded",children:"Read More"})]})]})})},d=a.p+"static/media/loading.26b605cf.gif";var b=()=>Object(i.jsx)("div",{className:"my-5 text-center",children:Object(i.jsx)("img",{src:d,alt:"",style:{width:"100px"}})}),h=a(7);const x=e=>{const[t,a]=Object(c.useState)([]),[s,n]=Object(c.useState)(0),[l,r]=Object(c.useState)(!0),[j,d]=Object(c.useState)(1),x=e=>e.charAt(0).toUpperCase()+e.slice(1);Object(c.useEffect)((()=>{document.title=`Newz - ${x(e.category)}`,(async()=>{const t=`https://newsapi.org/v2/top-headlines?country=${e.country}&category=${e.category}&apiKey=6b8a8222d2a14b8ba058fb51fdd52c5a&page=${j}&pagesize=${e.pageSize}`;r(!0);let c=await fetch(t).catch((e=>console.error("Error Found"))),s=await c.json();a(s.articles),n(s.totalResults),r(!1)})()}),[]);return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("h2",{className:"text-center",style:{marginTop:"90px"},children:["Newz - Top ",x(e.category)," Headlines"]}),l&&Object(i.jsx)(b,{}),Object(i.jsx)(h.a,{dataLength:t.length,next:async()=>{const c=`https://newsapi.org/v2/top-headlines?country=${e.country}&category=${e.category}&apiKey=6b8a8222d2a14b8ba058fb51fdd52c5a&page=${j+1}&pagesize=${e.pageSize}`;d(j+1),r(!0);let s=await fetch(c),l=await s.json();a(t.concat(l.articles)),n(l.totalResults),r(!1)},hasMore:t.length!==s,loader:Object(i.jsx)(b,{}),children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"row my-3",children:t.map((e=>Object(i.jsx)("div",{className:"col-md-3",children:Object(i.jsx)(o,{title:e.title?e.title:"",description:e.description?e.description:"",imageUrl:e.urlToImage,newsUrl:e.url,author:e.author,date:e.publishedAt,source:e.source.name})},e.url)))})})})]})};x.defaultProps={country:"us",pageSize:5,category:"general"};var p=x,g=(a(14),a(3));var m=()=>{const e=10,t="us";return Object(i.jsx)("div",{children:Object(i.jsxs)(r.a,{children:[Object(i.jsx)(j,{}),Object(i.jsxs)(g.c,{children:[Object(i.jsx)(g.a,{exact:!0,path:"/",element:Object(i.jsx)(p,{pageSize:e,country:t,category:"general"}),children:" "}),Object(i.jsx)(g.a,{exact:!0,path:"/business",element:Object(i.jsx)(p,{pageSize:e,country:t,category:"business"},"business"),children:" "}),Object(i.jsx)(g.a,{exact:!0,path:"/entertainment",element:Object(i.jsx)(p,{pageSize:e,country:t,category:"entertainment"},"entertainment"),children:" "}),Object(i.jsx)(g.a,{exact:!0,path:"/general",element:Object(i.jsx)(p,{pageSize:e,country:t,category:"general"},"general"),children:" "}),Object(i.jsx)(g.a,{exact:!0,path:"/health",element:Object(i.jsx)(p,{pageSize:e,country:t,category:"health"},"health"),children:" "}),Object(i.jsx)(g.a,{exact:!0,path:"/science",element:Object(i.jsx)(p,{pageSize:e,country:t,category:"science"},"science"),children:" "}),Object(i.jsx)(g.a,{exact:!0,path:"/sports",element:Object(i.jsx)(p,{pageSize:e,country:t,category:"sports"},"sports"),children:" "}),Object(i.jsx)(g.a,{exact:!0,path:"/technology",element:Object(i.jsx)(p,{pageSize:e,country:t,category:"technology"},"technology"),children:" "})]})]})})};var O=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((t=>{let{getCLS:a,getFID:c,getFCP:s,getLCP:n,getTTFB:l}=t;a(e),c(e),s(e),n(e),l(e)}))};l.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.3ce19684.chunk.js.map