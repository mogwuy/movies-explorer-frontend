import React from 'react'
import './MoviesCard.css'

function MoviesCard(props) {
    return (
        <div className="moviescard">
            <div className="moviescard__headline">
                <div className="moviescard__headline-left">
                  <h4 className="moviescard__title">{props.card.nameRU}</h4>
                  <p className="moviescard__duration">{props.card.duration} Минут</p>
                </div>
                <button className="moviescard__notsave"></button>
            </div>
                
            <img className="moviescard__image" src={`https://api.nomoreparties.co/${props.card.image.url}`} alt="Изображение Фильма"></img>
        </div>
    )
};

export default MoviesCard