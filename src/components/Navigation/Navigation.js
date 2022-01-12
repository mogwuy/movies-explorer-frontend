import './Navigation.css';
import { NavLink } from 'react-router-dom';
import icon from '../../images/icon.png';

function Navigation() {

  let activeClassName = "nav__link_active"

    return (
        <>
        <nav className="navigation">
          <NavLink type="button" to="/movies"  className={({ isActive }) => isActive ? activeClassName : "nav__link"}>Фильмы</NavLink>
          <NavLink type="button" to="/saved" className={({ isActive }) => isActive ? activeClassName : "nav__link"}>Сохраннные фильмы</NavLink>
        </nav>
        <div className="nav__profile">
        <NavLink type="button" to="/profile"  className="nav__link_profile">Аккаунт</NavLink>
          <img className="account__logo" src={icon} alt="Лого Профиля"></img>
        </div>
        </>
      );
    }
    
    export default Navigation;