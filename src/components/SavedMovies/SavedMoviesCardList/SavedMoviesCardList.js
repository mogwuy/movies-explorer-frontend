import React from 'react'
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard.js'

function SavedMoviesCardList() {
    return (
        <section className="moviescards">
          <SavedMoviesCard />
          <SavedMoviesCard />
          <SavedMoviesCard />
        </section>
    )
};

export default SavedMoviesCardList