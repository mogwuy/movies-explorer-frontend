import React from 'react'
import './Login.css'
import headerLogo from '../../images/header-logo.svg';
import { NavLink } from 'react-router-dom';

function Login() {
    return (
    <section className="login">
      <a href="/"><img className="register__logo" src={headerLogo} alt="Логотип"></img></a>
      <h5 className="register__title">Добро пожаловать!</h5>
      <form className="register__form">
        <p className="register__text">E-mail</p>
        <input type="email" className="register__input" defaultValue="pochta@yandex.ru" />
        <p className="register__error" id="register__error-email"></p>
        <p className="register__text">Пароль</p>
        <input type="password" className="register__input" defaultValue="Пароль" />
        <p className="register__error" id="register__error-password"></p>
        <input type="submit" className="register_submit" defaultValue="Зарегистрироваться" />
      </form>
      <p className="register__registered">Ещё не зарегистрированы?<NavLink className="register__link" to="/signup">Регистрация</NavLink></p>
    </section>
    )
};

export default Login