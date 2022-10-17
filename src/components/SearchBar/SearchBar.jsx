import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Movies from "../Movies/Movies";
import "./SearchBar.css";
///this components alllows to cretate a new arr of movies
//this is a prop component

// this is  props  compoents
export default function SearchBar({movies}) {
const [input, setInput] = useState([]);
const [output, setOutput] = useState([]);

useEffect(() => {
  setOutput([]);
  movies.filter((movie) => {
    if (movie.name.toLowerCase().includes(input.toLowerCase())) {
      setOutput((output) => [...output, movie]);
    }
  });
}, [input]);

// console.log(output)

return (
  <div>
    <div>
      <div>Search</div>
      <input onChange={(e) => setInput(e.target.value)} />
    </div>
    <Popup className="form modal" trigger={<button>Search</button>}>
      <div className="modal-content">
        {output
          .sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 )
          .map((movie) => (
            <div key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={movie.images} alt={movie.name} />
                <h2>{movie.name}</h2>
              </Link>
            </div>
          ))}
      </div>
    </Popup>
  </div>
);

}
