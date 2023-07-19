import "./BurgerPopup.css"
import { NavLink } from "react-router-dom";
import React from "react";
import accountIcon from "../../image/account-png.svg"

export default function BurgerPopup({isOpen, onClose}) {
    return (
        <>
            <div className={`burger-popup ${isOpen ? "popup-is-open" : "" }`}>
                <button type="button" onClick={onClose} className="burger-popup__close-button"></button>
                <div className="burger-popup__block">
                    <NavLink className="burger-popup__main" to="/">Главная</NavLink>
                    <NavLink className="burger-popup__movies" to="/movies">Фильмы</NavLink>
                    <NavLink className="burger-popup__save-movies" to="/saved-movies">Сохранённые фильмы</NavLink>
                    <div className="burger-popup__profile">
                        <NavLink className="burger-popup__account" to="/profile">Аккаунт</NavLink>
                        <NavLink className="burger-popup__account-container-for-icon" to="/profile">
                            <img src={accountIcon} alt="Иконка доступа к аккаунту" className="burger-popup__account-icon" />
                        </NavLink>
                    </div>

                </div>

            </div>
        </>
    )
};

