import Header from '../Header/Header.js';
import Navigatiion from '../Navigation/Navigation.js'
import { useForm } from 'react-hook-form';
import './Profile.css';
import React from 'react';

function Profile(props) {
  const { register, handleSubmit, formState: { errors }} = useForm({ mode: 'onChange',
  reValidateMode: 'onChange',});
  const onSubmit = data => {
    props.updateUserApi({name: data.name, email: data.email})
  };
  const [isClosed, setClosed] = React.useState('profile__submit_disabled');
  const [isBlocked, setBlocked] = React.useState(false);
  
React.useEffect(() => {
Object.keys(errors).length > 0 ?  setClosed('profile__submit_disabled')  : setClosed("profile__submit");
Object.keys(errors).length > 0 ?   setBlocked(true) :   setBlocked(false);
if ((document.getElementsByTagName("input")[0].value == props.user.name) && document.getElementsByTagName("input")[1].value == props.user.email) {
  setClosed('profile__submit_disabled') ;
  setBlocked(true);
  } else {
   setClosed('profile__submit');
  setBlocked(false);
  }
}, [Object.keys(errors).length > 0 ] );
  return (
        <div className="profile">
            <Header nav={<Navigatiion onMenuClick={props.onMenuClick}/>}/>
            
            <h5 className="profile__title">Привет, {props.user.name}</h5>

            <form className="profile__form" onSubmit={handleSubmit(onSubmit)}>
              <div className="profile__string">
                <p className="profile__name">Имя</p>
                <input type="text" className="profile__input"  name="name" defaultValue={props.user.name}
                {...register('name', { required: true, pattern: {
                  value: /^[?!,.а-яА-ЯёЁ0-9\s]{2,40}$/i,
                  message: 'Что-то пошло не так...'
                } })} />
              </div>
              <p className="login__error" id="login__error-email">{errors.name && errors.name.message}</p>
              <div className="whiteline"></div>
              <div className="profile__string">
                <p className="profile__name">E-mail</p>
                <input type="email" className="profile__input" name="email" defaultValue={props.user.email}
                 {...register('email', { required: true, pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Что-то пошло не так...'
                } })}  />
              </div>
              <p className="login__error" id="login__error-email">{errors.email && errors.email.message}</p>
              <div className="profile__buttonsub">
                <button disabled={isBlocked} className={isClosed} defaultValue="Редактировать">Редактировать</button>
              </div>
              <p className="login__error-autorize">{props.isErrorLogin}</p>
            </form>
            <div className="profile__buttonsign">
            <button className="profile__signout" onClick={props.signOut}>Выйти из аккаунта</button>
            </div>

        </div>
      );
    }
    
    export default Profile;