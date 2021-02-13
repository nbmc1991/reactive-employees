(this["webpackJsonpreactive-employees"]=this["webpackJsonpreactive-employees"]||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(2),c=n(13),a=n.n(c),o=n(3),i=n(14),l=n(15),u=n(18),h=n(17);var d=function(e){return Object(r.jsx)("form",{children:Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("input",{value:e.value,onChange:e.handleInputChange,name:"search",type:"text",className:"form-control",placeholder:"Type a First or Last name to begin",id:"search"}),Object(r.jsx)("button",{type:"submit",onClick:e.handleFormSubmit,className:"btn btn-success",children:"Search"})]})})},j=n(16),m=n.n(j),b=function(){return m.a.get("https://randomuser.me/api/?results=50&inc=name,email,dob,phone,picture")};var p=function(){return Object(r.jsx)("div",{className:"jumbotron",children:Object(r.jsx)("h1",{children:"Employee Finder "})})};var O=function(e){return Object(r.jsxs)("table",{className:"table table-striped",children:[Object(r.jsx)("thead",{className:"thead-dar",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"Image"}),Object(r.jsx)("th",{scope:"col",onClick:function(){return e.sortFunction("Name")},children:"Name"}),Object(r.jsx)("th",{scope:"col",onClick:function(){return e.sortFunction("Email")},children:"Email"}),Object(r.jsx)("th",{scope:"col",onClick:function(){return e.sortFunction("Phone")},children:"Phone"}),Object(r.jsx)("th",{scope:"col",onClick:function(){return e.sortFunction("DOB")},children:"DOB"})]})}),Object(r.jsx)("tbody",{children:e.results.map((function(e){var t;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"row",children:Object(r.jsx)("img",{alt:e.name.first,src:e.picture.thumbnail})}),Object(r.jsx)("td",{children:e.name.first+" "+e.name.last}),Object(r.jsx)("td",{children:e.email}),Object(r.jsx)("td",{children:e.phone}),Object(r.jsx)("td",{children:new Intl.DateTimeFormat("en-US",(t={year:"numeric",month:"numeric"},Object(o.a)(t,"month","2-digit"),Object(o.a)(t,"day","2-digit"),t)).format(new Date(e.dob.date))})]},e.name.first)}))})]})},f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={search:"",results:[],sort:{column:null,direction:"desc"}},e.handleInputChange=function(t){var n=t.target.name,r=t.target.value;e.setState(Object(o.a)({},n,r))},e.sortFunction=function(t){var n=e.state.sort.direction;n="desc"===n?"asc":"desc";var r=e.state.results.sort((function(e,n){switch(t){case"Name":var r=e.name.first.toLowerCase(),s=n.name.first.toLowerCase();return r>s?-1:s>r?1:0;case"Email":var c=e.email.toLowerCase(),a=e.email.toLowerCase();if(c>a)return-1;if(a>c)return 1}}));"desc"===n&&r.reverse(),e.setState({results:r,sort:{column:t,direction:n}})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b().then((function(t){console.log(t),e.setState({results:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state.search.toLowerCase(),t=this.state.results.filter((function(t){return t.name.first.concat(t.name.last).toLowerCase().includes(e)}));return Object(r.jsxs)("div",{children:[Object(r.jsx)(p,{heading:"Employee Finder",subheading:"Use search box to seacrh for employe or use arrows to sort results"}),Object(r.jsx)(d,{value:this.state.search,handleInputChange:this.handleInputChange}),Object(r.jsx)(O,{sortFunction:this.sortFunction,results:t})]})}}]),n}(s.Component);var x=function(){return Object(r.jsx)(f,{})};n(42);a.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.72c6ec8c.chunk.js.map