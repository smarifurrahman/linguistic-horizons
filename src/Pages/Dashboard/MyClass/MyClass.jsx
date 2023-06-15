import { useState } from "react";
import useMyClasses from "../../../hooks/useMyClasses";
import MyClassRow from "./MyClassRow";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MyClass = () => {
    const [classes, refetch] = useMyClasses();
    const [clickedClass, setClickedClass] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleUpdate = aClass => {
        setClickedClass(aClass);
        window.updateClassModal.showModal();
    }

    const onsubmit = (data) => {
        
    }


    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>My Classes</h2>
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
                            <th>Enrolled Students</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(aClass => <MyClassRow
                                key={aClass._id}
                                aClass={aClass}
                                handleUpdate={handleUpdate}
                            ></MyClassRow>)
                        }
                    </tbody>
                </table>
            </div>

            
        </div >
    );
};

export default MyClass;