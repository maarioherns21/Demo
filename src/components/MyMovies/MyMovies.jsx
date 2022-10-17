import useFetch from "../useFetch/useFetch"
import MovieList from "../MovieList/MovieList"
import useConstants from "../../useConstants/useConstants"

export default function MyMovies() {
  const { url } = useConstants();
  const { movies, error, isLoading } = useFetch(url);
  const handleFilter =  movies.filter((movie) => movie.creator === "mario")
 
  return (
  <div>
    {error && <div>{error}</div>}
    {isLoading && <div>Loading...</div>}
    <MovieList  movies={handleFilter} title="Mario Movies "/>
  </div>
 )

}