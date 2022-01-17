import React from 'react'
import './Login.css'
import headerLogo from '../../images/header-logo.svg';
import { NavLink } from 'react-router-dom';

function Login() {
    return (
    <section className="login">
      <form id="form-login">
      <div className="login__content">
      <a href="/" className="login__logo-link"><img className="login__logo" src={headerLogo} alt="Логотип"></img></a>
      <h5 className="login__title">Рады видеть!</h5>
      <div className="login__form">
        <p className="login__text">E-mail</p>
        <input type="email" className="login__input" defaultValue="pochta@yandex.ru" />
        <p className="login__error" id="login__error-email"></p>
        <p className="login__text">Пароль</p>
        <input type="password" className="login__input" defaultValue="Пароль" />
        <p className="login__error" id="login__error-password"></p>
      </div>
      </div>
      <div className="login__block">
        <button type="submit" className="login__submit" defaultValue="Зарегистрироваться">Зарегистрироваться</button>
        <p className="login__registered">Ещё не зарегистрированы?<NavLink className="login__link" to="/signup">Регистрация</NavLink></p>
      </div>
      </form>
    </section>
    )
};

export default Login