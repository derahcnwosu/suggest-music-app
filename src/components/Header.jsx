import React, {useState, useContext} from 'react'
import MovieContext from '../context/MovieContext'

function Header() {
  const {addMovie} = useContext(MovieContext)
  const [title, setTitle] = useState('')
  const handleTextChange = (e) => {
    setTitle(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovie = {
      title
    }
    addMovie(newMovie)
    setTitle('')
  }
  return (
    <header className="header">
            <div className="shaded-bg header-container">
                <h1>Recommend GREAT Music.</h1>
                <div className="input-block">
                    <input type="text" name="search" id="search" onChange={handleTextChange} value= {title}/>
                    <a href='/about' className='add-btn' onClick={handleSubmit}>Add Music</a>
                </div>
            </div>

    </header>
  )
}

export default Header