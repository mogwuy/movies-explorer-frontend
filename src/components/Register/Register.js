import React from 'react'
import './Register.css'
import headerLogo from '../../images/header-logo.svg';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Register(props) {

  const { register, handleSubmit, formState: { errors }} = useForm({ mode: 'onChange',
  reValidateMode: 'onChange',});
  const onSubmit = data => {
    props.registrationApi(data.name, data.email, data.password)
  };
  const isClosed = Object.keys(errors).length > 0 ? 'register__submit_disabled'  : "register__submit";
  const isBlocked = Object.keys(errors).length > 0 ? true : false;
      

    return (
    <section className="register">
      <form id="form-register" onSubmit={handleSubmit(onSubmit)}>
      <div className="register__content">
      <a href="/" className="register__logo-link" ><img className="register__logo" src={headerLogo} alt="Логотип"></img></a>
      <h5 className="register__title">Добро пожаловать!</h5>
      <div className="register__form">
        <p className="register__text">Имя</p>
        <input type="text" className="register__input"  defaultValue="Виталий" name="name"
         {...register('name', { 
          required: true, pattern: {
          value: /^[?!,.а-яА-ЯёЁ0-9\s]{2,40}$/i,
          message: 'Что-то пошло не так...'
        } })}/>
        <p className="register__error" id="register__error-name"></p>
        <p className="register__text">E-mail</p>
        <input type="email" className="register__input" defaultValue="pochta@yandex.ru" name="email"
         {...register('email', { required: true, pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Что-то пошло не так...'
        } })}
            />
        <p className="register__error" id="register__error-email">{errors.email && errors.email.message}</p>
        <p className="register__text">Пароль</p>
        <input type="password" className="register__input" defaultValue="Пароль" name="password" 
        {...register('password', { required: true, pattern: {
          value: /^[A-Z0-9_-]{8,12}$/i,
          message:
            'Что-то пошло не так...'
        } })}  />
        <p className="register__error" id="register__error-password">{errors.password && errors.password.message}</p>
      </div>
      </div>
      <div className="register__block">
        <button disabled={isBlocked} type="submit" className={isClosed} defaultValue="Зарегистрироваться">Зарегистрироваться</button>
        <p className="login__error-autorize">{props.isErrorLogin}</p>
        <p className="register__registered">Уже зарегестрированы?<NavLink className="register__link" to="/signin">Войти</NavLink></p>
      </div>
      </form>
    </section>
    )
};

export default Register