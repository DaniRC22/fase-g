import { FunctionComponent } from "react";
import fondo from "../../fondo.jpg"
import { Helmet } from "react-helmet-async";

const projectsData = [
    {
      title: "Instalación de Iluminación",
      description: "Instalación de sistemas de iluminación LED en una oficina.",
      imageUrl: fondo, // Reemplazar con la URL de la imagen
    },
    {
      title: "Reparación de Fontanería",
      description: "Solucionamos problemas de fontanería en un apartamento.",
      imageUrl: fondo, // Reemplazar con la URL de la imagen
    },
    {
      title: "Mantenimiento Eléctrico",
      description: "Mantenimiento de instalaciones eléctricas en un local comercial.",
      imageUrl: fondo, // Reemplazar con la URL de la imagen
    },
    {
      title: "Mantenimiento de maquinas",
      description: "Mantenimiento de instalaciones eléctricas en un local comercial.",
      imageUrl: fondo, // Reemplazar con la URL de la imagen
    },
    {
      title: "instalaciones",
      description: "Mantenimiento de instalaciones eléctricas en un local comercial.",
      imageUrl: fondo, // Reemplazar con la URL de la imagen
    },
  ];

const Project: FunctionComponent<Prop>=({className})=>{
    return(
        <section className={className} id="projects">
          <Helmet>
        <title>Proyectos Realizados - Fase-G</title>
        <meta name="description" content="Descubre nuestros proyectos realizados en Fase-G, mostrando la calidad y variedad de nuestros servicios." />
      </Helmet>
        <h2>Trabajos Realizados</h2>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.imageUrl} alt={project.title} />
              <h3 className="tittle-card">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    )
}
export default Project

interface Prop {
    className?: string; 
}