import React, {useContext} from 'react'
import MovieItem from './MovieItem'
import MovieContext from '../context/MovieContext'
import {AnimatePresence, motion} from 'framer-motion'


function MovieList() {
    const {movie} = useContext(MovieContext)
    return (
      <div className="list-section">
            <div className="movie-list">
                <AnimatePresence>
                    {movie.map((item) => (
                        <motion.div key={item.id} className = 'movie-list'
                            initial = {{opacity: 0}}
                            whileInView = {{opacity: 1}}
                            viewport= {{once: false}}
                            transition = {{duration: 1}}
                            exit = {{opacity: 0}}
                        >
                            <MovieItem key={item.id} item = {item}/>
                        </motion.div>
                    ))}
                </AnimatePresence>  
            </div>
     </div>
  )
}

export default MovieList