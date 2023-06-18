import { NavLink, Outlet } from "react-router-dom";

import { FaHome, FaUsers, FaPlusSquare, FaChalkboardTeacher, FaEdit, FaCheckCircle, FaCartArrowDown, FaBookOpen, FaBookReader } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { Helmet } from "react-helmet-async";
import useStudent from "../hooks/useStudent";
const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [isStudent] = useStudent();
    console.log('isAdmin:', isAdmin, '; isInstructor:', isInstructor, '; isStudent:', isStudent);

    return (
        <div className="drawer lg:drawer-open">
            <Helmet>
                <title>Linguistic Horizons | Dashboard</title>
            </Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-start mt-5">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden mr-auto ml-16 mt-4 bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color text-dark">Open Menu</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <p className="text-xl font-semibold py-5 px-4">Linguistic Horizons</p>

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/admin-home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/manage-users"><FaUsers></FaUsers> Manage Users</NavLink></li>
                            <li><NavLink to="/dashboard/manage-classes"><FaBookOpen></FaBookOpen> Manage Classes</NavLink></li>


                        </>
                            : isInstructor ? <>
                                <li><NavLink to="/dashboard/instructor-home"><FaHome></FaHome> Instructor Home</NavLink></li>
                                <li><NavLink to="/dashboard/my-classes"> <FaBookReader></FaBookReader> My Classes</NavLink></li>
                                <li><NavLink to="/dashboard/add-class"> <FaPlusSquare></FaPlusSquare> Add a Class</NavLink></li>
                            </>
                                : isStudent ? <>
                                    <li><NavLink to="/dashboard/students-home"><FaHome></FaHome> Students Home</NavLink></li>
                                    <li><NavLink to="/dashboard/selected-class"><FaCartArrowDown></FaCartArrowDown> Selected Classes</NavLink></li>
                                    <li><NavLink to="/dashboard/enrolled-class"><FaCheckCircle></FaCheckCircle> Enrolled Classes</NavLink></li>
                                </>
                                    : <>
                                    </>
                    }

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/classes"><FaEdit></FaEdit> Classes</NavLink> </li>
                    <li><NavLink to="/instructors"><FaChalkboardTeacher></FaChalkboardTeacher> Instructors</NavLink> </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;