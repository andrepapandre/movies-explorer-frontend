import "./Promo.css"
import imageWebPlanet from "../../../image/web-planet.svg"

export default function Promo() {
    return (
        <>
            <section className="promo__section">
                <div className="promo__image-and-text">
                    <div className="promo__main-and-description">
                        <h1 className="promo__main">Учебный проект студента факультета Веб-&nbsp;разработки.</h1>
                        <p className="promo__description">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                        <button type="button" className="promo__more-info-button">
                            <span className="promo__more-info-button-text">Узнать больше</span>
                        </button>
                    </div>
                    <img className="promo__image" src={imageWebPlanet} />

                </div>

            </section>
        </>

    )
}