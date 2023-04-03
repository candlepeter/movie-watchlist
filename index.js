
const displaySearchResultEl = document.getElementById("display-search-result-el")
let watchlist = JSON.parse(localStorage.getItem("movie")) || []

document.addEventListener("submit", submitForm)

async function submitForm(e) {
    e.preventDefault()
    const form = document.getElementById("form")
    const formData = new FormData(form)
    const searchInputValue = formData.get("search")
    
    const res = await fetch(`https://www.omdbapi.com/?apikey=a3487a29&s=${searchInputValue}`)
    const data = await res.json()
    
    if(data.Response) {  
        renderSearchResult(data.Search)
    }
    document.querySelector('input[type="text"]').value = ""
    
}

function setResultHtml(result, btnText, btnSymbol) {
    return `<div id="${result.imdbID}" class="search-content-wrapper">
                <img src=${result.Poster} alt="${result.Title} poster">
                <div class="movie-detail">
                    <h3>${result.Title} <span>${result.Year}</span></h3>
                    <div class="btn-container">
                        <p>${result.Type}</p>
                        <button data-id=${result.imdbID}><i class="fa-solid fa-circle-${btnSymbol}"></i> ${btnText}</button>
                    </div>
                </div>
            </div>`
}

function renderSearchResult(data) {
    let searchResultHtml = ""
    data.forEach(result => {
        if(watchlist.find(list => list.imdbID === result.imdbID)) {
            searchResultHtml += setResultHtml(result, "Added", "minus")
        } else {  
            searchResultHtml += setResultHtml(result, "Watchlist", "plus")
        }
    })
    
    displaySearchResultEl.innerHTML = searchResultHtml
}

document.addEventListener("click", handleClick)

function handleClick(e) {
    if(e.target.dataset.id){
        addToWatchlist(e.target.dataset.id)
        if(e.target.innerText.trim() === "Watchlist") {
            e.target.innerHTML = `<button><i class="fa-solid fa-circle-minus"></i> Added</button>`
        }
    }
}

async function addToWatchlist(id) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=a3487a29&i=${id}`)
    const data = await res.json()
    
    // using the filter method to avoid duplication
    // if (data) {
    //     if (watchlist.filter(movieObj => movieObj.imdbID === data.imdbID).length === 0) {
    //         watchlist.push(data)
    //     }
    // }
    
    // using find method to avoid duplication
    if (!watchlist.find((movieObj) => movieObj.imdbID === data.imdbID)) {
        watchlist.push(data);
        localStorage.setItem("movie", JSON.stringify(watchlist))
    }
}




