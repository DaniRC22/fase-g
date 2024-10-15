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
    <div>
      <Helmet>
        <title>Servicios de Mantenimiento Profesionales</title>
        <meta name="description" content="Ofrecemos una amplia gama de servicios de mantenimiento para hogares y negocios." />
        <meta name="keywords" content="mantenimiento, reparación, servicios, plomería, electricidad" />
        <meta property="og:title" content="Servicios de Mantenimiento Profesionales" />
        <meta property="og:description" content="Mantenimiento y reparaciones eficientes para hogares y negocios." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.ejemplo.com" />
        <meta property="og:image" content="https://www.ejemplo.com/imagen.jpg" />
      </Helmet>
      <Header/>
        <main>
          <SectionPrice/>
          <Project/>
          <Services/>
          <CallToAction/>
        </main>
        <Footer/>
    </div>
  )
}

export default App;