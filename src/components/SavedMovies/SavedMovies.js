import Header from '../Header/Header.js';
import Navigatiion from '../Navigation/Navigation.js'
import SearchForm from '../Movies/SearchForm/SearchForm.js'
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList.js'

function SavedMovies() {
    return (
        <div className="movies">
            <Header nav={<Navigatiion />}/>
            <SearchForm /> 
            <SavedMoviesCardList />
        </div>
      );
    }
    
    export default SavedMovies;