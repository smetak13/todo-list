(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){},21:function(e,t,n){e.exports=n(33)},33:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(18),c=n.n(r),o=(n(16),n(1)),s=n(2),l=n(4),u=n(3),d=n(5),p=n(6),h=function(e,t){return function(n){n({type:"CHANGE_MODE",id:e,mode:t})}},m=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleStatusChange",value:function(e,t,n,a){var i={_id:e,value:t,isActive:!n,date:a};this.props.changeStatus(i)}},{key:"render",value:function(){var e=this,t=this.props.item,n=t._id,a=t.value,r=t.isActive,c=t.date;return i.a.createElement("div",null,i.a.createElement("input",{type:"checkbox",checked:this.props.isActive,onChange:function(){return e.handleStatusChange(n,a,r,c)},className:"checkbox"}))}}]),t}(a.Component),f=Object(p.b)(null,{changeStatus:function(e){return function(t){fetch("/api/items/".concat(e._id),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){return t({type:"CHANGE_STATUS",payload:e})}).catch(function(e){return console.log(e.message)})}}})(m),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleDelete",value:function(e){this.props.deleteItem(e)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-trash-alt",onClick:function(){return e.handleDelete(e.props.id)}}))}}]),t}(a.Component),b=Object(p.b)(null,{deleteItem:function(e){return function(t){fetch("/api/items/".concat(e),{method:"DELETE",headers:{"content-type":"application/json"}}).then(function(){return t({type:"DELETE_ITEM",payload:e})}).catch(function(e){return console.log(e.message)})}}})(v),E=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={value:""},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({value:this.props.item.value})}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.item,n=t._id,a=t.isActive,i=t.date,r={_id:n,value:this.state.value,isActive:a,date:i};this.props.updateItem(r),this.props.changeMode(r._id,!0),this.setState({value:""})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.handleSubmit(e)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("input",{className:"table-input pb-1 mr-2",type:"text",value:this.state.value,autoFocus:!0,onChange:this.handleChange.bind(this),onKeyPress:this.handleKeyPress.bind(this)}),i.a.createElement("button",{onClick:this.handleSubmit.bind(this),className:"btn btn-sm btn-secondary"},"Change"))}}]),t}(a.Component),y=Object(p.b)(null,{changeMode:h,updateItem:function(e){return function(t){fetch("/api/items/".concat(e._id),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){return t({type:"UPDATE_ITEM",payload:e})}).catch(function(e){return console.log(e.message)})}}})(E),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"changeMode",value:function(e,t){var n=!t;this.props.changeMode(e,n)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-pencil-alt",onClick:function(){return e.changeMode(e.props.id,e.props.readMode)}}))}}]),t}(a.Component),O=Object(p.b)(null,{changeMode:h})(j),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"handleDateChange",value:function(e){var t=e.target.value,n=this.props.item,a={_id:n._id,value:n.value,isActive:n.isActive,date:t};this.props.changeDate(a)}},{key:"render",value:function(){return i.a.createElement("select",{onChange:this.handleDateChange.bind(this),name:"select-date",defaultValue:this.props.item.date},i.a.createElement("option",{value:"today"},"Today"),i.a.createElement("option",{value:"future"},"Future"))}}]),t}(a.Component),A=Object(p.b)(null,{changeDate:function(e){return function(t){fetch("/api/items/".concat(e._id),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){return t({type:"CHANGE_DATE",payload:e})}).catch(function(e){return console.log(e.message)})}}})(g),C=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).handleSubmit=function(){n.props.createItem({value:"New Item",isActive:!1,date:"today"})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"date-title-wrapper"},i.a.createElement("h4",{className:"date-title"},this.props.title),i.a.createElement("div",{className:"spacer"}),i.a.createElement("i",{className:"fas fa-plus",onClick:this.handleSubmit}))}}]),t}(a.Component),_=Object(p.b)(function(e){return{usedIDs:e.list.usedIDs}},{createItem:function(e){return function(t){fetch("/api/items",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.json()}).then(function(e){return t({type:"CREATE_ITEM",payload:e})}).catch(function(e){return console.log(e.message)})}}})(C),k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={id:null,value:"",isActive:!1,date:""},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"itemCrossedClass",value:function(e){if(e)return{textDecoration:"line-through"}}},{key:"render",value:function(){var e=this;return 0===this.props.items.length?null:i.a.createElement("div",{className:"table"},"Today"===this.props.title?i.a.createElement(_,{title:this.props.title}):i.a.createElement("h4",{className:"date-title"},this.props.title),this.props.items.map(function(t){return i.a.createElement("div",{className:"row",key:t._id},i.a.createElement("div",{className:"col-1"},i.a.createElement(f,{item:t,isActive:t.isActive})),i.a.createElement("div",{className:"col-7 list-item"},e.props.readMode||e.props.itemEdited!==t._id?i.a.createElement("span",{style:e.itemCrossedClass(t.isActive)},t.value):i.a.createElement(y,{item:t})),i.a.createElement("div",{className:"col-2 change-date"},t.isActive?i.a.createElement("span",null):i.a.createElement(A,{item:t})),i.a.createElement("div",{className:"col-1 edit"},i.a.createElement(O,{id:t._id,readMode:e.props.readMode})),i.a.createElement("div",{className:"col-1 delete"},i.a.createElement(b,{id:t._id})))}))}}]),t}(a.Component),M=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.props.fetchItems()}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(k,{title:"Today",items:this.props.items.filter(function(e){return"today"===e.date}).filter(function(e){return!e.isActive}),readMode:this.props.readMode,itemEdited:this.props.itemEdited}),i.a.createElement(k,{title:"Future",items:this.props.items.filter(function(e){return"future"===e.date}).filter(function(e){return!e.isActive}),readMode:this.props.readMode,itemEdited:this.props.itemEdited}),i.a.createElement(k,{title:"Done",items:this.props.items.filter(function(e){return e.isActive}),readMode:this.props.readMode,itemEdited:this.props.itemEdited}))}}]),t}(a.Component),T=Object(p.b)(function(e){return{items:e.list.items,readMode:e.list.readMode,itemEdited:e.list.itemEdited}},{fetchItems:function(e){return function(e){fetch("/api/items",{method:"GET",headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(t){e({type:"FETCH_ITEMS",payload:t})}).catch(function(e){return console.log(e.message)})}}})(M),N=n(7),S=n(20),D=n(11),w=n(8),I={items:[],readMode:!0,itemEdited:null},P=Object(N.c)({list:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ITEMS":return Object(w.a)({},e,{items:t.payload});case"CREATE_ITEM":return Object(w.a)({},e,{items:[t.payload].concat(e.items)});case"CHANGE_STATUS":return e.items.filter(function(e){return e._id===t.payload._id}).map(function(e){return e.isActive=t.payload.isActive}),Object(w.a)({},e,{items:Object(D.a)(e.items)});case"CHANGE_DATE":return e.items.filter(function(e){return e._id===t.payload._id}).map(function(e){return e.date=t.payload.date}),Object(w.a)({},e,{items:Object(D.a)(e.items)});case"CHANGE_MODE":return Object(w.a)({},e,{readMode:t.mode,itemEdited:t.id});case"DELETE_ITEM":return Object(w.a)({},e,{items:e.items.filter(function(e){return e._id!==t.payload})});case"UPDATE_ITEM":return e.items.filter(function(e){return e._id===t.payload._id}).map(function(e){return e.value=t.payload.value}),Object(w.a)({},e,{items:Object(D.a)(e.items)});default:return e}}}),H=[S.a],G=Object(N.e)(P,{},Object(N.d)(N.a.apply(void 0,H))),U=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(p.a,{store:G},i.a.createElement("div",{className:"App container"},i.a.createElement("h1",{className:"main-title"},"TODO List"),i.a.createElement(T,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(31);c.a.render(i.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,2,1]]]);
//# sourceMappingURL=main.3d69b545.chunk.js.map