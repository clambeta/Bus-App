import React from 'react'
import "../navbar/navbar.css"

function Navbar() {
  return (
    <div className="navbar"> 
        <div className='navContainer'>
            <span className='logo'>First Class</span>
            <div className='navItems'>
                <button className='navButton'>Register</button>
                <button className='navButton'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar