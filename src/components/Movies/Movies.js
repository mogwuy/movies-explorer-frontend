import React from 'react';
import Header from '../Header/Header.js';
import './Movies.css';
import Navigatiion from '../Navigation/Navigation.js'
import SearchForm from './SearchForm/SearchForm.js'
import MoviesCardList from './MoviesCardList/MoviesCardList.js'
import MoviesCard from '../Movies/MoviesCard/MoviesCard.js';
import Footer from '../Footer/Footer.js';
import {api} from '../../utils/MainApi';


function Movies(props) {

  
  React.useEffect(() => {
    if (localStorage.getItem("searched")) 
      {
      const searched = JSON.parse(localStorage.getItem("searched"))
      props.setCards(searched);
      }
  }, []);



 React.useEffect(() => {
  props.renderCards(props.currentCards);
}, [props.currentCards, props.currentUser, props.index, props.pageSize]);


  //Сохранение карточек с фильмами
  function handleCardSave(card, isSaved) {
    if (!isSaved){
      api.putSaveMovie(card)
      .then((newCard) => {
        props.initialSavedCards();
        props.setCards((state) => state.map((c) => c.moveId === card.id ? newCard : c))
    })
      .catch((err) => {
       console.log(`Ошибка: ${err}`); 
     });
    } else {
      const savedCard = props.savedCards.find(saved => saved.moveId == card.id);
      const savedId = savedCard._id 
     api.deleteСard(savedId)
     .then(() => {
      props.initialSavedCards();
      props.setCards((state) => state.map((c) => c.moveId === card.id ? '' : c))
   })
     .catch((err) => {
      console.log(`Ошибка: ${err}`); 
    });
    }
  } 


 //Строим карточки с фильмами
 const cardElements = props.visibleData.map((card) => {
  return (<MoviesCard key={card.id} card={card} savedCards={props.savedCards} onCardSave={handleCardSave}/>)
});

    return (
      <>
<div className="movies">
    <Header nav={<Navigatiion onMenuClick={props.onMenuClick}/>}/>
    <SearchForm onSearchClick={props.onSearchClick}/> 
    <MoviesCardList cards={cardElements} />
    <p className={props.searchClassName}>Ничего не найдено!</p>
    <section className="more">
      <button className={props.buttonMore} onClick={props.onShowMore} >Еще</button> 
    </section>
</div>
<Footer />
</>
      );
    }
    
    export default Movies;