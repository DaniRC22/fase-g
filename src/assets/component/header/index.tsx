import styled from "styled-components";
import Header from "./header.component";

export default styled(Header)`
  /* background-color: black;
  padding: 15px 0; 
  text-align: center; */
  /* nav .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .nav {
    display: flex;
    gap: 20px;
  }

  a {
    z-index:3;
    color: white;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: red;
    } */
  /* } */

  position: relative;
  padding: 60px 20px; /* Espaciado del header */
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(255, 0, 0, 0.6)); /* Degradado oscuro a rojo */
  color: white;
  text-align: center;
  z-index: 3;


 ::before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('assets/abstract-geometry.png') no-repeat center center; /* Agrega una imagen geométrica si tienes */
  background-size: cover; /* Ajusta el tamaño */
  opacity: 0.1; /* Suaviza la imagen de fondo */
  z-index: 3; /* Mantiene la imagen detrás del texto */
}

.header-content {
  position: relative;
  z-index: 3; /* Texto encima de la superposición */
}

.header-title {
  font-size: 3rem; /* Tamaño del título */
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(255, 0, 0, 0.5); /* Efecto de sombra */
}

.header-subtitle {
  font-size: 1.5rem; /* Tamaño del subtítulo */
  margin: 10px 0;
}

.header-cta {
  display: inline-block;
  padding: 15px 30px;
  background: rgba(255, 221, 87, 0.8); /* Fondo amarillo con transparencia */
  color: #000; /* Color del texto */
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s, transform 0.3s;

  &:hover {
    background: #ffd700; /* Fondo más oscuro al pasar el ratón */
    transform: translateY(-3px); /* Movimiento al pasar el ratón */
  }
}

.nav {
  display: flex;
  justify-content: center; /* Centrar la navegación */
  margin-bottom: 20px; /* Espacio debajo de la navegación */
}

.nav a {
  margin: 0 15px; /* Espacio entre enlaces */
  color: white; /* Color del texto */
  text-decoration: none; /* Sin subrayado */
  transition: color 0.3s; /* Transición suave para el color */

  &:hover {
    color: rgba(255, 0, 0, 0.8); /* Color rojo al pasar el ratón */
  }
}

`


