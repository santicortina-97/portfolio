import React from 'react'
import proyectoReact from "../../assets/proyectoReact.png"
import RyM from "../../assets/RyM.png"
import piVideogames from "../../assets/piVideogames.png"
import proyectoHTML from "../../assets/proyectoHTML.png"
import proyectoNext from "../../assets/proyectoNext.png"

import "./Proyects.css"

const Proyects = () => {
    return (
        <div className="proyects" id='proyects'>
            <h2>Proyectos</h2>
            <div className='card'>
                <img src={proyectoNext} alt="" />
                <div className='containerCard'>
                    <p>- Aplicación web dedicada a simplificar la compra y alquiler de propiedades.</p>
                    <div className='skills'>
                        <span>TypeScript</span>
                        <span>ReactJs</span>
                        <span>Redux</span>
                        <span>NextJs</span>
                        <span>Tailwind</span>
                        <span>Nest</span>
                        <span>Sequelize</span>
                        <span>PostgreSQL</span>
                    </div>
                    <div>
                        <button className='repositorio'>
                            <span><a href="https://pf-nest.vercel.app/" target='blank'>Ver Deploy</a></span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='card'>
                <img src={piVideogames} alt="" />
                <div className='containerCard'>
                    <p>Aplicación web dinámica para videojuegos, destacando en tecnologías frontend y backend.</p>
                    <div className='skills'>
                        <span>ReactJs</span>
                        <span>Redux</span>
                        <span>NodeJs</span>
                        <span>Express</span>
                        <span>PostgreSQL</span>
                        <span>CSS</span>
                    </div>
                    <div>
                        <button className='repositorio'>
                            <span><a href="https://github.com/santicortina-97/pi-Videogames" target='blank'>Repositorio</a></span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='card'>
                <img src={RyM} alt="" />
                <div className='containerCard'>
                    <p>Desarrollo de una SPA (Single Page Application).</p>
                    <div className='skills'>
                        <span>ReactJs</span>
                        <span>Redux</span>
                        <span>NodeJs</span>
                        <span>Express</span>
                        <span>PostgreSQL</span>
                        <span>CSS</span>
                    </div>
                    <div>
                        <button className='repositorio'>
                            <span><a href="https://github.com/santicortina-97/proyectoRickAndMorty" target='blank'>Repositorio</a></span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='card'>
                <img src={proyectoReact} alt="" />
                <div className='containerCard'>
                    <p>Desarrollo de un Ecommerce.</p>
                    <div className='skills'>
                        <span>ReactJs</span>
                        <span>CSS</span>
                        <span>Firebase</span>
                    </div>
                    <div>
                        <button className='repositorio'>
                            <span><a href="https://github.com/santicortina-97/ProyectoFinalReact-Cortina" target='blank'>Repositorio</a></span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='card'>
                <img src={proyectoHTML} alt="" />
                <div className='containerCard'>
                    <p>Este sitio te brindará información acerca de felinos salvajes.</p>
                    <div className='skills'>
                        <span>HTML</span>
                        <span>Sass</span>
                        <span>Bootstrap</span>
                    </div>
                    <div>
                        <button className='repositorio'>
                            <span><a href="https://infofelinos.netlify.app/" target='blank'>Ver Deploy</a></span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                        <button className='repositorio'>
                            <span><a href="https://github.com/santicortina-97/infofelinos" target='blank'>Ver Repositorio</a></span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proyects