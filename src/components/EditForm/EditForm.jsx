import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditForm.css";



export default function EditForm({ movie }) {
  const [name, setName] = useState(movie.name);
  const [body, setBody] = useState(movie.body);
  const [creator, setCreator] = useState(movie.creator);
  const [isPending, setIsPending] = useState(false);
  const [images, setImages] = useState(movie.images);
  const navigate = useNavigate();
  const PUT = "PUT";
  const { id } = useParams();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateMovie = { name, body, creator, images };
    setIsPending(true);
    await fetch(`http://localhost:8000/movies/${id}`, {
      method: PUT,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateMovie),
    }).then(() => {
      console.log("Updated Movie", updateMovie);
      navigate("/");
      setIsPending(false);
    });
  };

  return (
    <div className="modal form">
      <form className="modal-content" onSubmit={handleUpdate}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Movie name" />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Movie details" />
        <select value={creator} onChange={(e) => setCreator(e.target.value)}>
          <option value="mario">mario</option>
          <option value="Mark">mark</option>
        </select>
        <input value={images} onChange={(e) => setImages(e.target.value)} />
        {!isPending && <button>Update</button>}
        {isPending && <button>Updating...</button>}
      </form>
    </div>
  );
}
