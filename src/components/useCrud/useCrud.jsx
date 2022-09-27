import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch/useFetch";


export default function  useCrud () {

  const {id} = useParams();
  const {data: movie } =useFetch(`http://localhost:8000/movies/${id}`)
  const navigate = useNavigate();


  const handleDelete = () => {
    fetch( `http://localhost:8000/movies/${id}` , {
      method: "DELETE"
    })
    .then(() => {
      console.log(`${movie.name} has been deleted`)
      navigate("/")
    })
  }
  

 return {
   handleDelete
 }
}