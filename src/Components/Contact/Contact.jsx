import React from 'react'
import linkedin from "../../assets/svg/linkedin.svg"
import github from "../../assets/svg/github.svg"
import gmail from "../../assets/svg/google-gmail.svg"
import "./Contact.css"

const Contact = () => {
    return (
        <div className='containerContact' id="contact">
            <h2>Contacto</h2>
            <div className='containerRedes'>
                <div>
                    <a href="https://www.linkedin.com/in/santiagocortina97/" target='blank' ><img src={linkedin} alt="https://www.linkedin.com/in/santiagocortina97/" /></a>
                </div>
                <div>
                    <a href="https://github.com/santicortina-97" target='blank'><img src={github} alt="" /></a>
                </div>
                <div>
                    <a href="mailto: santiago.m.cortina@gmail.com" target='blank' rel="noreferrer"><img src={gmail} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact