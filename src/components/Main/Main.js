import Header from '../Header/Header.js';
import Promo from '../Main/Promo/Promo.js';
import AboutProject from '../Main/AboutProject/AboutProject.js';
import Techs from '../Main/Techs/Techs.js';
import AboutMe from '../Main/AboutMe/AboutMe.js';
import NavigationMain from '../Navigation/NavigationMain.js';
import Footer from '../Footer/Footer.js';

function Main(props) {
    return (
      <>
      <Header nav={<NavigationMain />}/>
      <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      </main>
      <Footer />
      </> 
    );
  }
  
  export default Main;