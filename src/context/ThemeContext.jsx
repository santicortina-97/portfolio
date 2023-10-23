import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) =>{
    const [theme, setTheme] = useState("Light")
    const values = {theme, setTheme}
    return(
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () =>{
    const context = useContext(ThemeContext)

    return context
}