import React from 'react';
import './Prestation.css';
import CheckoutSteps from '../../Components/Navbar/CheckoutStep';
import ordi from '../../img/ordi.png';

const Prestation = () => {
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>

      <div className="pr">
        <div>
          <img src={ordi} alt="Me" className="pr-img" />
          <h1 className="pr-title">NonoduWeb propose à ses clients : </h1>

          <p className="pr-sub">
            💻 Creation de site web : site vitrines, blog, services ou
            e-commerce.
          </p>
          <p className="pr-sub">
            📱 Tous les sites sont en Responsive design : Adapté à tous les
            supports.
          </p>
          <p className="pr-sub">
            ⌨️ Amélioration de sites existants ou rafraichissement du site.
          </p>
          <p className="pr-sub">
            🕙 Horaire d'ouverture : Du Lundi au Vendredi de 9h à 18h et le
            Samedi sur rendez-vous.
          </p>
          <p className="pr-sub">
            💰 Nous construisons vos projets en ensemble, et j’adapte mon tarif
            en fonction ce ceux-ci. N’hésitez pas à me demander une devis.
          </p>
          <p className="pr-sub">
          Maintenant que vous me connaissez mieux, découvrez mes différents travaux.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prestation;
