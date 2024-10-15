import styled from "styled-components";
import Services from "./services.component";

export default styled(Services)`
padding: 40px 20px;
  // background-color: #f9f9f9; /* Fondo claro */
  text-align: center;

  h2 {
    color: #333; /* Título oscuro */
    margin-bottom: 20px;
  }

  .services {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (min-width: 768px) {
      flex-direction: row; /* Cambia a fila en pantallas más grandes */
      justify-content: space-around;
    }

    .service-card {
    // background: white; /* Fondo blanco para las tarjetas */
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 90%; /* Ancho móvil */
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-5px); /* Movimiento al pasar el ratón */
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }

    h3 {
      color: black; /* Color azul para los títulos */
      margin: 10px 0;
    }
    h3::shadow{
      color: red;
    }
    p {
      color: #666; /* Texto gris */
      margin-bottom: 15px;
    }

    @media (min-width: 768px) {
      width: 30%; /* Ancho en pantallas más grandes */
    }
  }
  }
`