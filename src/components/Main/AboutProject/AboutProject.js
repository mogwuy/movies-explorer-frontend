import './AboutProject.css';

function AboutProject() {
    return (

      <div className="about" id="about">
        <h2 className="titles">О проекте</h2>
        <div className="line"></div>
        <div className="about__table">
          <div className="about__table-block">
            <h3 className="about__table-title">Дипломный проект включал 5 этапов</h3>
            <p className="about__table-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about__table-block">
            <h3 className="about__table-title">Дипломный проект включал 5 этапов</h3>
            <p className="about__table-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
        </div>
        <div className="about__string">
          <div className="about__string-left">
            <div className="about__string-black">
              <p className="about__string-blacktext">1 неделя</p>
            </div>
            <p className="about__string-back">Back-end</p>
          </div>
          <div className="about__string-right">
            <div className="about__string-grey">
            <p className="about__string-graytext">4 недели</p>
            </div>
            <p className="about__string-back">Front-end</p>
          </div>
        </div>
      </div>
      );
    }
    
    export default AboutProject;