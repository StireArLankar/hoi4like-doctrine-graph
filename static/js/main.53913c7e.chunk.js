(this["webpackJsonphoi4like-doctrine-graph"]=this["webpackJsonphoi4like-doctrine-graph"]||[]).push([[0],{57:function(e,t,n){e.exports=n(89)},89:function(e,t,n){"use strict";n.r(t);var i={};n.r(i),n.d(i,"increaseCount",(function(){return b})),n.d(i,"decreaseCount",(function(){return m})),n.d(i,"setDragged",(function(){return g})),n.d(i,"setAnimating",(function(){return v})),n.d(i,"stopAnimating",(function(){return y})),n.d(i,"stopDragging",(function(){return w})),n.d(i,"setData",(function(){return j})),n.d(i,"setActive",(function(){return O}));var r=n(0),a=n.n(r),c=n(55),o=n.n(c),d=n(35),l=n(16),s=n(27),u=n(5),f=function(e){for(var t=e.filter((function(e){return!e.isFirst})),n=e.filter((function(e){return e.isFirst})),i=function(){var e=n[n.length-1],i=function e(t,n){var i=[];return i=Array.isArray(t)?t.reduce((function(t,n){return e(n,t)}),[]):t.children,[].concat(Object(u.a)(n),Object(u.a)(i))}(e,[]),r=function e(t,n){var i=[];return(i=Array.isArray(t)?t.reduce((function(t,i){return t.push(e(i,n)),t}),[]):t.children.map((function(e){return n.find((function(t){return t.id===e}))}))).filter(Boolean).every((function(e){return e.id===i[0].id}))&&(i=i[0]),i}(e,t);n.push(r),t=t.filter((function(e){return!i.includes(e.id)}))};t.length>0;)i();return n},h=[{id:"1",children:["2a","2b"],isFirst:!0},{id:"2a",children:["3a"]},{id:"2b",children:["3ba","3bb"]},{id:"3a",children:["4aa","4ab"]},{id:"3ba",children:["4b"]},{id:"3bb",children:["4b"]},{id:"4aa",children:["5aa"]},{id:"4ab",children:["5ab"]},{id:"4b",children:["5b"]},{id:"5aa",children:["6"]},{id:"5ab",children:["6"]},{id:"5b",children:["6"]},{id:"6",children:["7a","7b","7c"]},{id:"7a",children:["8"]},{id:"7b",children:["8"]},{id:"7c",children:["8"]},{id:"8",children:["9a","9b","9c"]},{id:"9a",children:["10"]},{id:"9b",children:[]},{id:"9c",children:[]},{id:"10",children:[]}],p={items:h.reduce((function(e,t){return e[t.id]=t.isFirst?Object(s.a)({},t,{active:!0}):Object(s.a)({},t,{active:!1}),e}),{}),type:"test1",active:["1"],tree:f(h),count:0,dragged:[],animating:[],isAnimating:function(e){return e.animating.length>0}},b=function(e){e.state.count++},m=function(e){e.state.count--},g=function(e,t){var n=e.state;!n.dragged.includes(t)&&n.dragged.push(t)},v=function(e,t){var n=e.state;!n.animating.includes(t)&&n.animating.push(t)},y=function(e,t){var n=e.state,i=n.animating.indexOf(t);i>-1&&n.animating.splice(i,1)},w=function(e,t){var n=e.state,i=n.dragged.indexOf(t);i>-1&&n.dragged.splice(i,1)},j=function(e,t){var n=e.state,i=t.data,r=t.type;n.type!==r&&(n.items=i.reduce((function(e,t){return t.isFirst?(n.active=[t.id],e[t.id]=Object(s.a)({},t,{active:!0})):e[t.id]=Object(s.a)({},t,{active:!1}),e}),{}),n.tree=f(i),n.type=r,n.animating=[],n.dragged=[])},O=function(e,t){var n=e.state;if(n.active[n.active.length-1]!==t){if(n.active.includes(t)){var i=!0,r=[];return n.active.forEach((function(e){n.items[e].active!==i&&(n.items[e].active=i),i&&r.push(e),e===t&&(i=!1)})),void(n.active=r)}var a=function(){for(var e=n.items[t],i=Object.values(n.items),r=i.filter((function(t){return t.children.includes(e.id)})),a=[t],c=r.some((function(e){return!!n.active.includes(e.id)&&(a.unshift(e.id),!0)})),o=1===r.length;o&&!c;)e=n.items[r[0].id],a.unshift(e.id),c=(r=i.filter((function(t){return t.children.includes(e.id)}))).some((function(e){return!!n.active.includes(e.id)&&(a.unshift(e.id),!0)})),o=1===r.length;if(c){for(var d=n.active.indexOf(a[0]),l=Object(u.a)(n.active.slice(0,d)),s=d+1;s<n.active.length;s++)n.items[n.active[s]].active=!1;return a.forEach((function(e){!0!==n.items[e].active&&(n.items[e].active=!0)})),n.active=[].concat(Object(u.a)(l),a),{v:void 0}}for(var f=n.active[n.active.length-1],h=n.items[f],p=1===h.children.length,b=Object(u.a)(n.active),m=!1;p&&!m;)h=n.items[h.children[0]],b.push(h.id),p=1===h.children.length,h.children.includes(e.id)&&(m=!0);if(m){for(var g=n.active.indexOf(f)+1;g<b.length;g++)n.items[b[g]].active=!0;return a.forEach((function(e){return n.items[e].active=!0})),n.active=[].concat(Object(u.a)(b),a),{v:void 0}}}();return"object"===typeof a?a.v:void 0}},E={state:p,actions:i},k=Object(d.b)(),x=Object(l.c)(E,{devtools:!0}),A=n(6),C=function(e){return e.toFixed(3)},M=function(e,t){var n=document.getElementById("".concat(e));if(!n)return{x:0,y:0};var i=n.getBoundingClientRect();return{y:t?i.bottom:i.top,x:i.left+i.width/2}},z=function(e,t,n,i){var r=M(e,!0),a=M(t),c=r.x+n,o=r.y+i,d=a.x+n,l=a.y+i;if(c<0||d<0)return"";var s=d-c,u=c+.5*s,f=o+3,h=d-.5*s,p=l-3,b=[C(c),C(o)].join(", "),m=[u,f,h,p,C(d),C(p)].join(", ");return"M".concat(b,", V").concat(C(f),", C").concat(m,", V").concat(C(l))},D=Object(r.memo)((function(e){var t=e.from,n=e.to,i=e.wrapper,c=e.dragged,o=e.force,d=Object(r.useState)(""),l=Object(A.a)(d,2),s=l[0],u=l[1],f=Object(r.useRef)(0);return Object(r.useEffect)((function(){if(!i.current)return u("");var e=i.current.getBoundingClientRect(),r=i.current.scrollLeft-e.left,a=i.current.scrollTop-e.top;if(u(z(t,n,r,a)),c){f.current=window.requestAnimationFrame((function e(){if(i.current){var r=i.current.getBoundingClientRect(),a=i.current.scrollLeft-r.left,c=i.current.scrollTop-r.top;u(z(t,n,a,c))}f.current=window.requestAnimationFrame(e)}))}else window.cancelAnimationFrame(f.current),f.current=0}),[t,n,c,i,o]),a.a.createElement("path",{fill:"none",strokeWidth:"3",strokeLinecap:"round",stroke:"black",d:s})})),I=Object(r.memo)((function(){var e=Object(r.useState)(0),t=Object(A.a)(e,2),n=t[0],i=t[1],c=k().state,o=c.items,d=c.dragged,l=c.isAnimating,s=Object(r.useRef)(null);Object(r.useEffect)((function(){i(1);var e=function(){return i((function(e){return e+1}))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);return a.a.createElement("svg",{style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,pointerEvents:"none",zIndex:-1},ref:s},Object.values(o).map((function(e){return e.children.map((function(t){return a.a.createElement(D,{key:t,from:e.id,to:t,wrapper:s,force:n,dragged:l||d.includes(e.id)||d.includes(t)})}))})))})),N=n(15),F=n(41),T=n(32),S=n(20),W=n.n(S),B=n(19),R=n.n(B),L=R()((function(e){return W()({wrapper:{position:"fixed",top:0,left:0,userSelect:"none",background:"antiquewhite",maxHeight:"calc(100vh - 60px)",display:"flex",flexDirection:"column",overflow:"auto",border:"1px solid rgba(200, 50, 100)",borderRadius:10},active:{},button:{padding:"1px 10px",marginTop:5,fontSize:12,background:"teal",userSelect:"none"}})})),V=function(e,t){return"translate3d(".concat(e,"px, ").concat(t,"px, 0)")},q=function(){var e=k().state,t=e.active,n=e.items,i=L(),c=Object(r.useState)(!1),o=Object(A.a)(c,2),d=o[0],l=o[1],s=Object(T.a)(),u=Object(A.a)(s,2),f=u[0],h=u[1].height,p=Object(T.a)(),b=Object(A.a)(p,2),m=b[0],g=b[1],v=g.height,y=g.width,w=Object(N.b)((function(){return{height:0,config:{tension:200,clamp:!0}}})),j=Object(A.a)(w,2),O=j[0].height,E=j[1];Object(r.useEffect)((function(){E({height:d?h:0})}),[d,E,h]);var x=Object(N.b)((function(){return{xy:[30,30]}})),C=Object(A.a)(x,2),M=C[0].xy,z=C[1],D=Object(F.a)((function(e){var t=Object(A.a)(e.offset,2),n=t[0],i=t[1];z({xy:[n,i]})}),{filterTaps:!0,bounds:{left:30,top:30,right:window.innerWidth-y-30,bottom:window.innerHeight-v-30},rubberband:.2});return a.a.createElement(N.a.div,{className:i.wrapper,style:{transform:M.interpolate(V)},ref:m},a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20,flexShrink:0}},"Info",a.a.createElement("div",Object.assign({className:i.button},D()),"drag"),a.a.createElement("div",{className:i.button,onClick:function(){return l((function(e){return!e}))}},"expand")),a.a.createElement(N.a.div,{style:{height:O,overflow:"hidden",flexShrink:0}},a.a.createElement("ul",{ref:f,style:{padding:10,margin:0}},t.map((function(e){return a.a.createElement("li",{key:n[e].id},n[e].id)})))))},G=n(17),$=R()((function(e){return W()({active:{},leaf:{height:100,width:200,margin:"20px auto",display:"grid",placeItems:"center",color:"white",position:"relative",background:"black",transition:"background 0.3s ease","&$active":{background:"darkblue"}},leafWrapper:{position:"relative",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",textAlign:"center"},top:{},bottom:{},connector:{left:"50%",position:"absolute","&$top":{top:0},"&$bottom":{bottom:0}},button:{padding:"1px 10px",marginTop:5,fontSize:12,background:"teal",userSelect:"none"}})})),H=Object(r.memo)((function(e){var t=e.id,n=$(),i=k(),r=i.state,c=i.actions,o=r.items[t],d=o.children,l=o.isFirst,s=o.active,u=Object(G.a)(n.leaf,s&&n.active);return a.a.createElement("div",{className:n.leafWrapper},a.a.createElement("div",{className:u,id:t,onClick:function(){return c.setActive(t)}},!l&&a.a.createElement("span",{id:"".concat(t,"-top"),className:Object(G.a)(n.connector,n.top)}),t,d.length>0&&a.a.createElement("span",{id:"".concat(t,"-bottom"),className:Object(G.a)(n.connector,n.bottom)})))})),J=function(e,t){return"translate3d(".concat(e,"px, ").concat(t,"px, 0)")},K=function(e){var t=e.id,n=$(),i=Object(r.useState)(!1),c=Object(A.a)(i,2),o=c[0],d=c[1],l=k(),s=l.state,u=l.actions,f=s.items[t],h=f.active,p=f.description,b=f.title,m=Object(T.a)(),g=Object(A.a)(m,2),v=g[0],y=g[1].height,w=Object(G.a)(n.leaf,h&&n.active),j=Object(r.useRef)(!1),O=Object(N.b)((function(){return{height:0,config:{tension:200,clamp:!0},onRest:function(){u.stopAnimating(t)}}})),E=Object(A.a)(O,2),x=E[0].height,C=E[1];Object(r.useEffect)((function(){C({height:o?y:0})}),[o,C,y]);var M=Object(N.b)((function(){return{xy:[0,0],onRest:function(){!j.current&&u.stopDragging(t)}}})),z=Object(A.a)(M,2),D=z[0].xy,I=z[1];Object(r.useEffect)((function(){return function(){u.stopDragging(t),u.stopAnimating(t)}}),[u,t]);var S=Object(F.a)((function(e){var n=e.down,i=Object(A.a)(e.movement,2),r=i[0],a=i[1];e.first&&u.setDragged(t),j.current=n,I({xy:n?[r,a]:[0,0]})}),{filterTaps:!0});return a.a.createElement("div",{className:n.leafWrapper},a.a.createElement(N.a.div,{className:w,id:t,style:{transform:D.interpolate(J),height:"auto"}},a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:150}},b,a.a.createElement("div",Object.assign({className:n.button},S()),"drag"),a.a.createElement("div",{className:n.button,onClick:function(){return u.setActive(t)}},"active"),a.a.createElement("div",{className:n.button,onClick:function(){d((function(e){return!e})),u.setAnimating(t)}},"expand")),a.a.createElement(N.a.div,{style:{height:x,overflow:"hidden"}},a.a.createElement("div",{ref:v,style:{padding:10}},p))))},P=Object(r.memo)((function(e){var t=e.id;switch(k().state.items[t].type){case"hoi4":return a.a.createElement(K,{id:t});default:return a.a.createElement(H,{id:t})}})),Q=R()((function(e){return W()({wrapper:{display:"flex",flexDirection:"column",alignItems:"center",minWidth:"max-content",position:"relative"},table:{},row:{display:"grid",position:"relative"},subtree:{display:"grid",gridColumnGap:22,placeItems:"center",position:"relative"}})})),U=Object(r.memo)((function(){var e=k().state.tree;console.count("list");var t=Q();return a.a.createElement("div",{className:t.wrapper},a.a.createElement("div",{className:t.table},e.map((function(e,n){return a.a.createElement("div",{key:n,className:t.row},function e(n){return Array.isArray(n)?a.a.createElement("div",{key:"array",className:t.subtree,style:{gridTemplateColumns:"repeat(".concat(n.length,", 1fr)")}},n.map(e)):a.a.createElement(P,{id:n.id,key:n.id})}(e))}))),a.a.createElement(I,null),a.a.createElement(q,null))})),X=R()((function(e){return W()({wrapper:{top:0}})})),Y=[{id:"1",children:["2a","2b"],isFirst:!0},{id:"2a",children:["3a"]},{id:"2b",children:["3ba","3bb"]},{id:"3a",children:["4aa","4ab"]},{id:"3ba",children:["4b"]},{id:"3bb",children:["4b"]},{id:"4aa",children:["5aa"]},{id:"4ab",children:["5ab"]},{id:"4b",children:["5b"]},{id:"5aa",children:["6"]},{id:"5ab",children:["6"]},{id:"5b",children:["6"]},{id:"6",children:["7a","7b","7c"]},{id:"7a",children:["8"]},{id:"7b",children:["8"]},{id:"7c",children:["8"]},{id:"8",children:["9a","9b","9c"]},{id:"9a",children:["10"]},{id:"9b",children:[]},{id:"9c",children:[]},{id:"10",children:[]}],Z=[{id:"1",children:["2a","2b"],isFirst:!0},{id:"2a",children:["3a"]},{id:"2b",children:["3ba","3bb"]},{id:"3a",children:["4aa","4ab"]},{id:"3ba",children:["4b"]},{id:"3bb",children:["4b"]},{id:"4aa",children:["5aa"]},{id:"4ab",children:["5ab"]},{id:"4b",children:["5b"]},{id:"5aa",children:["6"]},{id:"5ab",children:["6"]},{id:"5b",children:["6"]},{id:"6",children:[]}],_=[{type:"hoi4",id:"1",children:["2"],isFirst:!0,title:"Mobile Warfare",description:"Mobile Warfare is a focus on speed and maneuver to cut off and disorganize enemy forces."},{type:"hoi4",id:"2",children:["3"],title:"Delay",description:"Even when a battle cannot be won, it can be advantageous to slow the progress of attacking forces with ambushes and delaying tactics."},{type:"hoi4",id:"3",children:["4a","4b"],title:"Elastic Defense",description:"Rather than focusing all strength on the front line, an elastic defense creates a 'deeper' layer of defenses which allows the defender more time to react and counter-attack while the attacker is spread out and bogged down."},{type:"hoi4",id:"4a",children:["5a"],title:"Mobile Infantry",description:"Regular Infantry is often too slow to keep up with, react to, or escape from rapidly moving Armored forces. The answer is to focus on Motorized or Mechanized Infantry which can keep up with the pace of modern warfare."},{type:"hoi4",id:"4b",children:["5b"],title:"Armored Spearhead",description:"To use Tanks to their fullest potential they cannot be tied down supporting Infantry. Instead they must be formed into fast moving, independent units which can spearhead attacks."},{type:"hoi4",id:"5a",children:["6a"],title:"Mass Motorization",description:"An even greater focus on Motorized troops."},{type:"hoi4",id:"5b",children:["6b"],title:"Schwerpunkt",description:"In any operation the Schwerpunkt, or Focal point, must be identified and maximum force concentrated to win at that point"},{type:"hoi4",id:"6a",children:["7"],title:"Mechanized Offensive",description:"Motorized troops are well and good, but to lead offensives we need Infantry that can ride into battle in armored transports which protect them and carry heavy weapons"},{type:"hoi4",id:"6b",children:["7"],title:"Blitzkrieg",description:"Blitzkrieg refers to the strategy of fast moving Armored forces supported by Mobile Infantry and air support breaking through enemy lines to disorganize and encircle them."},{type:"hoi4",id:"7",children:["8a","8b"],title:"Kampfgruppe",description:"A Kampfgruppe was an ad hoc formation which was organized to carry out a specific task."},{type:"hoi4",id:"8a",children:["9a"],title:"Volkssturm",description:"The Volkssturm, or People's Militia, consisted of men who were too old, too young, or otherwise unfit for regular military service."},{type:"hoi4",id:"8b",children:["9b"],title:"Fire brigades",description:"'Fire brigades' were hastily scrambled forces thrown together to react to enemy breakthroughs or other critical issues."},{type:"hoi4",id:"9a",children:["10a"],title:"Non-Discriminatory Conscription",description:"Even invalids and cripples must be drafted, there can be no such thing as a civilian."},{type:"hoi4",id:"9b",children:["10b"],title:"Backhand Blow",description:"Rather than fighting for every inch of ground, enemy penetrations are largely avoided until they have extended themselves, at which point they can be cut off and destroyed by counterattacks."},{type:"hoi4",id:"10a",children:[],title:"Werwolf Guerrillas",description:"The Werwolves were a planned German resistance group that would fight on against the occupying powers when the war was lost."},{type:"hoi4",id:"10b",children:[],title:"Modern Blitzkrieg",description:"The pinnacle of Mobile Warfare, Modern Blitzkrieg incorporates all the latest advances of technology and the lessons learned from previous doctrines."}],ee=Object(r.memo)((function(){var e=k().actions,t=X();return Object(r.useEffect)((function(){e.setData({data:_,type:"Mobile Warfare"})}),[e]),a.a.createElement("div",{className:t.wrapper},a.a.createElement("button",{onClick:function(){return e.setData({data:_,type:"Mobile Warfare"})}},"Mobile Warfare"),a.a.createElement("button",{onClick:function(){return e.setData({data:Y,type:"test1"})}},"Test items 1"),a.a.createElement("button",{onClick:function(){return e.setData({data:Z,type:"test2"})}},"Test items 2"))})),te=function(){return a.a.createElement(d.a,{value:x},a.a.createElement(ee,null),a.a.createElement(U,null))};o.a.render(a.a.createElement(te,null),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.53913c7e.chunk.js.map