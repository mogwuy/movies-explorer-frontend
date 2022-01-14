import './NavigationMenu.css';
import closeButton from '../../../images/close-button.svg';
import icon from '../../../images/icon.png';
import { NavLink } from 'react-router-dom';

function NavigationMenu(props) {
  const isOpened = props.isMenuOpen ? 'menu_opened' : " ";
  let activeClassName = "menu__link_active"
    return (
        <section className={`menu ${isOpened}`} >
        <div className="menu__window" >
          <div className="menu__content">
            <button className="menu__button" type="button" onClick={props.isClose}><img className="menu__close" src={closeButton} alt="Закрыть" /></button>
            <nav className="menu__navigation">
              <NavLink type="button" to="/"  className={({ isActive }) => isActive ? activeClassName : "menu__link"}>Главная</NavLink>
              <NavLink type="button" to="/movies"  className={({ isActive }) => isActive ? activeClassName : "menu__link"}>Фильмы</NavLink>
              <NavLink type="button" to="/saved" className={({ isActive }) => isActive ? activeClassName : "menu__link"}>Сохраннные фильмы</NavLink>
            </nav>
            <div className="menu__profile">
              <NavLink type="button" to="/profile"  className="nav__link_profile">Аккаунт</NavLink>
              <img className="account__logo" src={icon} alt="Лого Профиля"></img>
            </div>
          </div>
          <div className="menu__close-space" onClick={props.isClose}></div>
        </div>
      </section>
    );
  }
  
  export default NavigationMenu;