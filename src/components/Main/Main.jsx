import React from 'react'
import './Main.css'
import { FaLinkedinIn, FaGithub, FaRegEnvelope } from "react-icons/fa";

const Main = () => {
  return (
    <section className="mainCont">
        <div className="titMain">
            <img src="../../../agustinCartoonW.svg" alt="" />
            <h1>¡Hola! Soy Agustin 👋</h1>
            <p>Me dedico a la programación orientada al Front-End.<br/>Y este es mi portafolio.</p>
            <div className='btnRedes'>
              <a href="https://github.com/agsrp" target='blank'><FaGithub /></a>
              <a href="https://www.linkedin.com/in/agustinreinaldoperez/" target='blank'><FaLinkedinIn /></a>
              <a href="mailto:agustinreinaldoperez@gmail.com" target='blank'><FaRegEnvelope /></a>
            </div>
        </div>
    </section>
  )
}

export default Main