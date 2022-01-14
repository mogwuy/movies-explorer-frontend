import React from 'react'
import './Login.css'
import headerLogo from '../../images/header-logo.svg';
import { NavLink } from 'react-router-dom';

function Login() {
    return (
    <section className="login">
      <div className="register__content">
      <a href="/" className="register__logo-link"><img className="register__logo" src={headerLogo} alt="Логотип"></img></a>
      <h5 className="register__title">Рады видеть!</h5>
      <form className="register__form">
        <p className="register__text">E-mail</p>
        <input type="email" className="register__input" defaultValue="pochta@yandex.ru" />
        <p className="register__error" id="register__error-email"></p>
        <p className="register__text">Пароль</p>
        <input type="password" className="register__input" defaultValue="Пароль" />
        <p className="register__error" id="register__error-password"></p>
      </form>
      </div>
      <div className="register__block">
        <button type="submit" className="register__submit" defaultValue="Зарегистрироваться">Зарегистрироваться</button>
        <p className="register__registered">Ещё не зарегистрированы?<NavLink className="register__link" to="/signup">Регистрация</NavLink></p>
      </div>
    </section>
    )
};

export default Login