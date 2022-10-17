import { useState } from "react";
import useConstants from "../../useConstants/useConstants";
import useFetch from "../useFetch/useFetch";


export default function usePagi () {
const { url } = useConstants();
const { movies } = useFetch(url);
const [currentPage, setCurrentPage] = useState(1);
const [moviesPerPage, setMoviesPerPage] = useState(2);

const lastMovieIndex = currentPage * moviesPerPage;
const firstMovieIndex = lastMovieIndex - moviesPerPage;
const currentMovies = movies.slice(firstMovieIndex, lastMovieIndex);
const allMovies = movies.length;

let pages = [];
for (let i = 1; i <= Math.ceil(allMovies / moviesPerPage); i++) {
  pages.push(i);
}


return  {
     setCurrentPage, setMoviesPerPage , currentMovies , moviesPerPage, pages, allMovies
}
}