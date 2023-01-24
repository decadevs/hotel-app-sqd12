import React from 'react'
import Button from '../common/Button'
import Input from '../common/Input'
import './Booking.css'
const Booking = () => {
  return (
    <div className='booking-container'>
        <h1>
            BOOKING
        </h1>
        <Input />
       <div className="btn-box">
       <Button text="Book"/>
       </div>
    </div>
  )
}

export default Booking