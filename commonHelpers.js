(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();(()=>{const l=document.querySelector(".js-menu-container"),r=document.querySelector(".js-menu-overlay"),i=document.querySelector(".js-open-menu"),u=document.querySelector(".js-close-menu"),e=()=>{const o=l.querySelectorAll('a[href*="#"]'),n=i.getAttribute("aria-expanded")==="true"||!1;if(i.setAttribute("aria-expanded",!n),l.classList.toggle("is-open"),r.classList.toggle("is-open"),o.length!==0){if(!n){o.forEach(s=>{s.addEventListener("click",e)}),window.innerWidth<768&&document.body.classList.add("no-scroll");return}o.forEach(s=>{s.removeEventListener("click",e)}),document.body.classList.remove("no-scroll")}},t=()=>{document.querySelectorAll(".link").forEach(n=>{n.addEventListener("click",s=>{s.preventDefault();const d=n.getAttribute("href").substring(1),a=document.querySelector("."+d);a&&window.scrollTo({top:a.offsetTop,behavior:"smooth"})})})},c=()=>{const o=document.querySelector(".svg_logo use"),n=document.querySelector(".close_button use"),s=document.querySelector(".open_button use");window.innerWidth>=765?(o.setAttribute("href","./icons.svg#logo_tablet"),n.setAttribute("href","./icons.svg#close_menu_tablet"),s.setAttribute("href","./icons.svg#open_menu_tablet")):(o.setAttribute("href","./icons.svg#logo"),n.setAttribute("href","./icons.svg#close_menu"),s.setAttribute("href","./icons.svg#open_menu"))},f=()=>{window.addEventListener("resize",()=>{c()})},m=()=>{t(),f(),i.addEventListener("click",e),u.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches||(l.classList.remove("is-open"),r.classList.remove("is-open"),i.setAttribute("aria-expanded",!1),document.body.classList.remove("no-scroll"))})};window.addEventListener("load",()=>{c(),m()})})();
//# sourceMappingURL=commonHelpers.js.map