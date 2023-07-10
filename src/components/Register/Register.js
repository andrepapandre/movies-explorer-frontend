import React, { useCallback } from "react";
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../image/logo-auth.svg"

function Register({ isLogged, onRegister }) {
    //   const [userData, setUserData] = React.useState({
    //     email: "",
    //     password: "",
    //   });

    //   const handleChange = useCallback(
    //     (e) => {
    //       const { name, value } = e.target;
    //       setUserData({
    //         ...userData,
    //         [name]: value,
    //       });
    //     },
    //     [userData]
    //   );

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onRegister(userData);
    //   };

    //   if (isLogged) {
    //     return <React.Redirect to="/" />;
    //   }

    return (
        <>
            <div className="register__window">
                <img src={logoImg} className="register__logo" />
                <h3 className="register__title">Регистрация</h3>
                <form onSubmit="" className="register__form">
                    <label className="register__label">Имя</label>
                    <input
                        id="name"
                        name="name"
                        type="string"
                        placeholder="Виталий"
                        value=""
                        className="register__input"
                    />
                    <label className="register__label">Email</label>
                    <input
                        autoComplete="true"
                        name="email"
                        type="email"
                        placeholder="pochta@yandex.ru|"
                        className="register__input"
                    />
                    <label className="register__label">Пароль</label>
                    <input
                        autoComplete="true"
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        value="Пароль"
                        className="register__input"
                    />
                    <button type="submit" className="register__button">
                        Зарегистрироваться
                    </button>
                </form>
                <Link className="register__reg" to="/sign-in">
                    Уже Зарегистрированны? <span className="register__reg-default">Войти</span>
                </Link>
            </div>
        </>
    );
}

export default Register;
