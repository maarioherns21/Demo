import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import "../Form/Form.css"
export default function TheMovies () {
const [ movies, setMovies]= useState([])

useEffect(() => {
    fetchItems();
}, [])

const fetchItems =  async () => {
    const data = await fetch("http://localhost:4000/movies")
    const allMovies =  await data.json()
    setMovies(allMovies)
}

    return (
            <div>
            {
                movies.map( movie =>  (
                    <div key={movie._id}>
                        <Link to={`/movies/${movie._id}`}>
                          <h2>{movie.name}</h2>
                        <img src={movie.images} alt={movie.name}/>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}