//this is the main movies 

import { useState } from "react";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination.";
import useFetch from "../useFetch/useFetch";


export default function Movies() {
// "http://localhost:8000/movies"
const {movies, error, isLoading, handleDelete} = useFetch("http://localhost:8000/movies")
const [currentPage, setCurrentPage] =useState(1)
const [moviesPerPage,setMoviesPerPage ] =useState(2)


const lastMovieIndex =  currentPage * moviesPerPage;
const firstMovieIndex = lastMovieIndex - moviesPerPage;
const currentMovies = movies.slice(firstMovieIndex , lastMovieIndex)





return (
<div>
    {error && <div>{error}</div>}
    {isLoading && <div>Loading...</div>}
{movies && <MovieList movies={currentMovies} title="All Movies"  handleDelete={handleDelete} />}
<Pagination totalMovies={movies.length} moviesPerPage={moviesPerPage} setCurrentPage={setCurrentPage} setPostPerPage={setMoviesPerPage} />
</div>
)
} 
