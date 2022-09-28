import { faBus} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../header/header.css"

function Header() {
  return (
    <div className='header'>
        <div className='headerContainer'>
            <div className='headerList'>
                <div className="headerListItem active">
                    <FontAwesomeIcon className='icon' icon={ faBus }/>
                    <span>Reservations</span>
                </div>
            </div>
            <div className='subContainer'>
              <h1 className='headerTitle'>A lifetime of discounts? It's Genius.</h1>
              <p className='headerDesc'>
                Get rewarded for your travels - unlock instant savings of 10% or more with a free First Class account
              </p>
              <button className='headerBtn'>Sign in / Register</button>
            </div>
        </div> 
    </div>
  )
}

export default Header