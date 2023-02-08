import {React, useState} from "react";
// import Button from '../../components/common/Button';
// import Input from '../../components/common/Input';
import '../../style/Booking.css';
import { MdHome, MdOutlineBedroomParent, MdOutlineRoomService, MdPeople } from "react-icons/md";
import '../../components/common/input.css';
import '../../components/common/Button.css'
import Navbar from '../../components/navs/Navbar';
import NavLink from '../../components/navs/NavLink';
import Sidebar from '../../components/navs/Sidebar';
import {useParams } from "react-router-dom";


const Booking = () => {
      const [noOfPeople, setNoOfPeople] = useState(0);
      const [serviceName, setServiceName] = useState('');
      const [roomType, setRoomType] = useState('');
      const { id, customer } = useParams()
          
      const addBooking =async (noOfPeople, serviceName, roomType, id, hotelId) =>{
        await fetch( `https://localhost:7255/api/Booking`, {
          method: 'Post',
          body:JSON.stringify({
            noOfPeople: noOfPeople,
            serviceName:serviceName,
            customerId:customer,
            roomTypeId:roomType,
            hotelId:`${id}`
          }),
          headers: {
            'Content-type': 'application/json',
          },
      })
        .then(response => response.json())
        .then(data=>{
          setNoOfPeople('');
          setServiceName('');
          setRoomType('');
          window.location.href = 'https://paystack.com/pay/hms-sq012';
        })


        }

       const handleSubmit = (e)=>{
          e.preventDefault();
          addBooking(noOfPeople, serviceName, roomType, id, customer);
        }

  return (
    <>
      <Navbar/>
      <NavLink>
      <div className='booking-container'>
        <h1>
            BOOKING
        </h1>
        <form onSubmit={handleSubmit}>
        <div>         
                  {/* <div className="input-container" >
                    <input type="text" placeholder="Hotel Name" className="" value={""}   onChange={(e) => setNoOfPeople(e.target.value)}/>
                    <div className="icon-box">
                      <MdHome className="icon" />
                    </div> */}
                  {/* </div> */}
                  <div className="input-container">
                    <input type="text" disabled placeholder="Room Type" onChange={(e) => setRoomType(e.target.value)}/>
                    <select className="02eec545-7d7c-4758-ad39-6a7e6c9e27f1" placeholder="Room Type">
                      <option value="088e5374-9dd5-465a-8006-cd568ab82a0f">Standard Room</option>
                      <option value="185ead6f-5f42-49aa-968c-2a433f917b9e">Superior Room-Pool View</option>
                      <option value="295dfa27-a8db-4f77-8d13-ace7b0e9a75c">Premium Room</option>
                    </select>
                    <div className="icon-box">
                      <MdOutlineBedroomParent className="icon" />
                    </div>
                  </div>
                  <div className="input-container">
                    <input type="text" disabled placeholder="No of People"  />
                    <input type="number" className="general" name="quantity" min="1" max="250" value={noOfPeople} onChange={(e) => setNoOfPeople(e.target.value)}/>
                    <div className="icon-box">
                      <MdPeople className="icon" />
                    </div>
                  </div>
                  <div className="input-container">
                    <input type="text" disabled placeholder="Service" onChange={(e) => setServiceName(e.target.value)}/>
                    <select className="input-service general" placeholder="Service">
                      <option value="Personal Service">Personal Service</option>
                      <option value="Hotel Service">Hotel Service</option>
                    </select>
                    <div className="icon-box">
                      <MdOutlineRoomService className="icon" />
                    </div>
                  </div>
                </div> 

              <div className="btn-box">
                  <button type="summit" className='btn btn-center'>Book</button>
              </div>
        </form>
      </div>
      </NavLink>
      <Sidebar roleValue={"Customer"}/>
    </>
  )
}

export default Booking