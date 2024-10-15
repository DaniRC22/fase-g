import { FunctionComponent } from "react";

const Header: FunctionComponent<Prop>=({className})=>{
    return(
      <header className={className}>
        <nav>
            <div className="container">
                <div className="services">
                    <div className="nav">
                        <a href="#"></a>
                        <a href="#">Inicio</a>
                        <a href="#services"> Servicios</a>
                        <a href="#contact">Contacto</a>
                    </div>
                </div>
            </div>
        </nav>
      </header>
    )
}
export default Header

interface Prop {
    className?: string; 
}