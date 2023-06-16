import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import InstructorHome from "../Pages/InstructorAccess/InstructorHome/InstructorHome";
import AddClass from "../Pages/InstructorAccess/AddClass/AddClass";
import Student from "../Pages/Dashboard/Student/Student";
import Dashboard from "../Layout/Dashboard";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/ManageClasses/ManageClasses";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import SelectedClass from "../Pages/Dashboard/Student/SelectedClass/SelectedClass";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'manageusers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageclasses',
                element: <ManageClasses></ManageClasses>
            },
            // instructor routes
            {
                path: 'myclasses',
                element: <MyClass></MyClass>
            },
            {
                path: 'instructorhome',
                element: <InstructorHome></InstructorHome>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            // students
            {
                path: 'students',
                element: <Student></Student>
            },
            {
                path: 'selectedclass',
                element: <SelectedClass></SelectedClass>
            }
        ]
    }
]);

export default router;