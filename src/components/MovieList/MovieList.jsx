///this components alllows to cretate a new arr of movies
//this is a prop component  
import { Link } from "react-router-dom";

// this is  props  compoents 
export default function MovieList({movies, title, handleDelete}) {
 return (
  <div>
    <h1>{title}</h1>
  { movies.map((movie) => (
        <div key={movie.id}>
            <h2>{movie.name}</h2>
            <Link to={`/movie/${movie.id}`}>
               <img  src={movie.images} alt={movie.name}/>
               <h3>{movie.body}</h3>
            </Link>
            <button onClick={() => handleDelete(movie.id)}>Delete</button>
        </div>
    ))
 }
  </div>
  )
}
