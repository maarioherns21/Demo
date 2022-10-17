import { useParams } from "react-router-dom"
import useFetch from "../useFetch/useFetch"


export default  function  MovieD () {
const {id} = useParams()
 
const {movies:  movie} =useFetch(`http://localhost:4000/movies/${id}`)


    return (
        <div>
    <h2>{id}</h2>
   {movie && (
    <div>
        <h2>{movie.body}</h2>
    </div>
   )}
        </div>
    )
}