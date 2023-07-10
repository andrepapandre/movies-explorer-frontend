// import "./Header.css"
import React from "react";
import logo from "../../image/logo-auth.svg"
import accountIcon from "../../image/account-png.svg"
import Header from "../Header/Header";
import { NavLink } from "react-router-dom";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Footer from "../Footer/Footer";
export default function SavedMovies() {
    return (
        <>
            <Header>
                <img className="header__logo" src={logo} />
                <div className="header__auth">
                    <NavLink className="header__movies" to="/">Фильмы</NavLink>
                    <NavLink className="header__save-movies" to="/">Сохранённые фильмы</NavLink>
                    <NavLink className="header__account" to="/">Аккаунт</NavLink>
                    <NavLink className="header__account-container-for-icon">
                        <img src={accountIcon} className="header__account-icon" />
                    </NavLink>
                </div>
            </Header>
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    )
};

