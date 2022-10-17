import { useParams } from "react-router-dom";



export default function useConstants () {
const {id} =useParams()
const url = `http://localhost:8000/movies`;
const UrlId = `http://localhost:8000/movies/${id}`;
const POST = "POST";
const DELETE = "DELETE";
const PUT = "PUT";

    return {
      url , POST , DELETE, PUT, UrlId
    }
}


