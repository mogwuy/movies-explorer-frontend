import './Techs.css';

function Techs() {
    return (

        <div className="techs" id="techs">
        <div className="techs_background"></div>
          <h2 className="titles">Технологии</h2>
          <div className="line"></div>
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <div className="techs__nav">
            <li className="techs__nav-element"><p className="techs__nav-text">HTML</p></li>
            <li className="techs__nav-element"><p className="techs__nav-text">CSS</p></li>
            <li className="techs__nav-element"><p className="techs__nav-text">JS</p></li>
            <li className="techs__nav-element"><p className="techs__nav-text">React</p></li>
            <li className="techs__nav-element"><p className="techs__nav-text">Git</p></li>
            <li className="techs__nav-element"><p className="techs__nav-text">Express.js</p></li>
            <li className="techs__nav-element"><p className="techs__nav-text">MongoDB</p></li>
          </div>
        </div>

      );
    }
    
    export default Techs;