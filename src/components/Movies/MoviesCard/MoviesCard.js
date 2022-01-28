import React from 'react'
import './MoviesCard.css'

function MoviesCard(props) {
  const [isSaved, setSaved] = React.useState(false);

 React.useEffect(() => {
  setSaved(props.savedCards.some(saved => saved.moveId === props.card.id));
}, [props.savedCards]);

    const cardSavedButtonClassName = (
        ` ${isSaved ? 'moviescard__save' : 'moviescard__notsave'}`
      ); 
      function handleSaveClick() {
        setSaved(true);
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
            <a href={props.card.trailerLink} target="_blank" >
            <img className="moviescard__image" src={`https://api.nomoreparties.co/${props.card.image.url}`} alt="Изображение Фильма"></img>
            </a>
        </div>
    )
};

export default MoviesCard