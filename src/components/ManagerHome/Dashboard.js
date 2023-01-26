import React from "react";
import "../ManagerHome/Dashboard.css";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiFilter } from "react-icons/bi";
import { FaEllipsisH } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
function Dashboard() {
  return (

    <>
    <>
    <>
      <ManagerCard />
      <AdditionalInfo />
      <TotalAmountGenerated />
            <div className="manager-dashboard">
              <div className="manager-table-container">
                <table>
                <div className="ManagerSearchBar">
                    <span>
                        <BiFilter className="ManagerFilterIcon" />
                    </span>
                        <div className="ManagersearchInput">
                          <HiMagnifyingGlass className="ManagerSearchIcon" />
                          <input type="text" placeholder="Search" />
                        </div>
                    </div>
                <button class="add-customer new-style">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM7 13H13V7H7V13ZM13 13C13 13.55 12.55 14 12 14C11.45 14 11 13.55 11 13V7C11 6.45 11.45 6 12 6C12.55 6 13 6.45 13 7V13Z" fill="#fff"/>
                    </svg>
                    Add customer
                </button>
              <tr>
                <th className="ManagerCheckBox">
                  <input type="checkbox" />
                </th>
                <th>MANAGER NAME</th>
                <th>HOTEL</th>
                <th>PHONE</th>
                <th>
                  <FaEllipsisH />
                </th>
              </tr>
              <tr>
              <td className="ManagerCheckBox">
                    <input type="checkbox" />
              </td>
                    <td>Kadin Herwitz<tr>5684236583</tr></td>
                    <td>Lorem Ipsumdolor sit</td>
                    <td>66666666</td>
                <td>
              <div className="ManagerCrud">
                    <span>
                          <MdModeEdit />
                    </span>
                    <span>
                          <RiDeleteBin5Fill />
                    </span>
                    <span>
                          <FaEllipsisH />
                    </span>
              </div>
                </td>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>66666666</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz`<tr>5684236583</tr>`</td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>778777777</td>
                  <div className="ManagerCrud">
                  <span>
                      <MdModeEdit />
                  </span>
                  <span>
                      <RiDeleteBin5Fill />
                  </span>
                  <span>
                      <FaEllipsisH />
                  </span>
                </div>
                </tr>
                <tr>
                <td className="ManagerCheckBox">
                <input type="checkbox" />
                </td>
                <td>Kadin Herwitz<tr>5684236583</tr></td>
                <td>Lorem Ipsumdolor sit</td>
                <td>66666666</td>
                <div className="ManagerCrud">
                <span>
                <MdModeEdit />
                </span>
                <span>
                <RiDeleteBin5Fill />
                </span>
                <span>
                <FaEllipsisH />
                </span>
                </div>
                </tr>
                </table>
                <div className="Manager-pagination">
                  <div>
                      <h15>ACTIVE MANAGERS: 470/706</h15>
                  </div>
                  <div>
                    <label for="Manager-dd">
                        <b>Rows per page</b>
                    </label>
                  <select id="Manager-dd" name="number">
                      <option value="null"> </option>
                      <option value="five">5</option>
                      <option value="ten">10</option>
                      <option value="twenty">20</option>
                  </select>
                <div>
                <h10>1-10 of 706</h10>
                <FaAngleLeft />
                <FaAngleRight />
                </div>
                </div>
                </div>
            </div>
        </div>
        </>
        </>
        </>
  );
    }
    function ManagerCard() {
      return (
        <div className="card manager-admin-pane" >
    <div className="card-body" >
      <div className="manager-info-container" style={{ display: 'flex', flexDirection: 'column'}}>
          <div style={{ display: 'flex' }}>
          <img src={require('./avatar.jpg')} alt="Avatar" className="avatar" />
          <div className="name">Angelo Akuhwa</div>
          <div className="age-gender">28, Male</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
          </div>
        </div>
        <div className="details">
            <div className="hotel">Hotel: Radison Blu Hotels</div>
            <div className="mobile">Mobile: 08032342134</div>
            <div className="email">Email: angelo.a@email.com</div>
            <div className="address">Address: 23 Ohen Street, Edo</div>
        </div>
    </div>
    </div>
    </div>
    );
    }

       function AdditionalInfo() {
      return (
            <div className="card additional-info-card">
                <div className="card-body">
                  <div className="additionalInfo">
                      <div className="additionalRecord">Additional Records</div>
                      <div className="dateJoined">Date Joined: 12/12/2020</div>
                      <div className="last-update">Last Update: 12/12/2020</div>
                      <div className="managerId">Manager ID: 123456789</div>
                      <div className="totalHotels">Total Hotels: 2</div>
                    </div>
                </div>
              </div>
      );
    }
             function TotalAmountGenerated() {
              return (
                    <div className="total-ammount-generated">
                        <div className="card-body">
                          <div className="totalAmountGenerated">
                              <div className="total-amount-generated">Total Amount Generated</div>
                              <div className="amount">₦ 540,000</div>
                            </div>
                        </div>
                      </div>
              );
            }
        export default Dashboard;