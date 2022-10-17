import { useState } from "react";
import "./Form.css";
import { useNavigate } from "react-router-dom";
import useConstants from "../../useConstants/useConstants";
import FileBase64 from "react-file-base64"


export default function Form() {
  const { url, POST } = useConstants();
  const [formData, setFormData] =useState({ name: "", body: "", creator: "mario" , images: ""})
  // const [name, setName] = useState("");
  // const [body, setBody] = useState("");
  // const [creator, setCreator] = useState("mario");
  // const [images, setImages] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const movie = { name: formData.name, body: formData.body, creator: formData.creator, images: formData.images };
    console.log(movie)
    setIsPending(true);
    await fetch(url, {
      method: POST,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    }).then(() => {
      setIsPending(false);
      console.log(` ${movie.name}  was added into the data base`);
      navigate("/");
    });
  };


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        <textarea value={formData.body} onChange={(e) => setFormData({...formData, body : e.target.value})} />
        <select value={formData.creator} onChange={(e) => setFormData({...formData, creator: e.target.value})}>
          <option value="mario">mario</option>
          <option value="mark">mark</option>
        </select>
        <FileBase64 value={formData.images} type="file" multiple={false} onDone={({base64}) => setFormData({ ...formData, images: base64})}/>
        {!isPending && <button>Add Movie</button>}
        {isPending && <button>Adding...</button>}
      </form>
    </div>
  );
}
