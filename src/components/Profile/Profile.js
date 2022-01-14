import Header from '../Header/Header.js';
import Navigatiion from '../Navigation/Navigation.js'
import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <Header nav={<Navigatiion />}/>
            
            <h5 className="profile__title">Привет, Виталий!</h5>

            <form className="profile__form">
              <div className="profile__string">
                <p className="profile__name">Имя</p>
                <input type="text" className="profile__input"  defaultValue="Виталий"/>
              </div>
              <div className="whiteline"></div>
              <div className="profile__string">
                <p className="profile__name">E-mail</p>
                <input type="email" className="profile__input" defaultValue="pochta@yandex.ru" />
              </div>
              <div className="profile__buttonsub">
                <button className="profile__submit" defaultValue="Редактировать">Редактировать</button>
              </div>
            </form>
            <div className="profile__buttonsign">
            <button className="profile__signout">Выйти из аккаунта</button>
            </div>

        </div>
      );
    }
    
    export default Profile;