import { NavLink } from "react-router-dom"
import "./NotFound.css"

export default function NotFound() {
    return (
        <>
            <section className="not-found">
                <h2 className="not-found__error-status">404</h2>
                <p className="not-found__error-status-text">Страница не найдена</p>
                <NavLink className="not-found__return">Назад</NavLink>
            </section>
        </>

    )
}