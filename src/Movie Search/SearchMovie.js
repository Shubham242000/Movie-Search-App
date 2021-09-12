import React from "react"
import { useState } from "react/cjs/react.development";
import Movie from './Movie'
function Search() {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovie = async (event) => {
        event.preventDefault();
      
       
 
        const url = `https://api.themoviedb.org/3/search/movie?api_key=92a610bdc1605c2a3d4e7573bd6c642b&
                    language=en-US&query=${query}&page=1&include_adult=false`;
        
        try {
              const res = await fetch(url);
              const data  = await res.json();
              setMovies(data.results)
             
        }catch(err){
              console.error(err);
                }    
        // fetch(url)
        // .then(res => res.json())
        // .then(data => {
        //     setMovies(data.results);
        // })               
        // .catch(err => console.log(err)) 
}
     
  
    let displayMovies = movies.filter(movie => movie.poster_path).map(movie => {
        return (
        //     <div className="card" key={movie.id}>
        //     <img className="card--image"
        //         src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        //         alt={movie.title + ' poster'}
        //         />
        //     <div className="card--content">
        //     <h3 className="card--title">{movie.title}</h3>
        //     <p><small>RELEASE DATE: {movie.release_date}</small></p>
        //     <p><small>RATING: {movie.vote_average}</small></p>
        //     <p className="card--desc">{movie.overview}</p>
        //     </div>

        // </div>
            <Movie 
                key = {movie.id}
                movie = {movie}
            />
        )
    })
     
    return (
        <>
            <form className="form">
                <label className="label" htmlFor="query">Movie Name</label>
                <input className="input" type="text" name="query"
                    placeholder="i.e Jurassic Park" onChange = {e => {
                        setQuery(e.target.value)
                    }}/>
                <button className="button" type="submit" onClick={searchMovie}>Search</button>
            </form>
            {displayMovies}
        </>
    )
}
export default Search