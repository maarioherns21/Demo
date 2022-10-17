//this is the main movies 

import { useEffect } from "react";
import { useState } from "react";
import useConstants from "../../useConstants/useConstants";
import MovieList from "../MovieList/MovieList";
import Pagination from "../Pagination/Pagination.";
import SearchBar from "../SearchBar/SearchBar";
import useFetch from "../useFetch/useFetch";
import usePagi from "../usePagi/usePagi";
import "./Movies.css";

export default function Movies() {
  // "http://localhost:8000/movies"
  const { url } = useConstants();
  const { movies, isLoading, error } = useFetch(url);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(3);

  const lastMovieIndex = currentPage * moviesPerPage;
  const firstMoviesIndex = lastMovieIndex - moviesPerPage;
  const currentMovies = movies.slice(firstMoviesIndex, lastMovieIndex);




  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <SearchBar movies={movies}/>
      <MovieList movies={currentMovies} title="All Movies" />
      <Pagination  totalMovies={movies.length} moviesPerPage={moviesPerPage}  setCurrentPage={setCurrentPage}/>
    </div>
  );
} 
