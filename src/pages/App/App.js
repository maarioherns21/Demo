import "./App.css";
import Home from "../Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../../components/Navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Form/Form";
import MovieDetails from "../../components/MovieDetails/MovieDetails";


export default function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Form" exact element={<Form />} />
          <Route path="/movie/:id" exact element={<MovieDetails />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
