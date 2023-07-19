
import "./SavedMoviesCard.css";

import testImage from "../../../image/test-saved-movie.png"
import closeButton from "../../../image/close-saved-button.svg"

export default function SavedMovieCard() {

    const hoverOn = e => {
        const foo = document.querySelector('.saved-movies-card__close-button')

        foo.classList.add("sad");

    };

    const hoverOff = e => {
        const foo = document.querySelector('.saved-movies-card__close-button')

        foo.classList.remove("sad");

    };

    return (
        <article className="saved-movies-card" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
            <a
                className="saved-movies-card__link"
                target="_blank"
                href="https://www.youtube.com/watch?v=iLafkzWDIr8&t=2s" rel="noreferrer"
            >
                <img src={testImage} className="saved-movies-card__image" alt="Превью-картинка фильма"/></a>
            <h2 className="saved-movies-card__title">33 слова о дизайне: </h2>
            <button type="button" className="saved-movies-card__close-button"><img src={closeButton} /></button>
            <p className="saved-movies-card__line" />
            <p className="saved-movies-card__duration">1ч 42м</p>
        </article >
    )
};

