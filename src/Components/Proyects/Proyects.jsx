import React from 'react'
import proyectoReact from "../../assets/proyectoReact.png"
import RyM from "../../assets/RyM.png"
import piVideogames from "../../assets/piVideogames.png"

import "./Proyects.css"

const Proyects = () => {
    return (
        <div className="proyects" id='proyects'>
        <h2>Proyectos</h2>
        <div className="containerProyects">
            <div className="containerCard">
                <div className="card">
                    <div className="cardImage">
                        <img src={proyectoReact} alt="" />
                    </div>
                    <div className="cardContent">
                        <p>React - Javascript - Css - Firebase</p>
                    </div>
                </div>
                <div>
                    <button className='repositorio'>
                        <span><a href="https://github.com/santicortina-97/ProyectoFinalReact-Cortina" target='blank'>Ver repositorio</a></span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="containerCard">
                <div className="card">
                    <div className="cardImage">
                        <img src={RyM} alt="" />
                    </div>
                    <div className="cardContent">
                        <p>React - Javascript - Redux - Css - Express - PostgreSQL</p>
                    </div>
                </div>
                <div>
                    <button className='repositorio'>
                        <span><a href="https://github.com/santicortina-97/proyectoRickAndMorty" target='blank'>Ver repositorio</a></span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="containerCard">
                <div className="card">
                    <div className="cardImage">
                        <img src={piVideogames} alt="" />
                    </div>
                    <div className="cardContent">
                        <p>React - Javascript - Redux - Css - Express - PostgreSQL</p>
                    </div>
                </div>
                <div>
                    <button className='repositorio'>
                        <span><a href="https://github.com/santicortina-97/pi-Videogames" target='blank'>Ver repositorio</a></span>
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