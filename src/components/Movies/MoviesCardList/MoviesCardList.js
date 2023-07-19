import "./MoviesCardList.css"
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList() {
    return (
        <>
            <ul className="movies-card-list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <div className="movies-card-list__container-for-button">
                <button className="movies-card-list__button-more">Ещё</button>
            </div>
        </>

    );
}

