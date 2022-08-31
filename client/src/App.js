import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import Searcheador from "./components/Searcheador"
import Favorites from "./components/Favorites";


const App = () => {


  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/movie/:movie_id" element={<MovieDetails />} />
          <Route path="/search/:value" element={<Searcheador />} />
          <Route path="/favorites/:id" element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
