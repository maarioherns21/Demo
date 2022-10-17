import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useConstants from "../../useConstants/useConstants";
import "./EditForm.css";
import FileBase64 from "react-file-base64"


export default function EditForm({ movie }) {
  const { url, PUT } = useConstants();
  const [formData, setFormData] =useState({ name: movie.name, body: movie.body, creator: movie.creator, images: movie.images})
  // const [name, setName] = useState(movie.name);
  // const [body, setBody] = useState(movie.body);
  // const [creator, setCreator] = useState(movie.name);
  // const [images, setImages] = useState(movie.images);
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const UpdateMovie =  { name: formData.name, body: formData.body, creator: formData.creator, images: formData.images };
    setIsPending(true);
    await fetch(`${url}/${id}`, {
      method: PUT,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(UpdateMovie),
    }).then(() => {
      setIsPending(false);
      console.log(` ${UpdateMovie.name}  was added into the data base`);
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
        {!isPending && <button>Update Movie</button>}
        {isPending && <button>Updating...</button>}
      </form>
    </div>
  );
}
