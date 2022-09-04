
/// you havbe to use the "use " keyword in order to make it into a hook 
///this is a hook tha t was created , so it can be used with other components if needed
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function useFetch (url){
const [movies, setMovies]= useState(null)
const [isLoading, SetIsLoading] = useState(true)
const [error, setError] =useState(null)
const navigate = useNavigate();


const handleDelete =(id) =>{
    fetch(`http://localhost:8000/movies/` + id , {
        method: "DELETE"
    })
    .then(() =>{
        console.log("Movie Delete")
        navigate("/")
    })
 }
 
// const handleDelete = (id) => {
//     let newArr = movies.filter(movie =>  movie.id !== id)
//     setMovies(newArr)
// }


useEffect(() =>{
    setTimeout(() =>{
fetch(url)
    .then( res =>{
        console.log(res)
        if(!res.ok){
            throw Error("the server doesnt exist")
        }
        return res.json()
    })
    .then( data => {
        setMovies(data)
        setError(null)
        SetIsLoading(false)
    })
    .catch((error) =>{
      setError(error.message)
      SetIsLoading(false)
        
    })
    }, 1000)   
}, [url])

return {
    movies, error , isLoading, handleDelete
}
}