import Header from '../Header/Header.js';
import Navigatiion from '../Navigation/Navigation.js'
import SearchForm from '../Movies/SearchForm/SearchForm.js'
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList.js'
import Footer from '../Footer/Footer.js';

function SavedMovies(props) {
    return (
      <>
        <div className="movies">
            <Header nav={<Navigatiion onMenuClick={props.onMenuClick}/>}/>
            <SearchForm /> 
            <SavedMoviesCardList cards={props.cards}/>
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