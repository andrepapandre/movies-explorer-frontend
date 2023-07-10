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
                    <div className="footer__links">
                        <NavLink className="footer__link" to="/">Яндекс.Практикум</NavLink>
                        <NavLink className="footer__link" to="/">Github</NavLink>
                    </div>
                </div>
            </footer>
        </>
    )
};

