import { createContext, useState } from "react";
import MovieData from '../data/MovieData'

const MovieContext = createContext()

export const MovieProvider = ({children}) => {
    const [movie, setMovie] = useState(MovieData)
    const deleteMovie = (id) => {
      if(window.confirm('Are you sure?')) {
        setMovie(movie.filter((item) => (
            item.id !== id
        )))
      }
    }

    const addMovie = (newMovie) => {
        setMovie([newMovie, ...movie])
    }

    return(
        <MovieContext.Provider value={{
            movie,
            deleteMovie,
            addMovie
        }}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContext