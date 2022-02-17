import './intro.css';
import Me2 from '../../img/me2.png';
import artnono from '../../img/artnono.png';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro"> Bonjour, je m'appelle </h2>
          <h1 className="i-name"> Arnaud Didier </h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Développeur web</div>
              <div className="i-title-item">Créateur de contenu</div>
              <div className="i-title-item">Conception de site web</div>
              <div className="i-title-item">Responsive design</div>
              <div className="i-title-item">Intégration web</div>
            </div>
          </div>
          <p className="i-desc2">Bienvenue sur mon site !!!</p>
          <p className="i-desc">
            Je conçois et développe des services pour des clients de toutes
            tailles, spécialisée dans la création de sites Web.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={artnono} alt="Me" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
