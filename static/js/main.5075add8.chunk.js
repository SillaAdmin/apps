(this["webpackJsonpsilla-apps"]=this["webpackJsonpsilla-apps"]||[]).push([[0],{100:function(e,t,n){},112:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(32),o=n.n(r),c=(n(100),n(12)),s=n(49),l=n(22),u=n.n(l),h=(n(72),n(83),Math.random),f=Math.ceil,p=Math.floor,d=(Math.tanh,function(e,t){return j(t)?e:""}),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5;return h()<e},b=function(e,t){var n=[f(e),p(t)],i=n[0],a=n[1];return p(h()*(a-i+1))+i},m=function(e){return null!==e&&void 0!==e&&""!==e.toString()},g=function(e,t){return function(e,t){return 0===e.length?t:e}(e.map((function(e){return"boolean"===typeof e?e:void 0!==t&&t(e)})),[!1,!1])},x=function(e,t){if(!e){if(t=t||"Assertion failed","undefined"!==typeof Error)throw new Error(t);throw t}},O=function(e){return e[b(0,e.length-1)]};var v=function(e){return new Promise((function(t){return setTimeout(t,e)}))},y=function(){},k=function(e,t){var n,i=e.split(""),a=Object(c.a)(i,2),r=a[0],o=a[1],s=[],l=new RegExp("".concat(r,"([^").concat(o,"^").concat(r,"]+)").concat(o),"g");do{(n=l.exec(t))&&s.push(n[1])}while(n);return s},S=function e(t,n){var i=t.trim();return g(["{","}"],(function(e){return!i.includes(e)})).reduce((function(e,t){return e||t}))?n(i):(k("{}",i).forEach((function(e){var t=n(e.trim());i=i.replace("{".concat(e,"}"),m(t)?t:"")})),e(i,n))},_=["tu","je","il","elle","ils","elles","vous","nous","te","me","se","le","la","les","ton","mon","ta","sa","tes","mes","ses","votre","notre","leur","si","comment","que","quoi","=","ne","age","anglais","cor\xe9en","connaissance","ecole","genre","nom","fort","heureux","aller","comprendre","dire","demander","donner","etre","excuser","faire","ordonner","parler","saluer","supplier","voir","futur","imp\xe9ratif","parfait","pass\xe9","passif","base","formel","honor"],F=function(e){var t=_.includes(e);return t||y("Unknown token:",e),t},w=function(e){var t=!0;return S(e,(function(e){return!0===t&&(t=function(e){return!!/^[a-z0-9\s=]+$/i.test(e)&&!e.split(" ").map((function(e){return e.trim()})).filter(m).map(F).toString().includes("false")}(e)),""})),t},M=function(e,t,n){return function(e,t){var n=e.toLowerCase();return x(w(n),"Invalid statement"),!t.map((function(e){return n.includes(e)})).toString().includes("false")}(e,t)?n:[]},H=function(e){return function(t){var n,i=Object(s.a)(e);try{for(i.s();!(n=i.n()).done;){var a=Object(c.a)(n.value,2),r=a[0],o=a[1],l=M(t,r,o);if(l.length>0)return l}}catch(u){i.e(u)}finally{i.f()}return[]}},z=function(e){return e.length?function(e){for(var t,n=e;null!==(t=/(\([^)]+\))\?/g.exec(n));)n=n.replace(t[0],d(t[1]));for(;null!==(t=/\[([^\]]+)\]/g.exec(n));)n=n.replace(t[0],d(t[1]));for(var i=0;null!==(t=/\(([^)]+)\)/g.exec(n));){var a,r=t[1];if((a=r.split("|")).length&&(r=a[b(0,a.length-1)]),n=n.replace(t[0],r),i++>100)return n}return n.replace(/\s+/g," ").trim()}(O(e)):""},I=H([[["me","excuser"],["(I'm s|S)orry( ...)?","Pardon( me)?","I beg your pardon"]],[["demander","si","tu","parler","cor\xe9en"],["Do you speak Korean?"]],[["je","ne","parler","anglais"],["(Sorry, )?I don't speak English"]]]),W={kr:H([[["je","te","dire","mon","age"],["{}\uc0b4 \uc784\ub2c8\ub2e4"]],[["je","te","dire","mon","genre"],["\uc5ec\uc790 \uc784\ub2c8\ub2e4"]],[["me","excuser","fort","formel"],["\uc8c4\uc1a1 \ud569\ub2c8\ub2e4"]],[["me","excuser","fort"],["\uc8c4\uc1a1 \ud574\uc694"]],[["me","excuser"],["\ubbf8\uc548 \ud574\uc694"]],[["heureux","te","voir"],["\ub9cc\ub098\uc11c (\ubc18\uac11\uc2b5\ub2c8\ub2e4|\ubc18\uac00\uc6cc\uc694)"]],[["heureux","faire","ta","connaissance"],["\uc54c\uac8c \ub3fc \uae30\uc069\ub2c8\ub2e4"]],[["je","te","dire","mon","nom"],["\uc81c \uc774\ub984\uc740 {}\uc608\uc694","(\uc800\ub294 )?{}\ub77c\uace0 (\ud574\uc694|\ud569\ub2c8\ub2e4)"]],[["je","te","saluer"],["\uc548\ub155(\ud558\uc138\uc694)?"]],[["je","te","demander","ton","nom"],["\uc774\ub984\uc774 \ubb50\uc608\uc694?"]],[["je","ne","comprendre"],["\ub9d0 \ucacc \uc815\ud655\ud558\uc5d0 \ud574\ubcf4\uc138\uc694","(\uadf8\uac74 |\uadf8\uac8c )?\ubb34\uc2a8 \ub73b\uc774\uc5d0\uc694?","\uc758\ubbf8\ub97c \ubab0\uc74d\ub2c8\ub2e4"]]]),en:I};Array.prototype.att=function(e){return this.map((function(t){return t.att(e)}))},String.prototype.att=function(e){var t=this,n=function(e){t=t.replace(/\{\}/,e)};return Array.isArray(e)?e.forEach(n):n(e),t};var C=n(153),D=n(154),T=n(64),L=n(11),E=n(51),B=n(33),P=n(52),R=function(){function e(t){var n=this;Object(B.a)(this,e),this._props=void 0,this._emotion={},this._impression={},this._history=[],this._inputStack=[],this._thoughts=[],this._expectation=0,this._patience=1,this._utterThreshold=.4,this._currentLangIndex=0,this._currentLang=function(){return Object.keys(n._props.dictionary)[n._currentLangIndex]},this._express=function(e){return z(n._props.dictionary[n._currentLang()](e))},this._power=!1,this._nHeartbeats=0,this._heartbeatRate=1e3,this._props=t}return Object(P.a)(e,[{key:"emotion",get:function(){return this._emotion}},{key:"reset",value:function(){y("reset"),this._nHeartbeats=0,this._inputStack=[],this._thoughts=["je te saluer"],this._patience=1,this._expectation=0}},{key:"receive",value:function(e){this._inputStack.push(e)}},{key:"_interpret",value:function(e){}},{key:"_think",value:function(){this._inputStack.forEach(this._interpret),0===this._inputStack.length&&(this._patience*=.8,y("patience",this._patience))}},{key:"_utter",value:function(){this._patience=1;var e=this._props.onUtter||y,t=this._thoughts.pop();t&&e(this._express(t))}},{key:"power",set:function(e){this._power=e,this.heartbeat()}},{key:"heartbeat",value:function(){var e=Object(E.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._power){e.next=2;break}return e.abrupt("return");case 2:return y("heartbeat",this._nHeartbeats),this._think(),this._patience<=this._utterThreshold&&this._utter(),this._nHeartbeats+=1,e.next=8,v(this._heartbeatRate);case 8:this.heartbeat();case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),A=n(138),N=n(136),q=n(10),V=n(155),J=n(2),K=function(e){return Object(J.jsx)(V.a,Object(q.a)(Object(q.a)({},e),{},{display:"flex"}))},U=function(e){return Object(J.jsx)(K,Object(q.a)(Object(q.a)({},e),{},{flexDirection:"column"}))},$=function(e){return Object(J.jsx)(K,Object(q.a)(Object(q.a)({alignItems:"center"},e),{},{flexDirection:"row"}))},G=n(62),Y=n(134),Q=n(135),X=function(e){var t=e.disabled,n=e.bg,i=e.label,a=Object(G.a)(e,["disabled","bg","label"]);return Object(J.jsx)(V.a,{borderRadius:8,boxShadow:1,bgcolor:n,pl:2,children:Object(J.jsx)(Y.a,{disabled:t,control:Object(J.jsx)(Q.a,Object(q.a)({},a)),label:i})})},Z=function(e){return Object(J.jsx)(K,Object(q.a)({alignItems:"center",justifyContent:"center"},e))},ee=n(137),te=n(159),ne=n(158),ie=n(115),ae=n(77),re=n.n(ae),oe=function(e){var t=e.disabled,n=e.icon,i=e.onSubmit,a=e.placeholder,r=Object(G.a)(e,["disabled","icon","onSubmit","placeholder"]),o=ce();return Object(J.jsxs)(N.a,{elevation:0,component:"form",className:o.root,onSubmit:i,children:[Object(J.jsx)(ne.a,Object(q.a)({autoFocus:!0,className:o.input,inputProps:{"aria-label":a},placeholder:a},r)),Object(J.jsx)(ie.a,{disabled:t,type:"submit",className:o.iconButton,"aria-label":"search",size:"small",children:n||Object(J.jsx)(re.a,{})})]})},ce=Object(ee.a)((function(e){return Object(te.a)({root:{flex:1,display:"flex",alignItems:"center",margin:e.spacing(1),background:e.palette.secondary.light},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4}})})),se=n(139),le=320,ue=568,he=function(e){var t=e.person,n=Object(A.a)(!1),a=Object(c.a)(n,2),r=a[0],o=a[1],s=Object(A.a)(!1),l=Object(c.a)(s,2),u=l[0],h=l[1];Object(i.useEffect)((function(){r&&setTimeout(o,400)}),[r,o]),Object(i.useEffect)((function(){t.power=u,u||t.reset(),o()}),[u,t,o]);var f=Object(i.useRef)();return Object(J.jsx)(Z,{height:"100vh",children:Object(J.jsx)(N.a,{elevation:1,children:Object(J.jsxs)(U,{width:le,height:ue,children:[Object(J.jsx)($,{alignItems:"flex-start",m:1,flex:1,children:Object(J.jsx)(X,{disabled:r,onChange:h,label:"Power"})}),Object(J.jsx)($,{children:Object(J.jsx)(oe,{inputRef:f,onSubmit:function(e){e.preventDefault(),f.current&&(t.receive(f.current.value),f.current.value="")},placeholder:"say something ...",icon:Object(J.jsx)(se.a,{})})})]})})})},fe=function(){var e=new R({dictionary:W,gender:"F",firstName:"Miha"});return Object(J.jsx)(he,{person:e})},pe=n(81),de=n(150),je=n(86),be=n(140),me=function(){return Object(J.jsx)(V.a,{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"row",pt:1,pb:1,children:Object(J.jsxs)(je.a,{variant:"body2",children:["\xa9",(new Date).getFullYear(),"\xa0",Object(J.jsx)(be.a,{href:"https://www.sillakorean.com?ref=apps",children:"The Silla Language Education Centre"})]})})},ge=n(78),xe=n(141),Oe=n(142),ve=n(143),ye=n(144),ke=n(145),Se=n(146),_e=n(147),Fe=function(e){var t=e.cols,n=e.rows,i=Object(ge.a)(t),a=i[0],r=i.slice(1);return Object(J.jsx)(xe.a,{elevation:0,component:N.a,children:Object(J.jsxs)(Oe.a,{"aria-label":"simple table",children:[Object(J.jsx)(ve.a,{children:Object(J.jsxs)(ye.a,{children:[Object(J.jsx)(ke.a,{children:a}),r.map((function(e,t){return Object(J.jsx)(ke.a,{align:"center",children:Object(J.jsx)(Se.a,{variant:"contained",color:"secondary",size:"small",children:e})},"cth-".concat(t))}))]})}),Object(J.jsx)(_e.a,{children:n.map((function(e,n){return Object(J.jsx)(ye.a,{children:t.map((function(t,i){return Object(J.jsx)(ke.a,{padding:"none",component:0===i?"th":void 0,scope:0===i?"row":void 0,align:i>0?"center":void 0,children:0===i?Object(J.jsx)(V.a,{pb:.4,pt:.4,pl:2.5,children:e[i]}):e[i]},"ctb-c-".concat(n,"-").concat(i))}))},"ctb-r-".concat(n))}))})]})})},we=n(156),Me=n(160),He=n(148),ze=n(149),Ie=function(e){var t=e.list,n=e.onChange,i=e.defaultValue;return Object(J.jsxs)(He.a,{component:"fieldset",children:[Object(J.jsx)(ze.a,{component:"legend"}),Object(J.jsx)(Me.a,{row:!0,"aria-label":"custom radio group",name:"custom radio group",defaultValue:i,onChange:n,children:t.map((function(e,t){return Object(J.jsx)(Y.a,{value:e.value,control:Object(J.jsx)(we.a,{color:"primary"}),label:e.label},"radio-".concat(t))}))})]})},We=["Seion","Dakuon","Handakuon","Chyouon"],Ce=["","a","i","u","e","o"],De={Seion:["","k","s","t","n","h","m","y","r","w"],Dakuon:["","g","z","d","","b","","","",""],Handakuon:["","","","","","p","","","",""]},Te=["7,1","7,3","9,2"],Le=[1,2,3,5],Ee=[5],Be="\u3042 \u304b \u3055 \u305f \u306a \u306f \u307e \u3084 \u3089 \u308f".split(" "),Pe="\u3042 \u3044 \u3046 \u3048 \u304a".split(" "),Re={Hiragana:{Seion:["\u3042\u3044\u3046\u3048\u304a".split(""),"\u304b\u304d\u304f\u3051\u3053".split(""),"\u3055\u3057\u3059\u305b\u305d".split(""),"\u305f\u3061\u3064\u3066\u3068".split(""),"\u306a\u306b\u306c\u306d\u306e".split(""),"\u306f\u3072\u3075\u3078\u307b".split(""),"\u307e\u307f\u3080\u3081\u3082".split(""),"\u3084\u3000\u3086\u3000\u3088".split(""),"\u3089\u308a\u308b\u308c\u308d".split(""),"\u308f\u3090\u3000\u3091\u3092".split("")],Dakuon:[void 0,"\u304c\u304e\u3050\u3052\u3054".split(""),"\u3056\u3058\u305a\u305c\u305e".split(""),"\u3060\u3062\u3065\u3067\u3069".split(""),void 0,"\u3070\u3073\u3076\u3079\u307c".split("")],Handakuon:[void 0,void 0,void 0,void 0,void 0,"\u3071\u3074\u3077\u307a\u307d".split("")]},Katakana:{Seion:["\u30a2\u30a4\u30a6\u30a8\u30aa".split(""),"\u30ab\u30ad\u30af\u30b1\u30b3".split(""),"\u30b5\u30b7\u30b9\u30bb\u30bd".split(""),"\u30bf\u30c1\u30c4\u30c6\u30c8".split(""),"\u30ca\u30cb\u30cc\u30cd\u30ce".split(""),"\u30cf\u30d2\u30d5\u30d8\u30db".split(""),"\u30de\u30df\u30e0\u30e1\u30e2".split(""),"\u30e4\u3000\u30e6\u3000\u30e8".split(""),"\u30e9\u30ea\u30eb\u30ec\u30ed".split(""),"\u30ef\u30f0\u3000\u30f1\u30f2".split("")],Dakuon:[void 0,"\u30ac\u30ae\u30b0\u30b2\u30b4".split(""),"\u30b6\u30b8\u30ba\u30bc\u30be".split(""),"\u30c0\u30c2\u30c5\u30c7\u30c9".split(""),void 0,"\u30d0\u30d3\u30d6\u30d9\u30dc".split("")],Handakuon:[void 0,void 0,void 0,void 0,void 0,"\u30d1\u30d4\u30d7\u30da\u30dd".split("")]}},Ae=n(151),Ne=n(152),qe=function(){return Object(J.jsxs)(V.a,{display:"flex",flexDirection:"row",alignItems:"center",children:[Object(J.jsx)(Ae.a,{fontSize:"small"}),"\u884c\uff0f\u6bb5",Object(J.jsx)(Ne.a,{fontSize:"small"})]})},Ve=function(){var e=Object(A.a)(!0),t=Object(c.a)(e,2),n=t[0],a=t[1],r=Object(A.a)(!0),o=Object(c.a)(r,2),s=o[0],l=o[1],u=Object(i.useState)("Seion"),h=Object(c.a)(u,2),f=h[0],p=h[1],d=Object(de.a)(),j="Dakuon"===f?Le:"Handakuon"===f?Ee:[],b=n?"\u5e73":"\u7247",m=n?Re.Hiragana[f]:Re.Katakana[f],g=Be.map((function(e,t){return[e].concat(m[t])}));return De[f].forEach((function(e,t){Ce.forEach((function(n,i){g[t][i]&&s&&!Te.includes("".concat(t,",").concat(i-1))&&(g[t][i]=Object(J.jsxs)(V.a,{fontSize:i>0?20:void 0,justifyContent:"center",display:"flex",children:[g[t][i],"\xa0",e,n]}))})),j.includes(t)&&Ce.forEach((function(e,n){g[t][n]=Object(J.jsx)(V.a,{color:"Dakuon"===f?"#07e":"#e80",children:g[t][n]})})),Ce.forEach((function(e,n){g[t][n]=Object(J.jsx)(V.a,{fontSize:n>0?20:void 0,width:60,display:"inline-box",children:g[t][n]})}))})),Object(J.jsxs)(V.a,{display:"flex",flexDirection:"column",children:[Object(J.jsxs)(V.a,{p:1,children:[Object(J.jsxs)($,{flexWrap:"wrap",children:[Object(J.jsx)(je.a,{variant:"h4",children:"Goj\u016bon"}),Object(J.jsx)(V.a,{p:1}),Object(J.jsxs)($,{children:[Object(J.jsx)(X,{bg:d.palette.secondary.light,label:b,checked:n,onChange:a,name:"toggle hiragana"}),Object(J.jsx)(V.a,{p:1}),Object(J.jsx)(X,{bg:d.palette.secondary.light,label:"R\u014dmaji",checked:s,onChange:l,name:"toggle romaji"})]}),Object(J.jsx)(V.a,{p:2}),Object(J.jsx)(Ie,{defaultValue:We[0],onChange:function(e,t){p(t)},list:[{label:"\u6e05\u97f3",value:We[0]},{label:"\u6fc1\u97f3",value:We[1]},{label:"\u534a\u6fc1\u97f3",value:We[2]}]})]}),Object(J.jsx)(V.a,{p:1}),Object(J.jsx)(Fe,{cols:[Object(J.jsx)(qe,{})].concat(Object(pe.a)(Pe)),rows:g}),Object(J.jsx)(V.a,{p:1}),Object(J.jsxs)(V.a,{pl:2,children:["Haneruon:\xa0",Object(J.jsxs)(je.a,{display:"inline",variant:"h5",children:[n?"\u3093":"\u30f3","\xa0",s?"n":""]})]})]}),Object(J.jsx)(V.a,{p:1,bgcolor:d.palette.secondary.light,children:Object(J.jsx)(me,{})})]})},Je=["\u627e\u4e0d\u5230\u9801\u9762","\u95a3\u4e0b\u6240\u5c0b\u627e\u7684\u9801\u9762\u4e26\u4e0d\u5b58\u5728\uff0c\u53ef\u80fd\u7531\u65bc\u7db2\u5740\u5df2\u7d93\u8b8a\u66f4\uff0c\u6216\u9801\u9762\u5df2\u906d\u522a\u9664\u3002","\u4e0d\u4fbf\u4e4b\u8655\uff0c\u656c\u8acb\u898b\u8ad2\u3002"],Ke=["404 Page Not Found","The page you are looking for may have been removed or may not exist.","We apologise for any inconvenience this may cause."],Ue=function(e){var t=Object(c.a)(e,3),n=t[0],i=t[1],a=t[2];return Object(J.jsxs)(Z,{minHeight:200,flexDirection:"column",children:[Object(J.jsx)(V.a,{mb:4,className:"title",children:n}),Object(J.jsx)(je.a,{paragraph:!0,children:i}),Object(J.jsx)(je.a,{paragraph:!0,children:a})]})},$e=function(){return Object(J.jsxs)(Z,{height:"100vh",flexDirection:"column",children:[Ue(Je),Ue(Ke)]})},Ge=n(157),Ye=function(e){var t=Object(i.useRef)(),n=Object(Ge.a)(),a=Object(c.a)(n,2),r=a[0],o=a[1],l=Object(A.a)(!1),h=Object(c.a)(l,2),f=h[0],p=h[1],d=function(){var e=Object(E.a)(u.a.mark((function e(n){var i,a,r,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.current){e.next=3;break}return e.abrupt("return");case 3:if(!/\w+/.test(t.current.value)){e.next=6;break}return Xe(),e.abrupt("return");case 6:p(),i=t.current.value.split("").filter((function(e){return!!e.trim()})),a=Object(s.a)(i),e.prev=9,a.s();case 11:if((r=a.n()).done){e.next=21;break}return c=r.value,e.next=15,v(800);case 15:return e.next=17,Qe(c);case 17:(l=e.sent)&&o.push(l);case 19:e.next=11;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(9),a.e(e.t0);case 26:return e.prev=26,a.f(),e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[9,23,26,29]])})));return function(t){return e.apply(this,arguments)}}();return Object(J.jsx)(Z,{height:"100vh",children:Object(J.jsx)(N.a,{elevation:1,children:Object(J.jsxs)(U,{flex:1,width:le,height:ue,children:[Object(J.jsx)($,{p:1,children:"\u9019\u500b\u540d\u5b57\u7684\u97d3\u6587\u662f...\uff1f"}),Object(J.jsx)($,{children:Object(J.jsx)(oe,{onChange:function(){p(!1),o.clear()},disabled:f,placeholder:"\u8f38\u5165\u4e2d\u6587\u540d",inputRef:t,onSubmit:d})}),Object(J.jsx)(Z,{pb:2,pt:2,children:Object(J.jsx)(je.a,{variant:"h4",children:r.map((function(e){return e.slice(-1)})).join("")})}),r.map((function(e,n){var i;return Object(J.jsxs)($,{p:1,children:[Object(J.jsxs)(je.a,{display:"inline",children:[null===(i=t.current)||void 0===i?void 0:i.value[n],"\uff1a"]}),Object(J.jsx)(Se.a,{size:"small",variant:"contained",color:"secondary",children:e})]},"meaning-".concat(n))})),Object(J.jsx)($,{flex:1}),Object(J.jsx)(me,{})]})})})},Qe=function(e){var t="".concat("https://sheltered-bayou-52655.herokuapp.com","/https://ac-dict.naver.com/hanja/ac?_callback=window.__jindo2_callback.$6607&q=").concat(e,"&q_enc=utf-8&st=111&r_format=json&r_enc=utf-8");return fetch(t).then((function(e){return e.text()})).then((function(e){return k("{}",e)})).then((function(e){return"{ ".concat(e," }")})).then(JSON.parse).then((function(e){return e.items[0][0][1][0]})).then((function(e){return y(e),e})).catch((function(e){y(e),Xe()}))},Xe=function(){return alert("\u62b1\u6b49\uff0c\u627e\u4e0d\u5230\u7d50\u679c")},Ze=function(){return Object(J.jsxs)(L.c,{children:[Object(J.jsx)(L.a,{exact:!0,path:"/gojuon",component:Ve}),Object(J.jsx)(L.a,{exact:!0,path:"/miha",component:fe}),Object(J.jsx)(L.a,{exact:!0,path:"/chinese-name-in-hangul",component:Ye}),Object(J.jsx)(L.a,{component:$e})]})},et=n(82),tt=n(80),nt=n(79),it=(new(function(e){Object(et.a)(n,e);var t=Object(tt.a)(n);function n(){var e;return Object(B.a)(this,n),(e=t.call(this)).options.palette=Object(q.a)(Object(q.a)({},e.options.palette),{},{primary:{light:"#fea",main:"#faaa80",dark:"#fa0",contrastText:"#fff"},secondary:{light:"#eeefff",main:"#7ad",dark:"#47a",contrastText:"#fff"}}),e.options.overrides=Object(q.a)(Object(q.a)({},e.options.overrides),{},{MuiAppBar:{colorPrimary:{color:"#444",backgroundColor:e.theme.palette.primary.dark}},MuiSvgIcon:{colorDisabled:{color:"#aaa"},colorPrimary:{color:"#000"}},MuiFab:{root:{backgroundColor:e.theme.palette.background.paper},primary:{color:"#444"}},MuiTypography:{colorPrimary:{color:"#4aa"}},MuiButton:{containedPrimary:{color:"#444"}}}),e.options.typography=Object(q.a)(Object(q.a)({},e.options.typography),{},{h4:{fontWeight:100}}),e}return n}(function(){function e(t){Object(B.a)(this,e),this.defaultFontFamily='"Roboto", "Helvetica", "Arial", sans-serif',this.options={props:{MuiBackdrop:{}},typography:{fontFamily:this.defaultFontFamily,htmlFontSize:16,fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,h1:{fontFamily:this.defaultFontFamily,fontWeight:300,fontSize:"6rem",lineHeight:1,letterSpacing:"-0.01562em"},h2:{fontFamily:this.defaultFontFamily,fontWeight:300,fontSize:"3.75rem",lineHeight:1,letterSpacing:"-0.00833em"},h3:{fontFamily:this.defaultFontFamily,fontWeight:400,fontSize:"3rem",lineHeight:1.04,letterSpacing:"0em"},h4:{fontFamily:this.defaultFontFamily,fontWeight:400,fontSize:"2.125rem",lineHeight:1.17,letterSpacing:"0.00735em"},h5:{fontFamily:this.defaultFontFamily,fontWeight:400,fontSize:"1.5rem",lineHeight:1.33,letterSpacing:"0em"},h6:{fontFamily:this.defaultFontFamily,fontWeight:500,fontSize:"1.25rem",lineHeight:1.6,letterSpacing:"0.0075em"},subtitle1:{fontFamily:this.defaultFontFamily,fontWeight:400,fontSize:"1rem",lineHeight:1.75,letterSpacing:"0.00938em"},subtitle2:{fontFamily:this.defaultFontFamily,fontWeight:500,fontSize:"0.875rem",lineHeight:1.57,letterSpacing:"0.00714em"},body1:{fontFamily:this.defaultFontFamily,fontWeight:400,fontSize:"1rem",lineHeight:1.5,letterSpacing:"0.00938em"},body2:{fontFamily:this.defaultFontFamily,fontWeight:400,fontSize:"0.875rem",lineHeight:1.43,letterSpacing:"0.01071em"},button:{fontFamily:this.defaultFontFamily,fontWeight:500,fontSize:"0.875rem",lineHeight:1.75,letterSpacing:"0.02857em",textTransform:"uppercase"},caption:{fontFamily:this.defaultFontFamily,fontWeight:400,fontSize:"0.75rem",lineHeight:1.66,letterSpacing:"0.03333em"},overline:{fontFamily:this.defaultFontFamily,fontWeight:400,fontSize:"0.75rem",lineHeight:2.66,letterSpacing:"0.08333em",textTransform:"uppercase"},allVariants:{textDecoration:"none"}},palette:{common:{black:"#000",white:"#fff"},type:"light",primary:{light:"#7986cb",main:"#3f51b5",dark:"#303f9f",contrastText:"#fff"},secondary:{light:"#ff4081",main:"#f50057",dark:"#c51162",contrastText:"#fff"},error:{light:"#e57373",main:"#f44336",dark:"#d32f2f",contrastText:"#fff"},text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.54)",disabled:"rgba(0, 0, 0, 0.38)",hint:"rgba(0, 0, 0, 0.38)"},background:{paper:"#fff",default:"#fafafa"},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.08)",hoverOpacity:.08,selected:"rgba(0, 0, 0, 0.14)",disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)"}},overrides:{MuiTab:{root:{minWidth:40,"@media (min-width: 600px)":{minWidth:60}}},MuiAppBar:{},MuiInput:{},MuiCard:{},MuiLink:{},MuiButton:{},MuiIconButton:{},MuiContainer:{},MuiListItem:{container:{"& .MuiListItemSecondaryAction-root":{display:"none"},"&:hover .MuiListItemSecondaryAction-root":{display:"block"}},root:{paddingTop:0,paddingBottom:0}},MuiListItemText:{primary:{fontSize:14,color:"#444"},secondary:{fontSize:12,color:"#888"}},MuiListItemIcon:{},MuiListItemSecondaryAction:{},MuiSvgIcon:{},MuiIcon:{}}},this.options=t||this.options}return Object(P.a)(e,[{key:"theme",get:function(){return Object(nt.a)(this.options)}}]),e}()))).theme,at=function(){return Object(J.jsx)(C.a,{theme:it,children:Object(J.jsxs)(T.a,{children:[Object(J.jsx)(D.a,{}),Object(J.jsx)(Ze,{})]})})},rt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,162)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),r(e),o(e)}))};o.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(at,{})}),document.getElementById("root")),rt()}},[[112,1,2]]]);