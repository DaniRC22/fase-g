import { FunctionComponent } from "react";
import { Helmet } from "react-helmet-async";

const SectionPrice: FunctionComponent<Prop>=({className})=>{
    return(
      <section className={className} >
         <Helmet>
        <title>Solicitar Presupuesto - Fase-G</title>
        <meta name="description" content="Solicita un presupuesto para nuestros servicios de mantenimiento y reparación." />
      </Helmet>
      <iframe 
        src="https://www.youtube.com/embed/tu_video" 
        title="Video de Servicios"
        allowFullScreen 
        className="video-embed"
      />
      <div className="form-container">
        <h3 className="title-h3">Solicitar un Presupuesto</h3>
        <form>
          <input type="text" placeholder="Nombre" required aria-label="Nombre"/>
          <input type="email" placeholder="Email" required aria-label="Email"/>
          <textarea placeholder="Mensaje" rows={4} required aria-label="Mensaje"/>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};
export default SectionPrice

interface Prop {
    className?: string; 
}