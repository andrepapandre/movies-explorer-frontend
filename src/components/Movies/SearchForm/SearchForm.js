import "./SearchForm.css"
import React from "react";
import Checkbox from "../Checkbox/Checkbox";

export default function SearchForm() {
    return (
        <>
            <main>
                <section className="search-form">
                    <form className="search-form__block-of-search">
                        <input placeholder="Фильмы" className="search-form__input" />
                        <button type="button" className="search-form__search-button">Найти</button>
                    </form>
                    <Checkbox />
                </section>
            </main>
        </>
    )
};

