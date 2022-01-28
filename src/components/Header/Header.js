import headerLogo from '../../images/header-logo.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header(props) {
    return (

      <header className="header">
        <NavLink to="/"><img className="header__logo" src={headerLogo} alt="Логотип"></img></NavLink>
       {props.nav}
      </header>
      );
    }
    
    export default Header;