function initMap(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:34.8543784,lng:-111.7951384},zoom:10})}!function(){function t(t){if(Object.keys)return Object.keys(t);var e=[];for(var a in t)t.hasOwnProperty(a)&&e.push(a);return e}for(var e="data-a11y-toggle",a=document.querySelectorAll("["+e+"]"),r={},n=0;n<a.length;n+=1){var i=a[n],o=i.getAttribute(e);i.id||i.setAttribute("id",o+"-a11y-toggle"),i.hasAttribute("aria-expanded")||i.setAttribute("aria-expanded",!1),i.hasAttribute("aria-controls")||i.setAttribute("aria-controls",o),r["#"+o]=i.id}for(var l=t(r),d=l.length&&document.querySelectorAll(l),u={},s=0;s<d.length;s+=1){var c=d[s],g=r["#"+c.id];c.hasAttribute("aria-hidden")||c.setAttribute("aria-hidden",!0),c.hasAttribute("aria-labelledby")||g&&c.setAttribute("aria-labelledby",g),u[c.id]=c}document.addEventListener("click",function(t){var a=t.target,r=u[a.getAttribute(e)],n=JSON.parse(a.getAttribute("aria-expanded"));r&&(a.setAttribute("aria-expanded",!n),r.setAttribute("aria-hidden",n))})}(),window.log=function(t){console.log(t)};var map;!function(t,e){"use strict";var a="../img/sprite.symbol.html",r=1;if(!e.createElementNS||!e.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var n,i,o="localStorage"in t&&null!==t.localStorage,l=function(){e.body.insertAdjacentHTML("afterbegin",i)},d=function(){e.body?l():e.addEventListener("DOMContentLoaded",l)};if(o&&localStorage.getItem("inlineSVGrev")==r&&(i=localStorage.getItem("inlineSVGdata")))return d(),!0;try{n=new XMLHttpRequest,n.open("GET",a,!0),n.onload=function(){n.status>=200&&n.status<400&&(i=n.responseText,d(),o&&(localStorage.setItem("inlineSVGdata",i),localStorage.setItem("inlineSVGrev",r)))},n.send()}catch(u){}}(window,document);
//# sourceMappingURL=main.js.map
