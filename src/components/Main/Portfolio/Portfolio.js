
import "./Portfolio.css"

export default function Portfolio() {
    return (
        <>
            <section className="portfolio" id="portfolio">
                <p className="portfolio__header">Портфолио</p>
                <ul className="portfolio__block">
                    <li className="portfolio__section">
                        <a className="portfolio__text" href="https://github.com/andrepapandre/first-project">Статичный сайт</a>
                        <a className="portfolio__link" href="https://github.com/andrepapandre/first-project">↗</a>
                    </li>
                    <li className="portfolio__section">
                        <a className="portfolio__text" href="https://github.com/andrepapandre/russian-travel">Адаптивный сайт</a>
                        <a className="portfolio__link" href="https://github.com/andrepapandre/russian-travel">↗</a>
                    </li>
                    <li className="portfolio__section">
                        <a className="portfolio__text" href="https://github.com/andrepapandre/react-mesto-auth">Одностраничное приложение</a>
                        <a className="portfolio__link" href="https://github.com/andrepapandre/react-mesto-auth">↗</a>
                    </li>
                </ul>
            </section>
        </>
    )
}