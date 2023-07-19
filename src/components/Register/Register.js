import React, { useCallback } from "react";
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../image/logo-auth.svg"

function Register() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    };


    return (
        <main>
            <div className="register__window">
                <img src={logoImg} className="register__logo" alt="Логотип проектной работы" />
                <h1 className="register__title">Добро пожаловать!</h1>
                <form onSubmit={handleSubmit} className="register__form">
                    <label className="register__label">Имя</label>
                    <input
                        id="name"
                        name="name"
                        type="string"
                        placeholder="Виталий"
                        required={true}
                        value={name}
                        onChange={handleNameChange}
                        className="register__input"
                    />
                    <label className="register__label">Email</label>
                    <input
                        required={true}
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="test@yandex.ru"
                        className="register__input"
                    />
                    <label className="register__label">Пароль</label>
                    <input
                        required={true}
                        name="password"
                        type="password"
                        placeholder="*************"
                        value={password}
                        onChange={handlePasswordChange}
                        className="register__input"
                    />
                    <button type="submit" className="register__button">
                        Зарегистрироваться
                    </button>
                </form>
                <Link className="register__reg" to="/sign-in">
                    Уже зарегистрированы? <span className="register__reg-default">Войти</span>
                </Link>
            </div>
        </main>
    );
}

export default Register;
