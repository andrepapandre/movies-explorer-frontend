import { useState } from 'react'
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
import BurgerPopup from '../BurgerPopup/BurgerPopup';

function App() {
  const [ThemeHeader, SetThemeHeader] = useState("header_white");
  const [isBurgerPopupOpen, setIsBurgerPopupOpen] = useState(false);

  const onBurgerPopup = () => {
    return setIsBurgerPopupOpen(!isBurgerPopupOpen)
  }

  const closeAllPopups = () => {
    setIsBurgerPopupOpen(false)
  };

  return (
    <div className="App">

      <BurgerPopup
        isOpen={isBurgerPopupOpen}
        onClose={closeAllPopups}
      />

      <Routes>
        <Route
          path="/"
          element={<Main ThemeHeader={SetThemeHeader}
            Theme={ThemeHeader} />}
        />
        <Route
          path="/movies"
          element={<Movies ThemeHeader={SetThemeHeader}
            Theme={ThemeHeader}
            onBurgerPopup={onBurgerPopup}
          />}
        />
        <Route
          path="/saved-movies"
          element={<SavedMovies ThemeHeader={SetThemeHeader}
            Theme={ThemeHeader} />
          }
        />
        <Route
          path="/not-found"
          element={<NotFound />
          }
        />
        <Route
          path="/profile"
          element={<Profile
            onBurgerPopup={onBurgerPopup} />}
        />
        <Route
          path="/signin"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Register />}
        />
      </Routes>


    </div>
  );
}

export default App;
