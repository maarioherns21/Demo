



// export default function Header() {
    
//     return (
//         //this is  FOrm
//         {
//             const [name, setName] =useState("")
//             const [body, setBody] = useState("")
//             const [creator, setCreator] =useState("mario")
//             const [isPending, setIsPending] =useState(false)
//             const POST = "POST";
//             const navigate = useNavigate();
            
//             const handleSumbit = (e) =>{
//               e.preventDefault();
//             const movie = {name, body, creator} ;
//             setIsPending(true)
//             fetch("http://localhost:8000/movies", {
//                 method: POST,
//                 headers: { "Content-Type" : "application/json"},
//                 body: JSON.stringify(movie)
//             })
//             .then(() =>{
//                 console.log("Movie added" , movie)
//                 setIsPending(false)
//                 navigate("/")
//             })
//              }
            
            
//             return (
//                 <div className="form" >
//              <form onSubmit={handleSumbit}>
//                 <input value={name} onChange={(e) => setName(e.target.value)}  placeholder="movie name"/>
//                 <textarea value={body}  onChange={(e) =>  setBody(e.target.value)} placeholde="movie info"/>
//                 <select value={creator} onChange={(e) =>  setCreator(e.target.value)}>
//                     <option value="mario">Mario</option>
//                     <option value="Mark">Mark</option>
//                 </select>
//                { !isPending && <button>Submit</button>}
//                { isPending && <button>Adding Movie...</button>}
//                 <h1>{name}</h1>
//                 <h2>{body}</h2>
//                 <h3>{creator}</h3>
//              </form>
//                 </div>
//             )
//             }
// }
// //// this  is the movie details 

// const {id} = useParams();
// const {movies: movie, isLoading, error} = useFetch(`http://localhost:8000/movies/` + id)
// const navigate = useNavigate();


// const handleDelete = () =>{
//     fetch(`http://localhost:8000/movies/` + movie.id , {
//         method: "DELETE"
//     })
//     .then(() =>{
//     navigate("/")
//     console.log("Movie Deleted")
//     })
// }

// return (
// <div>
//   <h1>{id}</h1>
//   {error && <div>{error}</div>}
//   {isLoading && <div>Loading...</div>}
//   {movie && (
//     <div>
//         <h1>{movie.name}</h1>
//         <h2>{movie.body}</h2>
//         <button onClick={handleDelete}>Delete</button>
//     </div>
//   )}
// </div>


