(this.webpackJsonpbattleship=this.webpackJsonpbattleship||[]).push([[0],{32:function(t,n,e){t.exports=e(40)},40:function(t,n,e){"use strict";e.r(n);var r=e(2),a=e(0),i=e.n(a),o=e(21),c=e.n(o),u=e(3),l=e(22),s=e(23),f=e(30),d=e(29),p=e(5);var h=function(t,n,e,r){var a=t;return{length:t,hit:function(){a--},isSunk:function(){return 0===a},id:n,vertical:r,coords:e}};var g=function(){var t=function(){for(var t=[],n=0;n<10;n++)for(var e=String.fromCharCode(65+n),r=0;r<10;r++)t.push({index:[n,r],X:e,Y:r+1,hit:!1,ship:null});return t}(),n=[],e=function(){return t.filter((function(t){return!t.hit})).reduce((function(t,n){return t.push([n.X,n.Y]),t}),[])},r=[h(4,"s1",["A",4],!1),h(2,"s2",["C",6],!0),h(4,"s3",["A",1],!0),h(1,"s4",["D",4],!1),h(1,"s5",["G",4],!1),h(2,"s6",["H",6],!1)],a=function(n,e){return t.find((function(t){return t.X===n&&t.Y===e}))},i=function(t,n,e){t.coords=[n,e],o()},o=function(){!function(){var n=t.map((function(t){return t.ship=null,t}));t=n}(),r.forEach((function(n){var e=Object(p.a)(n.coords,2),r=e[0],i=e[1];if(n.vertical)for(var o=r.charCodeAt(0),c=n.length,u=0;u<c;u++){var l=String.fromCharCode(o);o++,a(l,i).ship=n}else for(var s=function(n,e){return t.findIndex((function(t){return t.X===n&&t.Y===e}))}(r,i),f=0;f<n.length;f++,s++)t[s].ship=n}))},c=function(t,n,e){var r=t.length,i=t.vertical,o=t.id;if(i){var c,u=n.charCodeAt(0);if(u+r>75)return!1;for(var l=0;l<r;l++){var s=String.fromCharCode(u);if(u++,(c=a(s,e)).ship&&c.ship.id!==o)return!1}return!0}if(e+r>11)return!1;for(var f=0;f<r;f++){var d=a(n,e+f);if(d.ship&&d.ship.id!==o)return!1}return!0};return{randomPlacing:function(){var t=e(),n=t.length;r.forEach((function(e){for(var r=Math.floor(Math.random()*n),a=Object(p.a)(t[r],2),o=a[0],u=a[1];!c(e,o,u);){var l=Math.floor(Math.random()*n),s=Object(p.a)(t[l],2);o=s[0],u=s[1]}i(e,o,u)}))},canPlaceShip:c,moveShip:i,availableMoves:e,placeShips:o,getBattlefield:function(){return t},receiveAttack:function(t,e){var r=a(t,e);return r.hit?null:r.ship?(r.hit=!0,r.ship.hit(),!0):(r.hit=!0,n.push(r),1)},getBox:a,missed:function(){return n},allShipsSunk:function(){return r.every((function(t){return!0===t.isSunk()}))},autoFill:function(){o()},getShips:function(){return r}}};var m=function(t){var n=[],e=function(t,e,r){var a=t.receiveAttack(e,r);return n.push([e,r]),a};return{id:t,attack:e,randomAttack:function(t){var n=t.availableMoves(),r=n.length,a=Math.floor(Math.random()*r),i=Object(p.a)(n[a],2),o=i[0],c=i[1];return e(t,o,c)}}},v=e(43),b={SHIP:"ship"};function S(){var t=Object(r.a)(["\n\tposition: relative;\n\twidth: 30px;\n\theight: 30px;\n\tcursor: pointer;\n"]);return S=function(){return t},t}function k(){var t=Object(r.a)(["\n\twidth: ",";\n\theight: ",";\n\tpadding-right: 1px;\n\tpadding-bottom: 0px;\n\tz-index: ",";\n\tleft: 0;\n\ttop: 0;\n\tborder: 2px solid #00f;\n\tbackground: rgba(0, 0, 255, 0.05);\n\tposition: absolute !important;\n\tmargin: -2px;\n\tvisibility: ",";\n"]);return k=function(){return t},t}var O=u.b.div(k(),(function(t){return t.vertical?"32px":"".concat(32*t.length+t.length-1,"px")}),(function(t){return t.vertical?"".concat(32*t.length+t.length-1,"px"):"32px"}),(function(t){return t.isDragging?-1:10}),(function(t){return t.isDragging?"hidden":""})),x=u.b.div(S());function E(t){var n=t.ship,e=Object(v.a)({item:{ship:n,type:b.SHIP},canDrag:function(){return!t.gameStarted},collect:function(t){return{isDragging:!!t.isDragging()}}}),r=Object(p.a)(e,3),a=r[0].isDragging,o=r[1],c=r[2];return i.a.createElement(O,{isDragging:a,onClick:function(){t.onClick(t.ship)},length:t.length,vertical:t.vertical,ref:c},i.a.createElement(x,{ref:o}))}function j(){var t=Object(r.a)(["\n\ttop: -2em;\n\tleft: 0;\n\twidth: 100%;\n\ttext-align: center;\n"]);return j=function(){return t},t}function y(){var t=Object(r.a)(["\n\tleft: -3em;\n\twidth: 2em;\n\ttext-align: right;\n\ttop: 1em;\n\theight: 1em;\n"]);return y=function(){return t},t}function B(){var t=Object(r.a)(["\n\tposition: absolute;\n\tfont-size: 11px;\n\tz-index: -1;\n"]);return B=function(){return t},t}var w=u.b.div(B()),C=Object(u.b)(w)(y()),A=Object(u.b)(w)(j());function z(t,n){return 1===n&&"A"===t?i.a.createElement(i.a.Fragment,null,i.a.createElement(A,null,n),i.a.createElement(C,null,t)):1===n?i.a.createElement(C,null,t):"A"===t?i.a.createElement(A,null,n):void 0}var M=e(44);function P(){var t=Object(r.a)(["\n\tborder: 1px solid #b4b4ff;\n\tpadding: 0;\n"]);return P=function(){return t},t}function D(){var t=Object(r.a)(["\n\tposition: relative;\n\tbackground-color: #eee;\n\t&::before {\n\t\tbackground-color: #333;\n\t\tposition: absolute;\n\t\twidth: 4px;\n\t\theight: 4px;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\tcontent: '';\n\t\tborder-radius: 50%;\n\t\tmargin-top: -2px;\n\t\tmargin-left: -2px;\n\t}\n"]);return D=function(){return t},t}function H(){var t=Object(r.a)(["\n\t&:hover {\n\t\tborder: 2px solid #40bf44;\n\t\tbackground: rgba(64, 191, 68, 0.05);\n\t\twidth: 32px;\n\t\theight: 32px;\n\t\tmargin: -2px;\n\t\tcursor: crosshair;\n\t\tz-index: 2;\n\t}\n"]);return H=function(){return t},t}function Y(){var t=Object(r.a)(["\n\theight: 100%;\n\twidth: 100%;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tz-index: 1;\n\toverflow: hidden;\n\tbox-sizing: border-box;\n\n\t&::after {\n\t\ttop: 50%;\n\t\theight: 2px;\n\t\tleft: -25%;\n\t\twidth: 150%;\n\t\tmargin-left: -1px;\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tz-index: -1;\n\t\tbackground: red;\n\t\ttransform: rotate(-45deg);\n\t}\n\t&::before {\n\t\tleft: 50%;\n\t\twidth: 2px;\n\t\ttop: -25%;\n\t\theight: 150%;\n\t\tmargin-top: 1px;\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tz-index: -1;\n\t\tbackground: red;\n\t\ttransform: rotate(-45deg);\n\t}\n"]);return Y=function(){return t},t}function T(){var t=Object(r.a)(["\n\tborder-color: red;\n\tbackground: rgba(255, 0, 0, 0.05);\n\t&::after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\theight: 2em;\n\t\twidth: 2em;\n\t\tborder: 1px solid red;\n\t\tmargin: -1px;\n\t\tposition: absolute;\n\t\tz-index: 3;\n\t\ttop: 0;\n\t\tleft: 0;\n\t}\n"]);return T=function(){return t},t}function X(){var t=Object(r.a)(["\n\tposition: relative;\n\theight: 32px;\n\twidth: 32px;\n"]);return X=function(){return t},t}var F=u.b.div(X()),I=Object(u.b)(F)(T()),W=u.b.span(Y()),G=Object(u.b)(F)(H()),J=Object(u.b)(F)(D()),$=u.b.td(P());function q(t){var n=t.player,e=t.onHit,r=t.onClick,a=t.ship,o=t.children,c=t.moveShip,u=t.x,l=t.y,s=t.canPlace,f=Object(M.a)({accept:b.SHIP,canDrop:function(t,n){return s(t.ship,u,l)},drop:function(t,n){console.log("drop",u,l),c(t.ship,u,l)},collect:function(t){return{isOver:!!t.isOver()}}}),d=Object(p.a)(f,2),h=(d[0].isOver,d[1]);return i.a.createElement($,null,"computer"===n?e?a?a.isSunk()?i.a.createElement(I,null,i.a.createElement(W,null),o):i.a.createElement(F,null,i.a.createElement(W,null),o):i.a.createElement(J,null,o):i.a.createElement(G,{onClick:r},o):"player"===n?e?a?a.isSunk()?i.a.createElement(I,null,i.a.createElement(W,null),o):i.a.createElement(G,null,i.a.createElement(W,null),o):i.a.createElement(J,null,o):i.a.createElement(F,{ref:h},o):void 0)}function K(){var t=Object(r.a)(["\n\tmargin-left: 50px;\n\tborder-collapse: collapse;\n\tcursor: default;\n\tdisplay: inline-block;\n\tposition: relative;\n"]);return K=function(){return t},t}function L(){var t=Object(r.a)(["\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont: inherit;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n"]);return L=function(){return t},t}function N(){var t=Object(r.a)(["\n\tposition: relative;\n\tfloat: left;\n\twidth: 50%;\n\topacity: ",";\n\tpointer-events: ",";\n"]);return N=function(){return t},t}var Q=u.b.div(N(),(function(t){return t.gameOver?.4:1}),(function(t){return t.gameOver?"none":"auto"})),R=u.b.tr(L()),U=u.b.table(K());function V(t){var n=t.board,e=t.gameOver,r=t.shipClick,a=t.moveShip,o=t.gameStarted,c=n.getBattlefield(),u=n.getShips(),l=function(t){var e=[t.X,t.Y],c=e[0],l=e[1];return i.a.createElement(q,{canPlace:n.canPlaceShip,moveShip:a,key:"pBoard"+[c,l],x:c,y:l,onHit:t.hit,ship:t.ship,player:"player"},function(t,n){var e=u.find((function(e){return e.coords[0]===t&&e.coords[1]===n}));return e?i.a.createElement(E,{key:e.id,ship:e,onClick:r,length:e.length,id:e.id,vertical:e.vertical,gameStarted:o}):null}(c,l),z(c,l))},s=c.map((function(t){return l(t)})).reduce((function(t,n,e){return e%10===0&&t.push([]),t[t.length-1].push(n),t}),[]).map((function(t,n){return i.a.createElement(R,{key:n},t)}));return i.a.createElement(Q,{gameOver:e},i.a.createElement(U,null,i.a.createElement("tbody",null,s)))}function Z(){var t=Object(r.a)(["\n\tmargin: 0;\n\tborder-collapse: collapse;\n\tcursor: default;\n\tdisplay: inline-block;\n\tposition: relative;\n"]);return Z=function(){return t},t}function _(){var t=Object(r.a)(["\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont: inherit;\n\tfont-size: 100%;\n\tvertical-align: baseline;\n"]);return _=function(){return t},t}function tt(){var t=Object(r.a)(["\n\tfloat: right;\n\twidth: 50%;\n\tposition: relative;\n\topacity: ",";\n\tpointer-events: ",";\n"]);return tt=function(){return t},t}var nt=u.b.div(tt(),(function(t){return t.turn||t.gameOver||!t.gameStarted?.4:1}),(function(t){return t.turn||t.gameOver||!t.gameStarted?"none":"auto"})),et=u.b.tr(_()),rt=u.b.table(Z());function at(t){var n=t.board,e=t.attack,r=t.turn,a=t.gameOver,o=t.gameStarted,c=n.getBattlefield(),u=n.getShips();console.log(u);var l=c.map((function(t){var r=[t.X,t.Y],a=r[0],o=r[1];return i.a.createElement(q,{key:"cBoard"+[a,o],onHit:t.hit,ship:t.ship,player:"computer",onClick:function(){e(a,o,n)}},z(a,o))})).reduce((function(t,n,e){return e%10===0&&t.push([]),t[t.length-1].push(n),t}),[]).map((function(t,n){return i.a.createElement(et,{key:n},t)}));return i.a.createElement(nt,{turn:r,gameOver:a,gameStarted:o},i.a.createElement(rt,null,i.a.createElement("tbody",null,l)))}function it(){var t=Object(r.a)(["\n\tbackground-color: #97e673;\n\tborder-radius: 15px;\n\tdisplay: inline-block;\n\tcursor: pointer;\n\tcolor: #ffffff;\n\tfont-family: Arial;\n\tfont-size: 15px;\n\tfont-weight: bold;\n\tpadding: 10px 25px;\n\ttext-decoration: none;\n\tpointer-events: ",";\n\topacity: ",";\n\t&:hover {\n\t\tbackground-color: #59b02e;\n\t}\n\t&:active {\n\t\tposition: relative;\n\t\ttop: 1px;\n\t}\n"]);return it=function(){return t},t}function ot(){var t=Object(r.a)(["\n\tmargin-top: 30px;\n\ttext-align: center;\n"]);return ot=function(){return t},t}var ct=u.b.div(ot()),ut=u.b.a(it(),(function(t){return t.disabled?"none":"initial"}),(function(t){return t.disabled?.5:1}));function lt(t){return i.a.createElement(ct,null,i.a.createElement(ut,{onClick:t.onClick,disabled:t.disabled},"Play"),t.children)}function st(){var t=Object(r.a)(["\n\ttext-align: center;\n"]);return st=function(){return t},t}function ft(){var t=Object(r.a)(["\n\ttext-align: center;\n"]);return ft=function(){return t},t}function dt(){var t=Object(r.a)(["\n\twidth: 100%;\n\tpadding-top: 80px;\n\tmargin-left: 80px;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\t-ms-user-select: none;\n\tuser-select: none;\n\toverflow: hidden;\n"]);return dt=function(){return t},t}var pt=u.b.div(dt()),ht=u.b.header(ft()),gt=u.b.div(st()),mt=function(t){Object(f.a)(e,t);var n=Object(d.a)(e);function e(){var t;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))).state={pBoard:g(),cBoard:g(),player:m("player"),computer:m("computer"),playerTurn:!0,turn:!1,gameStarted:!1,gameOver:!1},t.attackBoard=function(n,e,r){if(!t.gameOver()){var a=t.state.playerTurn,i=t.state.player;if(a){var o=Object.assign({},r);!0!==i.attack(o,n,e)?(t.setState({cBoard:o}),t.setState({playerTurn:!a}),t.setState({turn:!0}),t.computerAttacks(),console.log(o.getBox(n,e))):t.setState({cBoard:o})}}},t.computerAttacks=function(){setTimeout((function(){if(console.log("computer attack"),!t.gameOver()){var n=Object.assign({},t.state.pBoard);!0===t.state.computer.randomAttack(n)?(t.setState({pBoard:n}),t.computerAttacks()):(t.setState({pBoard:n}),t.setState({playerTurn:!0}),t.setState({turn:!1}))}}),1e3)},t.shipClick=function(n){t.setState({temp:n}),console.log(n)},t.handleShip=function(n,e){var r=Object.assign({},t.state.pBoard);r.moveShip(t.state.temp,n,e),t.setState({pBoard:r})},t.moveShip=function(n,e,r){var a=Object.assign({},t.state.pBoard);a.moveShip(n,e,r),console.log(a.getBox(e,r)),t.setState({pBoard:a})},t.startGame=function(){t.setState({gameStarted:!0}),console.log("play")},t}return Object(s.a)(e,[{key:"componentWillMount",value:function(){console.log("Mounted");var t=this.state.pBoard,n=this.state.cBoard;t.autoFill(),n.autoFill(),n.randomPlacing(),this.setState({pBoard:t}),this.setState({cBoard:n})}},{key:"gameOver",value:function(){var t=this.state.pBoard,n=this.state.cBoard;if(t.allShipsSunk()||n.allShipsSunk())return this.setState({gameOver:!0}),!0}},{key:"getWinner",value:function(){var t=[this.state.pBoard,this.state.cBoard];return t[0].allShipsSunk()?"Computer won!":t[1].allShipsSunk()?"You won!":void 0}},{key:"render",value:function(){return console.log("render"),i.a.createElement(i.a.Fragment,null,i.a.createElement(ht,null,i.a.createElement("h1",null,"Battleship")),i.a.createElement(lt,{onClick:this.startGame,disabled:this.state.gameStarted},!this.state.gameStarted&&i.a.createElement("h3",null," Move your ships and click play to start")),i.a.createElement(pt,null,i.a.createElement(V,{board:this.state.pBoard,gameStarted:this.state.gameStarted,gameOver:this.state.gameOver,shipClick:this.shipClick,moveShip:this.moveShip}),i.a.createElement(at,{board:this.state.cBoard,attack:this.attackBoard,turn:this.state.turn,gameStarted:this.state.gameStarted,gameOver:this.state.gameOver})),i.a.createElement(gt,null,this.state.gameOver&&i.a.createElement("h3",null,this.getWinner()," ")))}}]),e}(a.Component),vt=e(42),bt=e(28);function St(){var t=Object(r.a)(["\n\tmin-width: 990px;\n\tmax-width: 1080px;\n\tmin-height: 100%;\n\tposition: relative;\n\tmargin: 0 auto;\n\tz-index: 1;\n\tbackground: #fff;\n"]);return St=function(){return t},t}var kt=u.b.div(St());var Ot=function(){return i.a.createElement(vt.a,{backend:bt.a},i.a.createElement(kt,null,i.a.createElement(mt,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function xt(){var t=Object(r.a)(['\nhtml {\n    min-height: 100%;\n    height: 100%;\n}\nbody {\n    font: 1em/1.25 "PT Sans",arial,sans-serif;\n\tmargin: 0;\n    padding: 0;\n    position: relative;\n    overflow-y: scroll;\n    cursor: default;\n    min-height: 100%;\n    background: #fff;\n    height: 100%;\n}\n']);return xt=function(){return t},t}var Et=Object(u.a)(xt());c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Et,null),i.a.createElement(Ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.f5bd524f.chunk.js.map