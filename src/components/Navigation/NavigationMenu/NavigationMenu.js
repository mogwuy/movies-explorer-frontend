import './NavigationMenu.css';
import closeButton from '../../../images/close-button.svg';
import icon from '../../../images/icon.svg';
import { NavLink } from 'react-router-dom';

function NavigationMenu(props) {
  const isOpened = props.isMenuOpen ? 'menu_opened' : " ";
  let activeClassName = "menu__link-active"
    return (
        <section className={`menu ${isOpened}`} >
        <div className="menu__window" >
          <div className="menu__content">
            <button className="menu__button" type="button" onClick={props.isClose}><img className="menu__close" src={closeButton} alt="Закрыть" /></button>
            <nav className="menu__navigation">
              <NavLink type="button" to="/"  onClick={props.isClose} className={({ isActive }) => isActive ? activeClassName : "menu__link"}>Главная</NavLink>
              <NavLink type="button" to="/movies"  onClick={props.isClose} className={({ isActive }) => isActive ? activeClassName : "menu__link"}>Фильмы</NavLink>
              <NavLink type="button" to="/saved-movies" onClick={props.isClose} className={({ isActive }) => isActive ? activeClassName : "menu__link"}>Сохраннные фильмы</NavLink>
            </nav>
            <div className="menu__profile">
              <NavLink type="button" to="/profile"  onClick={props.isClose} className="menu__profile-link">Аккаунт</NavLink>
              <img className="menu__profile-account-logo" src={icon} alt="Лого Профиля"></img>
            </div>
          </div>
          <div className="menu__close-space" onClick={props.isClose}></div>
        </div>
      </section>
    );
  }
  
  export default NavigationMenu;