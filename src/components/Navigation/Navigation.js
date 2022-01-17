import './Navigation.css';
import { NavLink } from 'react-router-dom';
import icon from '../../images/icon.svg';

function Navigation(props) {

  let activeClassName = "nav__link-active"

    return (
        <>
        <nav className="nav">
          <NavLink type="button" to="/movies"  className={({ isActive }) => isActive ? activeClassName : "nav__link"}>Фильмы</NavLink>
          <NavLink type="button" to="/saved-movies" className={({ isActive }) => isActive ? activeClassName : "nav__link"}>Сохраннные фильмы</NavLink>
        </nav>
        <div className="profile-nav">
        <NavLink type="button" to="/profile"  className="profile-nav__link">Аккаунт</NavLink>
          <img className="profile-nav__account-logo" src={icon} alt="Лого Профиля"></img>
        </div>
        <button className="menu-link" onClick={props.onMenuClick} >Меню</button>
        </>
      );
    }
    
    export default Navigation;