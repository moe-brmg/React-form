(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(2),m=t.n(r);t(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(5),h=t(7),i=t(3),o=t(4),s=t(8),u=t(6);var d=function(e){var a=e.errors,t=e.fields;return l.a.createElement("div",{className:"form-stage"},l.a.createElement("h1",null,"CREATE YOUR ACCOUNT"),l.a.createElement("p",null,"This is step one"),l.a.createElement("input",{type:"text",name:"name",onChange:e.handleChange,value:t.name,placeholder:"name"}),l.a.createElement("span",null,a.name),l.a.createElement("input",{type:"text",name:"lastName",onChange:e.handleChange,value:t.lastName,placeholder:"Lastname"}),l.a.createElement("span",null,a.lastName),l.a.createElement("input",{type:"text",name:"phone",onChange:e.handleChange,value:t.phone,placeholder:"phone"}),l.a.createElement("span",null,a.phone))};var p=function(e){e.errors;var a=e.fields;return l.a.createElement("div",{className:"form-stage"},l.a.createElement("h1",null,"more details"),l.a.createElement("p",null,"This is step two"),l.a.createElement("input",{type:"text",name:"email",onChange:e.handleChange,value:a.email,placeholder:"Email"}),l.a.createElement("div",{className:"gender"},l.a.createElement("h2",null,"Choose your Gender"),l.a.createElement("label",{htmlFor:"male"},"Male"),l.a.createElement("input",{type:"radio",id:"male",name:"gender",onChange:e.handleChange,value:"male"}),l.a.createElement("label",{htmlFor:"female"},"Female"),l.a.createElement("input",{type:"radio",id:"female",name:"gender",onChange:e.handleChange,value:"female"}),l.a.createElement("label",{htmlFor:"other"},"Other"),l.a.createElement("input",{type:"radio",id:"other",name:"gender",onChange:e.handleChange,value:"other"})),l.a.createElement("div",{className:"fruit"},l.a.createElement("h2",null,"Choose your fruit"),l.a.createElement("input",{type:"checkbox",name:"fruit",onChange:e.handleChange,value:"apple",checked:!0}),"Apple",l.a.createElement("input",{type:"checkbox",name:"fruit",onChange:e.handleChange,value:"orange",checked:!0}),"Orange",l.a.createElement("input",{type:"checkbox",name:"fruit",onChange:e.handleChange,value:"banana",checked:!0}),"Banana"))};var g=function(e){return e.errors,l.a.createElement("div",{className:"form-stage"},l.a.createElement("h1",null,"Add your items please"),l.a.createElement("p",null,"this is the final step"),l.a.createElement("label",{htmlFor:"itemInput"},"Add Items:"),l.a.createElement("input",{type:"text",name:"itemInput",onChange:e.handleItemOnChange,value:e.item}),l.a.createElement("ul",null,e.items.map((function(e){return l.a.createElement("li",null,e)}))),l.a.createElement("input",{type:"submit",onClick:e.handleAddItem,value:"Add Item"}))};var E=function(e){switch(e.page){case 1:return l.a.createElement(d,{handleChange:e.handleChange,errors:e.errors,fields:e.fields});case 2:return l.a.createElement(p,{handleChange:e.handleChange,errors:e.errors,fields:e.fields});case 3:return l.a.createElement(g,{handleChange:e.handleChange,errors:e.errors,handleItemOnChange:e.handleItemOnChange,handleAddItem:e.handleAddItem,item:e.item,items:e.items});default:return""}},f=function(e){Object(s.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={fields:{fruits:[]},errors:{},currentPage:1,MaxPageNumber:3,items:[],item:""},e.handleChange=function(a){var t=Object(h.a)({},e.state.fields);t[a.target.name]=a.target.value,console.log(a.target,a.target.name,a.target.value),e.setState({fields:t}),console.log(a.type)},e.handleNext=function(a){a.preventDefault();var t=e.state.currentPage;t++,e.setState({currentPage:t})},e.handlePre=function(a){a.preventDefault();var t=e.state.currentPage;t--,e.setState({currentPage:t})},e.handleItemOnChange=function(a){var t=a.target.value;e.setState({item:t})},e.handleAddItem=function(a){a.preventDefault();var t=Object(c.a)(e.state.items);t.push(e.state.item);e.setState({items:t,item:""})},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.currentPage,t=e.MaxPageNumber,n=e.errors,r=e.fields,m=e.item,c=e.items;return l.a.createElement("div",{className:"container"},l.a.createElement("form",null,l.a.createElement(E,{page:a,handleChange:this.handleChange,errors:n,fields:r,handleItemOnChange:this.handleItemOnChange,handleAddItem:this.handleAddItem,item:m,items:c}),a>1?l.a.createElement("button",{onClick:this.handlePre},"Previous"):"",a!==t?l.a.createElement("button",{onClick:this.handleNext},"Next"):l.a.createElement("input",{type:"submit",value:"submit"})))}}]),t}(n.Component);m.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f867a382.chunk.js.map