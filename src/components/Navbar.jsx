import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <h4 className="logo">Sabi Music</h4>       
            <ul className="links">
                <li>
                    <NavLink to= '/' className= 'nav-link home' currentclassname= 'active'>Home</NavLink>
                </li>
                <li>
                    <NavLink to= '/about' className= 'nav-link about' currentclassname= 'active'>About</NavLink>
                </li>
                <li>
                    <NavLink to= '/contact' className= 'nav-link contact' currentclassname= 'active'>Contact</NavLink>
                </li>
            </ul>   
    </div>
  )
}

export default Navbar