import React from 'react';
import "./Header.style.scss"
import HeroImage from "../../assets/illustration-working.svg"
import NavBar from '../../components/NavBar/NavBar';
import CustomButton from '../../components/CustomButton/CustomButton';

const Header = () => {
  return (
    <header className="header">
      <NavBar/>
      <section className="header-contend">
        <div className="hero">
          <img className="hero-image" src={HeroImage} alt="Working Illustration" />
        </div>
        <div className="header-info">
          <div className="info">
            <h1 className="info-title">More than just shorter links</h1>
            <p className="info-text">
              Build your brand’s recognition and get detailed insights 
              on how your links are performing.
            </p>
            <CustomButton rounded>Get Started</CustomButton>
          </div>
        </div>
      </section>
    </header>
  )
};

export default Header;
