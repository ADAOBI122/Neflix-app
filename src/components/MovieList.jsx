import React from 'react'
import MovieCard from '../components/MovieCard'

function MovieList({movies}) {
  return (
    <div>
        
      <div className='block md:grid grid-cols-4 gap-1 py-6 px-[200px]'>
        {movies.map((movie)=>(
        <MovieCard key={movie.id} movie={movie}/>
      
        ))}
      </div>

    </div>
  )
}

export default MovieList