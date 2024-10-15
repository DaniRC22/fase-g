import { FunctionComponent } from "react";

const CallToAction: FunctionComponent<Prop>=({className})=>{
    return(
      <section className={className} id="contact">
        <div className="container">
          <h2>¿Necesitas un presupuesto?</h2>
          <p>contactanos ahora y te damos una solucion rapida</p>
          <a href="">contactanos</a>
        </div>
      </section>
    )
}
export default CallToAction

interface Prop{
  className?: string;
}