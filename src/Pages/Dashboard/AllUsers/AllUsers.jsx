import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";
import UserRow from "./UserRow";

const AllUsers = () => {
    const [users, refetch] = useUsers();
    console.log(users)

    const handleAdmin = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/seletedClasses/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'this toy has been deleted.',
                                'success'
                            )
                            refetch();
                        }
                    })
            }
        });
    }


    const handleInstructor = () => {
        console.log('Clicked');
    }

    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>All Users</h2>
            </div>
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
                                handleAdmin={handleAdmin}
                                handleInstructor={handleInstructor}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default AllUsers;