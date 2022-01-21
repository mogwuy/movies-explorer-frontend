import React from 'react'
import './MoviesCard.css'
import { CurrentUserContext } from '../../../contexts/CurrentUserContext.js';


function MoviesCard(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isSaved = props.savedCards.some(saved => saved.moveId === props.card.id);

    const cardSavedButtonClassName = (
        ` ${isSaved ? 'moviescard__save' : 'moviescard__notsave'}`
      ); 
      function handleSaveClick() {
        props.onCardSave(props.card, isSaved);
      }  
    return (
        <div className="moviescard">
            <div className="moviescard__headline">
                <div className="moviescard__headline-left">
                  <h4 className="moviescard__title">{props.card.nameRU}</h4>
                  <p className="moviescard__duration">{props.card.duration} Минут</p>
                </div>
                <button className={cardSavedButtonClassName} onClick={handleSaveClick}></button>
            </div>
                
            <img className="moviescard__image" src={`https://api.nomoreparties.co/${props.card.image.url}`} alt="Изображение Фильма"></img>
        </div>
    )
};

export default MoviesCard