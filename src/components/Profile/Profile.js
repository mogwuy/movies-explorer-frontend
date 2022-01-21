import Header from '../Header/Header.js';
import Navigatiion from '../Navigation/Navigation.js'
import { useForm } from 'react-hook-form';
import './Profile.css';

function Profile(props) {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => {
    props.updateUserApi({name: data.name, email: data.email})
  };
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
              <div className="whiteline"></div>
              <div className="profile__string">
                <p className="profile__name">E-mail</p>
                <input type="email" className="profile__input" name="email" defaultValue={props.user.email}
                 {...register('email', { required: true, pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Что-то пошло не так...'
                } })}  />
              </div>
              <div className="profile__buttonsub">
                <button className="profile__submit" defaultValue="Редактировать">Редактировать</button>
              </div>
            </form>
            <div className="profile__buttonsign">
            <button className="profile__signout" onClick={props.signOut}>Выйти из аккаунта</button>
            </div>

        </div>
      );
    }
    
    export default Profile;