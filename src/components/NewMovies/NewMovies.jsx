import { useState } from "react";
import Movies from "../Movies/Movies";

export default function NewMovies() {

  //useState allows to set the current or the new state 
  const [newMovies, setMovies] = useState([
    { name: "Avangers", id: 10, creator: "mario" },
    { name: "SpiderMan", id: 1, creator: "mario" },
    { name: "Thor", id: 2, creator: "mario" },
    { name: "Love island", id: 3, creator: "mark" },
    { name: "Markus", id: 4, creator: "ralph" },
  ]);
// this fucntion is able to delete each keyvalue pair  filtering the ones that are nto deletign
  const deleteHandle = (id) => {
    const newArr = newMovies.filter((movie) => movie.id !== id);
    setMovies(newArr);
  };

  return (
    <div>
      <h1>Hot Movies </h1>
      {newMovies.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.name}</h4>
          <button onClick={() => deleteHandle(movie.id)}>DELETE HOT</button>
        </div>
      ))}
      <Movies  />
    </div>
    
  );
}
