import { FunctionComponent } from "react";

const projectsData = [
    {
      title: "Instalación de Iluminación",
      description: "Instalación de sistemas de iluminación LED en una oficina.",
      imageUrl: "https://www.ejemplo.com/imagen1.jpg", // Reemplazar con la URL de la imagen
    },
    {
      title: "Reparación de Fontanería",
      description: "Solucionamos problemas de fontanería en un apartamento.",
      imageUrl: "https://www.ejemplo.com/imagen2.jpg", // Reemplazar con la URL de la imagen
    },
    {
      title: "Mantenimiento Eléctrico",
      description: "Mantenimiento de instalaciones eléctricas en un local comercial.",
      imageUrl: "https://www.ejemplo.com/imagen3.jpg", // Reemplazar con la URL de la imagen
    },
    {
      title: "Mantenimiento de maquinas",
      description: "Mantenimiento de instalaciones eléctricas en un local comercial.",
      imageUrl: "https://www.ejemplo.com/imagen3.jpg", // Reemplazar con la URL de la imagen
    },
    {
      title: "instalaciones",
      description: "Mantenimiento de instalaciones eléctricas en un local comercial.",
      imageUrl: "https://www.ejemplo.com/imagen3.jpg", // Reemplazar con la URL de la imagen
    },
  ];

const Project: FunctionComponent<Prop>=({className})=>{
    return(
        <section className={className} id="projects">
        <h2>Trabajos Realizados</h2>
        <div className="projects-container">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
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