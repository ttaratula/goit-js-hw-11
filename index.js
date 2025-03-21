import{S as f,a as m,i as o}from"./assets/vendor-Bd9JIWAl.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery");let d=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});function g(){c.innerHTML=""}function y(a){g();const r=a.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:l,comments:u,downloads:p})=>`
      <li class="gallery-item">
        <a href="${i}" class="gallery-link">
          <img src="${s}" alt="${e}" class="gallery-image" />
        </a>
        <div class="info">
        <ul class="baner">
          <li class="baner-li">
            <p class="baner-title">Likes</p>
            <p class="baner-text">${t}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Views</p>
            <p class="baner-text">${l}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Comments</p>
            <p class="baner-text">${u}</p>
          </li>
          <li class="baner-li">
            <p class="baner-title">Downloads</p>
            <p class="baner-text">${p}</p>
          
            </li>
        </ul>
        </div>
      </li>`).join("");c.innerHTML=r,d.refresh()}const h="49390436-eaa1c4fe3003ec0e1553f6322",b="https://pixabay.com/api/";async function L(a){try{const r=await m.get(b,{params:{key:h,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log(r.data),r.data.hits}catch(r){throw console.error("Error fetching images:",r),r}}const v=document.querySelector("form"),x=document.querySelector(".gallery"),n=document.querySelector(".loader");v.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){o.error({title:"Error",message:"Please enter a search query!"});return}x.innerHTML="",n.classList.add("visible");try{const s=await L(r);console.log(s),s.length===0?o.warning({title:"Oops!",message:"No images found. Try again!"}):y(s)}catch{o.error({title:"Error",message:" Failed to fetch images. Try again later!"})}finally{n.classList.remove("visible")}});
//# sourceMappingURL=index.js.map
