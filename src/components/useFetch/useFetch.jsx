
/// you havbe to use the "use " keyword in order to make it into a hook 
///this is a hook tha t was created , so it can be used with other components if needed
import { useEffect, useState } from "react"
import "./useFetch.css";


export default function useFetch(url) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) throw Error("server doesnt exist");
          return res.json();
        })
        .then((data) => {
          console.log(data)
          setError(null);
          setMovies(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);

  return {
    movies,
    isLoading,
    error,
  };
}