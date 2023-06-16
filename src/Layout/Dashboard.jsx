import { NavLink, Outlet } from "react-router-dom";

import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBook, FaUsers, FaPlusSquare, FaAtlas } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    console.log('isAdmin:', isAdmin, '; isInstructor:', isInstructor);

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start mt-5">
                {/* Page content here */}
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/instructorHome"><FaWallet></FaWallet> Instructor Home</NavLink></li>
                            <li><NavLink to="/dashboard/myclasses"> <FaAtlas></FaAtlas> My Classes</NavLink></li>
                            <li><NavLink to="/dashboard/addClass"> <FaPlusSquare></FaPlusSquare> Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/manageusers"><FaUsers></FaUsers> Manage Users</NavLink></li>
                            <li><NavLink to="/dashboard/manageclasses"><FaBook></FaBook> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/selectedclass"><FaBook></FaBook> Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/enrolledclass"><FaBook></FaBook> Enrolled Classes</NavLink></li>
                        </>
                            : <>
                                <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Enrolled</NavLink></li>
                                <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li><NavLink to="/dashboard/myclass"><FaShoppingCart></FaShoppingCart> My Class</NavLink></li>
                            </>
                    }


                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/classes"><FaHome></FaHome> Classes</NavLink> </li>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;