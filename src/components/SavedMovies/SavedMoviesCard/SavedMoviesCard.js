import React from 'react'
import cardImage from '../../../images/pic__COLOR_pic.png'
import './SavedMoviesCard.css'

function SavedMoviesCard() {
    return (
        <div className="moviescard">
            <div className="moviescard__headline">
                <div className="moviescard__headline-left">
                  <h4 className="moviescard__title">33 слова о дизайне</h4>
                  <p className="moviescard__duration">1ч 47м</p>
                </div>
                <button className="moviescard__saveremove"></button>
            </div>
                
            <img className="moviescard__image" src={cardImage} alt="Изображение Фильма"></img>
        </div>
    )
};

export default SavedMoviesCard