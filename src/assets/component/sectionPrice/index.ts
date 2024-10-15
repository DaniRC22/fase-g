import styled from "styled-components";
import SectionPrice from "./section-price.component";

export default styled(SectionPrice)`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background-color: #f0f0f0; /* Fondo claro */
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row; /* Cambia a fila en pantallas más grandes */
    justify-content: space-around; /* Espacio entre los elementos */
  }

  iframe {
    width: 100%;
    height: 300px; /* Altura del video */
    border: none;

    @media (min-width: 768px) {
      width: 45%; /* Ancho en pantallas más grandes */
      height: 400px; /* Aumentar altura en pantallas más grandes */
    }
  }

  .form-container {
    width: 100%;
    margin-top: 20px; /* Margen superior en móviles */
    
    @media (min-width: 768px) {
      width: 45%; /* Ancho en pantallas más grandes */
      margin-top: 0; /* Eliminar margen superior */
    }

    h3 {
      margin-bottom: 15px;
    }

    input, textarea {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    button {
      padding: 10px;
      background-color: #007BFF; /* Botón azul */
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;

      &:hover {
        background-color: #0056b3; /* Color más oscuro al pasar el ratón */
      }
    }
  }`