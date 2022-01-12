import React from 'react'
import './SearchForm.css'

function SearchForm() {
    return (
    <section className="search">
      <form className="search__form">
        <input type="search" className="search__input"  defaultValue="Фильм"/>
        <input type="submit" className="search__submit" value="Искать" />
        <div className="search__checkbox">
          <label className="search__switch">
          <input type="checkbox" />
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