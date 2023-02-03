import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import CustomerDashboard from './CustomerDashboard/CustomerDashboard';
import { useEffect, useState } from 'react';



export default function Dashboard() {
    const [customer, setCutomerer] = useState({});
           
    return(
        <>
             <Navbar/>            
                <NavLink>
                    <CustomerDashboard/>
                </NavLink>          
             <Sidebar roleValue={"Customer"}/>
        </>
        
    )
}
