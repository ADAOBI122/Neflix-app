
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import TvPage from './pages/TvPage'
function App() {
  

  return (
    <Router>
      
     <Header/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movies' element={<MoviePage/>}/>
        <Route path='/tv' element={<TvPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
