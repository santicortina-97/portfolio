import React from 'react'
import perfil from "../../assets/Perfil.png"
import html from "../../assets/svg/html-5.svg"
import css from "../../assets/svg/css-3.svg"
import bootstrap from "../../assets/svg/bootstrap.svg"
import js from "../../assets/svg/javascript.svg"
import react from "../../assets/svg/react.svg"
import redux from "../../assets/svg/redux.svg"
import node from "../../assets/svg/nodejs.svg"
import sql from "../../assets/svg/file-type-sql.svg"
import firebase from "../../assets/svg/firebase.svg"
import nextJs from "../../assets/svg/nextjs.svg"
import wordpress from "../../assets/svg/wordpress.svg"
import prestashop from "../../assets/svg/prestashop.svg"
import shopify from "../../assets/svg/shopify.svg"

import "./About.css"

const About = () => {


    return (
        <div className='containerAbout' id="about">
            <div className='containerIntro'>
                <div>
                    <img src={perfil} alt="" />
                        <a href="https://drive.google.com/file/d/1bfnrZ-twGz9oIB5lfUlGqWY1UvSiP3Nt/view?usp=sharing" target='blank' >
                        <button className='curriculum'>
                            <span>CV</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
                                <path fill="currentColor" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68ZM16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25Z"/><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6Zm0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"/>
                            </svg>
                        </button>
                        </a>
                </div>
                <div>
                    <h1>SANTIAGO MANUEL CORTINA</h1>
                    <h2>Full Stack Developer</h2>
                    <p>Mi motivación es encontrar desafíos y nuevos caminos que me lleven a seguir creciendo profesionalmente dentro del ámbito de la programación y como persona, además de poder compartir mis conocimientos y valores con otros.</p>
                </div>
            </div>
            <div className='containerSkills'>
                <h2>Mis Skills</h2>
                <div className='containerImage'>
                    <img src={html} alt=""/>
                    <img src={css} alt=""/>
                    <img src={bootstrap} alt=""/>
                    <img src={js} alt=""/>
                    <img src={react} alt=""/>
                    <img src={nextJs} alt=""/>
                    <img src={redux} alt=""/>
                    <img src={node} alt=""/>
                    <img src={sql} alt=""/>
                    <img src={firebase} alt=""/>
                    <img src={wordpress} alt=""/>
                    <img src={prestashop} alt=""/>
                    <img src={shopify} alt=""/>
                </div>
            </div>
            <div className='containerExperience'>
                <h2>Experiencia Laboral</h2>
                <div className='containerData'>
                    <h2>Desarrollador Web (Piso29)
                    Marzo 2024 - Actualidad</h2>
                    <li>Desarrollo web utilizando Wordpress, Prestashop, Shopify, JavaScript</li>
                </div>
            </div>
        </div>
    )
}

export default About