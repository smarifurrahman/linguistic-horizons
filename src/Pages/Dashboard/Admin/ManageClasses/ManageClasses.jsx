import Swal from "sweetalert2";
import ClassRow from "./ClassRow";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useClasses from "../../../../hooks/useClasses";
import PageHeader from "../../../Shared/PageHeader/PageHeader";
import Spinner from "../../../Shared/Spinner/Spinner";

const ManageClasses = () => {
    const [classes, refetch, loading] = useClasses();
    const [clickedClass, setClickedClass] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const handleApprove = aClass => {
        axiosSecure.patch(`/classes/approved/${aClass._id}`)
            .then(res => res.data)
            .then(data => {
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
        axiosSecure.patch(`/classes/denied/${aClass._id}`)
            .then(res => res.data)
            .then(data => {
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

    const handleFeedback = aClass => {
        setClickedClass(aClass);
        window.feedbackModal.showModal();
    }

    const onsubmit = (data) => {
        const feedback = data.feedback;
        const feedbackInfo = { feedback };

        fetch(`https://linguistic-horizons-server.vercel.app/classes/feedback/${clickedClass._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedbackInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    reset();
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Feedback sent for ${clickedClass.className} success!`,
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
                <title>Linguistic Horizons | Manage Classes</title>
            </Helmet>
            <PageHeader title="Manage Classes"></PageHeader>

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

            <dialog id="feedbackModal" className="modal">
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

export default ManageClasses;