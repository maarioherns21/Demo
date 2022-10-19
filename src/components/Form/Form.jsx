import { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import useConstants from "../../useConstants/useConstants";
import FileBase64 from "react-file-base64"


export default function Form() {
const {url, POST} =useConstants()
const [formData , setFormData] =useState({name: "" , body: "" , creator: "" , images: ""})
const [isPending, setIsPending]= useState(false)
const navigate = useNavigate()

const handleSubmit = async (e) => {
  e.preventDefault();
  const movie = {
    name: formData.name,
    body: formData.body,
    creator: formData.creator,
    images: formData.images,
  };
  setIsPending(true);
  await fetch(url, {
    method: POST,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie),
  }).then(() => {
    console.log(`${movie} added to the db`);
    navigate("/");
    setIsPending(false);
  });
};

const clear = (e) => {
  e.preventDefault()
  setFormData({ name: "" , body: "" , creator: "" , images: "" })
}

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input value={formData.name} onChange={(e)=>  setFormData({...formData, name: e.target.value})}  />
        <textarea value={formData.body} onChange={(e) =>  setFormData({...formData, body: e.target.value})} />
        <select value={formData.creator} onChange={(e) => setFormData({...formData, creator: e.target.value})}>
          <option value="mario">mario</option>
          <option value="mark">mark</option>
        </select>
        <FileBase64  value={formData.images} type="file" onDone={({base64}) =>  setFormData({ ...formData, images: base64})}/>
        {!isPending && <button>Add Movie</button>}
        {isPending && <button>Adding...</button>}
        <button onClick={clear}>clear</button>
      </form>
    </div>
  )
}
