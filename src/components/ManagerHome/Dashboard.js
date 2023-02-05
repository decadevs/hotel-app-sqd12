import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import CustomerDashboard from '../customerHome/CustomerDashboard/CustomerDashboard';
import Section from '../navs/navContext';
import { useEffect, useState } from 'react';

export default function Dashboard() {
       const [payload, usePayload] = useState({})
       
       
    return(
        <Section>
            <Navbar/>
            <NavLink>
               <CustomerDashboard/>
            </NavLink> 
            <Sidebar roleValue={"Manager"}/>
        </Section>
        
    )
}