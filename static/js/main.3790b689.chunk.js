(this.webpackJsonpkittyfriends=this.webpackJsonpkittyfriends||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(8),i=n.n(a),o=(n(14),n(2)),h=n(3),l=n(5),u=n(4),j=(n(15),n(7)),b=function(e){var t=e.email,n=e.name,c=e.username;return Object(r.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(c,"?set=set4&size=200x200"),alt:"robots"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("p",{children:t})]})]})},d=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e){return Object(c.createElement)(b,Object(j.a)(Object(j.a)({},e),{},{key:e.id}))}))})},f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"Oooops! That is not good"}):this.props.children}}]),n}(c.Component),O=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"pa2",children:Object(r.jsx)("input",{id:"search",type:"search",placeholder:"Search kitty\u2026",className:"pa3 ba b--green bg-lightest-blue",onChange:t})})},p=function(e){var t=e.children;return Object(r.jsx)("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"},children:t})},g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:"Kittyfriends"}),Object(r.jsx)(O,{searchChange:this.onSearchChange}),Object(r.jsx)(p,{children:Object(r.jsx)(f,{children:Object(r.jsx)(d,{robots:c})})})]}):Object(r.jsx)("h1",{children:"Loading\u2026"})}}]),n}(c.Component),v=(n(16),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))});i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root")),v()}},[[17,1,2]]]);
//# sourceMappingURL=main.3790b689.chunk.js.map