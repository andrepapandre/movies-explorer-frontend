import "./Footer.css"
import { NavLink } from "react-router-dom";
import React from "react";


export default function Footer() {
    return (
        <>
            <footer className="footer">
                <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__block">
                    <p className="footer__date">© 2020</p>
                    <ul className="footer__links">
                        <li className="footer__link-li"><NavLink className="footer__link" to="https://practicum.yandex.ru">Яндекс.Практикум</NavLink></li>
                        <li className="footer__link-li"><NavLink className="footer__link" to="https://github.com/andrepapandre">Github</NavLink></li>
                    </ul>
                </div>
            </footer>
        </>
    )
};

