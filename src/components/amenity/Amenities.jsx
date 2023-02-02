import "./Amenities.css";
import React, { useEffect, useState } from "react";
import { BiFilter } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import {
  MdMoreHoriz,
  MdOutlineModeEditOutline,
  MdOutlineDeleteForever,
} from "react-icons/md";
import Modal from "@mui/material/Modal";
import { red } from "@mui/material/colors";
import Axios from "../../api/Axios";

export default function () {
  const [open, setOpen] = React.useState(false);
  const [tableData, setTableData] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [id, setId] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("/api/Amenity/CreateAmenity", {
      name: name,
      price: price,
      discount: discount,
      hotelId: id
    })
      .then((res) => {
        console.log(res);
        setPrice(0);
        setDiscount(0);
        setName("");
      })
      .catch((err) => console.log(err));

    // event.reset();
  };

  useEffect(() => {
    const getData = async () => {
      await Axios.get("/api/Amenity/GetAmenities")
        .then((res) => {
          setTableData(res?.data?.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, [setTableData]);

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

        <button className="create-amenity-button" onClick={() => handleOpen()}>
          <AiOutlinePlus style={{ marginRight: ".4rem", fontSize: "1rem" }} />
          Create Amenity
        </button>
      </div>
      <table className="amenities-table">
        <thead>
          <tr>
            <th className="first-column">
              <input className="table-checkbox" type="checkbox" />
            </th>
            <th>Name</th>
            <th>Price</th>
            <th>Discount</th>
            <th>
              <MdMoreHoriz className="table-icons table-icons-hover" />
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((data) => {
            return (
              <tr key={data?.name} onClick={() => setId(data?.name)}>
                <td className="first-column">
                  <input type="checkbox" />
                </td>
                <td>{data?.name}</td>
                <td>{data?.price}</td>
                <td>{data?.discount}</td>
                <td className="table-icons">
                  <MdOutlineModeEditOutline className="table-icons-hover" />
                  <MdOutlineDeleteForever className="table-icons-hover" />
                  <MdMoreHoriz className="table-icons-hover" />
                </td>
              </tr>
            );
          })}
        </tbody>

        {/* <tr>
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
        </tr> */}
      </table>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowY: "auto",
          outline: "none",
          ":focus": {
            outline: "none",
            border: "none",
          },
        }}
      >
        <div className="formBody">
          <h1 className="formName">Add Amenity</h1>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
              handleClose();
            }}
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                className="amenityInput"
                value={name}
                onChange={handleNameChange}
              ></input>
            </div>
            <div>
              <input
                type="number"
                placeholder="Price"
                className="amenityInput"
                value={price}
                onChange={handlePriceChange}
              ></input>
            </div>
            <div>
              <input
                type="number"
                placeholder="Discount"
                className="amenityInput"
                value={discount}
                onChange={handleDiscountChange}
              ></input>
            </div>
            <button className="modal-button" type="submit">
              Add Amenity
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}
