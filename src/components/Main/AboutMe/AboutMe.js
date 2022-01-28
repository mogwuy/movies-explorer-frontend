import './AboutMe.css';
import Portfolio from '../Portfolio/Portfolio.js';
import aboutMePic from '../../../images/pic__COLOR_pic.jpg';

function AboutMe() {
    return (

<div className="aboutme" id="aboutme">
          <h2 className="titles">Студент</h2>
          <div className="line"></div>
          <div className="aboutme__block">
            <div className="aboutme__left">
              <div className="aboutme__title">Виталий</div>
              <div className="aboutme__subtitle">Фронтенд-разработчик, 29 лет</div>
              <div className="aboutme__text">Я родился и живу в Москве, закончил факультет прикладной информатики в МПГУ. 
              Работаю системным администратором. Увлекаюсь вычислительной техникой с детства. Недавно прошёл курс по веб-разработке.</div>
              <div className="aboutme__links">
                <a href="https://facebook.com/" target="_blank" className="aboutme__link">Facebook</a>
                <a href="https://github.com/mogwuy/" target="_blank" className="aboutme__link">GitHub</a>
              </div>
            </div>
            <div className="aboutme__right">
               <img className="aboutme__image" src={aboutMePic} alt="Фотография"></img>
            </div>
          </div>
          <Portfolio />
        </div>

      );
    }
    
    export default AboutMe;