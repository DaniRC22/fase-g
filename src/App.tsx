import { FunctionComponent } from "react";
import Services from "./assets/component/services";
import Header from "./assets/component/header";
import CallToAction from "./assets/component/call-to-action";
import Footer from "./assets/component/footer";
import { Helmet } from "react-helmet-async";
import SectionPrice from "./assets/component/sectionPrice";
import Project from "./assets/component/Project";

const App:FunctionComponent=()=> {
  return(
    <div className="background">
      <Helmet>
        <title>Servicios de Mantenimiento Profesionales</title>
        <meta name="description" content="Ofrecemos una amplia gama de servicios de mantenimiento para hogares, negocios, fabricas y empresas." />
        <meta property="og:title" content="Servicios de Mantenimiento profesionales de alto nivel" />
        <meta property="og:description" content="Mantenimiento y reparaciones eficientes para hogares, negocios, fabricas y empresas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ejemplo.com" />
        <meta property="og:image" content="https://www.ejemplo.com/imagen.jpg" />
      </Helmet>
      <Header/>
        <main className="content">
          <SectionPrice/>
          <Services/>
          <Project/>
          <CallToAction/>
        </main>
        <Footer/>
    </div>
  )
}

export default App;