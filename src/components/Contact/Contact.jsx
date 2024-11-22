import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Contact = () => {

    const [mensaje, setMensaje] = useState('');
    const [esError, setEsError] = useState(false);

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r0ykqyp', 'template_uhb86ju', form.current, {
        publicKey: 'xXFHE1AOe-WuzCqeA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setEsError(false)
          setMensaje('Mensaje enviado, muchas gracias por comunicarte.')
        },
        (error) => {
          console.log('FAILED...', error.text);
          setEsError(true)
          setMensaje('Hubo un error en el envío. Por favor, inténtalo de nuevo.')
        },
      );
  };


  return (
    <>
    <Header/>
    <div className="contSecCont">
        <div className='ContenidoContacto'>
            <h1>CONTACTO</h1>
            <p>Comunicate conmigo mediante email,<br/>o seguime en mis redes sociales.</p>
        </div>
        <div className="formCont">
            <form ref={form} onSubmit={sendEmail}>
            <label className='titForm'>Nombre</label>
            <input className='nombreEmail' type="text" name="user_name" />
            <label className='titForm'>Email</label>
            <input className='nombreEmail' type="email" name="user_email" />
            <label className='titForm'>Dejanos tu mensaje:</label>
            <textarea className='mensajeCont' name="message" />
            <input className='btnEnviarCont' type="submit" value="ENVIAR" />
            </form>
        </div>

        {mensaje && (
        <div
          style={{
            color: esError ? 'red' : 'green',
            marginTop: '10px',
            fontWeight: 'bold'
          }}
        >
          {mensaje}
        </div>
      )}
    </div>
    <Footer/>
    </>
  )
}

export default Contact