import { FunctionComponent } from "react";

const Header: FunctionComponent<Prop>=({className})=>{
    return(
        <header className={className}>
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