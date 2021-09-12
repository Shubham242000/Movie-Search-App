import React, { useEffect } from "react"
import { useState } from "react/cjs/react.development"
// 92a610bdc1605c2a3d4e7573bd6c642b API KEY
function MovieSearch() {
    const [movie , setMovie] = useState("")
    useEffect(() => {
    }, [movie])
    function data() {
        fetch("https://api.themoviedb.org/3/movie/550?api_key=92a610bdc1605c2a3d4e7573bd6c642b")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMovie(data.original_title)
        })
    }
    data();
    return (
       <div className="container">
          <h1 className="title">Hello , {movie}</h1>
       </div>
    )
}
export default MovieSearch