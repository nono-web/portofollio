import React from 'react';
import './about.css';
import react from '../../img/react.jpg';
import js from '../../img/js.jpg';
import html from '../../img/html5css3.jpg';
import nodejs from '../../img/nodexpress.jpg';
import github from '../../img/github.jpg';
import mysql from '../../img/mysql.jpg';
import vuejs from '../../img/vuejs.png';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/330771/pexels-photo-330771.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">A Propos</h1>
        <p className="a-sub2">
          Bonjour, Moi c’est Arnaud Didier, 
        </p>
        <p className="a-sub">
            J’ai 32 ans. Après avoir fait une formation à la Wild code School en Remote (à distance), j’ai lancé mon entreprise.
        </p>
        <p className="a-sub">
            Le monde de la  tech évolue de jour en jour, mes connaissances sont en constante évolution. Dans ce métier, on en apprend tout les jours. 
        </p>
        <p className="a-sub">
            J'ai crée cette entreprise pour concevoir des sites web destinés aux particuliers mais aussi aux entreprises. Je peux aussi reprendre un site existant pour l'améliorer ou le rafraichir. Je serais ravie de vous accompagner dans votre projet web avec toutes mes idées et mes compétences.
        </p>
        <h2 className="a-desc"> Mes Compétences </h2>
        <div className="a-award">
          <img src={react} alt="react" className="a-award-img" />
          <img src={js} alt="js" className="a-award-img" />
          <img src={html} alt="HTML/CSS" className="a-award-img" />
          <img src={nodejs} alt="node.js/express" className="a-award-img" />
          <img src={github} alt="github" className="a-award-img" />
          <img src={mysql} alt="MySql" className="a-award-img" />
          <img src={vuejs} alt="Vue.js" className="a-award-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
