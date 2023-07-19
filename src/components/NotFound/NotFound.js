import { NavLink } from "react-router-dom"
import "./NotFound.css"

export default function NotFound() {
    return (
        <>
            <main>
                <section className="not-found">
                    <h1 className="not-found__error-status">404</h1>
                    <p className="not-found__error-status-text">Страница не найдена</p>
                    <button type="button" className="not-found__return"><NavLink className="not-found__return-text" to="/">Назад</NavLink></button>
                </section>
            </main>
        </>

    )
}