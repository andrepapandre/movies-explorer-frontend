
import "./Portfolio.css"

export default function Portfolio() {
    return (
        <>
            <section className="portfolio">
                <p className="portfolio__header">Портфолио</p>
                <div className="portfolio__block">
                    <div className="portfolio__section">
                        <p className="portfolio__text">Статичный сайт</p>
                        <a className="portfolio__link">↗</a>
                    </div>
                    <div className="portfolio__section">
                        <p className="portfolio__text">Адаптивный сайт</p>
                        <a className="portfolio__link">↗</a>
                    </div>
                    <div className="portfolio__section">
                        <p className="portfolio__text">Одностраничное приложение</p>
                        <a className="portfolio__link">↗</a>
                    </div>
                </div>
            </section>
        </>
    )
}