import styled from "styled-components";
import Project from "./project.component";

export default styled(Project)`
padding: 40px 20px;
  background-color: #f9f9f9; /* Fondo claro */
  text-align: center;

  h2 {
    margin-bottom: 30px;
    font-size: 28px; /* Tamaño de fuente */
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Diseño responsivo */
    gap: 20px;

    .project-card {
      background: white; /* Fondo blanco */
      border: 1px solid #ddd; /* Borde gris claro */
      border-radius: 10px; /* Bordes redondeados */
      overflow: hidden;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
      transition: transform 0.3s;

      &:hover {
        transform: scale(1.05); /* Escala al pasar el ratón */
      }

      img {
        width: 100%; /* Ancho completo */
        height: 150px; /* Altura fija */
        object-fit: cover; /* Ajustar imagen sin deformar */
      }

      h3 {
        margin: 15px 0 10px; /* Espaciado superior e inferior */
        font-size: 20px; /* Tamaño de fuente */
      }

      p {
        padding: 0 15px 15px; /* Espaciado interno */
        font-size: 14px; /* Tamaño de fuente */
      }
    }
  }
`