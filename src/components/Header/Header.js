import headerLogo from '../../images/header-logo.svg';
import './Header.css';

function Header(props) {
    return (

      <header className="header">
        <a href="/"><img className="header__logo" src={headerLogo} alt="Логотип"></img></a>
       {props.nav}
      </header>
      );
    }
    
    export default Header;