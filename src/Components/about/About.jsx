import React from 'react';
import CheckoutSteps from '../Navbar/CheckoutStep';
import './about.css';
import artnocode from '../../img/artnocod.png';
import react from '../../img/react.png';
import js from '../../img/js.png';
import html from '../../img/html5css3.png';
import nodejs from '../../img/nodexpress.jpg';
import mongo from '../../img/mongo.png';
import mysql from '../../img/mysql.png';
import wp from '../../img/WP.png';
import next from '../../img/next.png';

const About = () => {
  return (
    <div>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="a">
        <div className="a-right">
          <img src={artnocode} alt="" className="a-img" />

          <h1 className="a-title">Bonjour, Moi c’est Arnaud Didier,</h1>
          <p className="a-sub">
            Laissez-moi d'abord me présenter, j'ai 32 ans, je suis développeur
            web et créateur de contenu sur Youtube{' '}
            <a
              className="a-link"
              href="https://www.youtube.com/channel/UC7XJ6DSlPXaR4uwOo9lPBqQ"
              target="_blank"
            >
              {' '}
              Lien chaîne Youtube.{' '}
            </a>
          </p>
          <p className="a-sub">
            J’habite actuellement à Montguyon en Charente-Maritime (17). Après
            10 ans dans le monde du BTP, j'ai entamé une reconversion dans le
            monde du développement Web. Suite à ma formation de développeur web
            React et NodeJS à la Wild Code School, j'ai décidé de lancer ma
            petite entreprise.
          </p>
          <p className="a-sub">
            Mon but est de concevoir des sites web destinés aux particuliers ou
            aux entreprises. Je cherche à répondre au mieux aux besoins de mes
            clients, qu’il s’agisse de créer de nouvelles fonctionnalités, de
            retravailler le design ou de construire un projet de A à Z.
          </p>
          <h2 className="a-desc"> Mes Compétences </h2>
          <div className="a-award">
            <img src={js} alt="js" className="a-award-img" />
            <img src={html} alt="HTML/CSS" className="a-award-img" />
            <img src={react} alt="React" className="a-award-img" />
            <img src={next} alt="nextJs" className="a-award-img" />
            <img src={wp} alt="WordPress" className="a-award-img" />
            <img src={nodejs} alt="nodejs" className="a-award-img" />
            <img src={mysql} alt="MySql" className="a-award-img" />
            <img src={mongo} alt="MongoDB" className="a-award-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
