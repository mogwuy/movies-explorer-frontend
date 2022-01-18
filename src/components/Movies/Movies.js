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
    <SearchForm /> 
    <MoviesCardList />
    <section className="more">
      <button className="more__button" >Еще</button> 
    </section>
</div>
<Footer />
</>
      );
    }
    
    export default Movies;