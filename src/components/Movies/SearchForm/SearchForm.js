import React from 'react'
import './SearchForm.css'

function SearchForm(props) {
  const [search, setSearch] = React.useState('');
  const [checkbox, setCheckbox] = React.useState('');

  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  function handleChangeCheckbox(e) {
    setCheckbox(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchClick({
       search, checkbox
    });
  } 
React.useEffect(() => {
  if ((localStorage.getItem ("searchElementMovies"))) {
    setSearch(props.searchElement.search);
    setCheckbox(props.searchElement.checkbox);
  }
}, []);   


 //Что бы при чекбоксе поиск срабатывал сразу
 React.useEffect(() => {
  if ((localStorage.getItem ("searchElementMovies"))) {
     props.onSearchClick({
       search, checkbox
     });
  }
}, [checkbox]);   
//Пустой поиск, что бы в сохраненных фильмах, после поиска можно было вывести все сохраненные фильмы.
//Да и что бы все фильмы можно было просмотреть тоже.
    return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} >
        <input type="search" className="search__input"  value={search} placeholder="Искать" onChange={handleChangeSearch} />
        <input type="submit" className="search__submit" />
        <div className="search__checkbox">
          <label className="search__switch">
          <input type="checkbox"  checked={checkbox} onChange={handleChangeCheckbox}  />
          <span className="search__slider"></span>
          <p className="search__text">Короткометражки</p>
        </label>
        </div>
      </form>
      <div className="whiteline"></div>
    </section>
    )
};

export default SearchForm