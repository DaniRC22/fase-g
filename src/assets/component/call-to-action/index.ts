import styled from "styled-components";
import CallToAction from "./call-to-action.component";

export default styled(CallToAction)`
 padding: 60px 20px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0.5)); /* Degradado oscuro a rojo */
  color: white;
  text-align: center;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Sombra más suave */
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  h2 {
    margin-bottom: 15px;
    font-size: 32px; /* Tamaño de fuente más grande */
    font-weight: bold;
    text-shadow: 0 1px 3px rgba(255, 0, 0, 0.5); /* Sombra de texto más pronunciada */
  }

  p {
    margin-bottom: 20px;
    font-size: 18px; /* Tamaño de fuente */
    max-width: 600px; /* Ancho máximo del párrafo */
    margin: 0 auto; /* Centrar el párrafo */
    line-height: 1.5; /* Mejorar la legibilidad */
  }

  a {
    display: inline-block;
    padding: 15px 30px;
    background: rgba(255, 221, 87, 0.9); /* Fondo amarillo con un poco más de opacidad */
    color: black; /* Color del texto más oscuro para mejor contraste */
    border-radius: 25px;
    text-decoration: none;
    font-weight: bold;
    transition: background 0.3s, transform 0.3s;

    &:hover {
      background: rgba(255, 204, 0, 1); /* Fondo más oscuro al pasar el ratón */
      transform: translateY(-3px); /* Movimiento al pasar el ratón */
    }
  }
`;