import { Link } from "react-router-dom"
import { useTheme } from "../../ThemeContext"


function Nav() {
  const {darkMode, handleToggle} = useTheme()
  return (
    <div className={darkMode ? "dark": "light"}>
     <nav>

     <ul className="flex  justify-end  mr-[150px] ">
      <li className="mr-[20px] relative top-[14px]"> <Link to="/">Home</Link></li>
      <li  className="mr-[20px] relative top-[14px]" > <Link to="/movies">Movie</Link></li>
      <li  className="mr-[20px] relative top-[14px]"> <Link to="/tv">Tv</Link></li>
      
      <button className="flex bg-gray-300 p-[8px] relative top-[8px]" onClick={handleToggle}>Light Mode</button>
     </ul>
    
     </nav>
   



    </div>
  )
}

export default Nav