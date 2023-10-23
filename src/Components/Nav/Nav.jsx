import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTheme } from '../../context/ThemeContext';

import './Nav.css';

const Nav = () => {
    const { theme, setTheme } = useTheme();
    const [checked, setChecked] = useState(false);


const handleSwitch = (nextChecked) => {
    const newTheme = theme === 'Light' ? 'Dark' : 'Light';
    setTheme(newTheme);
    setChecked(nextChecked);
    // Guardar el tema en localStorage
    localStorage.setItem('theme', newTheme);
};

    // Cargar el tema desde localStorage cuando se monte el componente
useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
    setTheme(savedTheme);
    // Actualizar el estado del interruptor según el tema guardado
    setChecked(savedTheme === 'Dark');
    }
}, [setTheme]);

    return (
        <nav className="containerNav">
        <ul className="containerUl">
            <li>
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
                Sobre mi
            </Link>
            </li>
            <li>
            <Link to="proyects" spy={true} smooth={true} offset={0} duration={800}>
                Proyectos
            </Link>
            </li>
            <li>
            <Link to="contact" spy={true} smooth={true} offset={0} duration={800}>
                Contacto
            </Link>
            </li>
            <li>
            <label className="switch">
                <input type="checkbox" onChange={(e) => handleSwitch(e.target.checked)} checked={checked} />
                <span className="slider"></span>
            </label>
            </li>
        </ul>
        </nav>
    );
};

export default Nav;
