import React from 'react'
import './NotFound.css'
import { NavLink } from 'react-router-dom';

function NotFound() {
    return (
    <div className="notfound">
      <div className="notfound__center">
        <h2 className="notfound__title">404</h2>
        <p className="notfound__subtitle">Страница не найдена</p>
      </div>
      <div className="notfound__centerbutton">
      <NavLink className="notfound__button" to="/"><button className="notfound__button">Назад</button></NavLink>
      </div>
      </div>
    )
};

export default NotFound