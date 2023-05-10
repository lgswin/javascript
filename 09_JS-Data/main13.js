import axios from 'axios'

function fetchMovies() {
    axios
        .get('https://www.omdbapi.com/?apikey=de190689&s=frozen')
        .then(res => {
            console.log(res)
            const h1El = document.querySelector('h1')
            const imgEl = document.querySelector('img')
            h1El.textContent = res.data.Search[0].Title
            console.log(res.data.Search[0].Poster)
            imgEl.src = res.data.Search[0].Poster;
            // try {
            //     console
            //     imgEl.src = res.data.Search[0].Poster
            // } catch(e) {
            //     console.log('error!')
            // }
            
        })
}

fetchMovies()