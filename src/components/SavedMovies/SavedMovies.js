import Header from '../Header/Header.js';
import Navigatiion from '../Navigation/Navigation.js'
import SearchForm from '../Movies/SearchForm/SearchForm.js'
import SavedMoviesCard from './SavedMoviesCard/SavedMoviesCard.js'
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList.js'
import Footer from '../Footer/Footer.js';
import React from 'react';
import {api} from '../../utils/MainApi';

function SavedMovies(props) {
  React.useEffect(() => {
    props.setErrorLogin("")
      props.renderCards(props.savedCards);
   },[props.savedCards, props.savedCardsSave, props.index, props.pageSize] );


   //Удаление карточки из сохраненного
function handleCardDel(card) {
  api.deleteСard(card._id)
  .then(() => {
    props.setSavedCards((state) => state.filter((c) => c._id !== card._id));
    props.setCards((state) => state.map((c) => c.moveId === card.id ? c : ''))
    localStorage.setItem("searched", JSON.stringify(props.currentCards));
})
  .catch((err) => {
   console.log(`Ошибка: ${err}`); 
 });
} 

  const cardSavedElements = props.visibleData.map((card) => {
    return (<SavedMoviesCard key={card._id} card={card} onCardDel={handleCardDel} />)
  });
  
    return (
      <>
        <div className="movies">
            <Header nav={<Navigatiion onMenuClick={props.onMenuClick}/>}/>
            <SearchForm onSearchClick={props.onSearchClick} searchElement={props.searchElement} setSearchElement={props.setSearchElementSave}/> 
            <SavedMoviesCardList cards={cardSavedElements}/>
            <p className={props.searchClassName}>Ничего не найдено!</p>
            <section className="more">
              <button className={props.buttonMore} onClick={props.onShowMore} >Еще</button> 
            </section>
        </div>
        <Footer />
        </>
      );
    }
    
    export default SavedMovies;