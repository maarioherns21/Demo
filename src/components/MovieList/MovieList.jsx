///this components alllows to cretate a new arr of movies
//this is a prop component
import { Link } from "react-router-dom";

// this is  props  compoents
export default function MovieList({ movies, title }) {
  return (
    <div>
      <h1>{title}</h1>
      {movies
        .sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
        .map((movie) => (
          <div key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.images} alt={movie.name} />
              <h2>{movie.name}</h2>
            </Link>
          </div>
        ))}
    </div>
  );
}
