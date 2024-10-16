import styled from "styled-components";
import Services from "./services.component";

export default styled(Services)`
  
  /* h2 { */
    /* color: #333; 
    margin-bottom: 20px;
    font-size: 28px;
  }

  .services {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  opacity: 0.8; Ajusta la transparencia aquí

    

    @media (min-width: 768px) {
      flex-direction: row; Cambia a fila en pantallas más grandes
      justify-content: space-around;
    }

    .service-card {
    
    background-color: black;
    border-radius: 10px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 90%; Ancho móvil
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
      transform: translateY(-5px); 
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
    }

    h3 {
      color: red; 
      margin: 10px 0;
    }
    
    p {
      color: #666; 
      margin-bottom: 15px;
    }

    @media (min-width: 768px) {
      width: 30%; 
    }
  }
  /* } */

  padding: 40px 20px; /* Espaciado de la sección */
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0.5)); /* Degradado oscuro a rojo */
  color: white;
  text-align: center;


.futuristic-title {
  color: #fff; /* Título en blanco */
  margin-bottom: 20px;
  font-size: 32px; /* Tamaño de fuente mayor para el título */
  text-shadow: 0 2px 5px rgba(255, 0, 0, 0.5); /* Sombra para destacar el texto */
}

.services {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  opacity: 0.9; /* Ajusta la transparencia aquí */

  @media (min-width: 768px) {
    flex-direction: row; /* Cambia a fila en pantallas más grandes */
    justify-content: space-around; /* Espacio entre las tarjetas */
  }
}

.service-card {
  background-color: black; /* Fondo negro para las tarjetas */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Sombra suave */
  padding: 20px;
  width: 90%; /* Ancho móvil */
  transition: transform 0.3s, box-shadow 0.3s; /* Transición para efectos */

  &:hover {
    transform: translateY(-5px); /* Movimiento al pasar el ratón */
    box-shadow: 0 8px 30px rgba(255, 0, 0, 0.5); /* Sombra más intensa al pasar el ratón */
  }

  h3 {
    color: red; /* Color rojo para los títulos */
    margin: 10px 0;
    font-size: 24px; /* Tamaño de fuente para el título */
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7); /* Sombra para destacar el texto */
  }
  
  p {
    color: #ccc; /* Texto gris claro */
    margin-bottom: 15px;
    line-height: 1.5; /* Altura de línea para mejor legibilidad */
  }

  @media (min-width: 768px) {
    width: 30%; /* Ancho en pantallas más grandes */
  }
}
`