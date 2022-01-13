import './Portfolio.css';
import aboutMeLinkImage from '../../../images/text__COLOR_font-main.svg';

function Portfolio() {
    return (
        <>
        <div className="aboutme__portfolio">Портфолио</div>
        <ul className="aboutme__portfolio-links">
          <li className="aboutme__portfolio-link"> <a href="" className="aboutme__link">Статичный сайт</a><img className="aboutme__link-image" src={aboutMeLinkImage} alt="Фотография"></img></li>
          <div className="whiteline"></div>
          <li className="aboutme__portfolio-link"> <a href="" className="aboutme__link">Адаптивный сайт</a><img className="aboutme__link-image" src={aboutMeLinkImage} alt="Фотография"></img></li>
          <div className="whiteline"></div>
          <li className="aboutme__portfolio-link"> <a href="" className="aboutme__link">Одностраничное приложение</a><img className="aboutme__link-image" src={aboutMeLinkImage} alt="Фотография"></img></li>
        </ul>
        </>
      );
    }
    
    export default Portfolio;