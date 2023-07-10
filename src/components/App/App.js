import Header from "../Header/Header";
import Main from "../Main/Main"
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import "./App.css"
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom"; // импортируем Routes
import Profile from "../Profile/Profile"
import SavedMovies from "../SavedMovies/SavedMovies"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/movies"
          element={<Movies />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies />
          }
        />
        <Route
          path="/not-found"
          element={<NotFound />
          }
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/sign-in"
          element={<Login />}
        />
        <Route
          path="/sign-up"
          element={<Register />}
        />
      </Routes>
    </div>
  );
}

export default App;
