import React from 'react'
import "../form/simpleForm.css"
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import Reservation from '../reservations/Reservation'


function SimpleForm() {
  return (
    <div className="SimpleForm">
        <div>
            <Navbar />
            <Header />
            <Reservation />
        </div> 
    </div>
  )
}

export default SimpleForm

