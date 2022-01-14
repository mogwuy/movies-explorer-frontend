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
import { Route, Routes } from 'react-router-dom';
import React from 'react';

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  function handleMenuClick() {
    setMenuOpen(true);
     }

  function closeMenu() {
    setMenuOpen(false);
  }
  return (
    <div className="page">
        <Routes>
          <Route exact path="/" element= {<Main />} />
          <Route path="/movies" element= {<Movies onMenuClick={handleMenuClick} />} />
          <Route path="/saved" element= {<SavedMovies onMenuClick={handleMenuClick} />} />
          <Route path="/profile" element= {<Profile onMenuClick={handleMenuClick}/>} />
          <Route path="/signup" element= {<Register />} />
          <Route path="/signin" element= {<Login />} />
          <Route path="*" element= {<NotFound />} />
        </Routes>
        <NavigationMenu isMenuOpen={isMenuOpen} isClose={closeMenu}/>
  </div>
  );
}

export default App;
