(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n(1),c=n.n(a),i=n(9),r=n.n(i),l=(n(15),n(3)),s=n(6),d=n(8),u=n(2);var b=function(t){var e=t.item,n=t.onDelete,a=t.changeTodoItem,c=e.label,i=e.done,r=e.important,l=e.id,s={color:r?"steelblue":"black",fontWeight:r?"bold":"normal"};return Object(o.jsxs)("div",{className:"todo__container todo__container_li ",children:[Object(o.jsx)("span",{className:i?"todo__list-item todo__list-item_done":"todo__list-item",style:s,onClick:function(){a(!i,"done",l)},children:c}),Object(o.jsxs)("div",{className:"todo__container",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right todo__list-item-button",onClick:function(){a(!r,"important",l)},children:Object(o.jsx)("i",{className:"fa fa-exclamation"})}),Object(o.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right todo__list-item-button",onClick:n,children:Object(o.jsx)("i",{className:"fa fa-trash-o"})})]})]})};var j=function(t){var e=t.todoData,n=t.onDelete,a=t.changeTodoItem,c=e.map((function(t){return Object(o.jsx)("li",{className:"list-group-item todo__list-item",children:Object(o.jsx)(b,{item:t,onDelete:function(){return n(t.id)},changeTodoItem:a})},t.id)}));return Object(o.jsx)("ul",{className:"list-group todo__list ",children:c})};var m=function(t){var e=t.todo,n=t.done;return Object(o.jsxs)("div",{className:"todo__container todo__container_header",children:[Object(o.jsx)("h1",{className:"todo__title",children:"Todo List"}),Object(o.jsxs)("p",{className:"todo__counter",children:[e," more to do, ",n," done"]})]})};var f=function(t){var e=t.setTerm,n=t.term;return Object(o.jsx)("input",{className:"form-control todo__input ",placeholder:"Search",value:n,onChange:function(t){e(t.target.value)}})};var _=function(t){var e=t.filter,n=t.onFilterChange,a=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}].map((function(t){var a=t.name,c=t.label,i=e===a?"btn-info":"btn-outline-secondary";return Object(o.jsx)("button",{type:"button",className:"todo__button btn ".concat(i),onClick:function(){n(a)},children:c},a)}));return Object(o.jsx)("div",{className:"todo__button-container btn-group",children:a})};var h=function(t){var e=t.onAdd,n=c.a.useState(""),a=Object(u.a)(n,2),i=a[0],r=a[1];return Object(o.jsxs)("form",{className:"todo__container todo__container_add-button",onSubmit:function(t){if(0===i.length)return t.preventDefault(),console.log("Please enter something");t.preventDefault(),e(i),r("")},children:[Object(o.jsx)("input",{className:"todo__input",placeholder:"What ToDO?",onChange:function(t){r(t.target.value)},value:i})," ",Object(o.jsx)("button",{type:"submit",className:"btn btn-outline-secondary todo__button-add",children:"Add New Task"})]})},O=1;var v=function(){var t,e,n=function(t){return{label:t,important:!1,done:!1,id:O++}},a=c.a.useState([n("Me, myself, and i"),n("Keep calm and code"),n("Fly bird, fly")]),i=Object(u.a)(a,2),r=i[0],b=i[1],v=c.a.useState(""),x=Object(u.a)(v,2),g=x[0],p=x[1],N=c.a.useState("active"),C=Object(u.a)(N,2),y=C[0],D=C[1],T=function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}));default:return t}}((t=r,0===(e=g).length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))),y),k=r.filter((function(t){return t.done})).length,I=r.length-k;return Object(o.jsxs)("section",{className:"todo",children:[Object(o.jsx)(m,{todo:I,done:k})," ",Object(o.jsxs)("div",{className:"todo__container",children:[Object(o.jsx)(f,{setTerm:p,term:g}),Object(o.jsx)(_,{filter:y,onFilterChange:D})]}),Object(o.jsx)(j,{todoData:T,onDelete:function(t){var e=r.findIndex((function(e){return e.id===t})),n=[].concat(Object(l.a)(r.slice(0,e)),Object(l.a)(r.slice(e+1)));b(n)},changeTodoItem:function(t,e,n){var o=r.findIndex((function(t){return t.id===n})),a=r[o],c=Object(d.a)(Object(d.a)({},a),{},Object(s.a)({},e,t)),i=[].concat(Object(l.a)(r.slice(0,o)),[c],Object(l.a)(r.slice(o+1)));b(i)}}),Object(o.jsx)(h,{onAdd:function(t){var e=n(t),o=[].concat(Object(l.a)(r),[e]);b(o)}})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),o(t),a(t),c(t),i(t)}))};r.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.a7037e7a.chunk.js.map