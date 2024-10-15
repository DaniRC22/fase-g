import { FunctionComponent } from "react";

const Footer: FunctionComponent<Prop>=({className})=>{
    return(
      <footer className={className}>
        <div className="container">
        <p>&copy; 2024 Servicios de Mantenimiento. Todos los derechos reservados.</p>
        </div>
      </footer>
    )
}
export default Footer

interface Prop{
  className?: string;
}