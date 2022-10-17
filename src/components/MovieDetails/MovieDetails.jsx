import { useNavigate, useParams } from "react-router-dom";
import EditForm from "../EditForm/EditForm";
import useFetch from "../useFetch/useFetch";
import "./MovieDetails.css";
import Popup from "reactjs-popup";
import useConstants from "../../useConstants/useConstants";

export default function MovieDetails() {
  const { id } = useParams();
  const { url, DELETE } = useConstants();
  const { movies: movie, isLoading, error } = useFetch(`${url}/${id}`);
  const navigate = useNavigate();

  const handleDelete = async () => {
    await fetch(`${url}/${id}`, {
      method: DELETE,
    }).then(() => {
      console.log(`${movie.name} was deleted from the database`);
      navigate("/");
    });
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading....</div>}
      {movie && (
        <div>
          <h2>{movie.name}</h2>
          <img src={movie.images} alt={movie.name} />
          <h3>{movie.body}</h3>
          <button onClick={handleDelete}>delete</button>
          <Popup trigger={<button>update</button>}>
            <EditForm movie={movie} /> 
          </Popup>
        </div>
      )}
    </div>
  );
}
