import { FunctionComponent } from "react";

const servicesData = [
  {
    title: 'Mantenimiento Eléctrico',
    description: 'Ofrecemos mantenimiento y reparaciones de instalaciones eléctricas para hogares y negocios.',
  },
  {
    title: 'Reparación de Electrodomésticos',
    description: 'Servicio rápido y eficiente para la reparación de electrodomésticos de todas las marcas.',
  },
  {
    title: 'Plomería',
    description: 'Soluciones para todo tipo de problemas de plomería, desde fugas hasta instalaciones completas.',
  },
];

const Services: FunctionComponent<Props>=({className})=>{
    return(
      <section className={className} id="services">
        <div className="container">
          <h2>Nuestros servicios</h2>
          <div className="services">
            {servicesData.map((services, index) => (
              <div className="service-card" key={index}> 
              <h3> {services.title} </h3> 
              <p>{services.description}</p>
              </div>
            ))}
          </div>
        </div>

      </section>
    )
}
export default Services

interface Props{
  className?: string
}