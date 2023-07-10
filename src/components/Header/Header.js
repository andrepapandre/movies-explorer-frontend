import logo from "../../image/logo.svg"
import "./Header.css"
import { NavLink } from "react-router-dom";
import React from "react";


export default function Header({ children }) {
    return (
        <>
            <header className="header">
                {children}
            </header>
        </>
    )
};

