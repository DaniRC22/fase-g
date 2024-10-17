import { FunctionComponent } from "react";
import { Helmet } from "react-helmet-async";

const Header: FunctionComponent<Prop>=({className})=>{
    return(
        <header className={className}>
          <Helmet>
          <title>Bienvenido a Fase-G - Servicios y Mantenimientos</title>
        <meta name="description" content="Servicios de mantenimiento para hogares y empresas de alto nivel." />
        <meta property="og:title" content="Fase-G - Mantenimientos Eficientes" />
        <meta property="og:description" content="Descubre nuestros servicios de mantenimiento y reparación." />
      </Helmet>
        <nav>
          <div className="container">
            <div className="services">
              <div className="nav">
                <a href="#">Inicio</a>
                <a href="#services">Servicios</a>
                <a href="#contact">Contacto</a>
              </div>
            </div>
            <div className="header-content">
              <h1 className="header-title">Fase-G</h1>
              <p className="header-subtitle">Servicios y mantenimientos para el Mañana</p>
              <a href="#contact" className="header-cta">Contáctanos</a>
            </div>
          </div>
        </nav>
      </header>
    );
  };
export default Header

interface Prop {
    className?: string; 
}