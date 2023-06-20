import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import useAuth from "../hooks/useAuth";
import PageSpinner from "../Pages/Shared/PageSpinner/PageSpinner";

const Main = () => {
    const { user } = useAuth();

    if (!user) {
        return <PageSpinner></PageSpinner>
    }

    return (
        <div className="bg-white-secondary">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;