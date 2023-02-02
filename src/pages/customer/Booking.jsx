import React from 'react';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import '../../style/Booking.css';
import Navbar from '../../components/navs/Navbar';
import NavLink from '../../components/navs/NavLink';
import Sidebar from '../../components/navs/Sidebar';


const Booking = () => {
  return (
    <>
      <Navbar/>
      <NavLink>
      <div className='booking-container'>
        <h1>
            BOOKING
        </h1>
        <Input />
        <div className="btn-box">
        <Button text="Book"/>
        </div>
      </div>
      </NavLink>
      <Sidebar roleValue={"Manager"}/>
    </>
  )
}

export default Booking