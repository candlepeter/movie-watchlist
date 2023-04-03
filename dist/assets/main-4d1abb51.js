import"./modulepreload-polyfill-3cfb730f.js";const o=document.getElementById("display-search-result-el");let n=JSON.parse(localStorage.getItem("movie"))||[];document.addEventListener("submit",d);async function d(t){t.preventDefault();const a=document.getElementById("form"),i=new FormData(a).get("search"),s=await(await fetch(`https://www.omdbapi.com/?apikey=a3487a29&s=${i}`)).json();s.Response&&r(s.Search),document.querySelector('input[type="text"]').value=""}function c(t,a,e){return`<div id="${t.imdbID}" class="search-content-wrapper">
                <img src=${t.Poster} alt="${t.Title} poster">
                <div class="movie-detail">
                    <h3>${t.Title} <span>${t.Year}</span></h3>
                    <div class="btn-container">
                        <p>${t.Type}</p>
                        <button data-id=${t.imdbID}><i class="fa-solid fa-circle-${e}"></i> ${a}</button>
                    </div>
                </div>
            </div>`}function r(t){let a="";t.forEach(e=>{n.find(i=>i.imdbID===e.imdbID)?a+=c(e,"Added","minus"):a+=c(e,"Watchlist","plus")}),o.innerHTML=a}document.addEventListener("click",l);function l(t){t.target.dataset.id&&(m(t.target.dataset.id),t.target.innerText.trim()==="Watchlist"&&(t.target.innerHTML='<button><i class="fa-solid fa-circle-minus"></i> Added</button>'))}async function m(t){const e=await(await fetch(`https://www.omdbapi.com/?apikey=a3487a29&i=${t}`)).json();n.find(i=>i.imdbID===e.imdbID)||(n.push(e),localStorage.setItem("movie",JSON.stringify(n)))}
