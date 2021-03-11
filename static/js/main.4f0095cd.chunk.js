(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{28:function(e,t,n){e.exports={header:"MainView_header__1WkFo"}},37:function(e,t,n){e.exports={container:"container_container__3sfS-"}},73:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),i=n.n(c),s=n(10),u=n(7),o=(n(48),n(49),n(37)),d=n.n(o),l=n(1);function b(e){var t=e.children;return Object(l.jsx)("div",{className:d.a.container,children:t})}var j=n(42),O=n(9),p=n.n(O),f=n(15),m=n(80),h=n(77),v=n(22),x=n.n(v),y=n(79);function N(e){var t=e.multiple,n=e.onChange,a=e.selectArray,r=e.selectorName;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(y.a,{id:r,children:Object(l.jsxs)(y.a.Group,{controlId:"exampleForm.SelectCustom",children:[Object(l.jsxs)(y.a.Label,{children:["Select ","".concat(r)]}),Object(l.jsxs)(y.a.Control,{as:"select",custom:!0,onChange:function(e){return n(e.target.value)},children:[!t&&Object(l.jsx)("option",{}),null===a||void 0===a?void 0:a.map((function(e){var t,n,a;return Object(l.jsx)("option",{value:(null===(n=e.user)||void 0===n?void 0:n.id)||e.id,children:(null===(a=e.user)||void 0===a?void 0:a.name)||e.name},(null===(t=e.user)||void 0===t?void 0:t.id)||e.id)}))]})]})})})}var g=n(78),T=n(76),E=n(38);function S(e){var t=e.handleClose,n=e.modalShow,r=e.controlOptions,c=e.handleSubmit,i=r.participants,u=r.daysArray,o=r.timeArray,d=Object(a.useState)(""),b=Object(s.a)(d,2),j=b[0],O=b[1],p=Object(a.useState)([]),f=Object(s.a)(p,2),h=f[0],v=f[1],x=Object(a.useState)(""),y=Object(s.a)(x,2),S=y[0],C=y[1],w=Object(a.useState)(""),k=Object(s.a)(w,2),P=k[0],I=k[1];return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(g.a,{show:n,onHide:t,animation:!1,children:[Object(l.jsx)(g.a.Header,{closeButton:!0,children:Object(l.jsx)(g.a.Title,{children:"Create event"})}),Object(l.jsxs)(g.a.Body,{children:[Object(l.jsxs)(T.a,{size:"sm",className:"mb-3",onChange:function(e){return O(e.target.value)},children:[Object(l.jsx)(T.a.Prepend,{children:Object(l.jsx)(T.a.Text,{id:"inputGroup-sizing-sm",children:"Name"})}),Object(l.jsx)(E.a,{"aria-label":"Small","aria-describedby":"inputGroup-sizing-sm"})]}),Object(l.jsx)(N,{multiple:!0,onChange:function(e){return v(Number(e))},selectArray:i,selectorName:"participant"}),Object(l.jsx)(N,{multiple:!1,onChange:function(e){return C(Number(e))},selectArray:u,selectorName:"day"}),Object(l.jsx)(N,{multiple:!1,onChange:function(e){return I(Number(e))},selectArray:o,selectorName:"time"})]}),Object(l.jsxs)(g.a.Footer,{children:[Object(l.jsx)(m.a,{variant:"secondary",onClick:t,children:"Close"}),Object(l.jsx)(m.a,{variant:"primary",onClick:function(){return c(h,j,S,P)},children:"Create event"})]})]})})}var C=n(43),w=n(41),k=n(18),P=function e(t){Object(k.a)(this,e),this.isAdmin=!1,this.user=t},I=function(e){Object(C.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(k.a)(this,n),(a=t.call(this,e)).isAdmin=!0,a}return n}(P),A=[{id:0,name:"monday"},{id:1,name:"thuesday"},{id:2,name:"wednesday"},{id:3,name:"thursday"},{id:4,name:"friday"}],_=[{id:0,name:"10:00"},{id:1,name:"11:00"},{id:2,name:"12:00"},{id:3,name:"13:00"},{id:4,name:"14:00"},{id:5,name:"15:00"},{id:6,name:"16:00"},{id:7,name:"17:00"},{id:8,name:"18:00"}],R=[new P({id:1,name:"John",meetings:[]}),new P({id:2,name:"Maria",meetings:[]}),new P({id:3,name:"David",meetings:[]}),new P({id:4,name:"Anna",meetings:[]}),new I({id:5,name:"BIG BOSS",meetings:[]})],F=n(40),B=n(23),z=n.n(B),G="anton_lazurko",J="events",M="http://158.101.166.74:8080/api/data/",H=null,L=new(function(){function e(){return Object(k.a)(this,e),H||(H=this),H}return Object(F.a)(e,[{key:"getEvent",value:function(){var e=Object(f.a)(p.a.mark((function e(){var t,n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.get("".concat(M).concat(G,"/").concat(J));case 2:return t=e.sent,n=t.data,a=t.status,e.abrupt("return",{data:n,status:a});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"addEvent",value:function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.post("".concat(M).concat(G,"/").concat(J),t);case 2:return n=e.sent,a=n.data,r=n.status,e.abrupt("return",{data:a,status:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteEvent",value:function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.delete("".concat(M).concat(G,"/").concat(J,"/").concat(t));case 2:return n=e.sent,a=n.status,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}()),D=n(28),U=n.n(D);function V(e){var t=e.isAdmin,n=Object(a.useState)([]),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)([]),d=Object(s.a)(o,2),b=d[0],O=d[1],v=Object(a.useState)(""),y=Object(s.a)(v,2),g=y[0],T=y[1],E=Object(a.useState)(!1),C=Object(s.a)(E,2),w=C[0],k=C[1],P=function(){var e=Object(f.a)(p.a.mark((function e(t,n,a,r){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=3;break}return u.b.error("Please type event name!",{position:u.b.POSITION.TOP_CENTER}),e.abrupt("return",!1);case 3:if(""!==a){e.next=6;break}return u.b.error("Please choose day!",{position:u.b.POSITION.TOP_CENTER}),e.abrupt("return",!1);case 6:if(""!==r){e.next=9;break}return u.b.error("Please choose time!",{position:u.b.POSITION.TOP_CENTER}),e.abrupt("return",!1);case 9:if(0!==t.length){e.next=12;break}return u.b.error("Please choose participant!",{position:u.b.POSITION.TOP_CENTER}),e.abrupt("return",!1);case 12:return c=[],e.next=15,L.getEvent().then((function(e){var t;null===(t=e.data)||void 0===t||t.map((function(e){return c.push({id:e.id,data:x.a.parse(e.data)})}))}));case 15:if(!c.filter((function(e){return e.data.info.day===a&&e.data.info.time===r})).length){e.next=19;break}return u.b.error("Please choose other time or date!",{position:u.b.POSITION.TOP_CENTER}),e.abrupt("return",!1);case 19:return e.abrupt("return",!0);case 20:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(p.a.mark((function e(t,n,a,r){var c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(t,n,a,r);case 2:if(e.sent){e.next=4;break}return e.abrupt("return");case 4:return c={title:"'".concat(n,"'"),participants:[t],info:{day:a,time:r}},s=JSON.stringify(c).replace(/"/g,""),e.next=8,L.addEvent('{\n    "data":"'.concat(s,'"\n  }')).then((function(e){var t=e.data;if(200===e.status){u.b.success("Event succesfully added!",{position:u.b.POSITION.TOP_CENTER});var n={id:t.id,data:x.a.parse(t.data)};i((function(e){return[].concat(Object(j.a)(e),[n])}))}}));case 8:k(!1);case 9:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),F=function(){var e=Object(f.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"!==(n=t.target).tagName){e.next=7;break}if(!window.confirm('Are you shure you want to delete "'.concat(n.parentNode.textContent,'" event?'))){e.next=7;break}return a=t.target.getAttribute("data-id"),e.next=7,L.deleteEvent(a).then((function(e){204===e&&(u.b.success("Event succesfully deleted!",{position:u.b.POSITION.TOP_CENTER}),n.parentNode.innerHTML="")}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){function e(){return(e=Object(f.a)(p.a.mark((function e(){var t,n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.getEvent();case 2:if(t=e.sent,n=t.data,a=t.status,!n){e.next=10;break}return r=null===n||void 0===n?void 0:n.map((function(e){return{id:e.id,data:x.a.parse(e.data)}})),i(r),u.b.success("Events succesfully get with status: ".concat(a,"!"),{position:u.b.POSITION.TOP_CENTER}),e.abrupt("return");case 10:u.b.success("There are no events in your calendar yet!",{position:u.b.POSITION.TOP_CENTER}),i([]);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){O(g?c.filter((function(e){return e.data.participants.includes(g)})):c)}),[g,c]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:U.a.header,children:[Object(l.jsx)(N,{selectArray:R,onChange:function(e){T(e?Number(e):"")},multiple:!1,selectorName:"participant"}),Object(l.jsx)(m.a,{variant:"secondary",disabled:!t,onClick:function(){return k(!0)},children:"Create event"})]}),Object(l.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"#"}),A.map((function(e){return Object(l.jsx)("th",{children:e.name},e.id)}))]})}),Object(l.jsx)("tbody",{children:_.map((function(e,n){var a=null===b||void 0===b?void 0:b.filter((function(e){return e.data.info.time===n})),r=new Array(5).fill("");return null===a||void 0===a||a.map((function(e){var t=e.data.info.day;return r[t]={name:"".concat(e.data.title),id:e.id,className:"succes"},!0})),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:e.name}),r.map((function(e,n){return Object(l.jsxs)("td",{className:U.a.td,children:[e.name||"",e.name&&Object(l.jsx)(m.a,{"data-id":e.id,variant:"secondary",disabled:!t,onClick:function(e){return F(e)},children:"x"},e.id)]},e.id||n)}))]},e.id)}))})]}),w&&Object(l.jsx)(S,{modalShow:w,handleSubmit:I,handleClose:function(){return k(!1)},controlOptions:{participants:R,daysArray:A,timeArray:_}})]})}function W(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1];Object(a.useEffect)((function(){console.log(c)}),[c]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(N,{selectArray:R,selectorName:"participant",onChange:function(e){i(Number(e))},multiple:!1}),Object(l.jsx)(m.a,{variant:"primary",onClick:function(){0!==c?R.find((function(e){return e.user.id===c})).isAdmin?t(!0):t(!1):u.b.error("Please autorise!",{position:u.b.POSITION.TOP_CENTER})},children:"Autorise"})]})}var q="unauthorised",K="autorised_user",Q="autorised_admin";var X=function(){var e=Object(a.useState)(q),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(l.jsxs)(b,{children:[n===q&&Object(l.jsx)(W,{onSubmit:function(e){r(e?Q:K)}}),n===K&&Object(l.jsx)(V,{isAdmin:!1}),n===Q&&Object(l.jsx)(V,{isAdmin:!0}),Object(l.jsx)(u.a,{autoClose:1800})]})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(X,{})}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.4f0095cd.chunk.js.map