(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Collector","image":"./images/collector.jpg"},{"id":2,"name":"Deadpool","image":"./images/deadpool.jpg"},{"id":3,"name":"Groot","image":"./images/groot.jpg"},{"id":4,"name":"Hulk","image":"./images/hulk.jpg"},{"id":5,"name":"Ironman","image":"./images/ironman.jpg"},{"id":6,"name":"Nebula","image":"./images/nebula.jpg"},{"id":7,"name":"Silver Surfer","image":"./images/silver.jpg"},{"id":8,"name":"Starlord","image":"./images/starlord.jpg"},{"id":9,"name":"Strom","image":"./images/storm.jpg"},{"id":10,"name":"Thanos","image":"./images/thanos.jpg"},{"id":11,"name":"Thing","image":"./images/thing.jpg"},{"id":12,"name":"Wolverine","image":"./images/wolverine.jpg"}]')},,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(2),r=t.n(o),c=(t(14),t(3)),s=t(4),l=t(7),m=t(5),u=t(8),g=(t(15),function(e){return i.a.createElement("nav",{className:"navbar bg-primary navbar-expand-lg"},i.a.createElement("h1",null,"Marvel Clicky Game"))}),d=(t(16),function(e){return i.a.createElement("div",{className:"jumbotron-fluid"},i.a.createElement("div",{className:"heading"},i.a.createElement("h1",null,e.children)))}),h=(t(17),function(e){return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container text-center"},i.a.createElement("img",{onClick:function(){return e.imageClick(e.id,e.name)},src:e.image,alt:e.name,key:e.id})))}),f=function(e){return i.a.createElement("div",{className:"container"},e.children)},p=function(e){return i.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))},v=function(e){var a=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return i.a.createElement("div",Object.assign({className:a},e))},E=function(e){return i.a.createElement("div",{className:"footer bg-primary text-center"},i.a.createElement("div",{className:"container"},"Create by: Roy Davis using React.js"))},k=(t(18),function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("h3",null,e.children))}),j=t(6),S=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={heroes:j,answers:[],score:0,topScore:0,message:"Click a Hero to get started"},t.imageShuffle=function(){t.setState({heroes:t.state.heroes.sort((function(){return Math.random()-.5}))})},t.imageClick=function(e,a,n){var i=t.state.heroes;console.log(e),console.log(a),console.log(n),console.log(i),i.forEach((function(a){a.id===e&&a.clicked?(i.forEach((function(e){e.clicked=!1})),t.setState({message:"Sorry, you already clicked that hero. You Lose.",score:0})):a.id!==e||a.clicked||(a.clicked=!0,t.setState({message:"Good Job. You clicked a new Hero",score:t.state.score+1,topScore:t.state.score+1>t.state.topScore?t.state.score+1:t.state.topScore}),console.log(t.state.score))})),t.state.score+1===i.length&&(alert("you won!"),t.setState({message:"Play again!",score:0,topScore:0})),t.imageShuffle()},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.imageShuffle()}},{key:"render",value:function(){var e=this;return i.a.createElement(f,null,i.a.createElement(g,null," The Marvel Heroes clicky game  "),i.a.createElement(d,null,"  Score: ",this.state.score," | Top Score: ",this.state.topScore),i.a.createElement(k,null,this.state.message),i.a.createElement(p,null,this.state.heroes.map((function(a){return i.a.createElement(v,{size:"sm",key:a.id},i.a.createElement(h,{id:a.id,key:a.id,name:a.name,image:a.image,imageClick:e.imageClick}))}))),i.a.createElement(E,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8e7869cb.chunk.js.map