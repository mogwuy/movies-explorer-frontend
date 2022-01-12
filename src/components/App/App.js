import './App.css';
import '../../vendor/normalize.css';
import '../../vendor/fonts.css';
import Footer from '../Footer/Footer.js';
import Main from '../Main/Main.js';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import NotFound from '../NotFound/NotFound.js';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="page">
      
        <Routes>
          <Route exact path="/" element= {<Main />} />
          <Route path="/movies" element= {<Movies />} />
          <Route path="/saved" element= {<SavedMovies />} />
          <Route path="/profile" element= {<Profile />} />
          <Route path="/signup" element= {<Register />} />
          <Route path="/signin" element= {<Login />} />
          <Route path="*" element= {<NotFound />} />
        </Routes>

      <Footer />
  </div>
  );
}

export default App;
