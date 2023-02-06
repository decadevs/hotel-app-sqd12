import React, { createContext } from "react";
import { apiGet } from "../utils/api/axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [getHotel, setGetHotel] = useState(null);

  /**=============Get all Review By Id ======= **/
  const GetHotelConfig = async (id) => {
    try {
      await apiGet(`review/${id}`).then((res) => {
        setGetHotel(res.data);  
      });
    } catch (err) {
      console.log(err)
    }
  };


  return (
    <dataContext.Provider
      value=
      {{
        getHotel,
        GetHotelConfig,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(dataContext);
  if (context === "undefined") {
    throw new Error("useAuth must be used within the auth provider");
  }
  return context;
};

export default DataProvider;
