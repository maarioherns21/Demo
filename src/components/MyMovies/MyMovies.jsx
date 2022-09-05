import useFetch from "../useFetch/useFetch"
import MovieList from "../MovieList/MovieList"

export default function MyMovies () {
    const {movies, error, isLoading, handleDelete} = useFetch("http://localhost:8000/movies")
    
    return (
        <div>
          {error && <div>{error}</div>}
          {isLoading && <div>Loading...</div>}
         {movies &&  <MovieList movies={movies.filter((movie) => movie.creator !== "Mark")} handleDelete={handleDelete}/>}
        </div>
    )
} 