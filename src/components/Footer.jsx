import React from "react";
import "./styles/Footer.css";

const Marcas = [
  {
    textoAlternativo: "Logo Estrenos",
    srcDelIcono: "./assets/estrenos.cine.ar.svg",
  },
  {
    textoAlternativo: "Logo TV",
    srcDelIcono: "./assets/tv.cine.ar.svg",
  },
  {
    textoAlternativo: "Icono Play",
    srcDelIcono: "./assets/play.cine.ar.svg",
  },
];

const logomarcas = Marcas.map(
  ({ textoAlternativo, srcDelIcono }) => (
    <li>
      <a>
        <svg
          src={srcDelIcono}
          alt={textoAlternativo}
        />
      </a>
    </li>
  )
);

const Footer = () => {
  return (
    <footer>
      <div className="inferiorpiedepagina">
        <legend> Todos los derechos reservados 2003-2021. República Argentina. INCAA
          <br />
          Lima 319; Código Postal: C1073AAG, CABA; República Argentina.
        </legend>
        <div className="imagenesinferiorpiedepagina">

          <img alt="CineAR" src="./assets/logo-cinear.svg" />

          <img alt="ARSAT" src="./assets/logo-arsat.svg" />

          <img alt="INCAA" src="./assets/logo-incaa.svg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
