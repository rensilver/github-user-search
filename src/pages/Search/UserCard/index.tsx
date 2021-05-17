import React from "react";
//import { Link } from "react-router-dom";
import ButtonIconProfile from "./components/ButtonIconProfile";
import "./styles.css";

const UserCard = () => {
  return (
    <>
      <div className="card-container">
        <div className="card-avatar-content">
          <img
            src="../../../core/assets/images/img-profile.svg"
            alt="img"
            className="img-position"
          />
          <div className="btn-see-profile">

            <ButtonIconProfile/>
            </div>
        </div>
        
        <div className="info-bar">
          <ul className="bar-list">
            <li className="card-repos">Repositórios públicos:</li>
            <li className="card-followers">Seguidores:</li>
            <li className="card-following">Seguindo:</li>
          </ul>
          <div className="info-box">
            <h4 className="title-info">Informações</h4>
            <ul className="info-list">
              <li className="info-company">Empresa:</li>
              <li className="info-website">Website/Blog:</li>
              <li className="info-locale">Localidade:</li>
              <li className="info-date">Membro desde:</li>
            </ul>
          </div>
        </div>
        
      </div>
      
    </>
  );
};

export default UserCard;
