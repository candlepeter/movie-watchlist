const displayWatchlistEl = document.getElementById("display-watchlist-el")
let watchlist = JSON.parse(localStorage.getItem("movie"))

document.addEventListener("click", removeMovie)

function removeMovie(e) {
    if(e.target.dataset.id) {
        watchlist = watchlist.filter(list => list.imdbID !== e.target.dataset.id)
    }
        localStorage.setItem("movie", JSON.stringify(watchlist))
        displayWatchlist()
}

function displayWatchlist() {
    let watchlistHtml = ""
    watchlist.forEach(list => {
        watchlistHtml += `
            <div class="watchlist-wrapper" id="${list.imdbID}">
                <img src="${list.Poster}">
                <div class="watchlist-detail-wrapper">
                    <h3>${list.Title} 
                    <span class="star-rating"><i class="fa-sharp fa-solid fa-star"></i></span>
                    <span>${list.imdbRating}</span></h3>
                    <div class="watchlist-info">
                        <span>${list.Runtime}</span>
                        <span>${list.Genre}</span>
                        <button data-id=${list.imdbID}><i class="fa-solid fa-circle-minus"></i> Remove</button>
                    </div>
                    <p>${list.Plot}</p>
                </div>
            </div>`
    })
    watchlist.length === 0 ?
        displayWatchlistEl.innerHTML = `<p>Your watchlist is looking a little empty...</p>
                    <a href="./index.html"><i class="fa-solid fa-circle-plus"></i>'s add some movies!</a>` : displayWatchlistEl.innerHTML = watchlistHtml
}

displayWatchlist()