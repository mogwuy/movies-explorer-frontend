import './Navigation.css';
import { NavLink } from 'react-router-dom';

function NavigationMain() {

    return (
    <div className="header__links">
          <NavLink type="button" to="/signup" className="header__link-signup"><button className="header__link-signup" >Регистрация</button> </NavLink>
          <NavLink type="button" to="/signin" className="header__lang-signin"><button className="header__lang-signin" >Вход</button> </NavLink>
    </div>

);
}

export default NavigationMain;