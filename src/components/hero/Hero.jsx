import "./Hero.css";
import silueta from "/perfilPortfolio.png";

const Hero = () => {
  return (
    <section id="hero">
      <div className="introSection">
        <h1 className="title">Emiliano D'Ambrosio</h1>
        <p className="intro">
          Programador Frontend junior especializado en React, Product Manager y
          estudiante de la licenciatura en Sistemas.
        </p>
      </div>
      <div>
        <img src={silueta} alt="" />
      </div>
    </section>
  );
};

export default Hero;
