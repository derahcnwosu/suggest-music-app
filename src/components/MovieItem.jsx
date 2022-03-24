import React, {useContext} from 'react'
import {FaTimes} from 'react-icons/fa'
import Genre from './Genre'
import MovieContext from '../context/MovieContext'

function MovieItem({item}) {
    const {deleteMovie} = useContext(MovieContext)
  return (
        <div className="movie-item">
            <div className="title">Music Title: {item.title}</div>
            <Genre>Genre: {item.genre}</Genre>
            <button className="close"><FaTimes color='#fff' onClick={() => deleteMovie(item.id)}/></button>
        </div>
  )
}

export default MovieItem