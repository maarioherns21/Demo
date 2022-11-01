import axios from "axios";


const url  = "http://localhost:4000/movies";


export const fetchMovies = () =>  axios.get(url)

export const createMovie = (newMovie) =>  axios.post(url, newMovie)

