import React from 'react'
import './Login.css'
import headerLogo from '../../images/header-logo.svg';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login(props) {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => {
    props.loginApi(data.email, data.password)
  };

    return (
    <section className="login">
      <form id="form-login" onSubmit={handleSubmit(onSubmit)}>
      <div className="login__content">
      <a href="/" className="login__logo-link"><img className="login__logo" src={headerLogo} alt="Логотип"></img></a>
      <h5 className="login__title">Рады видеть!</h5>
      <div className="login__form">
        <p className="login__text">E-mail</p>
        <input type="email" className="login__input" defaultValue="pochta@yandex.ru"
        {...register('email', { required: true, pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Что-то пошло не так...'
        } })} />
        <p className="login__error" id="login__error-email">{errors.email && errors.email.message}</p>
        <p className="login__text">Пароль</p>
        <input type="password" className="login__input" defaultValue="Пароль"
        {...register('password', { required: true, pattern: {
          value: /^[A-Z0-9_-]{8,12}$/i,
          message:
            'Что-то пошло не так...'
        } })}  />
        <p className="login__error" id="login__error-password">{errors.password && errors.password.message}</p>
      </div>
      </div>
      <div className="login__block">
        <button type="submit" className="login__submit" defaultValue="Войти">Войти</button>
        <p className="login__registered">Ещё не зарегистрированы?<NavLink className="login__link" to="/signup">Регистрация</NavLink></p>
      </div>
      </form>
    </section>
    )
};

export default Login