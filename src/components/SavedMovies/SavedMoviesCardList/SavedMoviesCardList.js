import React from 'react'

function SavedMoviesCardList(props) {
    return (
        <section className="moviescards">
          {props.cards}
        </section>
    )
};

export default SavedMoviesCardList