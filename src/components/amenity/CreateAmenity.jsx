import React from "react";
import "./CreateAmenity.css";

export default function Amenity() {
  return (
    <div className="container">
      <div className="formBody">
        <h1 className="formName">Add Amenity</h1>
        <form>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="amenityInput"
            ></input>
          </div>
          <div>
            <input
              type="number"
              placeholder="Price"
              className="amenityInput"
            ></input>
          </div>
          <div>
            <input
              type="number"
              placeholder="Discount"
              className="amenityInput"
            ></input>
          </div>
          <button type="submit" className="modal-button">
            Add Amenity
          </button>
        </form>
      </div>
    </div>
  );
}
