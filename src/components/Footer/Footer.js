import './Footer.css';

function Footer() {
    return (

        <footer className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="whiteline"></div>
        <div className="footer__block">
          <p className="footer__copyright">© 2021</p>
          <ul className="footer__links"> 
            <li className="footer__link-element"> <a href="" className="footer__link">Яндекс.Практикум</a></li>
            <li className="footer__link-element"> <a href="" className="footer__link">Github</a></li>
            <li className="footer__link-element"> <a href="" className="footer__link">Facebook</a></li>
          </ul>
        </div>
      </footer>
      
      );
    }
    
    export default Footer;