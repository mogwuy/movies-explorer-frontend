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
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import { useMediaQuery } from 'react-responsive'
import {movies} from '../../utils/MoviesApi';
import {api} from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import SavedMoviesCard from '../SavedMovies/SavedMoviesCard/SavedMoviesCard.js'


function App(props) {
  const [isLoading, setLoading] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [currentCards, setCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  const [searchClassName, setSearchClassName] = React.useState ("moviescards__notfound_hide");
  const [pageSize, setPageSize ] = React.useState (3);
  const [addSize, setAddSize ] = React.useState (3);
  const [index, setIndex] = React.useState (0);
  const [visibleData, setVisibleData] = React.useState ([]);
  const [buttonClassName, setButtonClassName] = React.useState ("more__button_hide");
  const isMediumMedia = useMediaQuery({query: '(max-width: 1187px)' })
  const isSmallMedia = useMediaQuery({query: '(max-width: 675px)' })
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [currentUser, setСurrentUser] = React.useState({
  name: "Имя",
  email: "111@mail.com",
  _id: "1111",
});
const navigate = useNavigate()

React.useEffect(() => {
  tokenCheck();
}, [] );

React.useEffect(() => {
 initialSavedCards()
}, [isLoggedIn] );

//Авторизация и Регистрация
function tokenCheck() {
  api.getMe()
   .then((data) => {
      if(data){
        setLoggedIn(true);
        setСurrentUser(data);
        setLoading(true)
      }
    })
 .catch((err) => {
  console.log(`Ошибка: ${err}`); 
  
});
}

function loginApi(currentEmail, currentPassword){
  api.login({
    email: currentEmail,
    password: currentPassword
  })
  .then((data) => {
    if (data){
      tokenCheck();
      navigate("/movies");
    }
  })
   .catch((err) => {
     console.log(`Ошибка: ${err}`); 
   });
  }

  function registrationApi(currentName, currentEmail, currentPassword) {
 api.registration({
    name: currentName,
    email: currentEmail,   
    password: currentPassword
  })
  .then((data) => {
    if (data){
      loginApi(currentEmail, currentPassword)
    }
    //сообщение что регистрация успешна
   //setRegistrationAcceptPopupOpen(true)
   
 })
   .catch((err) => {
     console.log(`Ошибка: ${err}`); 
     //сообщение что регистрация неудачная
    // setRegistrationDeclinePopupOpen(true)
   });
  }

  function signOut(){
    api.logout();
    navigate("/signin");
  }

    //Если размер экрана изменился
  React.useEffect(() => {
      if ( isMediumMedia ) {
        setPageSize(8);
        setAddSize(2);
      } else if (isSmallMedia) {
        setPageSize(5);
        setAddSize(2);
      } else {
        setPageSize(12);
        setAddSize(3);
      }
    });

  //Открытие и Закрытие Бургерное меню
  function handleMenuClick() {
    setMenuOpen(true);
     }
  function closeMenu() {
    setMenuOpen(false);
  }

//Поиск карточек
//Нажимаем на кнопку поиска
function hundleSearchClick(searchElement) {
  if (!localStorage.getItem ("allCardsList")){
  movies.getInitialCards()
  .then((cardsData) => {
    searchCards (searchElement, cardsData)
    localStorage.setItem("allCardsList", JSON.stringify(cardsData));
   })
   .catch((err) => {
     console.log(`Ошибка: ${err}`); 
     });  
  }  else {
    const allCardsList = JSON.parse(localStorage.getItem("allCardsList"))
    searchCards (searchElement, allCardsList)
  }
}
function searchCards (searchElement, cardsList) {
  const searchElements = cardsList.filter(card => card.nameRU.includes(searchElement.search) ||  (card.nameEN !== null && card.nameEN.includes(searchElement.search)) ||  (card.director !== null && card.director.includes(searchElement.search)) || (card.country !== null && card.country.includes(searchElement.search)) );
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
    setIndex( 0 );
}

//Кнопка "еще"
function handleShowMore() {
  setIndex( index + addSize );
}

//Рендеринг
if (window.location.pathname === '/movies')
{
  React.useEffect(() => {
    setIndex(0);
  }, [window.location.pathname] );
  React.useEffect(() => {
    //В момент переключения карточек нету почему то.
    console.log(currentCards)
    renderCards(currentCards);
  }, [currentCards, currentUser, index, pageSize]);
}
else  {
  React.useEffect(() => {
    setIndex(0);
  }, [window.location.pathname] );
  React.useEffect(() => {
    renderCards(savedCards);
  },[savedCards, currentUser, index, pageSize] );
}

//Рендеринг Карточек с функцией еще
 function renderCards(cards) {  
   
  const numberOfItems = pageSize + index; 
  const newArray = []; 
  for(let i= 0 ;i< cards.length ; i++ ){
    if(i < numberOfItems) 
    {
    newArray.push(cards[i])
    }
    else {
    }
  }
   setVisibleData(newArray);
   //Показывает или убирает кнопку "Еще"
   const activeButtonClassName = "more__button";
   const nonButtonClassName = "more__button_hide";
   setButtonClassName((newArray === 0 || cards.length === newArray.length) ? nonButtonClassName : activeButtonClassName);
}

 //Строим карточки с фильмами
const cardElements = visibleData.map((card) => {
  return (<MoviesCard key={card.id} card={card} savedCards={savedCards} onCardSave={handleCardSave}/>)
});

const cardSavedElements = visibleData.map((card) => {
  return (<SavedMoviesCard key={card._id} card={card} onCardDel={handleCardDel}/>)
});


//Обновление информации о пользователе
function handleUpdateUser(data) {
  api.updateUserInfo(data)
  .then((userData) => {
    setСurrentUser(userData);
})
.catch((err) => {
  console.log(`Ошибка: ${err}`); 
});
 }

 //Сохранение карточек с фильмами
 function handleCardSave(card, isSaved) {
  if (!isSaved){
    api.putSaveMovie(card)
    .then((newCard) => {
      initialSavedCards();
      setCards((state) => state.map((c) => c.moveId === card.id ? newCard : c))
  })
    .catch((err) => {
     console.log(`Ошибка: ${err}`); 
   });
  } else {
    const savedCard = savedCards.find(saved => saved.moveId == card.id);
    const savedId = savedCard._id 
   api.deleteСard(savedId)
   .then((newCard) => {
     initialSavedCards();
     setCards((state) => state.map((c) => c.moveId === card.id ? newCard : c))
 })
   .catch((err) => {
    console.log(`Ошибка: ${err}`); 
  });
  }
} 


//Удаление карточки из сохраненного
function handleCardDel(card) {
   api.deleteСard(card._id)
   .then((newCard) => {
     initialSavedCards();
     setCards((state) => state.map((c) => c.moveId === card.id ? newCard : c))
 })
   .catch((err) => {
    console.log(`Ошибка: ${err}`); 
  });
} 

function initialSavedCards() {
  api.getMoviesCards()
.then((cardsData) => {
  api.getMe()
  .then((data) => {
    if(data){
      const savedCardsElement = cardsData.map((card) => card.owner === data._id ? card : '')
  setSavedCards(savedCardsElement)
    }
  })
  
 })
 .catch((err) => {
   console.log(`Ошибка: ${err}`); 
   });
}

  return (
    <div className="page">
      <Suspense fallback={<Preloader/>}>
      <CurrentUserContext.Provider value={ currentUser }>
        <Routes>
          <Route path="/signup" element= {<Register registrationApi={registrationApi} />} />
          <Route path="/signin" element= {<Login loginApi={loginApi}/>} />
          <Route exact path="/" element= {<Main isLoggedIn={isLoggedIn} />} />
          <Route path="/movies" element= {
             isLoading ? ( isLoggedIn ? <Movies onMenuClick={handleMenuClick} onSearchClick={hundleSearchClick} cards={cardElements} onShowMore={handleShowMore} buttonMore={buttonClassName} searchClassName={searchClassName}/>
                                      : <Navigate to="/signin" /> ) 
                       : <Preloader/>
                        }  />
          <Route path="/saved-movies" element= {
              isLoggedIn ? <SavedMovies onMenuClick={handleMenuClick} cards={cardSavedElements} onShowMore={handleShowMore} buttonMore={buttonClassName} searchClassName={searchClassName}/>
                         : <Navigate to="/signup" /> } 
                         />
           
          <Route path="/profile" element={
              isLoggedIn ? <Profile user={currentUser} signOut={signOut} updateUserApi={handleUpdateUser} onMenuClick={handleMenuClick} />
                         : <Navigate to="/signup" /> } />
          <Route path="*" element= {<NotFound />} />
        </Routes>
        <NavigationMenu isMenuOpen={isMenuOpen} isClose={closeMenu}/>
      </CurrentUserContext.Provider>  
      </Suspense>
  </div>
  );
}

export default App;
