import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import HmsIntegration from '../navs/DashboardContext';
import Booking from './booking/Bookings';

export default function AdminBookings() {
    return(
        <HmsIntegration>
            <Navbar/>
            <NavLink>
                <Booking/>
            </NavLink> 
            <Sidebar roleValue={"Admin"}/>
        </HmsIntegration>        
    )
}