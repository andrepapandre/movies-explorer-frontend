import Promo from "./Promo/Promo"
import Header from "../Header/Header"
import AboutProject from "./AboutProject/AboutProject"
import Techs from "./Techs/Techs"
import AboutMe from "./AboutMe/AboutMe"
import Portfolio from "./Portfolio/Portfolio"
import Footer from "../Footer/Footer"
import { NavLink } from "react-router-dom"
import logo from "../../image/logo.svg"
import "../Header/Header.css"


export default function Main({ ThemeHeader, Theme }) {
    return (
        <>
            <Header ThemeHeaderS={Theme}>
                <img className="header__logo" src={logo} alt="Логотип хедера" />
                <div className="header__auth">
                    <button className="header__signup"><NavLink className="header__signup-link" to="/signup">Регистрация</NavLink></button>
                    <button className="header__signin"><NavLink className="header__signin-link" to="/signin">Войти</NavLink></button>
                </div>
            </Header>
            <main>
                <Promo />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>

    )
}