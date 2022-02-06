(this["webpackJsonpff-react"]=this["webpackJsonpff-react"]||[]).push([[0],{447:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(21),s=n.n(a),c=(n(64),n(141)),i=n(13),o=n.n(i),l=n(51),u=n(39),j=n(4),p=n(1);var d=function(e){var t=e.team,n=t.players,r=t.starters,a=t.display_name,s=e.team.settings,c=s.wins,i=s.losses,o=s.fpts,l=s.fpts_against,u=n.filter((function(e){return!r.includes(e)})),j=e.nflPlayers;return Object(p.jsxs)("div",{className:"roster-container",children:[Object(p.jsxs)("h1",{children:[a," (",c,"-",i,")"]}),Object(p.jsxs)("h3",{children:[" Points Scored: ",o," "]}),Object(p.jsxs)("h3",{children:["Points Against: ",l," "]}),Object(p.jsx)("h3",{children:" Starters: "}),Object(p.jsx)("ol",{children:r.map((function(e){var t=j[e]||{},n=t.position,r=t.first_name,a=t.last_name;return Object(p.jsx)("li",{children:"0"!==e?"".concat(n,") ").concat(r," ").concat(a):"Empty"})}))}),Object(p.jsx)("h3",{children:" Bench: "}),Object(p.jsx)("ol",{children:u.map((function(e){var t=j[e]||{},n=t.position,r=t.first_name,a=t.last_name;return Object(p.jsx)("li",{children:"0"!==e?"".concat(n,") ").concat(r," ").concat(a):"Empty"})}))})]})};var h=function(e){var t=e.teams,n=e.nflPlayers,a=e.avgFpts,s=e.avgFptsAgainst,c=Object(r.useState)("descending"),i=Object(j.a)(c,2),o=i[0],l=i[1],u=Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"sorter",children:"Sort by: "}),Object(p.jsx)("select",{id:"sorter",value:o,onChange:function(e){return l(e.target.value)},children:[{label:"Winners",value:"descending"},{label:"Losers",value:"ascending"},{label:"Points Scored Against",value:"pointsScoredAgainst"},{label:"Points Scored",value:"pointsScored"}].map((function(e){return Object(p.jsx)("option",{value:e.value,children:e.label})}))})]});return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"General Stats!"}),u,Object(p.jsxs)("h3",{children:["League Average Points Scored: ",a]}),function(e){var r;return"ascending"===e?r=t.sort((function(e,t){return e.settings.wins-t.settings.wins})):"descending"===e?r=t.sort((function(e,t){return t.settings.wins-e.settings.wins})):"pointsScored"===e?r=t.sort((function(e,t){return t.settings.fpts-e.settings.fpts})):"pointsScoredAgainst"===e&&(r=t.sort((function(e,t){return t.settings.fpts_against-e.settings.fpts_against}))),r.map((function(e,t){return Object(p.jsx)(d,{team:e,nflPlayers:n,avgFpts:a,avgFptsAgainst:s},t)}))}(o)]})},f=n(24);var b=function(e){return e.teams,e.nflPlayers,e.avgFpts,e.avgFptsAgainst,Object(p.jsxs)("div",{className:"nav-container",children:[Object(p.jsx)(f.b,{to:"/reactFantasyFootball",children:"Home"})," ",Object(p.jsx)("span",{children:"|"}),Object(p.jsx)(f.b,{to:"/about",children:"About League"}),Object(p.jsx)("span",{children:"|"}),Object(p.jsx)(f.b,{to:"/matchups",children:"Matchups"}),Object(p.jsx)("span",{children:"|"}),Object(p.jsx)(f.b,{to:"/headtohead",children:"Head to Head"}),Object(p.jsx)("span",{children:"|"}),Object(p.jsx)(f.b,{to:"/playoffs",children:"Playoffs"})]})},O=n(3);var x=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{children:"This is the official webpage for the AK REDRAFT / AK DYNASTY football leages"}),Object(p.jsx)("p",{children:"The league was formed in 2018 and initially started as a redraft only"}),Object(p.jsx)("p",{children:"In 2021 we switched from the ESPN platform to Sleeper and introduced a Dynasty leage as well"})]})};var m=function(e){console.log(e);var t=e.matchup,n=Object(j.a)(t,2),r=n[0],a=n[1];console.log(r,a);var s=r.players.filter((function(e){return!r.starters.includes(e)})),c=a.players.filter((function(e){return!a.starters.includes(e)})),i=e.nflPlayers;return Object(p.jsxs)("div",{className:"matchup-container",children:[Object(p.jsxs)("div",{className:"roster-container",children:[Object(p.jsxs)("h4",{children:[r.display_name," - ",r.points," points"]}),Object(p.jsx)("h3",{children:" Starters: "}),Object(p.jsx)("ol",{children:r.starters.map((function(e){var t=i[e]||{},n=t.position,a=t.first_name,s=t.last_name;return Object(p.jsx)("li",{children:"0"!==e?"".concat(n,") ").concat(a," ").concat(s," | ").concat(r.players_points[e]," "):"Empty"})}))}),Object(p.jsx)("h3",{children:" Bench: "}),Object(p.jsx)("ol",{children:s.map((function(e){var t=i[e]||{},n=t.position,a=t.first_name,s=t.last_name;return Object(p.jsx)("li",{children:"0"!==e?"".concat(n,") ").concat(a," ").concat(s," | ").concat(r.players_points[e]):"Empty"})}))})]}),Object(p.jsx)("p",{children:" vs "}),Object(p.jsxs)("div",{className:"roster-container",children:[Object(p.jsxs)("h4",{children:[a.display_name," - ",a.points," points"]}),Object(p.jsx)("h3",{children:" Starters: "}),Object(p.jsx)("ol",{children:a.starters.map((function(e){var t=i[e]||{},n=t.position,r=t.first_name,s=t.last_name;return Object(p.jsx)("li",{children:"0"!==e?"".concat(n,") ").concat(r," ").concat(s," | ").concat(a.players_points[e]):"Empty"})}))}),Object(p.jsx)("h3",{children:" Bench: "}),Object(p.jsx)("ol",{children:c.map((function(e){var t=i[e]||{},n=t.position,r=t.first_name,s=t.last_name;return Object(p.jsx)("li",{children:"0"!==e?"".concat(n,") ").concat(r," ").concat(s," | ").concat(a.players_points[e]):"Empty"})}))})]})]})};var v=function(e){var t=e.teams,n=e.nflPlayers,a=e.matchupWeeks;console.log(a);var s,c=Object(r.useState)(0),i=Object(j.a)(c,2),o=i[0],l=i[1],u=a.map((function(e){return function(e){console.log(e);for(var n=[],r=function(r){n.push(e.filter((function(e){return e.display_name=function(e,t){return e.filter((function(e){return e.roster_id===t}))[0].display_name}(t,e.roster_id),e.matchup_id===r})))},a=1;a<6;a++)r(a);return n}(e)})),d=Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"sorter",children:"Sort by: "}),Object(p.jsxs)("select",{id:"sorter",value:o,onChange:function(e){return l(e.target.value)},children:[u.map((function(e,t){if(t<14)return Object(p.jsx)("option",{value:t,children:"Week ".concat(t+1)})})),Object(p.jsx)("option",{children:"Playoffs Round 1"})]})]});return Object(p.jsxs)("div",{className:"allMatchups-container",children:[Object(p.jsx)("h2",{children:"Matchups!"}),d,(s=u[o],console.log(s),s.map((function(e){return Object(p.jsx)(m,{matchup:e,nflPlayers:n})})))]})};n(146);var g=function(e){var t=e.teams,n=e.matchupWeeks,a=Object(r.useState)(1),s=Object(j.a)(a,2),c=s[0],i=s[1],o=Object(r.useState)(7),u=Object(j.a)(o,2),d=u[0],h=u[1],f=Object(r.useState)(t.filter((function(e){return e.roster_id!==d}))),b=Object(j.a)(f,2),O=b[0],x=b[1],m=Object(r.useState)(t.filter((function(e){return e.roster_id!==c}))),v=Object(j.a)(m,2),g=v[0],y=v[1],_=Object(r.useState)([]),w=Object(j.a)(_,2),P=(w[0],w[1],Object(r.useState)([])),S=Object(j.a)(P,2),F=(S[0],S[1],Object(r.useState)([])),T=Object(j.a)(F,2),k=(T[0],T[1],Object(r.useState)({playerOneWins:0,playerTwoWins:0,playerOneTotalPoints:0,playerTwoTotalPoints:0})),W=Object(j.a)(k,2),A=W[0],E=W[1];console.log(A),Object(r.useEffect)((function(){N()}),[c,d]);var N=function(){var e=function(){console.log("inside calcMathces...playerOne is ".concat(c));var e=n.map((function(e){return e.filter((function(e){return e.roster_id===c}))})).map((function(e){return Object(j.a)(e,1)[0]})),t=n.map((function(e){return e.filter((function(e){return e.roster_id===d}))})).map((function(e){return Object(j.a)(e,1)[0]}));return[e,t]}(),t=Object(j.a)(e,2),r=t[0],a=t[1];console.log(r,a),function(e){console.log(e);var t={playerOneWins:0,playerTwoWins:0,playerOneTotalPoints:0,playerTwoTotalPoints:0};e.forEach((function(e){t.playerOneTotalPoints+=parseInt(e[0].points.toFixed(2)),t.playerTwoTotalPoints+=parseInt(e[1].points.toFixed(2)),e[0].points>e[1].points?t.playerOneWins+=1:e[1].points>e[0].points&&(t.playerTwoWins+=1)})),console.log(A===t),E(Object(l.a)({},t))}(I(r,a))},I=function(e,t){for(var n=[],r=0;r<e.length;r++)e[r].matchup_id===t[r].matchup_id&&n.push([e[r],t[r]]);return n},C=function(e,n){1===n?(i(parseInt(e.target.value)),y(t.filter((function(t){return t.roster_id!==parseInt(e.target.value)})))):(h(parseInt(e.target.value)),x(t.filter((function(t){return t.roster_id!==parseInt(e.target.value)}))))};return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Head to Head! (regular season)"}),Object(p.jsxs)("div",{className:"matchup-container",children:[Object(p.jsx)("div",{className:"roster-container",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"sorter",children:"Player 1: "}),Object(p.jsx)("select",{value:c,"data-id":"1",id:"sorter",onChange:function(e){return C(e,1)},children:O.map((function(e){return Object(p.jsx)("option",{value:e.roster_id,children:"".concat(e.display_name,", ").concat(e.roster_id)})}))}),Object(p.jsxs)("p",{children:["Wins: ",A.playerOneWins]}),Object(p.jsxs)("p",{children:["Total Points: ",A.playerOneTotalPoints]}),Object(p.jsx)("p",{children:"Biggest Win:"})]})}),Object(p.jsx)("p",{children:"vs"}),Object(p.jsx)("div",{className:"roster-container",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("label",{htmlFor:"sorter2",children:"Player 2: "}),Object(p.jsx)("select",{value:d,"data-id":"2",id:"sorter2",onChange:function(e){return C(e,2)},children:g.map((function(e){return Object(p.jsx)("option",{value:e.roster_id,children:"".concat(e.display_name,", ").concat(e.roster_id)})}))}),Object(p.jsxs)("p",{children:["Wins: ",A.playerTwoWins]}),Object(p.jsxs)("p",{children:["Total Points: ",A.playerTwoTotalPoints]}),Object(p.jsx)("p",{children:"Biggest Win:"})]})})]})]})};var y=function(e){var t=e.matchupWeeks;return Object(r.useEffect)((function(){console.log(t),fetch("https://api.sleeper.app/v1/league/736382027170983936/winners_bracket").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}),[]),Object(p.jsx)("p",{children:"Playoffs!"})},_=n.p+"static/media/football.b7968ad0.webp";n(140);var w=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)({}),i=Object(j.a)(s,2),d=i[0],f=i[1],m=Object(r.useState)(0),w=Object(j.a)(m,2),P=w[0],S=w[1],F=Object(r.useState)(0),T=Object(j.a)(F,2),k=T[0],W=T[1],A=Object(r.useState)([]),E=Object(j.a)(A,2),N=E[0],I=E[1];function C(){return C=Object(u.a)(o.a.mark((function e(){var t,n,r,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.sleeper.app/v1/league/735291736863129600/rosters").then((function(e){return e.json()}));case 2:return t=e.sent,n=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t.map(function(){var e=Object(u.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.sleeper.app/v1/user/".concat(t.owner_id)).then((function(e){return e.json()}));case 2:return n=e.sent,r=n.display_name,e.abrupt("return",Object(l.a)(Object(l.a)({},t),{},{display_name:r}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.next=6,n();case 6:r=e.sent,s=r.map((function(e){return e.settings.fpts})).reduce((function(e,t){return e+t})),c=r.map((function(e){return e.settings.fpts_against})).reduce((function(e,t){return e+t})),a(r),S(s/r.length),W(c/r.length);case 12:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function B(){return(B=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./nflPlayers.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()}));case 2:t=e.sent,f(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return(L=Object(u.a)(o.a.mark((function e(){var t,n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.sleeper.app/v1/state/nfl").then((function(e){return e.json()}));case 2:t=e.sent,n=t.week,console.log("current week of the NFL is week:",n),r=o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.sleeper.app/v1/league/735291736863129600/matchups/".concat(t)).then((function(e){return e.json()}));case 2:n=e.sent,I((function(e){return[].concat(Object(c.a)(e),[n])}));case 4:case"end":return e.stop()}}),e)})),a=1;case 7:if(!(a<15)){e.next=12;break}return e.delegateYield(r(a),"t0",9);case 9:a++,e.next=7;break;case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return console.log(N),Object(r.useEffect)((function(){!function(){C.apply(this,arguments)}(),function(){B.apply(this,arguments)}(),function(){L.apply(this,arguments)}()}),[]),Object(p.jsxs)("div",{className:"app-container",children:[Object(p.jsx)(b,{}),Object(p.jsx)("h1",{children:"AK Fantasy Football (only dynasty stats for now...)"}),Object(p.jsx)("img",{alt:"football",src:_}),Object(p.jsxs)(O.c,{children:[Object(p.jsx)(O.a,{exact:!0,path:"/reactFantasyFootball",element:Object(p.jsx)(h,{teams:n,nflPlayers:d,avgFpts:P,avgFptsAgainst:k})}),Object(p.jsx)(O.a,{path:"/matchups",element:Object(p.jsx)(v,{teams:n,nflPlayers:d,avgFpts:P,avgFptsAgainst:k,matchupWeeks:N})}),Object(p.jsx)(O.a,{path:"/headtohead",element:Object(p.jsx)(g,{teams:n,nflPlayers:d,matchupWeeks:N})}),Object(p.jsx)(O.a,{path:"/about",element:Object(p.jsx)(x,{})}),Object(p.jsx)(O.a,{path:"/playoffs",element:Object(p.jsx)(y,{teams:n,nflPlayers:d,matchupWeeks:N})})]})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,448)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};s.a.render(Object(p.jsx)(f.a,{children:Object(p.jsx)(w,{})}),document.getElementById("root")),P()},64:function(e,t,n){}},[[447,1,2]]]);
//# sourceMappingURL=main.cac5d04a.chunk.js.map