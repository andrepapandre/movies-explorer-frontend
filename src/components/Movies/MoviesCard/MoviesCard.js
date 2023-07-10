
import "./MoviesCard.css";

import testImage from "../../../image/image-card-test.svg"
import likeDisable from "../../../image/like-disable.svg"

export default function MoviesCard() {
    return (
        <article className="movies-card">
            <img src={testImage} className="movies-card__image" />
            <h2 className="movies-card__title">33 слова о дизайне: </h2>
            <img className="movies-card__like" src={likeDisable}/>
            <p className="movies-card__line"/>
            <p className="movies-card__duration">1ч 42м</p>
        </article>
    )
};

