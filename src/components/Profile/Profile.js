import React, { useCallback, useState } from "react";
import "./Profile.css"
import { Link, NavLink, useNavigate } from "react-router-dom";
import logoImg from "../../image/logo-auth.svg"
import logo from "../../image/logo-auth.svg"
import accountIcon from "../../image/account-png.svg"


import Header from "../Header/Header";

function Profile({ onBurgerPopup }) {

    const [input, setInput] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isActive, setIsActive] = useState(true)

    const clickInput = () => {
        setInput(false)
        setIsActive(false)
    }

    function inputName(e) {
        setName(e.target.value);
    }


    function inputEmail(e) {
        setEmail(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setInput(!false)
        setIsActive(!false)
    };


    return (
        <>
            <Header>
                <img className="header__logo" src={logo} alt="Логотип проектной работы" />
                <div className="header__auth">
                    <NavLink className="header__movies" to="/movies">Фильмы</NavLink>
                    <NavLink className="header__save-movies" to="/saved-movies">Сохранённые фильмы</NavLink>
                    <NavLink className="header__account" to="/profile">Аккаунт</NavLink>
                    <NavLink className="header__account-container-for-icon" to="/profile">
                        <img src={accountIcon} className="header__account-icon" alt="Иконка доступа к аккаунту" />
                    </NavLink>
                </div>
                <button type="button" onClick={onBurgerPopup} className="header__burger"></button>
            </Header>
            <main>
                <div className="profile__window">
                    <h1 className="profile__title">Привет, Виталий!</h1>
                    <form onSubmit={onSubmit} className="profile__form">
                        <div className="profile__block">
                            <label className="profile__label">Имя</label>
                            <input
                                name="Виталий"
                                disabled={input}
                                placeholder="Your Name"
                                onChange={inputName}
                                value={name}
                                className="profile__input"
                            />
                        </div>
                        <div className="profile__block">
                            <label className="profile__label">E-mail</label>
                            <input
                                name="Email"
                                value={email}
                                disabled={input}
                                onChange={inputEmail}
                                placeholder="Your Email"
                                className="profile__input"
                            />
                        </div>
                        {!isActive && (<button type="submit" on={onSubmit} className="profile__save">Сохранить</button>)}
                        {isActive &&
                            (
                                <>
                                    <button type="button" className="profile__edit" onClick={clickInput}>Редактировать</button>
                                    <button type="button" className="profile__logout">
                                        <NavLink to="/" className="profile__logout">Выйти из аккаунта </NavLink>
                                    </button></>
                            )
                        }
                    </form>
                </div>
            </main >
        </>
    );
}

export default Profile;
