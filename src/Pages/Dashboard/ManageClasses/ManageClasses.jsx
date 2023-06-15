import Swal from "sweetalert2";
import useClasses from "../../../hooks/useClasses";
import ClassRow from "./ClassRow";

const ManageClasses = () => {
    const [classes, refetch] = useClasses();

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
                            ></ClassRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageClasses;