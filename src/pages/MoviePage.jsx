import {useState, useEffect} from 'react'
import { API_KEY } from '../../config'
import MovieList from '../components/MovieList'

function MoviePage() {
  const [movies,setMovies]= useState([])
  const url ='https://api.themoviedb.org/3/'
  // const type = searchData ? 'search/movie' : 'trending/all/day'

  const fetchmovies = async () =>{
    const data = await fetch(`${url}/discover/movie?api_key=${API_KEY}`)
    const response = await data.json()
     setMovies(response.results)
  }
  fetchmovies()
  return (
    <div>

      <div className='w-[100%] h-[80vh] bg-cover text-white text-center'style={{backgroundImage:"url('https://image.tmdb.org/t/p/w500/blQaj6biyBMLo34cuFKKwbgjIBz.jpg')"}}>
        <h1 className='relative top-[350px] font-bold text-6xl '>Locked In</h1>
        <p  className='relative top-[350px]'> A kindly nurse tries to unlock the secrets of a coma patient's injury - and discovers the bitter rivalry, infidelity, betrayal and murder behind them.</p>
      </div>


<MovieList  movies={movies}/>


    </div>
  )
}

export default MoviePage