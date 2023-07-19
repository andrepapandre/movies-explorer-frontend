import React, { useState, useCallback } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import logoImg from "../../image/logo-auth.svg"

function Login({ isLogged, onRegister }) {
    const [inputValue, setInputValue] = useState({ email: "", password: "" });
    const [formValid, setFormValid] = useState(false);

    const changeHandler = ({ currentTarget }) => {
        const { value, name } = currentTarget;
        setInputValue((prev) => {
            const formValues = { ...prev, [name]: value }
            validate(formValues)
            return formValues
        });
    };

    const validate = ({ name, password }) => {
        //здесь ваши проверки валидности

        const nameIsValid = name; //ваша проверка валидности name false||true
        const passIsValid = password; //ваша проверка валидности password falsa||true
        const isValid = () => {
            if (nameIsValid.length && passIsValid.length > 2) {
                return true
            } else {
                return false
            }
        }
        if (isValid !== formValid) {
            setFormValid(true)
        }
        console.log(isValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <main>
                <div className="login__window">
                    <img src={logoImg} alt="Логотип" className="login__logo" />
                    <h1 className="login__title">Рады видеть!</h1>
                    <form onSubmit={handleSubmit} className="login__form">
                        <label className="login__label">Email</label>
                        <input
                            required={true}
                            name="email"
                            value={inputValue.email}
                            type="email"
                            placeholder="pochta@yandex.ru|"
                            className="login__input"
                            onChange={changeHandler}
                        />
                        <label className="login__label">Пароль</label>
                        <input
                            required={true}
                            name="password"
                            type="password"
                            minLength="2"
                            placeholder="Пароль"
                            value={inputValue.password}
                            onChange={changeHandler}
                            className="login__input"
                        />
                        <button type="submit" disabled={!formValid} className="login__submit">
                            Войти
                        </button>
                    </form>
                    <Link className="login__reg" to="/sign-in">
                        Ещё не зарегистрированы? <span className="login__reg-default">Регистрация</span>
                    </Link>
                </div>
            </main>
        </>
    );
}

export default Login;
