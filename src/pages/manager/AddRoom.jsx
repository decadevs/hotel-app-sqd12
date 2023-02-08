import React, { useState } from "react";
import "../../style/AddRoom.css";
import myImage from "../../assets/cover.png";
import { apiPostFormData } from "../../utils/apiHelpers";
import { Link, useNavigate } from "react-router-dom";

function AddRoom() {
  const [roomType, setRoomType] = useState("");
  const [roomNumber, setRoomNumber] = useState(0);
  const [hotelName, sethotelName] = useState("");
  const [isBooked, setIsBooked] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const { data } = await apiPostFormData(
      //   `https://localhost:44384/api/Room/add-room?RoomType_ID=${roomType}&Hotel_Name=${hotelName}`,
      //   {
      //     roomNo: roomNumber,
      //     isBooked,
      //   }
      // );
      const { data } = await fetch(
        `https://localhost:44384/api/Room/add-room?RoomType_ID=${roomType}&Hotel_Name=${hotelName}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json; charset=UTF-8", // <- HERE
          },
          //contentType: 'application/json; charset=UTF-8',
          body: JSON.stringify({ roomNo: roomNumber, isBooked: isBooked }),
        }
      );

      console.log(data);
    } catch (error) {
      alert(error);
    }
  };
  return (
    
   <div>
    <div className="AddRoom">
      
        <div className="high">
          <img
            className="roomPicture"
            src={myImage}
            alt="Pictorial Representation of the room"
          /> 
          
        </div>
      <div className="form-container">
      <Link to={'..'} onClick={(e) => { e.preventDefault(); navigate(-1);}}>
                    <button className="back">Back</button>
       </Link>
        <p className="Tops">Managers Add Room</p>
        <form onSubmit={handleSubmit} className="form-form">
          <div className="RoomType">
            <div className="no">
              <p className="see">Please Select Room Type </p>

              <select
                className="Drop"
                placeholder="Add A Room Here"
                onChange={(e) => setRoomType(e.target.value)}
              >
                <option value="1c44a012-a41d-4001-8619-4642ba14095d">
                  Jacky
                </option>
                <option value="4559602d-245c-4f66-afb6-03abc2198a32">
                  Claudie
                </option>
                <option value="0fc9eec6-f31a-4314-873b-f284ecfc93c1">
                  Gretchen
                </option>
                <option value="15b178f3-a7d6-4add-8f9e-b3274f3faced">
                  Franco
                </option>
              </select>
              <p>Please Type In The Room Number</p>
              <input
              className="room-number"
                type="text"
                placeholder="Room Number"
                onChange={(e) => setRoomNumber(e.target.value)}
              ></input>
            
             <p>Please Type In The Hotel Name</p>
              <input
               className="HotelName"
                type="text"
                placeholder="Hotel Name"
                onChange={(e) => sethotelName(e.target.value)}
              ></input>
            </div>

                 <div className="down">
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  onChange={() => setIsBooked(true)}
                />
              
                <label for="html" className="Hin">
                  Room Available
                </label>
                <br />
             
              <input
                type="radio"
                id="css"
                name="fav_language"
                onChange={() => setIsBooked(false)}
              />
              <label for="css" className="Hin">
                Room NotAvailable
              </label>
              </div>
            <button className="back-btn">Add Room</button>
          </div>
        </form>
      </div>
      </div>
    </div>
  
    
  );
}
export default AddRoom;