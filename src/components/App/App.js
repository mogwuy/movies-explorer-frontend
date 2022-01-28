import './App.css';
import '../../vendor/normalize.css';
import '../../vendor/fonts.css';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/NotFound.js';
import NavigationMenu from '../Navigation/NavigationMenu/NavigationMenu.js';
import Preloader from '../Movies/Preloader/Preloader.js'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import React, { Suspense, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import {movies} from '../../utils/MoviesApi';
import {api} from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import {shortFilmDuration, mediumNumberOfItemsPerPage, bigNumberOfItemsPerPage, smallNumberOfItemsPerPage, mediumNumberOfAddedElements, bigNumberOfAddedElements, zero} from '../../constants/constants.js';
import { Helmet } from 'react-helmet';



function App(props) {
  const [isLoading, setLoading] = React.useState(false);
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isErrorLogin, setErrorLogin] = React.useState("");
  const [currentCards, setCards] = React.useState([]);
  const [savedCards, setSavedCards] = React.useState([]);
  const [savedCardsSave, setSavedCardsSave] = React.useState([]);
  const [searchClassName, setSearchClassName] = React.useState ("moviescards__notfound_hide");
  const [pageSize, setPageSize ] = React.useState (3);
  const [addSize, setAddSize ] = React.useState (3);
  const [index, setIndex] = React.useState (0);
  const [visibleData, setVisibleData] = React.useState ([]);
  const [buttonClassName, setButtonClassName] = React.useState ("more__button_hide");
  const isMediumMedia = useMediaQuery({query: '(max-width: 1187px)' })
  const isSmallMedia = useMediaQuery({query: '(max-width: 675px)' })
  const [searchElementMovies, setSearchElementMovies] = React.useState({"search":"","checkbox": false});
  const [searchElementSave, setSearchElementSave] = React.useState({"search":"","checkbox": false});
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [currentUser, setСurrentUser] = React.useState({
  name: "Имя",
  email: "111@mail.com",
  _id: "1111",
});
const navigate = useNavigate();


React.useEffect(() => {
  if ((localStorage.getItem ("searchElementMovies"))) {
    setSearchElementMovies(JSON.parse(localStorage.getItem("searchElementMovies")));
  }
}, [] );

React.useEffect(() => {
  if ((localStorage.getItem ("searchElementSave"))) {
    setSearchElementSave(JSON.parse(localStorage.getItem("searchElementSave")));
  }
}, [] );


React.useEffect(() => {
  tokenCheck();
}, [] );

//Убираем сообщение об ошибке.
React.useEffect(() => {
  setTimeout(() => {
    setErrorLogin("");
  }, 3000);
}, [isErrorLogin, currentUser]);

React.useEffect(() => {
 initialSavedCards();
}, [isLoggedIn] );

//Авторизация и Регистрация
function tokenCheck() {
  setLoading(false)
  api.getMe()
   .then((data) => {
      if(data){
        setLoggedIn(true);
        setСurrentUser(data);
        setLoading(true);
      }
    })
 .catch((err) => {
  console.log(`Ошибка: ${err}`); 
  setLoading(true);
});
}

function loginApi(currentEmail, currentPassword){
  setLoading(false)
  api.login({
    email: currentEmail,
    password: currentPassword
  })
  .then((data) => {
    if (data){
      tokenCheck();
      setErrorLogin("");
      navigate("/movies");
    }
  })
   .catch((err) => {
     console.log(`Ошибка: ${err}`); 
     setLoading(true);
     setErrorLogin("Неправильный Логин или Пароль");
   });
  }

  function registrationApi(currentName, currentEmail, currentPassword) {
    setLoading(false);
 api.registration({
    name: currentName,
    email: currentEmail,   
    password: currentPassword
  })
  .then((data) => {
    if (data){
      loginApi(currentEmail, currentPassword)
      setErrorLogin("");
    }
 })
   .catch((err) => {
     console.log(`Ошибка: ${err}`); 
     setLoading(true);
     setErrorLogin("Регистрация неудачна!");
   });
  }

  function signOut(){
    api.logout();
    localStorage.clear();
    setLoggedIn(false);
    setСurrentUser({ name: "Имя",
    email: "111@mail.com",
    _id: "1111",})
    setSavedCards([]);
    setSavedCardsSave([]);
    setSearchElementMovies({"search":"","checkbox": false});
    setSearchElementSave({"search":"","checkbox": false});
    setCards([]);
    setVisibleData([]);
    navigate("/");
  }

    //Если размер экрана изменился
  React.useEffect(() => {
      if ( isMediumMedia ) {
        setPageSize(mediumNumberOfItemsPerPage);
        setAddSize(mediumNumberOfAddedElements);
      } else if ( isSmallMedia ) {
        setPageSize(smallNumberOfItemsPerPage);
        setAddSize(mediumNumberOfAddedElements);
      } else {
        setPageSize(bigNumberOfItemsPerPage);
        setAddSize(bigNumberOfAddedElements);
      }
    });

  //Открытие и Закрытие Бургерное меню
  function handleMenuClick() {
    setMenuOpen(true);
     }
  function closeMenu() {
    setMenuOpen(false);
  }

//Нажимаем на кнопку поиска
function hundleSearchClick(searchElement) {
  localStorage.setItem("searchElementMovies", JSON.stringify(searchElement));
  setSearchElementMovies(searchElement);
  if (localStorage.getItem ("allCardsList")){
    const allCardsList = JSON.parse(localStorage.getItem("allCardsList"));
    searchCards (searchElement, allCardsList, false);
  }  else {
    movies.getInitialCards()
    .then((cardsData) => {
      searchCards (searchElement, cardsData, false);
      localStorage.setItem("allCardsList", JSON.stringify(cardsData));
     })
     .catch((err) => {
       console.log(`Ошибка: ${err}`); 
       })
       .finally(() => {
        return <Preloader/>;
      });  
  }
}

//Поиск среди сохраненных
function hundleSaveSearchClick(searchElement) {
  localStorage.setItem("searchElementSave", JSON.stringify(searchElement));
  setSearchElementSave(searchElement);
  if ( Object.keys(searchElement).length > zero){
   searchCards (searchElement, savedCardsSave, true);
  } else {
    renderCards(savedCardsSave);
  }
         //Показывает, что ничего не найдено
         setSearchClassName(( savedCardsSave.length === zero ) ? "moviescards__notfound" : "moviescards__notfound_hide");
         setIndex( zero );
}

//Поиск карточек
function searchCards (searchElement, cardsList, isSaved) {
  const searchElements = cardsList.filter(card => 
   ((card.nameRU !== null) ? card.nameRU.toLowerCase().includes(searchElement.search.toLowerCase()) : '') ||
   ((card.nameEN !== null) ? card.nameEN.toLowerCase().includes(searchElement.search.toLowerCase()) : '') ||
   ((card.director  !== null) ? card.director.toLowerCase().includes(searchElement.search.toLowerCase()) : '') ||
   ((card.country  !== null)  ? card.country.toLowerCase().includes(searchElement.search.toLowerCase())  : ''));
   //Если поиск по сохраненным, то изменяем хук с данными сохраненными, если нет, то в общей куче ищем.
   if (isSaved) {
    if (searchElement.checkbox) {
      const shortFilms = searchElements.filter(card => card.duration < shortFilmDuration);
      setSavedCards(shortFilms);
    } else {
      setSavedCards(searchElements);
    }
   } else {
    //Проверка на чекбокс короткометражки
    if (searchElement.checkbox) {
      const shortFilms = searchElements.filter(card => card.duration < shortFilmDuration);
      setCards(shortFilms);
      localStorage.setItem("searched", JSON.stringify(shortFilms));
    } else {
      setCards(searchElements);
      localStorage.setItem("searched", JSON.stringify(searchElements));
    }}
           //Показывает, что ничего не найдено
           setSearchClassName(( searchElements.length === zero ) ? "moviescards__notfound" : "moviescards__notfound_hide");
           setIndex( zero );

}

//Кнопка "еще"
function handleShowMore() {
  setIndex( index + addSize );
}

//Рендеринг Карточек с функцией еще
 function renderCards(cards) {  
   
  const numberOfItems = pageSize + index; 
  const newArray = []; 
  for(let i= 0 ;i< cards.length ; i++ ){
    if(i < numberOfItems) 
    {
    newArray.push(cards[i]);
    }
    else {
    }
  }
   setVisibleData(newArray);
   //Показывает или убирает кнопку "Еще"
   const activeButtonClassName = "more__button";
   const nonButtonClassName = "more__button_hide";
   setButtonClassName((newArray === zero || cards.length === newArray.length) ? nonButtonClassName : activeButtonClassName);
}

//Обновление информации о пользователе
function handleUpdateUser(data) {
  api.updateUserInfo(data)
  .then((userData) => {
    setСurrentUser(userData);
    setErrorLogin("Изменения Применены!");
})
.catch((err) => {
  if (err === 409) {
    setErrorLogin("Данный адрес электронной почты занят!");
  } else {
    console.log(`Ошибка: ${err}`); 
    setErrorLogin("Неудачно!");
  }

});
 }

 //Подгружаем сохраненные карточки
function initialSavedCards() {
  api.getMoviesCards()
.then((cardsData) => {
  api.getMe()
  .then((data) => {
    if(data){
      const savedCardsElement = cardsData.map((card) => card.owner === data._id ? card : '');
      setSavedCards(savedCardsElement);
      setSavedCardsSave(savedCardsElement);
    }
  })
 })
 .catch((err) => {
   console.log(`Ошибка: ${err}`); 
   })
   .finally(() => {
    return <Preloader/>;
  });  
}

  return (
    <div className="page">
      <CurrentUserContext.Provider value={ currentUser }>
      <Helmet>
          <title>Movies Explorer</title>
      </Helmet>
        <Routes>
          <Route path="/signup" element= {
           isLoading ? ( isLoggedIn ? <Navigate to="/movies" /> 
                                    : <Register registrationApi={registrationApi} isErrorLogin={isErrorLogin} /> )
                                    : <Preloader/>
                                    } />
          <Route path="/signin" element= {
           isLoading ? ( isLoggedIn ? <Navigate to="/movies" /> 
                                    : <Login loginApi={loginApi} isErrorLogin={isErrorLogin} /> )
                                    : <Preloader/>
                                    } />
          <Route exact path="/" element= {<Main isLoggedIn={isLoggedIn} onMenuClick={handleMenuClick}  />} />
          <Route path="/movies" element= {
             isLoading ? ( isLoggedIn ? <Movies onMenuClick={handleMenuClick} onSearchClick={hundleSearchClick} searchElement={searchElementMovies} setSearchElementMovies={setSearchElementMovies} onShowMore={handleShowMore} buttonMore={buttonClassName} searchClassName={searchClassName} currentCards={currentCards} renderCards={renderCards} index={index} pageSize={pageSize} savedCards={savedCards} setCards={setCards} initialSavedCards={initialSavedCards} setSavedCards={setSavedCards} visibleData={visibleData} currentUser={currentUser} setErrorLogin={setErrorLogin} isErrorLogin={isErrorLogin} />
                                      : <Navigate to="/" /> ) 
                       : <Preloader/>
                        }  />
          <Route path="/saved-movies" element= {
             isLoading ? ( isLoggedIn ? <SavedMovies onMenuClick={handleMenuClick} onSearchClick={hundleSaveSearchClick} searchElement={searchElementSave} setSearchElementSave={setSearchElementSave} onShowMore={handleShowMore} buttonMore={buttonClassName} searchClassName={searchClassName} currentCards={currentCards} renderCards={renderCards} index={index} pageSize={pageSize} savedCards={savedCards} visibleData={visibleData} currentUser={currentUser} initialSavedCards={initialSavedCards} setCards={setCards} setSavedCardsSave={setSavedCardsSave} savedCardsSave={savedCardsSave} setSavedCards={setSavedCards} setErrorLogin={setErrorLogin}/>
                         : <Navigate to="/" /> )
                         : <Preloader/>
                        } />
           
          <Route path="/profile" element={
               isLoading ? ( isLoggedIn ? <Profile user={currentUser} signOut={signOut} updateUserApi={handleUpdateUser} onMenuClick={handleMenuClick} isErrorLogin={isErrorLogin}  setErrorLogin={setErrorLogin} />
                         : <Navigate to="/" /> )
                         : <Preloader/>} />
          <Route path="*" element= {<NotFound />} />
        </Routes>
        <NavigationMenu isMenuOpen={isMenuOpen} isClose={closeMenu}/>
      </CurrentUserContext.Provider> 
  </div>
  );
}

export default App;
