// import "./Header.css"
import React from "react";
import logo from "../../image/logo-auth.svg"
import accountIcon from "../../image/account-png.svg"
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import SavedMoviesCardList from "../Movies/SavedMoviesCardList/SavedMoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
export default function SavedMovies({ ThemeHeader, Theme }) {
    ThemeHeader('header_black')
    return (
        <>
            <Header ThemeHeaderS={Theme}>
                <img className="header__logo" src={logo} alt="Логотип проектной работы" />
                <div className="header__auth">
                    <NavLink className="header__movies" to="/movies">Фильмы</NavLink>
                    <NavLink className="header__save-movies" to="/saved-movies">Сохранённые фильмы</NavLink>
                    <NavLink className="header__account" to="/profile">Аккаунт</NavLink>
                    <NavLink className="header__account-container-for-icon">
                        <img src={accountIcon} className="header__account-icon" alt="Логотип доступа к аккаунту"/>
                    </NavLink>
                </div>
            </Header>
            <main>
                <SearchForm />
                <SavedMoviesCardList />
            </main>
            <Footer />
        </>
    )
};

