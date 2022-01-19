import './App.css';
import '../../vendor/normalize.css';
import '../../vendor/fonts.css';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import MoviesCard from '../Movies/MoviesCard/MoviesCard.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/NotFound.js';
import NavigationMenu from '../Navigation/NavigationMenu/NavigationMenu.js';
import Preloader from '../Movies/Preloader/Preloader.js'
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import {movies} from '../../utils/MoviesApi';


function App(props) {

  const [currentCards, setCards] = React.useState([]);
  const [allCards, setAllCards] = React.useState([]);
  const [searchClassName , setSearchClassName] = React.useState ("moviescards__notfound_hide");
  const PAGE_SIZE = 3 ; 
  const [index , setIndex] = React.useState (0);
  const [visibleData , setVisibleData] = React.useState ([]);
  const [buttonClassName , setButtonClassName] = React.useState ("more__button_hide");

  //Загружаем сразу все карточки с сервера в память
React.useEffect(() => {
  movies.getInitialCards()
  .then((cardsData) => {
    setAllCards(cardsData);
   })
   .catch((err) => {
     console.log(`Ошибка: ${err}`); 
     });
  });

  //Открытие и Закрытие меню
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  function handleMenuClick() {
    setMenuOpen(true);
     }
  function closeMenu() {
    setMenuOpen(false);
  }

//Поиск карточек
//Нажимаем на кнопку поиска
function hundleSearchClick(searchElement) {
    const searchElements = allCards.filter(card => card.nameRU.includes(searchElement.search) ||  (card.nameEN !== null && card.nameEN.includes(searchElement.search)) ||  (card.director !== null && card.director.includes(searchElement.search)) || (card.country !== null && card.country.includes(searchElement.search)) );
    //Проверка на чекбокс короткометражки
    if (searchElement.checkbox) {
      const shortFilms = searchElements.filter(card => card.duration < 40)
      setCards(shortFilms);
    } else {
      setCards(searchElements);
    }
    //Показывает, что ничего не найдено
    const searchClassName = "moviescards__notfound";
    const nonSearchClassName = "moviescards__notfound_hide"; 
    setSearchClassName(( searchElements.length === 0 ) ? searchClassName : nonSearchClassName)
}



//Кнопка "еще"
function handleShowMore() {
  setIndex( index + 1 );
}
React.useEffect(() => {
  const numberOfItems = PAGE_SIZE * ( index + 1 ); 
  const newArray = []; 
  for(let i= 0 ;i< currentCards.length ; i++ ){
    if(i < numberOfItems) 
    {
    newArray.push(currentCards[i])
    }
    else {
    }
  }
   setVisibleData(newArray);
   //Показывает или убирает кнопку "Еще"
   const activeButtonClassName = "more__button";
   const nonButtonClassName = "more__button_hide";
   setButtonClassName((newArray === 0 || currentCards.length === newArray.length) ? nonButtonClassName : activeButtonClassName);

 }, [currentCards, index]);


 //Строим карточки с фильмами
const cardElements = visibleData.map((card) => {
  return (<MoviesCard key={card.id} card={card} />)
});



  return (
    <div className="page">
      <Suspense fallback={<Preloader/>}>
        <Routes>
          <Route exact path="/" element= {<Main />} />
          <Route path="/movies" element= {<Movies onMenuClick={handleMenuClick} onSearchClick={hundleSearchClick} cards={cardElements} onShowMore={handleShowMore} buttonMore={buttonClassName} searchClassName={searchClassName}/>} />
          <Route path="/saved-movies" element= {<SavedMovies onMenuClick={handleMenuClick} />} />
          <Route path="/profile" element= {<Profile onMenuClick={handleMenuClick}/>} />
          <Route path="/signup" element= {<Register />} />
          <Route path="/signin" element= {<Login />} />
          <Route path="*" element= {<NotFound />} />
        </Routes>
        <NavigationMenu isMenuOpen={isMenuOpen} isClose={closeMenu}/>
      </Suspense>
  </div>
  );
}

export default App;
