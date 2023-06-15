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
        const feedback = data.feedback;
        const updateClassInfo = {
            feedback,
        };

        // fetch(`http://localhost:5000/classes/feedback/${clickedClass._id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updateClassInfo)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.modifiedCount) {
        //             reset();
        //             refetch();
        //             Swal.fire({
        //                 position: 'center',
        //                 icon: 'success',
        //                 title: `Feedback sent for ${clickedClass.className} success!`,
        //                 showConfirmButton: false,
        //                 timer: 1500
        //             })
        //         }
        //     })
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

            <dialog id="updateClassModal" className="modal">
                <form onSubmit={handleSubmit(onsubmit)} method="dialog" className="modal-box w-11/12 max-w-2xl">
                    <h3 className="font-bold text-lg">Send Feedback!</h3>
                    <textarea {...register("feedback", {
                        required: true,
                        minLength: 10,
                        maxLength: 500
                    })} name="feedback" rows="4" className="p-4 mt-2 border-2 rounded-lg border-gray w-full resize-none"></textarea>
                    {errors.feedback?.type === 'required' && <p className="text-red-600 text-sm mt-2">Feedback is required</p>}
                    {errors.feedback?.type === 'minLength' && <p className="text-red-600 text-sm mt-2">Feedback must be 10 characters</p>}
                    {errors.feedback?.type === 'maxLength' && <p className="text-red-600 text-sm mt-2">feedback must be less than 500 characters</p>}
                    <div className="modal-action mt-2">
                        <button className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color">Submit</button>
                    </div>
                </form>
            </dialog>
        </div >
    );
};

export default MyClass;