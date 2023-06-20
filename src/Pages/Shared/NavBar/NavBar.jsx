
import { Link, useLocation } from "react-router-dom";
import ActiveRoute from "../ActiveRoute/ActiveRoute";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
    const { user, logOut } = useAuth();

    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = <>
        <li><ActiveRoute to="/">Home</ActiveRoute></li>
        <li><ActiveRoute to="/instructors">Instructors</ActiveRoute></li>
        <li><ActiveRoute to="/classes">Classes</ActiveRoute></li>
        {
            user ?
                <li><ActiveRoute to="/dashboard">Dashboard</ActiveRoute></li> :
                <li><ActiveRoute to="/signup">Sign Up</ActiveRoute></li>

        }
    </>

    const navItemsSmall = <>
        <li><ActiveRoute to="/">Home</ActiveRoute></li>
        <li><ActiveRoute to="/instructors">Instructors</ActiveRoute></li>
        <li><ActiveRoute to="/classes">Classes</ActiveRoute></li>
        {
            user ?
                <>
                    <li><ActiveRoute to="/dashboard">Dashboard</ActiveRoute></li>
                    <li><div style={{ "--tooltip-color": "#4acdd5", "--tooltip-text-color": "#FFFFFF" }} className='tooltip tooltip-left' data-tip={user.displayName}>
                        <img className='w-[45px] h-[45px] rounded-full object-cover align-top hover:tooltip mb-3' src={user.photoURL} alt="user photo" />
                    </div></li>
                    <li> <button onClick={logOut} className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color px-3 md:px-6 py-2 text-dark content-center">Logout</button></li></>
                :
                <>
                    <li><ActiveRoute to="/signup">Sign Up</ActiveRoute></li>
                    <li><Link to="/login" className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color px-3 md:px-6 text-dark content-center">Login</Link></li>
                </>
        }
    </>

    return (
        <div className={`navbar w-[85%] mx-auto py-5 flex items-center font-bold px-0 ${currentPath === '/' ? 'absolute left-0 right-0 top-0 z-50 text-white' : 'text-dark'}`}>
            <div className="navbar-start">
                <Link to="/" className="normal-case text-xl sm:text-[21px] hover:text-primary-color">Linguistic Horizons</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden px-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 px-2 pt-3 pb-5 shadow bg-dark bg-opacity-80 rounded-box w-[60vw] items-center justify-center text-white top-0 z-50 backdrop-blur">
                        {navItemsSmall}
                    </ul>
                </div>
                <div className="hidden lg:flex">
                    {
                        user ?
                            <div className='flex items-center gap-5'>
                                <div style={{ "--tooltip-color": "#4acdd5", "--tooltip-text-color": "#FFFFFF" }} className='tooltip tooltip-left' data-tip={user.displayName}>
                                    <img className='w-[45px] h-[45px] rounded-full object-cover align-top hover:tooltip' src={user.photoURL} alt="user photo" />
                                </div>
                                <button onClick={logOut} className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color px-3 md:px-6 text-dark">Logout</button>
                            </div> :

                            <Link to="/login" className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color px-3 md:px-6 text-dark">Login</Link>
                    }
                </div>
            </div>
        </div >
    );
};

export default NavBar;