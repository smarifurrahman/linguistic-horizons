import Swal from "sweetalert2";
import useClasses from "../../../hooks/useClasses";
import ClassRow from "./ClassRow";

const ManageClasses = () => {
    const [classes, refetch] = useClasses();

    const handleApprove = aClass => {
        fetch(`http://localhost:5000/classes/approved/${aClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${aClass.className} is Approved!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeny = aClass => {
        fetch(`http://localhost:5000/classes/denied/${aClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${aClass.className} is Denied!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    

    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>Manage Classes</h2>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class Information</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(aClass => <ClassRow
                                key={aClass._id}
                                aClass={aClass}
                                handleApprove={handleApprove}
                                handleDeny={handleDeny}
                                handleFeedback={handleFeedback}
                            ></ClassRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageClasses;