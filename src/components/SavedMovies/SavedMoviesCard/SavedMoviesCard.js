import React from 'react'
import './SavedMoviesCard.css'

function SavedMoviesCard(props) {
    function handleDelClick() {
        props.onCardDel(props.card);
      }  
    return (
        <div className="moviescard">
            <div className="moviescard__headline">
                <div className="moviescard__headline-left">
                  <h4 className="moviescard__title">{props.card.nameRU}</h4>
                  <p className="moviescard__duration">{props.card.duration} Минут</p>
                </div>
                <button className="moviescard__saveremove" onClick={handleDelClick}></button>
            </div>
                
            <img className="moviescard__image" src={props.card.image} alt="Изображение Фильма"></img>
        </div>
    )
};

export default SavedMoviesCard