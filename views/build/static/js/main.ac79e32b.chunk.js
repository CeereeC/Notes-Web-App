(this["webpackJsonpkeeper-part-3-completed"]=this["webpackJsonpkeeper-part-3-completed"]||[]).push([[0],{55:function(e,t,n){e.exports=n(84)},84:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(9),r=n.n(l),o=n(51),u=n(23);var i=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"Keeper"))};var d=function(){var e=(new Date).getFullYear();return c.a.createElement("footer",null,c.a.createElement("p",null,"Copyright \u24d2 ",e))},m=n(48),f=n.n(m);var s=function(e){return c.a.createElement("div",{className:"note"},c.a.createElement("h1",null,e.title),c.a.createElement("p",null,e.content),c.a.createElement(f.a,{className:"deleteBtn",onClick:function(){e.onDelete(e.id)}}))},E=n(33),p=n(101),v=n(49),g=n.n(v),h=n(102);var b=function(e){var t=Object(a.useState)({title:"",content:""}),n=Object(u.a)(t,2),l=n[0],r=n[1],o=Object(a.useState)(!1),i=Object(u.a)(o,2),d=i[0],m=i[1];function f(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(E.a)(Object(E.a)({},e),{},{[n]:a})}))}return c.a.createElement("div",null,c.a.createElement("form",null,d&&c.a.createElement("input",{name:"title",onChange:f,value:l.title,placeholder:"Title"}),c.a.createElement("textarea",{name:"content",onChange:f,onClick:function(){m(!0)},value:l.content,placeholder:"Take a note...",rows:d?3:1}),c.a.createElement(h.a,{in:!0},c.a.createElement(p.a,{className:"button",onClick:function(t){e.onAdd(l),r({title:"",content:""}),t.preventDefault()}},c.a.createElement(g.a,null)))))},j=n(30),O=n.n(j);var k=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],l=t[1];function r(){return n.map((function(e){return t=e,c.a.createElement(s,{key:t._id,id:t._id,title:t.title,content:t.content,onDelete:m});var t}))}function m(e){O.a.post("/delete",{id:e}).then((function(t){l((function(t){return t.filter((function(t){return t._id!==e}))}))})).catch((function(e){console.log(e,"Signature not added, try again")}))}return Object(a.useEffect)((function(){O.a.get("/notes").then((function(e){var t=e.data.notes;l(t)})).catch((function(e){console.log(e,"Signature not added, try again")}))}),[]),c.a.createElement("div",null,c.a.createElement(i,null),c.a.createElement(b,{onAdd:function(e){O.a.post("/",{title:e.title,content:e.content}).then((function(e){console.log(n);var t=e.data.noteAdded;l((function(e){return[].concat(Object(o.a)(e),[t])}))})).catch((function(e){console.log(e,"Signature not added, try again")}))}})," ",c.a.createElement(r,null),c.a.createElement(d,null))},y=n(50);r.a.render(c.a.createElement(y.a,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.ac79e32b.chunk.js.map