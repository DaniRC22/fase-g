import styled from "styled-components";
import SectionPrice from "./section-price.component";

export default styled(SectionPrice)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0.5));
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;


.video-embed {
  width: 100%;
  height: 300px; /* Altura del video */
  border: none;
  animation: fadeIn 1s ease-in; /* Animación de entrada */
  
  @media (min-width: 768px) {
    width: 45%; /* Ancho en pantallas más grandes */
    height: 400px; /* Aumentar altura en pantallas más grandes */
  }
}

.form-container {
  background: rgba(255, 255, 255, 0.1); /* Fondo blanco semitransparente */
  border-radius: 10px; /* Bordes redondeados */
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); /* Sombra suave */
  backdrop-filter: blur(10px); /* Desenfoque de fondo */
  margin-top: 20px; /* Margen superior en móviles */
  animation: slideIn 1s ease-in; /* Animación de entrada */
  
  @media (min-width: 768px) {
    width: 45%; /* Ancho en pantallas más grandes */
    margin-top: 0; /* Eliminar margen superior */
  }
}

.title-h3 {
  font-size: 2rem; /* Tamaño del título */
  margin-bottom: 20px;
  text-shadow: 0 2px 5px rgba(255, 0, 0, 0.5); /* Sombra para destacar el texto */
}

form {
  display: flex;
  flex-direction: column; /* Apila los campos verticalmente */
  gap: 15px; /* Espacio entre campos */
}

input, textarea {
  padding: 12px;
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  outline: none; /*Sin borde al seleccionar*/
}

input::placeholder,
textarea::placeholder {
  color: rgba(150, 150, 150, 0.7); /* Color del placeholder */
}

button {
  padding: 12px;
  background: rgba(255, 221, 87, 0.8); /* Fondo amarillo con transparencia */
  color: #000; /* Color del texto */
  border: none; /* Sin borde */
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer;
  transition: background 0.3s, transform 0.3s; /* Transición para efectos */

  &:hover {
    background: #ffd700; /* Fondo más oscuro al pasar el ratón */
    transform: translateY(-2px); /* Movimiento al pasar el ratón */
  }
}

/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsivo */
@media (min-width: 768px) {
  flex-direction: row; /* Cambia a fila en pantallas más grandes */
  justify-content: space-around; /* Espacio entre los elementos */
}
  `