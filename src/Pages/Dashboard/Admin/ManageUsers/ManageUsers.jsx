import Swal from "sweetalert2";
import UserRow from "./UserRow";
import { Helmet } from "react-helmet-async";
import useUsers from "../../../../hooks/useUsers";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import PageHeader from "../../../Shared/PageHeader/PageHeader";
import Spinner from "../../../Shared/Spinner/Spinner";

const ManageUsers = () => {
    const [users, refetch, loading] = useUsers();
    const [axiosSecure] = useAxiosSecure();

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => res.data)
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const handleMakeInstructor = user => {
        axiosSecure.patch(`/users/instructor/${user._id}`)
            .then(res => res.data)
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='w-[85%] mx-auto'>
            <Helmet>
                <title>Linguistic Horizons | Manage Users</title>
            </Helmet>
            <PageHeader title="Manage Users"></PageHeader>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>User Information</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow
                                key={user._id}
                                user={user}
                                handleMakeAdmin={handleMakeAdmin}
                                handleMakeInstructor={handleMakeInstructor}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageUsers;