import React, { useCallback } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../image/logo-auth.svg"

function Login({ isLogged, onRegister }) {
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
            <div className="login__window">
                <img src={logoImg} className="login__logo" />
                <h3 className="login__title">Рады видеть!</h3>
                <form onSubmit="" className="login__form">
                    <label className="login__label">Email</label>
                    <input
                        // autoComplete="true"
                        name="email"
                        type="email"
                        placeholder="pochta@yandex.ru|"
                        className="login__input"
                    />
                    <label className="login__label">Пароль</label>
                    <input
                        // autoComplete="true"
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        value="Пароль"
                        className="login__input"
                    />
                    <button type="submit" className="login__button">
                        Войти
                    </button>
                </form>
                <Link className="login__reg" to="/sign-in">
                    Уже Зарегистрированны? <span className="login__reg-default">Регистрация</span>
                </Link>
            </div>
        </>
    );
}

export default Login;
