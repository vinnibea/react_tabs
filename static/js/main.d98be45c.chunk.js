(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(4),a=n.n(c),i=n(5),r=n(1),b=n(2),s=n.n(b),o=(n(10),n(0)),d=function(t){var e=t.tabs,n=t.tabChanger,c=t.currentTab;return Object(o.jsx)("div",{children:e.map((function(t){var e=s()({"App__button--active":c===t.id,App__button:!0});return Object(o.jsx)("button",{type:"button",className:e,onClick:function(){return n(t)},children:t.title},t.id)}))})},u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=s()({"App__main-content":!0}),e=Object(r.useState)(u[0]),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("div",{className:"App__main",children:[Object(o.jsx)("h1",{children:"Selected tab is ".concat(c.title)}),Object(o.jsx)(d,{tabs:u,tabChanger:function(t){if(t.id!==c.id){var e=u.find((function(e){return e.id===t.id}))||u[0];a(e)}},currentTab:c.id}),Object(o.jsx)("p",{"data-cy":"tab-content",className:t,children:c.content})]})})};a.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d98be45c.chunk.js.map