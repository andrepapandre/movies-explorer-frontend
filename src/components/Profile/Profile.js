import React, { useCallback } from "react";
import "./Profile.css"
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../image/logo-auth.svg"

function Profile() {

    return (
        <>
            <div className="profile__window">
                <img src={logoImg} className="profile__logo" />
                <h3 className="profile__title">Привет, Виталий!</h3>
                <form onSubmit="" className="profile__form">
                    <label className="profile__label">Имя</label>
                    <input
                        // autoComplete="true"
                        name="email"
                        type="email"
                        placeholder="pochta@yandex.ru|"
                        className="profile__input"
                    />
                    <label className="profile__label">Email</label>
                    <input
                        // autoComplete="true"
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        value="Пароль"
                        className="profile__input"
                    />
                    <button className="profile__edit">
                        Редактировать
                    </button>
                    <button className="profile__logout">
                        Выйти из аккаунта
                    </button>
                </form>
            </div>
        </>
    );
}

export default Profile;
