import "./Amenities.css";
import React from "react";
import { BiFilter } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdMoreHoriz, MdOutlineModeEditOutline, MdOutlineDeleteForever } from "react-icons/md";

export default function () {
  return (
    <div className="container">
      <h1 className="amenities-h1">Amenities</h1>
      <div className="table-header">
        <div className="amenity-filter-search">
          <BiFilter className="filter-icon table-icons-hover" />
          <div className="amenities-search-container">
            <FaSearch className="search-icon table-icons-hover" />
            <input
              className="amenities-search-input"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        <button className="create-amenity-button">
          <AiOutlinePlus style={{ marginRight: ".4rem", fontSize: "1rem" }} />
          Create Amenity
        </button>
      </div>
      <table className="amenities-table">
        <tr>
          <th className="first-column">
            <input className="table-checkbox" type="checkbox" />
          </th>
          <th>Name</th>
          <th>Price</th>
          <th>Discount</th>
          <th>
            <MdMoreHoriz className="table-icons table-icons-hover"  />
          </th>
        </tr>
        <tr>
          <td className="first-column">
            <input type="checkbox" />
          </td>
          <td>Victor Madu</td>
          <td>{1000}</td>
          <td>{50}</td>
          <td className="table-icons">
            <MdOutlineModeEditOutline className="table-icons-hover" />
            <MdOutlineDeleteForever className="table-icons-hover" />
            <MdMoreHoriz className="table-icons-hover" />
          </td>
        </tr>
      </table>
    </div>
  );
}
