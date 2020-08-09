import React from 'react';
import { Link } from 'react-router-dom'

import "./styles.css"

import logoimg from '../../images/logo.svg';
import landingimg from '../../images/landing.svg';

import studyIcon from '../../images/icons/study.svg';
import teachIcon from '../../images/icons/give-classes.svg';
import purpleHeart from '../../images/icons/purple-heart.svg';



function Landing(){
    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoimg} alt="nao torra"/>
                <h2>Sua Plataforma de Estudos Online.</h2>
            </div>
            <img src={landingimg} alt="nao torra" className="hero-landing"/>
       
        <div className="buttons-container">
            <Link to="/study" className="study"> <img src={studyIcon} alt="nao torra"/> Estudar </Link>
            <Link to="/teach" className="teach"> <img src={teachIcon} alt="nao torra"/> Ensinar</Link>
            
         </div>
          <span className="total-connections">
            Total de 200 conexões concluídas. E Contando! <img src={purpleHeart}/>
            </span> 
     </div>
    </div>
    )
}

export default Landing;