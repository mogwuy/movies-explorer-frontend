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

  const [errorPopupClassName, setErrorPopupClassName] = React.useState("popup__errors_hide");

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

//Выводим сообщение об ошибке
React.useEffect(() => {
  if (props.isErrorLogin) {
    setErrorPopupClassName("popup__errors")
  }
}, [props.savedCards]);
//Убираем сообщение об ошибке.
React.useEffect(() => {
  setTimeout(() => {
    setErrorPopupClassName("popup__errors_hide");
  }, 3000);
}, [props.savedCards]);


  //Сохранение карточек с фильмами
  function handleCardSave(card, isSaved) {
    if (!isSaved){
      api.putSaveMovie(card)
      .then((newCard) => {
        props.setSavedCards((state) => {state.push(newCard); return state});
        props.setCards((state) => state.map((c) => c.moveId === card.id ? newCard : c));
    })
      .catch((err) => {
       console.log(`Ошибка: ${err}`); 
       props.setErrorLogin('Не удалось сохранить ролик!')
       props.setSavedCards((state) => state.map((c) => c.moveId === card.id ? '' : c));
       props.setCards((state) => state.map((c) => c.moveId === card.id ? '' : c));
     });
    } else {
      const savedCard = props.savedCards.find(saved => saved.moveId == card.id);
      const savedId = savedCard._id 
     api.deleteСard(savedId)
     .then(() => {
      props.setSavedCards((state) => state.map((c) => c.moveId === card.id ? '' : c));
      props.setCards((state) => state.map((c) => c.moveId === card.id ? '' : c));
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
    <div className={errorPopupClassName}>{props.isErrorLogin}</div>
    <Header nav={<Navigatiion onMenuClick={props.onMenuClick}/>}/>
    <SearchForm onSearchClick={props.onSearchClick} searchElement={props.searchElement} setSearchElement={props.setSearchElementMovies} /> 
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