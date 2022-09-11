import { click } from "@testing-library/user-event/dist/click";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Form.css";



export default function EditForm({movie}) {
    const [name, setName] =useState(movie.name)
    const [body, setBody]= useState(movie.body)
    const [creator, setCreator] = useState(movie.creator)
    const [isPending , setIsPending] = useState(false)
    const [images, setImages]= useState("")
    const navigate = useNavigate();
    const PUT = "PUT"
    const {id} =useParams();

    
    
   const handleUpdate = () => {
     const updateMovie = { name, body, creator, images };
     fetch(`http://localhost:8000/movies/` + id, {
       method: PUT,
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(updateMovie),
     }).then(() => {
       console.log("Movie Updated", updateMovie);
       setIsPending(false);
       navigate("/");
     });
   };

    return (
            <div className="form">
            <form onSubmit={handleUpdate}>
                <input value={name} onChange={(e) =>  setName(e.target.value)} placeholder="Movie name" />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}  placeholder="Movie details"/> 
                <select value={creator} onChange={(e)=> setCreator(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="Mark">mark</option>
                </select>
                <input  value={images} type="url" onChange={(e) => setImages(e.target.value)}/>
              { !isPending && <button>Edit Movie</button>}
               { isPending && <button>Updating...</button>}
                <h1>{name}</h1>
                <h2>{body}</h2>
                <h3>{creator}</h3>
                <img src={images} alt={name}/>
            </form>
        </div>
    )
}