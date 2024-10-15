import styled from "styled-components";
import CallToAction from "./call-to-action.component";

export default styled(CallToAction)`
padding: 40px 20px;
  background: #007BFF; /* Fondo azul */
  color: white;
  text-align: center;

  h2 {
    margin-bottom: 15px;
    font-size: 24px; /* Tamaño de fuente más grande */
  }

  p {
    margin-bottom: 20px;
    font-size: 16px; /* Tamaño de fuente */
    max-width: 600px; /* Ancho máximo del párrafo */
    margin: 0 auto; /* Centrar el párrafo */
  }

  a {
    display: inline-block;
    padding: 12px 25px;
    background: #ffdd57; /* Fondo amarillo */
    color: #007BFF; /* Color del texto */
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s, transform 0.3s;

    &:hover {
      background: #ffd700; /* Fondo más oscuro al pasar el ratón */
      transform: translateY(-3px); /* Movimiento al pasar el ratón */
    }
  }
`