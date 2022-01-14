import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.js'

function MoviesCardList() {
    return (
        <section className="moviescards">
          <MoviesCard saved="moviescard__notsave"/>
          <MoviesCard saved="moviescard__notsave"/>
          <MoviesCard saved="moviescard__save"/>
          <MoviesCard saved="moviescard__save"/>
          <MoviesCard saved="moviescard__save"/>
          <MoviesCard saved="moviescard__notsave"/>
          <MoviesCard saved="moviescard__notsave"/>
        </section>
    )
};

export default MoviesCardList