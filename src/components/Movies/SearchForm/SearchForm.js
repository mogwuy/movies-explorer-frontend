import React from 'react'
import './SearchForm.css'

function SearchForm(props) {
  const [search, setSearch] = React.useState('');
  function handleChangeSearch(e) {
    setSearch(e.target.value);
  }

  const [checkbox, setCheckbox] = React.useState('');
  function handleChangeCheckbox(e) {
    setCheckbox(e.target.checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearchClick({
       search, checkbox
    });
  } 
//Пустой поиск, что бы в сохраненных фильмах, после поиска можно было вывести все сохраненные фильмы.
//Да и что бы все фильмы можно было просмотреть тоже.
    return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} >
        <input type="search" className="search__input"  defaultValue="Фильм" onChange={handleChangeSearch} />
        <input type="submit" className="search__submit" value="Искать" />
        <div className="search__checkbox">
          <label className="search__switch">
          <input type="checkbox" onChange={handleChangeCheckbox}  />
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