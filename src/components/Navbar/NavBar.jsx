import "./NavBar.css";
import { Link } from "react-router-dom";
import useToken from "../useToken/useToken";

export default function NavBar() {
  const { logout, user } = useToken();
  console.log(user);

  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/Form">New Movie</Link>
      <Link to="/movie/user">My Movies</Link>
      {user ? (
        <button to="/movies" onClick={logout}>
          Logout
        </button>
      ) : (
        <button to="/movies">Sign In</button>
      )}
    </div>
  );
}