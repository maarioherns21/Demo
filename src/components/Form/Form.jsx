import { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

export default function Form() {
const [name, setName] =useState("")
const [body, setBody]= useState("")
const [creator, setCreator] = useState("mario")
const [isPending , setIsPending] = useState(false)
const [images, setImages]= useState("")
const navigate = useNavigate();
const POST = "POST"


const handleSubmit = (e) =>{
e.preventDefault();
const movie = {name, body, creator, images} ;
setIsPending(true)
fetch(`http://localhost:8000/movies/` , {
    method: POST,
    headers: { "Content-Type" : "application/json" },
    body : JSON.stringify(movie)
})
.then(() =>{
    console.log("Movie Added" , movie) 
    navigate("/")
    setIsPending(false)
})
}
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) =>  setName(e.target.value)} placeholder="Movie name" />
                <textarea value={body} onChange={(e) => setBody(e.target.value)}  placeholder="Movie details"/> 
                <select value={creator} onChange={(e)=> setCreator(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="Mark">mark</option>
                </select>
                <input  value={images} type="url" onChange={(e) => setImages(e.target.value)}/>
              { !isPending && <button>Add Movie</button>}
               { isPending && <button>Adding..</button>}
                <h1>{name}</h1>
                <h2>{body}</h2>
                <h3>{creator}</h3>
            </form>
        </div>
    )
}
