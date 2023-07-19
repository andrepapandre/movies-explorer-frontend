// import "./Header.css"
import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import logo from "../../image/logo-auth.svg"
import accountIcon from "../../image/account-png.svg"
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";


export default function Movies({ ThemeHeader, Theme, onBurgerPopup }) {
    ThemeHeader('header_black')
    console.log(onBurgerPopup);
    return (
        <>
            <Header ThemeHeaderS={Theme}>
                <img className="header__logo" src={logo} alt="Логотип проектной работы" />
                <div className="header__auth">
                    <NavLink className="header__movies" to="/movies">Фильмы</NavLink>
                    <NavLink className="header__save-movies" to="/saved-movies">Сохранённые фильмы</NavLink>
                    <NavLink className="header__account" to="/profile">Аккаунт</NavLink>
                    <NavLink className="header__account-container-for-icon" to="/profile">
                        <img src={accountIcon} className="header__account-icon" />
                    </NavLink>

                </div>
                <button onClick={onBurgerPopup} className="header__burger"></button>
            </Header>
            <main>
                <SearchForm />
                <MoviesCardList />
            </main >
            <Footer />
        </>
    )
};

