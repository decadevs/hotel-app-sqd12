import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import Booking from '../../pages/customer/Hotelview';
import HmsIntegration from '../navs/DashboardContext';

export default function Hotels() {
    return(
        <HmsIntegration>
            <Navbar/>
            <NavLink>
                <Booking/>
            </NavLink> 
            <Sidebar roleValue={"Manager"}/>
        </HmsIntegration>
    )
}