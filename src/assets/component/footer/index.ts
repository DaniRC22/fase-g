import styled from "styled-components";
import Footer from "./footer.component";

export default styled(Footer)`
background: #333; /* Fondo oscuro */
  color: white;
  padding: 20px 0;
  text-align: center;

  p {
    margin: 0; /* Eliminar margen */
    font-size: 14px; /* Tamaño de fuente */
  }

  @media (max-width: 600px) {
    font-size: 12px; /* Tamaño de fuente más pequeño en móviles */
  }`