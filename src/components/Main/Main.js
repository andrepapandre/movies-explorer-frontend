import Promo from "./Promo/Promo"
import Header from "../Header/Header"
import NavTab from "./NavTab/NavTab"
import AboutProject from "./AboutProject/AboutProject"
import Techs from "./Techs/Techs"
import AboutMe from "./AboutMe/AboutMe"
import Portfolio from "./Portfolio/Portfolio"
import Footer from "../Footer/Footer"
import { NavLink } from "react-router-dom"
import logo from "../../image/logo.svg"
import "../Header/Header.css"


export default function Main() {
    return (
        <>
            <Header>
                <img className="header__logo" src={logo} />
                <div className="header__auth">
                    <NavLink className="header__signup" to="/sign-up">Регистрация</NavLink>
                    <NavLink className="header__signin" to="/sign-in">Войти</NavLink>
                </div>
            </Header>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
        </>

    )
}