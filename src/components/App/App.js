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
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';


function App() {

  //Открытие и Закрытие меню
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  function handleMenuClick() {
    setMenuOpen(true);
     }
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="page">
      <Suspense fallback={<Preloader/>}>
        <Routes>
          <Route exact path="/" element= {<Main />} />
          <Route path="/movies" element= {<Movies onMenuClick={handleMenuClick} />} />
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
