(window["webpackJsonplight-switch"]=window["webpackJsonplight-switch"]||[]).push([[0],{14:function(t,e,n){},8:function(t,e,n){t.exports=n(9)},9:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(3),i=n(6),l=n(4),c=n(7),s=n(0),u=n.n(s),o=n(5),m=n.n(o),h=(n(14),function(t){function e(){var t,n;Object(a.a)(this,e);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(c)))).state={isLit:!1,temperature:72},n.flipLight=function(){n.setState({isLit:!n.state.isLit})},n.lightOn=function(){n.setState({isLit:!0})},n.lightOff=function(){n.setState({isLit:!1})},n.increaseTemp=function(){n.setState({temperature:n.state.temperature+1})},n.decreaseTemp=function(){n.setState({temperature:n.state.temperature-1})},n}return Object(c.a)(e,t),Object(r.a)(e,[{key:"render",value:function(){var t=this.state.isLit?"lit":"dark";return u.a.createElement("div",{className:"room ".concat(t)},u.a.createElement("h3",null,"The room is ",this.state.isLit?"lit":"dark"),u.a.createElement("br",null),u.a.createElement("button",{onClick:this.flipLight},"Flip"),u.a.createElement("br",null),u.a.createElement("button",{onClick:this.lightOn},"ON"),u.a.createElement("br",null),u.a.createElement("button",{onClick:this.lightOff},"OFF"),u.a.createElement("br",null),u.a.createElement("h3",null,"The current temperature is ",this.state.temperature),u.a.createElement("br",null),u.a.createElement("button",{onClick:this.increaseTemp},"+"),u.a.createElement("br",null),u.a.createElement("button",{onClick:this.decreaseTemp},"-"))}}]),e}(u.a.Component));m.a.render(u.a.createElement(h,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.cd737978.chunk.js.map