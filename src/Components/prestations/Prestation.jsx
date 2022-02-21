import React from 'react';
import './Prestation.css';
import logo from '../../img/logo.png';

const Prestation = () => {
    return (
      <div className="pr">
        <div className="pr-left">
          <div className="pr-card">
            <img
              src={logo}
              alt=""
              className="pr-img"
            />
          </div>
        </div>
        <div className="pr-right">
          <h1 className="pr-title">Mes Prestations</h1>
          <p className="pr-sub2">
            NonoduWeb propose à ses clients : 
          </p>
          <p className="pr-sub">
           💻 Creation de site web : site vitrines, blog, services ou e-commerce.
          </p>
          <p className="pr-sub">
          📱 Tous les sites sont en Responsive design : Adapté à tous les supports.
          </p>
          <p className="pr-sub">
          ⌨️ Amélioration de sites existants ou rafraichissement du site.
          </p>
          <p className="pr-sub">
          🕙 Horaire d'ouverture : Du Lundi au Vendredi de 9h à 18h et le Samedi sur rendez-vous. 
          </p>
        </div>
      </div>
    );
  };

export default Prestation