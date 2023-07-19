import "./Promo.css"
import imageWebPlanet from "../../../image/web-planet.svg"

export default function Promo() {
    return (
        <>
            <section className="promo__section">
                <div className="promo__image-and-text">
                    <div className="promo__main-and-description">
                        <h1 className="promo__main">Учебный проект студента факультета Веб&#8209;разработки.&nbsp;</h1>
                        <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                        <button type="button" className="promo__more-info-button">
                            <a href="#portfolio" className="promo__more-info-button-text">Узнать больше</a>
                        </button>
                    </div>
                    <img className="promo__image" alt="Дизайнерская картинка промо страницы" src={imageWebPlanet} />
                </div>
            </section>
        </>

    )
}