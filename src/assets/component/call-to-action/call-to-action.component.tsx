import { FunctionComponent } from "react";
import { Helmet } from "react-helmet-async";

const CallToAction: FunctionComponent<Prop>=({className})=>{
    return(
      <section className={className} id="contact">
        <Helmet>
        <title>Contáctanos para un Presupuesto - Fase-G</title>
        <meta name="description" content="Solicita un presupuesto rápido y efectivo para nuestros servicios de mantenimiento." />
      </Helmet>
        <div className="container">
          <h2>¿Necesitas un presupuesto?</h2>
          <p>contactanos ahora y te damos una solucion rapida</p>
          <a href= "#">contactanos</a>
        </div>
      </section>
    )
}
export default CallToAction

interface Prop{
  className?: string;
}