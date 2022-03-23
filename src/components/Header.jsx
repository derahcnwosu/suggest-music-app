import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="header">
            <div className="shaded-bg header-container">
                <h1>Recommend GREAT Music.</h1>
                <div className="input-block">
                    <input type="search" name="search" id="search" />
                    <Link to= '/about' className='add-btn'>Add Music</Link>
                </div>
            </div>

    </header>
  )
}

export default Header