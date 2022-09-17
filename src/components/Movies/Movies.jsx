//this is the main movies 

import { useEffect } from "react";
import { useState } from "react";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination.";
import SearchBar from "../SearchBar/SearchBar";
import useFetch from "../useFetch/useFetch";


export default function Movies() {
// "http://localhost:8000/movies"
const {movies, error, isLoading, handleDelete} = useFetch("http://localhost:8000/movies")
const [currentPage, setCurrentPage] =useState(1)
const [moviesPerPage,setMoviesPerPage ] =useState(2)
// const [input, setInPut]= useState("")
// const [output, setOutPut] = useState([])

const lastMovieIndex =  currentPage * moviesPerPage;
const firstMovieIndex = lastMovieIndex - moviesPerPage;
const currentMovies = movies.slice(firstMovieIndex , lastMovieIndex)


// useEffect(() =>{
//     setOutPut([])
// movies.filter((movie) =>{
//     if(movie.name.toLowerCase().includes(input.toLowerCase())){
//         setOutPut(output=> [...output, movie])
//     }
// })
// }, [input])


return (
<div>
    {error && <div>{error}</div>}
    {isLoading && <div>Loading...</div>}
  {movies &&  <SearchBar movies={movies} handleDelete={handleDelete} />}
{movies && <MovieList movies={currentMovies} title="All Movies"  handleDelete={handleDelete} />}
<Pagination totalMovies={movies.length} moviesPerPage={moviesPerPage} setCurrentPage={setCurrentPage} setPostPerPage={setMoviesPerPage} />
</div>
)
} 
