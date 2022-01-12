import Header from '../Header/Header.js';
import './Movies.css';
import Navigatiion from '../Navigation/Navigation.js'
import SearchForm from './SearchForm/SearchForm.js'
import MoviesCardList from './MoviesCardList/MoviesCardList.js'

function Movies() {
    return (
<div className="movies">
    <Header nav={<Navigatiion />}/>
    <SearchForm /> 
    <MoviesCardList />
    <section className="more">
      <button className="more__button" >Еще</button> 
    </section>
</div>
      );
    }
    
    export default Movies;