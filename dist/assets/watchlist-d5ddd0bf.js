import"./modulepreload-polyfill-3cfb730f.js";const s=document.getElementById("display-watchlist-el");let i=JSON.parse(localStorage.getItem("movie"));document.addEventListener("click",l);function l(t){t.target.dataset.id&&(i=i.filter(a=>a.imdbID!==t.target.dataset.id)),localStorage.setItem("movie",JSON.stringify(i)),e()}function e(){let t="";i.forEach(a=>{t+=`
            <div class="watchlist-wrapper" id="${a.imdbID}">
                <img src="${a.Poster}">
                <div class="watchlist-detail-wrapper">
                    <h3>${a.Title} 
                    <span class="star-rating"><i class="fa-sharp fa-solid fa-star"></i></span>
                    <span>${a.imdbRating}</span></h3>
                    <div class="watchlist-info">
                        <span>${a.Runtime}</span>
                        <span>${a.Genre}</span>
                        <button data-id=${a.imdbID}><i class="fa-solid fa-circle-minus"></i> Remove</button>
                    </div>
                    <p>${a.Plot}</p>
                </div>
            </div>`}),i.length===0?s.innerHTML=`<p>Your watchlist is looking a little empty...</p>
                    <a href="./index.html"><i class="fa-solid fa-circle-plus"></i>'s add some movies!</a>`:s.innerHTML=t}e();
