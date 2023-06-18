import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Instructors from "../Pages/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import SelectedClass from "../Pages/Dashboard/Student/SelectedClass/SelectedClass";
import EnrolledClass from "../Pages/Dashboard/Student/EnrolledClass/EnrolledClass";
import StudentHome from "../Pages/Dashboard/Student/StudentHome/StudentHome";
import InstructorHome from "../Pages/Dashboard/Instructor/InstructorHome/InstructorHome";
import AddClass from "../Pages/Dashboard/Instructor/AddClass/AddClass";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ManageClasses from "../Pages/Dashboard/Admin/ManageClasses/ManageClasses";
import MyClass from "../Pages/Dashboard/Instructor/MyClass/MyClass";

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
                path: 'admin-home',
                element: <AdminHome></AdminHome>
            },
            {
                path: 'instructor-home',
                element: <InstructorHome></InstructorHome>
            },
            {
                path: 'students-home',
                element: <StudentHome></StudentHome>
            },
            // admin only routes
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manage-classes',
                element: <ManageClasses></ManageClasses>
            },
            // instructor only routes
            {
                path: 'my-classes',
                element: <MyClass></MyClass>
            },
            {
                path: 'add-class',
                element: <AddClass></AddClass>
            },
            // students only routes
            {
                path: 'selected-class',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'enrolled-class',
                element: <EnrolledClass></EnrolledClass>
            }
        ]
    }
]);

export default router;