import './intro.css';
import CheckoutSteps from '../../Components/Navbar/CheckoutStep';
import bonjour from '../../img/bonjour.png';
import logo2 from '../../img/logo2.png';

const Intro = () => {
  return (
    <div>
      <CheckoutSteps step1></CheckoutSteps>
      <div className="i">
        <div>
          <div className="i-left-wrapper">
            <img src={logo2} alt="Me" className="i-img-logo" />
            <h1 className="i-name"> NonoduWeb vous souhaite la Bienvenue</h1>
            <img src={bonjour} alt="Me" className="i-img" />
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Développeur web</div>
                <div className="i-title-item">Créateur de contenu</div>
                <div className="i-title-item">Concepteur de site web</div>
                <div className="i-title-item">Intégration web</div>
              </div>
            </div>
            <p className="i-desc">
              Vous avez un projet de site web ? Vous ne savez pas comment vous y
              prendre ? Ou vous ne voulez pas le faire seul ? Vous êtes au bon
              endroit. Suivez-moi !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
