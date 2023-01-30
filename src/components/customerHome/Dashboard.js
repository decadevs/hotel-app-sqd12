import Sidebar from '../navs/Sidebar';
import NavLink from '../navs/NavLink';
import Navbar from '../navs/Navbar';
import CustomerDashboard from './CustomerDashboard/CustomerDashboard';

export default function Dashboard() {
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
