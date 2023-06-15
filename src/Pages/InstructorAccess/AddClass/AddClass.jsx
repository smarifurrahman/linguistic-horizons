import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useForm } from "react-hook-form";

const AddClass = () => {
    const [error, setError] = useState('');
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onsubmit = data => {
        const { className, classPhoto, instructorName, instructorEmail, availableSeats, price, } = data;

        const classInfo = {
            className,
            classPhoto,
            instructorName,
            instructorEmail,
            instructorPhoto: user.photoURL,
            availableSeats,
            price,
            status: 'Pending',
        }

        console.log(classInfo);

        fetch('http://localhost:5000/addClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(classInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    reset();
                    Swal.fire(
                        'Added!',
                        'Your class has been added.',
                        'success'
                    )
                }
            })
            .catch(error => {
                console.error(error);
                setError(error);
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col ">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onsubmit)} className="card-body p-12 pb-0 mb-6 sm:w-[600px]">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Add a Class</h1>
                            <hr className='mt-5' />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input {...register("className", { required: true })} type="text" name='className' placeholder="title" className="input input-bordered" />
                                {errors.className?.type === 'required' && <p className="text-red-600 text-sm mt-2">Class Name is required</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Photo</span>
                                </label>
                                <input {...register("classPhoto", { required: true })} type="text" name='classPhoto' placeholder="url" className="input input-bordered" />
                                {errors.classPhoto?.type === 'required' && <p className="text-red-600 text-sm mt-2">Class Photo is required</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input {...register("instructorName", { required: true })} type="text" name='instructorName' placeholder="name" className="input input-bordered" readOnly defaultValue={user ? user.displayName : ''} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input {...register("instructorEmail", { required: true })} type="email" name='instructorEmail' placeholder="email" className="input input-bordered" readOnly defaultValue={user ? user.email : ''} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input {...register("availableSeats", {
                                    required: true,
                                    pattern: /(?=.*[0-9])/
                                })} type="text" name='availableSeats' placeholder="seats" className="input input-bordered" />
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
                                })} type="text" name='price' placeholder="price" className="input input-bordered" />
                                {errors.price?.type === 'required' && <p className="text-red-600 text-sm mt-2">Price is required</p>}
                                {errors.price?.type === 'pattern' && <p className="text-red-600 text-sm mt-2">Price must be in number.</p>}
                            </div>
                        </div>

                        <div className="form-control mt-4">
                            <button type="submit" className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color">Add Class</button>
                        </div>
                        <p className='text-pink-start text-center mt-4'>{error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;