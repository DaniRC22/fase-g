import styled from "styled-components";
import Project from "./project.component";

export default styled(Project)`

  padding: 40px 20px; /* Espaciado de la sección */
  text-align: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0.5)); /* Degradado oscuro a rojo */
  color: white; /* Color del texto */


h2 {
  margin-bottom: 30px;
  font-size: 32px; /* Tamaño de fuente mayor */
  color: #fff; /* Título en blanco */
  text-shadow: 0 2px 5px rgba(255, 0, 0, 0.5); /* Sombra para destacar el texto */
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Diseño responsivo */
  gap: 20px;
  align-content: center;
}

.project-card {
  background-color: black; /* Fondo negro para las tarjetas */
  border: 1px solid rgba(255, 255, 255, 0.1); /* Borde blanco sutil */
  border-radius: 10px; /* Bordes redondeados */
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Sombra más profunda */
  transition: transform 0.3s, box-shadow 0.3s; /* Transición para efectos */

  &:hover {
    transform: translateY(-5px); /* Movimiento al pasar el ratón */
    box-shadow: 0 8px 30px rgba(255, 0, 0, 0.5); /* Sombra intensa al pasar el ratón */
  }

  img {
    width: 100%; /* Ancho completo */
    height: 200px; /* Aumentar la altura de las imágenes */
    object-fit: cover; /* Ajustar imagen sin deformar */
    transition: transform 0.3s; /* Transición de la imagen */
    
    &:hover {
      transform: scale(1.05); /* Efecto de zoom en la imagen */
    }
  }

  .tittle-card {
    margin: 15px 0 10px; /* Espaciado superior e inferior */
    font-size: 24px; /* Tamaño de fuente aumentado */
    color: red; /* Color rojo para el título */
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7); /* Sombra para destacar el texto */
  }

  p {
    padding: 0 15px 15px; /* Espaciado interno */
    font-size: 16px; /* Tamaño de fuente aumentado */
    color: #ccc; /* Texto gris claro */
  }
}
`