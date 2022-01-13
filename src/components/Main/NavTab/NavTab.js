import { NavLink } from 'react-router-dom'
import './NavTab.css';

function NewTab() {
    return (

        <nav className="navtab">
          <NavLink type="button" to="#about" className="navtab__link"><button className="navtab__link" >О проекте</button> </NavLink>
          <NavLink type="button" to="#techs" className="navtab__link"><button className="navtab__link" >Технологии</button> </NavLink>
          <NavLink type="button" to="#aboutme" className="navtab__link"><button className="navtab__link" >Студент</button> </NavLink>
        </nav>
      );
    }
    
    export default NewTab;