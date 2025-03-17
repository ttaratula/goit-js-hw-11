import{a as u,S as p,i}from"./assets/vendor-DXaqCXe3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="49390436-eaa1c4fe3003ec0e1553f6322",y="https://pixabay.com/api/";async function h(s){return(await u.get(y,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}const d=document.getElementById("gallery");let l;function L(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:n,comments:f,downloads:m})=>`
        <li class="gallery-item">
          <a href="${a}" class="gallery-link">
            <img src="${o}" alt="${e}" loading="lazy">
          </a>
          <div class="info">
            <p>👍 Likes: ${t}</p>
            <p>👁 Views: ${n}</p>
            <p>💬 Comments: ${f}</p>
            <p>⬇ Downloads: ${m}</p>
          </div>
        </li>
      `).join("");d.insertAdjacentHTML("beforeend",r),l?l.refresh():l=new p(".gallery a")}function w(){d.innerHTML=" "}const b=document.getElementById("search-form"),c=document.getElementById("loader");b.addEventListener("submit",async s=>{s.preventDefault();const r=s.currentTarget.elements["search-text"].value.trim();if(!r){i.warning({message:"Please enter a search term!"});return}c.classList.remove("hidden"),w();try{const o=await h(r);o.length===0?i.info({message:"Sorry, no images found. Try another search!"}):L(o)}catch{i.error({message:"Something went wrong. Please try again later."})}finally{c.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
