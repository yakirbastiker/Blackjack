!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dealerTurn=t.playerTurn=t.money=t.bet=t.playingDealer=t.playingUser=void 0,t.playerBet=function(e){t.bet=f=e,t.money=p-=f,g(),t.playerTurn=h=!0,(0,a.startHand)()},t.doubleUpdate=function(){t.money=p-=f,t.bet=f*=2,g(),(0,l.editChip)(),y()},t.turnChange=y,t.endOfHand=b,t.playerWonHand=m,t.dealerStart=function(){v&&(0,d.dealerPlay)()},t.showMoney=g,t.checkWhoWon=function(){for(var e=0,n=0,r=0;r<s.length;r++)e+=parseInt((0,c.checkCardValue)(s[r].value));for(var a=0;a<u.length;a++)n+=parseInt((0,c.checkCardValue)(u[a].value));e>n?(m(),(0,i.default)("player won the round")):n>e?((0,i.default)("player lose the round"),b()):((0,i.default)("its a tie"),t.money=p+=f,g(),b())};var r,a=n(1),o=n(2),i=(r=o)&&r.__esModule?r:{default:r},c=n(5),l=n(6),d=n(3);var s=[],u=[],f=0,p=1e3,h=!1,v=!1;function y(){t.playerTurn=h=!h,t.dealerTurn=v=!v}function b(){t.bet=f=0,t.dealerTurn=v=!1,t.playerTurn=h=!1,t.playingUser=s=[],t.playingDealer=u=[],a.deck.removeUI(),(0,l.removeChip)(),a.deck.checkDeck()}function m(){t.money=p+=2*f,(0,l.showChip)(f),g(),b()}function g(){document.querySelector("#money").innerHTML=p}t.playingUser=s,t.playingDealer=u,t.bet=f,t.money=p,t.playerTurn=h,t.dealerTurn=v},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.deck=void 0,t.startHand=function(){a.playingUser.push(d.deal()),a.playingUser.push(d.deal()),d.ui(a.playingUser[0],"user"),d.ui(a.playingUser[1],"user"),(0,c.check21)("user"),a.playingDealer.push(d.deal()),a.playingDealer.push(d.deal()),d.ui(a.playingDealer[0],"dealer"),d.ui(a.playingDealer[1],"hide")},n(7);var r=l(n(11)),a=n(0),o=l(n(13)),i=l(n(14)),c=n(4);function l(e){return e&&e.__esModule?e:{default:e}}var d=new r.default;t.deck=d,(0,a.showMoney)(),d.generateDeck(),d.shuffle(),(0,o.default)(),(0,i.default)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=document.createElement("div");t.classList.add("msg");var n=document.createTextNode(e);t.appendChild(n);var r=document.querySelector(".table");r.appendChild(t),setTimeout((function(){r.removeChild(t)}),2e3)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dealerPlay=function(){o.dealerTurn&&(r.deck.flipHideCard(),(0,a.check21)("dealer"))},t.dealerDraw=function(){var e=r.deck.deal();o.playingDealer.push(e),r.deck.ui(e,"dealer"),(0,a.check21)("dealer")};var r=n(1),a=n(4),o=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.check21=function(e){var t=0;if("user"===e)for(var n=0;n<a.playingUser.length;n++)t+=parseInt((0,c.checkCardValue)(a.playingUser[n].value));else for(var r=0;r<a.playingDealer.length;r++)t+=parseInt((0,c.checkCardValue)(a.playingDealer[r].value));if("user"===e)if(t>21){if((0,l.checkAinHand)(e),t>21){(0,l.checkAinHand)(e),t=0;for(var o=0;o<a.playingUser.length;o++)t+=parseInt((0,c.checkCardValue)(a.playingUser[o].value));t>21&&((0,i.default)("player lose. over 21"),(0,a.endOfHand)())}}else 21===t&&((0,i.default)("user have blackjeck !!!"),(0,a.playerWonHand)());else if(t>21){if((0,l.checkAinHand)(e),t>21){(0,l.checkAinHand)(e),t=0;for(var s=0;s<a.playingDealer.length;s++)t+=parseInt((0,c.checkCardValue)(a.playingDealer[s].value));t>21&&((0,i.default)("Dealer lose over 21, player won the round"),(0,a.playerWonHand)())}}else 21===t?((0,i.default)("dealer blackjeck, Player lose the round"),(0,a.endOfHand)()):t<=16?setTimeout((function(){(0,d.dealerDraw)()}),1500):(0,a.checkWhoWon)()};var r,a=n(0),o=n(2),i=(r=o)&&r.__esModule?r:{default:r},c=n(5),l=n(12),d=n(3)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkCardValue=function(e){"J"===e||"Q"===e||"K"===e?e=10:"A"===e&&(e=11);return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.showChip=function(e){var t=document.createElement("div");t.classList.add("dashed-circle");var n=document.createTextNode(e);t.appendChild(n),document.querySelector(".chip").appendChild(t)},t.editChip=function(){var e=document.querySelector(".dashed-circle"),t=e.innerHTML;e.innerHTML=""+2*t},t.removeChip=function(){setTimeout((function(){document.querySelector(".chip").innerHTML=""}),5e3)}},function(e,t,n){var r=n(8),a=n(9);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var o={insert:"head",singleton:!1},i=(r(a,o),a.locals?a.locals:{});e.exports=i},function(e,t,n){"use strict";var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],a=0;a<e.length;a++){var o=e[a],l=t.base?o[0]+t.base:o[0],d=n[l]||0,s="".concat(l," ").concat(d);n[l]=d+1;var u=c(s),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:s,updater:y(f,t),references:1}),r.push(s)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var o=document.createTextNode(a),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function y(e,t){var n,r,a;if(t.singleton){var o=v++;n=h||(h=d(t)),r=f.bind(null,n,o,!1),a=f.bind(null,n,o,!0)}else n=d(t),r=p.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=c(n[r]);i[a].references--}for(var o=l(e,t),d=0;d<n.length;d++){var s=c(n[d]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=o}}}},function(e,t,n){(t=n(10)(!1)).push([e.i,"*{padding:0;margin:0}body{box-sizing:border-box;height:100vh;background-color:#ccc;font-family:'Georgia', serif}.card{width:60px;height:100px;float:left;margin-right:5px;margin-bottom:5px;border-radius:2px;max-width:60px;position:relative;perspective:1000px}.card__inner{position:relative;width:100%;height:100%;text-align:center;transition:transform 0.8s;transform-style:preserve-3d;animation:flipCard 1s ease;animation-fill-mode:forwards}.card__inner-back{position:relative;width:100%;height:100%;text-align:center;transition:transform 0.8s;transform-style:preserve-3d;animation-fill-mode:forwards}.card__front{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden}.card__back{position:absolute;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transform:rotateY(180deg);border:1px solid black}.card__suit{width:100%;display:block}.card__suit--top{text-align:left;padding-left:5px}.card__suit--bottom{position:absolute;bottom:5px;right:5px;text-align:right}.card__number{position:absolute;top:40%;font-size:1.2em}.red{color:#FF0000}.black{color:#000}@keyframes flipCard{from{transform:rotateY(0deg)}to{transform:rotateY(180deg)}}.bet__control{border:1px solid #333;border-radius:10px;width:120px;background-color:#035AA6;display:flex;justify-content:space-between;align-items:center;padding:5px 15px;font-size:2em}.bet__control__rise-btn{text-decoration:none;transition:all .2s}.bet__control__rise-btn:hover{color:#F2AE2E}.bet__control__sum{color:#fff;margin:0 10px}.bet__control__decrease-btn{text-decoration:none;transition:all .2s}.bet__control__decrease-btn:hover{color:#F2AE2E}.action__control{display:flex;width:350px;justify-content:space-between;height:min-content;max-height:40px}.action__control_hit{background-color:#4F37A6;border-radius:10px;padding:10px;text-align:center;font-size:20px;color:#fff;cursor:pointer;width:90px;text-transform:uppercase;transition:all .3s}.action__control_hit:hover{transform:translateY(-3px)}.action__control_stand{background-color:#F2AE2E;border-radius:10px;padding:10px;text-align:center;font-size:20px;color:#fff;cursor:pointer;width:90px;text-transform:uppercase;transition:all .3s}.action__control_stand:hover{transform:translateY(-3px)}.action__control_double{background-color:#F23D3D;border-radius:10px;padding:10px;text-align:center;font-size:20px;color:#fff;cursor:pointer;width:90px;text-transform:uppercase;transition:all .3s}.action__control_double:hover{transform:translateY(-3px)}.dashed-circle{position:relative;display:block;margin:30px auto;width:100px;height:100px;border:13px dashed #fff;border-radius:50%;line-height:100px;text-align:center;font-family:Helvetica;color:#fff}.dashed-circle:before{position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;margin:-16px;border-radius:50%;background:#F23D3D;content:''}.dashed-circle:after{position:absolute;z-index:-1;top:0;right:0;bottom:0;left:0;margin:5px;border:3px dashed #fff;border-radius:50%;background:rgba(0,0,0,0.4);content:''}.table{width:1000px;height:500px;background-color:#03A678;padding:20px;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.controls{display:flex;justify-content:space-around;position:absolute;bottom:20px;width:100%;height:10%}.start{background-color:#F23D3D;border-radius:20px;text-align:center;width:60px;height:min-content;max-height:40px;padding:10px 20px;transition:all .3s;cursor:pointer;color:#fff}.start:hover{transform:translateY(-3px)}.game{height:90%;width:100%;margin-bottom:10px;display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:repeat(2, 1fr);grid-template-areas:\"dealer  deck\"\r \"player chip\"}.dealer{grid-area:dealer}.deck{grid-area:deck;display:flex;justify-content:flex-end}.player{grid-area:player;display:flex;flex-wrap:wrap}.chip{grid-area:chip;display:flex}.msg{background-color:#F2AE2E;padding:10px;text-align:center;font-size:1.3em;color:#fff;position:absolute;top:80px;right:10px;width:450px;max-width:max-content}.money{font-size:20px;color:#fff;text-transform:uppercase;background-color:rgba(0,0,0,0.2);display:table;padding:5px}#money{color:#F23D3D;font-size:1.2em}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(i=r,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([a]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.deck=[]}return r(e,[{key:"generateDeck",value:function(){for(var e,t,n=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],r=["Clubs","Diamonds","Spades","Hearts"],a=0;a<r.length;a++)for(var o=0;o<n.length;o++)this.deck.push({value:t=n[o],name:t+" of "+(e=r[a]),suit:e})}},{key:"shuffle",value:function(){for(var e=this.deck.length,t=void 0,n=void 0;0!=e;)n=Math.floor(Math.random()*e),e-=1,t=this.deck[e],this.deck[e]=this.deck[n],this.deck[n]=t}},{key:"deal",value:function(){return this.deck.shift()}},{key:"ui",value:function(e,t){var n=document.createElement("div"),r=this.blackORred(e.suit),a=void 0;a="hide"!==t?'\n                        <div class="card__inner">\n                            <div class="card__front">\n                                <img src="./../img/card_back.png" alt="back card" width="75px" height="100px">\n                            </div>\n  \n                         <div class="card__back">\n                             <span class="card__suit card__suit--top">'+r.symbol+'</span>\n                             <span class="card__number">'+e.value+' </span>\n                            <span class="card__suit card__suit--bottom">'+r.symbol+"</span>\n                         </div>\n                        </div>\n        ":'\n                        <div class="card__inner-back">\n                            <div class="card__front">\n                                <img src="./../img/card_back.png" alt="back card" width="75px" height="100px">\n                            </div>\n  \n                         <div class="card__back">\n                             <span class="card__suit card__suit--top">'+r.symbol+'</span>\n                             <span class="card__number">'+e.value+' </span>\n                            <span class="card__suit card__suit--bottom">'+r.symbol+"</span>\n                         </div>\n                        </div>\n        ",n.classList.add("card"),n.classList.add(""+r.color),n.innerHTML=a,"user"===t?document.querySelector(".player").appendChild(n):document.querySelector(".dealer").appendChild(n),setTimeout((function(){n.style.backgroundColor="#fff"}),1500)}},{key:"removeUI",value:function(){setTimeout((function(){document.querySelector(".player").innerHTML="",document.querySelector(".dealer").innerHTML=""}),5e3)}},{key:"flipHideCard",value:function(){var e=document.querySelector(".card__inner-back");e.classList.remove("card__inner-back"),e.classList.add("card__inner")}},{key:"blackORred",value:function(e){return"Clubs"===e?{symbol:"♣",color:"black"}:"Diamonds"===e?{symbol:"♦",color:"red"}:"Spades"===e?{symbol:"♠",color:"black"}:{symbol:"♥",color:"red"}}},{key:"checkDeck",value:function(){this.deck.length<10&&(this.deck=[],this.generateDeck(),this.shuffle())}}]),e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.checkAinHand=function(e){if("user"===e){var t=r.playingUser.findIndex((function(e){return"A"===e.value}));t>=0&&(r.playingUser[t].value=1)}else{var n=r.playingDealer.findIndex((function(e){e.value}));n>=0&&(r.playingDealer[n].value=1)}};var r=n(0)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=0,t=document.querySelector("#sum");t.innerHTML=e;var n=document.querySelector("#rise"),r=document.querySelector("#decrease");n.addEventListener("click",(function(){a.playerTurn||a.dealerTurn||(e>=a.money?e=a.money:e+=100,t.innerHTML=e)})),r.addEventListener("click",(function(){a.playerTurn||a.dealerTurn||(e<=0?e=0:e-=100,t.innerHTML=e)})),document.querySelector(".start").addEventListener("click",(function(){a.playerTurn||a.dealerTurn||(e>0?((0,c.showChip)(e),(0,a.playerBet)(e),e=0,t.innerHTML=e):(0,i.default)("You need to bet before you start playing "))}))};var r,a=n(0),o=n(2),i=(r=o)&&r.__esModule?r:{default:r},c=n(6)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=document.querySelector("#hit"),t=document.querySelector("#stand"),n=document.querySelector("#double");e.addEventListener("click",(function(){if(a.playerTurn){var e=o.deck.deal();a.playingUser.push(e),o.deck.ui(e,"user"),(0,i.check21)("user")}})),t.addEventListener("click",(function(){a.playerTurn&&((0,d.default)("Dealer turn"),(0,a.turnChange)(),(0,c.dealerPlay)())})),n.addEventListener("click",(function(){if(a.playerTurn){(0,d.default)("double!,  Dealer turn");var e=o.deck.deal();a.playingUser.push(e),o.deck.ui(e,"user"),(0,a.doubleUpdate)(),(0,i.check21)("user"),(0,a.dealerStart)()}}))};var r,a=n(0),o=n(1),i=n(4),c=n(3),l=n(2),d=(r=l)&&r.__esModule?r:{default:r}}]);