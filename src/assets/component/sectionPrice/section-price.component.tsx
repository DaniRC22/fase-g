import { FunctionComponent, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { userForm } from "../../type";
import emailjs from "emailjs-com";

const ID_SERVICE = import.meta.env.VITE_ID_SERVICE!;
const ID_TEMPLATE = import.meta.env.VITE_ID_TEMPLATE!;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY!;

const SectionPrice: FunctionComponent<Prop>=({className})=>{
  const [user, setUser] = useState<userForm>({name:'', email: '', message: ''})

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    const emailjsData =  {
      from_name: user.name,
      to_name: user.email,
      message: user.message,
    }
    try{
       await emailjs.send(ID_SERVICE, ID_TEMPLATE, emailjsData, PUBLIC_KEY)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert('enviado')
        setUser({ name: '', email: '', message: '' }); // Limpiar el formulario
      })
    }catch (error){
      console.error('Failed to send email', error)
    }
};
  
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
        <form onSubmit={sendEmail}>
          <input type="text" placeholder="Nombre" name="name" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})} required aria-label="Nombre"/>
          <input type="email" placeholder="Email" name="email" value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})} required aria-label="Email"/>
          <textarea placeholder="Mensaje" name="message" value={user.message} onChange={(e) => setUser({...user, message: e.target.value})} rows={8} required aria-label="Mensaje"/>
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