import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditForm from "../EditForm/EditForm";
import useFetch from "../useFetch/useFetch";
import "./MovieDetails.css";
import Popup from "reactjs-popup";

export default function MovieDetails() {
 const {id} = useParams();
 const {movies :  movie, error, isLoading} = useFetch(`http://localhost:8000/movies/` + id)
 const navigate = useNavigate();

const handleDelete = () =>{
    fetch(`http://localhost:8000/movies/` + id , {
        method: "DELETE"
    })
    .then(() => {
        console.log("Movie Deleted")
        navigate("/")
    })
}
 return (
    <div>
        
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {movie && (
            <div>
                <h1>{movie.name}</h1>
                <img src={movie.images} alt={movie.name}/>
                <h2>{movie.body}</h2>
                <button onClick={() => handleDelete(movie.id)}>delete</button>
                <Popup  trigger={<button>Edit Movie</button>} position="right center">
                {<EditForm movie={movie} />}
                 </Popup>
            </div>
        ) }
       
    </div>
 )
}
