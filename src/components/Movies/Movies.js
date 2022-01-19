import Header from '../Header/Header.js';
import './Movies.css';
import Navigatiion from '../Navigation/Navigation.js'
import SearchForm from './SearchForm/SearchForm.js'
import MoviesCardList from './MoviesCardList/MoviesCardList.js'
import Footer from '../Footer/Footer.js';

function Movies(props) {
    return (
      <>
<div className="movies">
    <Header nav={<Navigatiion onMenuClick={props.onMenuClick}/>}/>
    <SearchForm onSearchClick={props.onSearchClick}/> 
    <MoviesCardList cards={props.cards} />
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