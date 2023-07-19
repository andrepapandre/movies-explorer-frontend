import logo from "../../image/logo.svg"
import "./Header.css"
import { NavLink } from "react-router-dom";
import React from "react";


export default function Header({ children, ThemeHeaderS}) {

    return (
        <>
            <header className={`header ${ThemeHeaderS}`}>
                {children}
            </header>
        </>
    )
};


