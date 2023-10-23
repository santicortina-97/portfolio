import React from 'react'
import Nav from '../src/Components/Nav/Nav'
import About from '../src/Components/About/About'
import Proyects from '../src/Components/Proyects/Proyects'
import Contact from '../src/Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { useTheme } from './context/ThemeContext'

import "./App.css"


const App = () => {
  const {theme, setTheme} = useTheme()

  return (
    <div id={theme}>
      <Nav/>
      <About/>
      <Proyects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App