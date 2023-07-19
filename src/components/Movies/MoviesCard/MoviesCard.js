
import "./MoviesCard.css";

import testImage from "../../../image/image-card-test.svg"
import likeDisable from "../../../image/like-disable.svg"

export default function MoviesCard() {
    return (
        <li className="movies-card">
            <a
                className="movies-card__link"
                target="_blank"
                href="https://www.youtube.com/watch?v=iLafkzWDIr8&t=2s" rel="noreferrer"
            >
                <img src={testImage} className="movies-card__image" /></a>
            <h2 className="movies-card__title">33 слова о дизайне: </h2>
            <button type="button" className="movies-card__like"><img src={likeDisable} alt="Значок лайка фильма" /></button>
            <p className="movies-card__line" />
            <p className="movies-card__duration">1ч 42м</p>
        </li >
    )
};

