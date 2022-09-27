import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "./SearchBar.css";
    ///this components alllows to cretate a new arr of movies
//this is a prop component  

// this is  props  compoents 
export default function SearchBar ({movies, handleDelete}) {
  const [input, setInPut] = useState(movies);
  const [output, setOutPut] = useState([]);

  useEffect(() => {
    setOutPut([]);
    movies.filter((movie) => {
      if (movie.name.toLowerCase().includes(input.toLowerCase())) {
        setOutPut((output) => [...output, movie]);

      }
    })
  }, [input]);



  return(
    <div>
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={(e) => setInPut(e.target.value)} />
      </div>
      <Popup className="form modal" trigger={<button>search</button>}>
    {output
    .sort((a, b) =>  a.name > b.name ? 1 : -1 )
    .map((movie) => (
        <div key={movie.id}>
            <h2>{movie.name}</h2>
            <Link to={`/movie/${movie.id}`}>
             <img src={movie.images} alt={movie.name} />
            <h3>{movie.body}</h3>
            </Link>
            <button onClick={() => handleDelete(movie.id)}>delete</button>
        </div>
    ))}
      </Popup>
    
</div>
  )
}
