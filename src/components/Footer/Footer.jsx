import React from 'react'
import './Footer.css'
import { FaLinkedinIn, FaGithub, FaRegEnvelope} from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <div className='btnRedes'>
            <a href="https://github.com/agsrp" target='blank'><FaGithub /></a>
            <a href="https://www.linkedin.com/in/agustinreinaldoperez/" target='blank'><FaLinkedinIn /></a>
            <a href="mailto:agustinreinaldoperez@gmail.com" target='blank'><FaRegEnvelope /></a>
        </div>
        <p>Creado por Agustin R. Perez 🧡</p>
    </footer>
  )
}

export default Footer