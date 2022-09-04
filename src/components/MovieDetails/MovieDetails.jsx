import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch/useFetch";
import "./MovieDetails.css";

export default function MovieDetails() {
 const {id} = useParams();
 const {movies : movie, isLoading, error} =useFetch(`http://localhost:8000/movies/` + id)
 const navigate = useNavigate();


 const handleDelete =() =>{
    fetch(`http://localhost:8000/movies/` + id , {
        method: "DELETE"
    })
    .then(() =>{
        console.log("Movie Delete")
        navigate("/")
    })
 }

 return (
<div>
    {error && <div>{error}</div>}
    {isLoading && <div>Loading...</div>}
    {movie && (
        <div>
            <h1>{movie.name}</h1>
            <h2>{movie.body}</h2>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
        </div>
    )}
</div>

 )
}
