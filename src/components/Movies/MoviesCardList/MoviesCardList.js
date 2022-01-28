import './MoviesCardList.css'
import React, { Suspense } from 'react';
import Preloader from '../../Movies/Preloader/Preloader.js'

function MoviesCardList(props) {
    return (
       <Suspense fallback={<Preloader/>}>
        <section className="moviescards">
          {props.cards}
        </section>
      </Suspense>
    )
};

export default MoviesCardList