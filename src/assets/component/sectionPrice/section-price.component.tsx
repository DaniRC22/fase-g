import { FunctionComponent } from "react";

const SectionPrice: FunctionComponent<Prop>=({className})=>{
    return(
        <section className={className} id="quote-request">
        <iframe 
          src="https://www.youtube.com/embed/tu_video" 
          title="Video de Servicios"
          allowFullScreen 
        />
        <div className="form-container">
          <h3>Solicitar un Presupuesto</h3>
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Mensaje" rows={4} required />
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