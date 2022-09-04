import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar () {
   return (
    <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/Form" >New Movie</Link>
    </div>

   ) 
}