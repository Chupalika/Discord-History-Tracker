javascript:(function(){var s=function(){function c(){return f.i("messagesWrapper")}function d(){return c().querySelector("[class*='scroller-']")}function i(){return c().querySelectorAll("[class*='message-']")}function e(t){var e=Object.keys(t||{}),n=e.find(t=>t.startsWith("__reactInternalInstance"));return n?t[n].memoizedProps:(n=e.find(t=>t.startsWith("__reactProps$")))?t[n]:null}function o(t){if((t=e(t)).children&&4<=t.children.length){t=t.children[3].props;if("message"in t&&"channel"in t)return t}return null}function u(){return null===document.querySelector("#messagesNavigationDescription + [class^=container]")}function h(){try{const e=[];for(const n of i()){var t=o(n);null!=t&&e.push(t.message)}return e}catch(t){return console.error(t),[]}}return{o:function(s){let a=0,i=!1,o=!1;const l=new Set,t=window.setInterval(()=>{if(0<a)--a;else if(c()){var e=f.i("message",c());if(300<(e?e.parentElement.children.length:0)){if(i)return;a=3,i=!0,window.setTimeout(()=>{const t=d();t.scrollTop=t.scrollHeight/2},1)}else i=!1;e=h();let t=!1;for(const n of e)if(!l.has(n.id)){t=!0;break}if(t){l.clear();for(const r of e)l.add(r.id);o=!1,s(e)}else o||u()||(o=!0,s(!1))}else a=2},200);window.l.push(()=>window.clearInterval(t))},h:e,g:function(){try{let n;for(const e of i()){var t=o(e);if(null!=t){n=t.channel;break}}if(!n)return null;var r=f.i("privateChannels");if(r){let t;for(const a of r.querySelectorAll("[class*='channel-'] [class*='selected-'] [class^='name-'] *, [class*='channel-'][class*='selected-'] [class^='name-'] *")){var s=Array.prototype.find.call(a.childNodes,t=>t.nodeType===Node.TEXT_NODE);if(s){t=s.nodeValue;break}}if(!t)return null;let e;switch(n.type){case 1:e="DM";break;case 3:e="GROUP";break;default:return null}return{server:t,channel:t,id:n.id,type:e,extra:{}}}return n.guild_id?{server:document.querySelector("nav header > h1").innerText,channel:n.name,id:n.id,type:"SERVER",extra:{position:n.position,topic:n.topic,nsfw:n.nsfw}}:null}catch(t){return console.error(t),null}},p:h,v:()=>!!c(),C:u,k:function(){let t=d();0<t.scrollTop&&(t.scrollTop=0)},S:function(){var t=f.i("privateChannels");if(t){var e=f.i("selected",t);return!!((r=e&&e.nextElementSibling)&&r.getAttribute("class").includes("channel-")&&"href"in r&&r.href.includes("/@me/"))&&(r.click(),r.scrollIntoView(!0),!0)}{e=document.querySelector("div[class*='sidebar'] > nav[class*='container'] > div[class*='scroller']");if(!e)return!1;for(var n=Array.prototype.filter.call(e.querySelectorAll("[class*='containerDefault']"),t=>0<t.childElementCount&&(t=>t.includes("wrapper-")&&!t.includes("clickable-"))(t.children[0].className)&&(t=>!!t.querySelector('path[d="M5.88657 21C5.57547 21 5.3399 20.7189 5.39427 20.4126L6.00001 17H2.59511C2.28449 17 2.04905 16.7198 2.10259 16.4138L2.27759 15.4138C2.31946 15.1746 2.52722 15 2.77011 15H6.35001L7.41001 9H4.00511C3.69449 9 3.45905 8.71977 3.51259 8.41381L3.68759 7.41381C3.72946 7.17456 3.93722 7 4.18011 7H7.76001L8.39677 3.41262C8.43914 3.17391 8.64664 3 8.88907 3H9.87344C10.1845 3 10.4201 3.28107 10.3657 3.58738L9.76001 7H15.76L16.3968 3.41262C16.4391 3.17391 16.6466 3 16.8891 3H17.8734C18.1845 3 18.4201 3.28107 18.3657 3.58738L17.76 7H21.1649C21.4755 7 21.711 7.28023 21.6574 7.58619L21.4824 8.58619C21.4406 8.82544 21.2328 9 20.9899 9H17.41L16.35 15H19.7549C20.0655 15 20.301 15.2802 20.2474 15.5862L20.0724 16.5862C20.0306 16.8254 19.8228 17 19.5799 17H16L15.3632 20.5874C15.3209 20.8261 15.1134 21 14.8709 21H13.8866C13.5755 21 13.3399 20.7189 13.3943 20.4126L14 17H8.00001L7.36325 20.5874C7.32088 20.8261 7.11337 21 6.87094 21H5.88657ZM9.41045 9L8.35045 15H14.3504L15.4104 9H9.41045Z"]')||!!t.querySelector('path[d="M14 8C14 7.44772 13.5523 7 13 7H9.76001L10.3657 3.58738C10.4201 3.28107 10.1845 3 9.87344 3H8.88907C8.64664 3 8.43914 3.17391 8.39677 3.41262L7.76001 7H4.18011C3.93722 7 3.72946 7.17456 3.68759 7.41381L3.51259 8.41381C3.45905 8.71977 3.69449 9 4.00511 9H7.41001L6.35001 15H2.77011C2.52722 15 2.31946 15.1746 2.27759 15.4138L2.10259 16.4138C2.04905 16.7198 2.28449 17 2.59511 17H6.00001L5.39427 20.4126C5.3399 20.7189 5.57547 21 5.88657 21H6.87094C7.11337 21 7.32088 20.8261 7.36325 20.5874L8.00001 17H14L13.3943 20.4126C13.3399 20.7189 13.5755 21 13.8866 21H14.8709C15.1134 21 15.3209 20.8261 15.3632 20.5874L16 17H19.5799C19.8228 17 20.0306 16.8254 20.0724 16.5862L20.2474 15.5862C20.301 15.2802 20.0655 15 19.7549 15H16.35L16.6758 13.1558C16.7823 12.5529 16.3186 12 15.7063 12C15.2286 12 14.8199 12.3429 14.7368 12.8133L14.3504 15H8.35045L9.41045 9H13C13.5523 9 14 8.55228 14 8Z"]'))(t)),r=null,s=0;s<n.length-1;s++)if(n[s].children[0].className.includes("modeSelected")){r=n[s+1];break}if(null===r)return!1;const a=r.querySelector("a[href^='/channels/']");return a?(a.click(),r.scrollIntoView(!0),!0):!1}}}}(),f=function(){var s=(t,e,n,r)=>{t=document.createElement(t);return t.id=n||"",t.innerHTML=r||"",e.appendChild(t),t};return{id:(t,e)=>(e||document).getElementById(t),i:(t,e)=>(e||document).querySelector(`[class*="${t}-"]`),createElement:(t,e,n,r)=>s(t,e,n,r),L:t=>t.parentNode.removeChild(t),H:t=>s("style",document.head,"",t),T:(t,e)=>window.setTimeout(t,e),O:(t,e,n)=>t.addEventListener(e,n),M:(t,e,n)=>{n=new Date(Date.now()+1e3*n).toUTCString();document.cookie=t+"="+encodeURIComponent(JSON.stringify(e))+";path=/;expires="+n},A:t=>{t=document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)"+t+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1");return t.length?JSON.parse(decodeURIComponent(t)):null},N:(t,e)=>{var n=new Blob([e],{type:"octet/stream"});if("msSaveBlob"in window.navigator)return window.navigator.msSaveBlob(n,t);e=window.URL.createObjectURL(n),n=s("a",document.body);n.href=e,n.download=t,n.style.display="none",n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(e)}}}(),t=function(){function e(t){r||(h.D(n),u.F(n),r=!0),n("gui",t)}var i,o,l=()=>{h.R()?(i._.$.disabled=!0,i._.U.disabled=!0,i._.I.disabled=!0):(i._.$.disabled=!1,i._.U.disabled=!1,i._.j.disabled=i._.I.disabled=!h.P())},n=(t,e)=>{var n,r,s,a;i&&(s="gui"===t&&"controller"===e,"data"!==t&&!s||l(),"tracking"!==t&&!s||(l(),i._.G.innerHTML=h.R()?"Pause Tracking":"Start Tracking"),"data"!==t&&!s||(r=n=0,h.P()&&(n=h.V().J(),r=h.V().W()),i._.Z.innerHTML=[n," message",1===n?"":"s"," from ",r," channel",1===r?"":"s"].join(""))),o&&((s="gui"===t&&"settings"===e)&&(o._.B.checked=u.autoscroll,o._.q[u.afterFirstMsg].checked=!0,o._.X[u.afterSavedMsg].checked=!0),"setting"!==t&&!s||(a=!u.autoscroll,Object.values(o._.q).forEach(t=>t.disabled=a),Object.values(o._.X).forEach(t=>t.disabled=a)))},r=!1,s={K:function(){(i={}).Y=f.H(` #app-mount > div[class*="app-"] { margin-bottom: 48px !important; } #dht-ctrl { position: absolute; bottom: 0; width: 100%; height: 48px; background-color: #FFF; } #dht-ctrl button { height: 32px; margin: 8px 0 8px 8px; font-size: 16px; padding: 0 12px; background-color: #7289DA; color: #FFF; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.75); } #dht-ctrl button:disabled { background-color: #7A7A7A; cursor: default; } #dht-ctrl-close { margin: 8px 8px 8px 0 !important; float: right; } #dht-ctrl p { display: inline-block; margin: 14px 12px; } #dht-ctrl input { display: none; }`);var t=(t,e)=>"<button id='dht-ctrl-"+t+"'>"+e+"</button>";i.tt=f.createElement("div",document.body,"dht-ctrl",` ${t("upload","Upload &amp; Combine")} ${t("settings","Settings")} ${t("track","")} ${t("download","Download")} ${t("reset","Reset")} <p id='dht-ctrl-status'></p> <input id='dht-ctrl-upload-input' type='file' multiple> ${t("close","X")}`),i._={$:f.id("dht-ctrl-upload"),U:f.id("dht-ctrl-settings"),G:f.id("dht-ctrl-track"),j:f.id("dht-ctrl-download"),I:f.id("dht-ctrl-reset"),et:f.id("dht-ctrl-close"),Z:f.id("dht-ctrl-status"),nt:f.id("dht-ctrl-upload-input")},f.O(i._.$,"click",()=>{i._.nt.click()}),f.O(i._.U,"click",()=>{s.rt()}),f.O(i._.G,"click",()=>{h.st(!h.R())}),f.O(i._.j,"click",()=>{h.at()}),f.O(i._.I,"click",()=>{h.it()}),f.O(i._.et,"click",()=>{s.ot(),window.l.forEach(t=>t()),window.DHT_LOADED=!1}),f.O(i._.nt,"change",()=>{Array.prototype.forEach.call(i._.nt.files,e=>{var n=new FileReader;n.onload=function(){var t={};try{t=JSON.parse(n.result)}catch(t){return alert("Could not parse '"+e.name+"', see console for details."),void console.error(t)}c.lt(t)?h.ct(e.name,new c(t)):alert("File '"+e.name+"' has an invalid format.")},n.readAsText(e,"UTF-8")}),i._.nt.value=null}),e("controller")},ot:function(){i&&(f.L(i.tt),f.L(i.Y),i=null)},rt:function(){(o={}).Y=f.H(` #dht-cfg-overlay { position: absolute; left: 0; top: 0; width: 100%; height: 100%; background-color: #000; opacity: 0.5; display: block; z-index: 1000; } #dht-cfg { position: absolute; left: 50%; top: 50%; width: 800px; height: 262px; margin-left: -400px; margin-top: -131px; padding: 8px; background-color: #fff; z-index: 1001; } #dht-cfg-note { margin-top: 22px; } #dht-cfg sub { color: #666; font-size: 13px; }`),o.dt=f.createElement("div",document.body,"dht-cfg-overlay"),f.O(o.dt,"click",()=>{s.ut()});var t=(t,e,n)=>"<label><input id='dht-cfg-"+t+"-"+e+"' name='dht-"+t+"' type='radio'> "+n+"</label><br>";o.tt=f.createElement("div",document.body,"dht-cfg",` <label><input id='dht-cfg-autoscroll' type='checkbox'> Autoscroll</label><br> <br> <label>After reaching the first message in channel...</label><br> ${t("afm","nothing","Do Nothing")} ${t("afm","pause","Pause Tracking")} ${t("afm","switch","Switch to Next Channel")} <br> <label>After reaching a previously saved message...</label><br> ${t("asm","nothing","Do Nothing")} ${t("asm","pause","Pause Tracking")} ${t("asm","switch","Switch to Next Channel")} <p id='dht-cfg-note'> It is recommended to disable link and image previews to avoid putting unnecessary strain on your browser.<br><br> <sub>v.31a, released 12 Feb 2022</sub> </p>`),o._={B:f.id("dht-cfg-autoscroll"),q:{},X:{}},o._.q[d.ht]=f.id("dht-cfg-afm-nothing"),o._.q[d.ft]=f.id("dht-cfg-afm-pause"),o._.q[d.gt]=f.id("dht-cfg-afm-switch"),o._.X[d.ht]=f.id("dht-cfg-asm-nothing"),o._.X[d.ft]=f.id("dht-cfg-asm-pause"),o._.X[d.gt]=f.id("dht-cfg-asm-switch"),o._.B.addEventListener("change",()=>{u.autoscroll=o._.B.checked}),Object.keys(o._.q).forEach(t=>{f.O(o._.q[t],"click",()=>{u.afterFirstMsg=t})}),Object.keys(o._.X).forEach(t=>{f.O(o._.X[t],"click",()=>{u.afterSavedMsg=t})}),e("settings")},ut:function(){o&&(f.L(o.dt),f.L(o.tt),f.L(o.Y),o=null)}};return s}();class c{constructor(t){var e=this;c.lt(t)||(t={meta:{},data:{}}),e.meta=t.meta,e.data=t.data,e.meta.users=e.meta.users||{},e.meta.userindex=e.meta.userindex||[],e.meta.servers=e.meta.servers||[],e.meta.channels=e.meta.channels||{},e.vt={wt:{},bt:new Set,Ct:new Set,kt:new Set}}static lt(t){return t&&"object"==typeof t.meta&&"object"==typeof t.data}St(e,t,n,r){var s=e in this.meta.users,a=s?this.meta.users[e]:{};return a.name=t,n&&(a.tag=n),r&&(a.avatar=r),s?e in this.vt.wt?this.vt.wt[e]:this.vt.wt[e]=this.meta.userindex.findIndex(t=>t==e):(this.meta.users[e]=a,this.meta.userindex.push(e),this.vt.wt[e]=this.meta.userindex.length-1)}yt(e,n){var t=this.meta.servers.findIndex(t=>t.name===e&&t.type===n);return-1===t?(this.meta.servers.push({name:e,type:n}),this.meta.servers.length-1):t}xt(t,e,n,r){if(this.meta.servers[t]){var s=e in this.meta.channels,t=s?this.meta.channels[e]:{server:t};return t.name=n,r.position&&(t.position=r.position),r.topic&&(t.topic=r.topic),r.nsfw&&(t.nsfw=r.nsfw),!s&&(this.meta.channels[e]=t,this.vt.bt.add(e),!0)}}Lt(t,e,n){var r=this.data[t]||(this.data[t]={}),t=e in r;return r[e]=n,this.vt.Ct.add(e),!t}Ht(t){var e=t.author,e={u:this.St(e.id,e.username,e.bot?null:e.discriminator,e.avatar),t:t.timestamp.toDate().getTime()};return 0<t.content.length&&(e.m=t.content),null!==t.editedTimestamp&&(e.te=t.editedTimestamp.toDate().getTime()),0<t.embeds.length&&(e.e=t.embeds.map(t=>{let e={url:t.url,type:t.type};return"rich"===t.type&&Array.isArray(t.title)&&1===t.title.length&&"string"==typeof t.title[0]&&(e.t=t.title[0],Array.isArray(t.description)&&1===t.description.length&&"string"==typeof t.description[0]&&(e.d=t.description[0])),e})),0<t.attachments.length&&(e.a=t.attachments.map(t=>({url:t.url}))),null!==t.messageReference&&(e.r=t.messageReference.message_id),0<t.reactions.length&&(e.re=t.reactions.map(t=>{let e={c:t.count,n:t.emoji.name};return null!==t.emoji.id&&(e.id=t.emoji.id),t.emoji.animated&&(e.an=!0),e})),e}Tt(t){return this.vt.kt.has(t)}Ot(t,e){var n,r=!1;for(n of e){var s=n.type;0!==s&&19!==s||"SENT"!==n.state||!this.Lt(t,n.id,this.Ht(n))||(this.vt.kt.add(n.id),r=!0)}return r}W(){return this.vt.bt.size}J(){return this.vt.Ct.size}Mt(t){var e,n,r,s={},a=!1;for(e in t.meta.users){var i=t.meta.users[e];s[t.meta.userindex.findIndex(t=>t==e)]=this.St(e,i.name,i.tag,i.avatar)}for(n in t.meta.channels){var o=t.meta.servers[t.meta.channels[n].server],l=t.meta.channels[n];this.xt(this.yt(o.name,o.type),n,l.name,l)}for(n in t.data)for(r in l=t.data[n]){var c=l[r];(i=c.u)in s?(c.u=s[i],this.Lt(n,r,c)):(a||(a=!0,alert("The uploaded archive appears to be corrupted, some messages will be skipped. See console for details."),console.error("User list:",t.meta.users),console.error("User index:",t.meta.userindex),console.error("Generated mapping:",s),console.error("Missing user for the following messages:")),console.error(c))}}At(){return JSON.stringify({meta:this.meta,data:this.data})}}var d={ht:"optNothing",ft:"optPause",gt:"optSwitch"},r=!1,u=function(){function s(){f.M("DHT_SETTINGS",e,15768e4)}function t(e,n,t){var r="_"+n;Object.defineProperty(e,n,{get:()=>e[r],set:t=>{e[r]=t,function(t,e){for(var n of a)n(t,e);s()}("setting",n)}}),e[r]=t}var e={},a=[],n=f.A("DHT_SETTINGS");return n||(n={_autoscroll:!0,_afterFirstMsg:d.ft,_afterSavedMsg:d.ft},r=!0),t(e,"autoscroll",n._autoscroll),t(e,"afterFirstMsg",n._afterFirstMsg),t(e,"afterSavedMsg",n._afterSavedMsg),e.F=function(t){a.push(t)},r&&s(),e}(),h=function(){function a(t,e){for(var n of r)n(t,e)}var r=[];return new class{constructor(){this.it()}it(){this.Nt=null,this.Dt=!1,this.Ft=null,a("data","reset")}V(){return this.Nt||(this.Nt=new c),this.Nt}P(){return null!=this.Nt}R(){return this.Dt}st(t){this.Dt=t,a("tracking",t)}ct(t,e){this.Ft=t,this.V().Mt(e),a("data","upload")}at(){this.P()&&f.N(this.Ft||"dht.txt",this.Nt.At())}Rt(t,e,n,r,s){e=this.V().yt(t,e);!0===this.V().xt(e,n,r,s)&&a("data","channel")}$t(t,e){return!!this.V().Ot(t,e)&&(a("data","messages"),!0)}Tt(t){return this.V().Tt(t)}D(t){r.push(t)}}}();const e=window.location.href;if(!e.includes("discord.com/")&&!e.includes("discordapp.com/")&&!confirm("Could not detect Discord in the URL, do you want to run the script anyway?"))return;if(window.DHT_LOADED)return void alert("Discord History Tracker is already loaded.");window.DHT_LOADED=!0,window.l=[];let a=new Set,i=null,o=function(t){a.add("stopping"),f.T(()=>{h.st(!1),a.delete("stopping"),t&&t()},200)};s.o(t=>{if(h.R()&&0===a.size){let n=s.g();if(n)if(h.Rt(n.server,n.type,n.id,n.channel,n.extra),!1===t||t.length){var r=!1!==t&&h.$t(n.id,t);if(u.autoscroll){let e=null;!1===t?e=u.afterFirstMsg:r||h.Tt(t[0].id)||(e=u.afterSavedMsg),null===e?i=r?(s.k(),window.clearTimeout(i),null):window.setTimeout(s.k,2500):(a.add("stalling"),f.T(()=>{a.delete("stalling");var t=s.g();!t||t.id!==n.id||null!=(t=s.p())&&h.$t(n.id,t),(e!==d.gt||s.S())&&e!==d.ft||h.st(!1)},250))}}else s.k();else o()}}),h.D((t,e)=>{"tracking"===t&&e&&((t=s.g())?null!=(e=s.p())?(h.Rt(t.server,t.type,t.id,t.channel,t.extra),h.$t(t.id,e),u.autoscroll&&s.v()&&(s.C()?s.k():((e=u.afterFirstMsg)!==d.gt||s.S())&&e!==d.ft||o())):o(()=>alert("Cannot see any messages.")):o(()=>alert("The selected channel is not visible in the channel list.")))}),t.K(),r&&t.rt();})()