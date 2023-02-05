import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import HmsIntegration from '../navs/DashboardContext';
import Hotelview from '../../pages/customer/Hotelview';

export default function Hotels() {
    return(
        <HmsIntegration>
            <Navbar/>
            <NavLink>
                <Hotelview/>
            </NavLink> 
            <Sidebar roleValue={"Admin"}/>
        </HmsIntegration>
        
    )
}