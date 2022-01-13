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
              <div className="aboutme__subtitle">Фронтенд-разработчик, 30 лет</div>
              <div className="aboutme__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</div>
              <div className="aboutme__links">
                <a href="https://facebook.com/" className="aboutme__link">Facebook</a>
                <a href="https://github.com/mogwuy/" className="aboutme__link">GitHub</a>
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