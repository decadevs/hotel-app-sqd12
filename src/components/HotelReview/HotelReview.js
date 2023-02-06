import React, { useEffect } from "react";
import Sidebar from "../navs/Sidebar";
import { useState } from "react";

import "./HotelReview.css";
import reviewImg from "../../components/HotelReview/assets/review-img.png";
import reviewImg1 from "../../components/HotelReview/assets/review-img1.png";
import reviewImg2 from "../../components/HotelReview/assets/review-img2.png";
import reviewImg3 from "../../components/HotelReview/assets/review-img3.png";
import reviewImg4 from "../../components/HotelReview/assets/review-img4.png";

import { Rate } from "antd";
import { Pagination } from "antd";
import { Progress } from "antd";
import axios from "axios";
import SkeletonInput from "antd/es/skeleton/Input";
// import HotelFilter from "../FilterCard";

function HotelReview()
{
  const [data, setData] = useState([]);
  useEffect(() =>
  {
    fetch('https://localhost:44384/api/Review/')
      .then(response => response.json())
      .then(data => SVGMetadataElement(data));

  }, [])
  const [activeHotel, setActiveHotel] = useState(1);
  const [activePick, setActivePick] = useState(1);
  return (
    <div className="review-card-container">
      {/* <HotelFilter /> */}
      <Sidebar />
      <div className="review-header-img">
        <img src={reviewImg} alt="Hotel Display" width={1300} />
      </div>{" "}
      <div>
        <h2 className="review-label">Hotels {">"} Details</h2>{" "}
      </div>
      <div className="first_span">
        {" "}
        <span
          className={activeHotel == 1 ? "span-btn active-hotel" : "span-btn"}
          onClick={() => setActiveHotel(1)}
        >
          Rooms
        </span>{" "}
        <span>|</span>{" "}
        <span
          className={activeHotel == 2 ? "span-btn active-hotel" : "span-btn"}
          onClick={() => setActiveHotel(2)}
        >
          Reviews
        </span>{" "}
        <span>|</span> {/* <hr className="solid_line"></hr> */}
        <span
          className={activeHotel == 3 ? "span-btn active-hotel" : "span-btn"}
          onClick={() => setActiveHotel(3)}
        >
          Contacts
        </span>{" "}
      </div>{" "}
      <div className="review-list">
        <h2 className="review-listings-label">Recent guest review</h2>{" "}
        <div className="review-sort">
          {" "}
          <label className="review-label" for="cars">
            Guest rating
          </label>{" "}
          <select className="review-select-drop-down" name="cars" id="cars">
            {" "}
            <option value="Best hotel in Lagos!">
              Best hotel in Lagos!
            </option>{" "}
            <option value="Very nice hotel">Very nice hotel</option>{" "}
            <option value="Stay at radisson">Stay at radisson</option>{" "}
            <option value="Excellent stay/money well spent">
              Excellent stay/money well spent
            </option>{" "}
          </select>{" "}
        </div>{" "}
      </div>{" "}
      <div className="review-progress-card">
        <div className="review-progress">
          <label className="review-progress-p">Staff</label>
          <Progress percent={7.5} status="active" />
          <label className="review-progress-p">Facilities</label>
          <Progress percent={7.5} status="active" />
          <label className="review-progress-p">Cleanliness</label>
          <Progress percent={8.0} status="active" />
        </div>
        <div className="review-progress">
          <label className="review-progress-p">Location</label>
          <Progress percent={7.9} status="active" />
          <label className="review-progress-p">Services</label>
          <Progress percent={7.5} status="active" />
          <label className="review-progress-p">Comfort</label>
          <Progress percent={7.5} status="active" />
        </div>
        <div className="review-progress">
          <label className="review-progress-p">Value for money</label>
          <Progress percent={7.6} status="active" />
          <label className="review-progress-p">Food</label>
          <Progress percent={7.5} status="active" />
          <label className="review-progress-p">Rooms</label>
          <Progress percent={8.5} status="active" />
        </div>
      </div>
      <div className="review-list-card">
        <div className="review-list-card-img">
          <img src={reviewImg1} alt="Hotel Display" />
          <p>Anderson Akunnem</p>
        </div>
        <div className="review-list-card-content">
          <h2 className="review-h2"> "Best hotel in Lagos!"</h2>
          <div className="review-list-card-review">
            <div className="review-text">
              <p>
                <Rate /> |<span className="review-h4"> Reviewed: </span>
                2021-06-16{" "}
              </p>
            </div>
          </div>

          <p>
            Stayed here for 20 nights in March 2019. have been working in and
            around Lagos for the past 4 year-end this is by far the best hotel I
            have stayed in. The rooms, staff, cleanliness, internet and comfort
            offered by this hotel are second to none. I am currently
            (unfortunately) staying across the road in the Sheraton. Not a
            scratch on the Raddison Blu and so I will be returning there in June
            for another 20 nights!
          </p>
        </div>
      </div>

      <div>
        <Pagination
          className="review-pagination"
          defaultCurrent={1}
          total={50}
        />
      </div>
    </div>
  );
}

export default HotelReview;
