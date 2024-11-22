import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import './Projects.css'
import { SiJavascript, SiReact, SiHtml5, SiVite, SiCss3 } from "react-icons/si";

const Projects = () => {
  return (
    <>
    <section className="proMain">
        <div className="tityp">
            <h1>PROYECTOS</h1>
        </div>
        <div className="contCardsPro">
            <div className="cardsPro c1">
                <div className="imgCard">
                    <img src="../../../EC.webp" alt="EC" />
                </div>
                <div className="textYBtn">
                    <h4>El Chaltén | Web</h4>
                    <div className="lenguajes">
                        <SiHtml5 className='logoLen'/>
                        <SiCss3 className='logoLen'/>
                        <SiJavascript className='logoLen'/>
                    </div>
                    <div className="btnCard">
                        <a href="https://github.com/agsrp/elchaltenweb" target='blank'> <FaGithub/> Repositorio</a>
                        <a href="https://agsrp.github.io/elchaltenweb/" target='blank'> <FaLink/> Visitar </a>
                    </div>
                </div>
            </div>
            <div className="cardsPro c2">
                <div className="imgCard">
                    <img src="../../../TDC.webp" alt="TDC" />
                </div>
                <div className="textYBtn">
                    <h4>Coffee Shop | Tienda</h4>
                    <div className="lenguajes">
                        <SiReact className='logoLen'/>
                        <SiVite className='logoLen'/>
                    </div>
                    <div className="btnCard">
                        <a href="https://github.com/agsrp/coffeeshop" target='blank'> <FaGithub/> Repositorio</a>
                        <a href="https://coffeeshop-agsrp.netlify.app/" target='blank'> <FaLink/> Visitar </a>
                    </div>
                </div>
            </div>
            <div className="cardsPro c3">
                <div className="imgCard">
                    <img src="../../../TDL.webp" alt="TDL" />
                </div>
                <div className="textYBtn">
                    <h4>To Do List | Tareas</h4>
                    <div className="lenguajes">
                        <SiReact className='logoLen'/>
                        <SiVite className='logoLen'/>
                    </div>
                    <div className="btnCard">
                        <a href="https://github.com/agsrp/toDoList-React" target='blank'> <FaGithub/> Repositorio</a>
                        <a href="https://todolist-agsrp.netlify.app/" target='blank'> <FaLink/> Visitar </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="tityp otrosTit">
            <h1>OTROS PROYECTOS</h1>
        </div>
        <div className="otrosPro">
        <div className="otrosCardsPro c1">
                <div className="imgCard">
                    <img src="../../../PA.webp" alt="PA" />
                </div>
                <div className="textYBtn">
                    <h4>Portafolio Diseño e ilustración</h4>
                    <div className="lenguajes">
                        <SiHtml5 className='logoLen'/>
                        <SiCss3 className='logoLen'/>
                        <SiJavascript className='logoLen'/>
                    </div>
                    <div className="btnCard">
                        <a href="https://github.com/agsrp/portafolio-agustinrperez" target='blank'> <FaGithub/> Repositorio</a>
                        <a href="https://agsrp.github.io/portafolio-agustinrperez/" target='blank'> <FaLink/> Visitar </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Projects