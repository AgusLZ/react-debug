import React from "react";
import "./styles/Main.css";

const Main = () => {
  return (
    <main>
      <section className="main-section">
        <div className="main-overlay"></div>

        <div className="main-logo">
          <img
            src="./assets/logo-cinear-main.svg"
            alt="logo cinear seccion principal"
          />
        </div>

        <div className="main-gradient"></div>

        <video className="main-video" autoPlay muted loop>
          <source
            src="https://cdn.videvo.net/videvo_files/video/premium/video0040/large_watermarked/universal_countdown1_preview.mp4"
            type="video/mp4"
          />
        </video>
      </section>
      <section className="extern-links-section">
        links a sitios externos
      </section>
      <div>

        <ul className="listadeEnlaces">
          <li>
            <img className="imglistadeenlaces" alt="TV" src="./assets/tv.cine.ar.svg" /> <span className="Barra">   │    </span>
          </li>
          <li>
            <img className="imglistadeenlaces" alt="Play" src="./assets/play.cine.ar.svg" /> <span className="Barra">  │ </span>
          </li>
          <li>
            <img className="imglistadeenlaces" alt="Estrenos" src="./assets/estrenos.cine.ar.svg" /> <span className="Barra"></span>
          </li>
        </ul>
      </div>
    </main>

  );
};

export default Main;
