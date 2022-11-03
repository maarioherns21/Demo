import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import MyMovies from "../../components/MyMovies/MyMovies";
import Login from "../../components/Login/Login";

import useToken from "../../components/useToken/useToken";

export default function App() {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Form" exact element={<Form />} />
          <Route path="/movie/:id" exact element={<MovieDetails />} />
          <Route path="/movie/user" exact element={<MyMovies />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
