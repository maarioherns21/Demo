import { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";

export default function Form() {
const [name, setName] =useState("")
const [body, setBody]=useState("")
const [creator, setCreator]= useState("mario")
const [images, setImages] =useState("")
const navigate = useNavigate();

const handleSubmit =  async (e) =>{
e.preventDefault();
const movie ={name, body , creator , images};
await fetch(`http://localhost:8000/movies/`, {
    method: "POST",
    headers: {  "Content-Type" : "application/json"},
    body: JSON.stringify(movie)
})
.then(() =>{
    console.log(` Added ${movie.name} to db`, movie )
    navigate("/")

})
}
    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Movie Name" />
                <textarea  value={body} onChange={(e) => setBody(e.target.value)} placeholder="Movie info" />
                <select value={creator} onChange={(e) => setCreator(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="mark">Mark</option>
                </select>
                <input value={images} onChange={(e) => setImages(e.target.value)} type="url" placeholder="Image URL" /> 
                <button>Add Movie</button>
                <h1>{name}</h1>
                <h2>{body}</h2>
                <h3>{creator}</h3>
                <img src={images} alt={name}/>
            </form>

        </div>
    )
}
