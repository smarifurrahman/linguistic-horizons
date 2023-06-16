import { useState } from "react";
import useMyClasses from "../../../hooks/useMyClasses";
import MyClassRow from "./MyClassRow";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MyClass = () => {
    const [classes, refetch] = useMyClasses();
    const [clickedClass, setClickedClass] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState('');

    const handleUpdate = aClass => {
        setClickedClass(aClass);
        window.updateClassModal.showModal();
    }

    const onsubmit = (data) => {
        const { className, classPhoto, availableSeats, price } = data;
        const updateClassInfo = {
            className,
            classPhoto,
            availableSeats,
            price,
        };

        console.log(updateClassInfo)

        fetch(`https://linguistic-horizons-server.vercel.app/classes/updateclass/${clickedClass._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateClassInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    reset();
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${clickedClass.className} update success!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                console.error(error);
                setError(error);
            })
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
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Enrolled Students</th>
                            <th>Status</th>
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
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Update Class</h1>
                        <hr className='mt-5' />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <input {...register("className", { required: true })} defaultValue={clickedClass.className} type="text" name='className' placeholder="title" className="input input-bordered" />
                            {errors.className?.type === 'required' && <p className="text-red-600 text-sm mt-2">Class Name is required</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Photo</span>
                            </label>
                            <input {...register("classPhoto", { required: true })} defaultValue={clickedClass.classPhoto} type="text" name='classPhoto' placeholder="url" className="input input-bordered" />
                            {errors.classPhoto?.type === 'required' && <p className="text-red-600 text-sm mt-2">Class Photo is required</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input {...register("availableSeats", {
                                required: true,
                                pattern: /(?=.*[0-9])/
                            })} defaultValue={clickedClass.availableSeats} type="text" name='availableSeats' placeholder="seats" className="input input-bordered" />
                            {errors.availableSeats?.type === 'required' && <p className="text-red-600 text-sm mt-2">Seats is required</p>}
                            {errors.availableSeats?.type === 'pattern' && <p className="text-red-600 text-sm mt-2">Seats must be in number.</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input {...register("price", {
                                required: true,
                                pattern: /(?=.*[0-9])/
                            })} defaultValue={clickedClass.price} type="text" name='price' placeholder="price" className="input input-bordered" />
                            {errors.price?.type === 'required' && <p className="text-red-600 text-sm mt-2">Price is required</p>}
                            {errors.price?.type === 'pattern' && <p className="text-red-600 text-sm mt-2">Price must be in number.</p>}
                        </div>
                    </div>

                    <div className="form-control mt-4">
                        <button type="submit" className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color">Add Class</button>
                    </div>
                    <p className='text-pink-start text-center mt-4'>{error}</p>
                </form>
            </dialog>
        </div >
    );
};

export default MyClass;