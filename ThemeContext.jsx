import {createContext, useContext, useState, useEffect} from 'react'
const ThemeContext = createContext()

function ThemeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false)
    function handleToggle(){
        setDarkMode(!darkMode)
    }
    useEffect(()=>{
        document.body.classList.toggle("dark", darkMode)
    },[darkMode])
  return (
    <ThemeContext.Provider value={{darkMode, handleToggle}}>
        {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(){
    return useContext(ThemeContext)
}

export default ThemeProvider