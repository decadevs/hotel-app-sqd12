import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import Booking from '../../pages/customer/Hotelview';

export default function Hotels() {
    return(
        <>
            <Navbar/>
            <NavLink>
                <Booking/>
            </NavLink> 
            <Sidebar roleValue={"Manager"}/>
        </>
    )
}