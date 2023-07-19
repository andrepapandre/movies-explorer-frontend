import "./SavedMoviesCardList.css"
import SavedMoviesCard from "../../Main/SavedMoviesCard/SavedMoviesCard";

export default function SavedMoviesCardList() {
    return (
        <>
            <ul className="movies-card-list">
              <SavedMoviesCard/>
              <SavedMoviesCard/>
              <SavedMoviesCard/>
            </ul>
            <div className="movies-card-list__container-for-button">
                <button className="movies-card-list__button-more">Ещё</button>
            </div>
        </>

    );
}

