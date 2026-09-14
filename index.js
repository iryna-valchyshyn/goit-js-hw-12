import{a as q,S as v,i}from"./assets/vendor-C1DvvBV_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const P="https://pixabay.com/api/",M="57457980-e166dd9b1d2133c9afd3a23b8";async function f(s,t){return(await q.get(P,{params:{key:M,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more"),R=new v(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){const t=s.map(({webformatURL:o,largeImageURL:l,tags:e,likes:r,views:n,comments:w,downloads:S})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${l}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${e}"
            />
          </a>

          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span>${r}</span>
            </p>

            <p class="info-item">
              <b>Views</b>
              <span>${n}</span>
            </p>

            <p class="info-item">
              <b>Comments</b>
              <span>${w}</span>
            </p>

            <p class="info-item">
              <b>Downloads</b>
              <span>${S}</span>
            </p>
          </div>
        </li>
      `).join("");h.insertAdjacentHTML("beforeend",t),R.refresh()}function $(){h.innerHTML=""}function b(){m.hidden=!1}function L(){m.hidden=!0}function u(){g.hidden=!1}function c(){g.hidden=!0}const p=document.querySelector(".form"),B=document.querySelector(".load-more");let a=1,d="";p.addEventListener("submit",async s=>{s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(!t){i.error({title:"Error",message:"Please enter a search query.",position:"topRight"});return}d=t,a=1,$(),c(),b();try{const o=await f(d,a);if(o.hits.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}y(o.hits),a+=1,o.hits.length<15||a>Math.ceil(o.totalHits/15)?(i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),c()):u()}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{L(),p.reset()}});B.addEventListener("click",async()=>{c(),b();try{const s=await f(d,a);y(s.hits),a+=1,a>Math.ceil(s.totalHits/15)?(i.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),c()):u();const t=document.querySelector(".gallery-item");if(t){const o=t.getBoundingClientRect().height;window.scrollBy({top:o*2,behavior:"smooth"})}}catch{i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),u()}finally{L()}});
//# sourceMappingURL=index.js.map
