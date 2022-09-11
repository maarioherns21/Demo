//this is the main movies 
import { useEffect } from "react";
import { useState } from "react";
import MovieList from "../MovieList/MovieList";
import useFetch from "../useFetch/useFetch";


export default function Movies() {
// "http://localhost:8000/movies"
const {movies, error, isLoading, handleDelete} = useFetch("http://localhost:8000/movies")

return (
<div>
    {error && <div>{error}</div>}
    {isLoading && <div>Loading...</div>}
{movies && <MovieList movies={movies} title="All Movies"  handleDelete={handleDelete}/>}
</div>
)
}

