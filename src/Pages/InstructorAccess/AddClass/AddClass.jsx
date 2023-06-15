import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";

const AddClass = () => {
    const [error, setError] = useState('');
    const { user } = useContext(AuthContext);

    const handleAddClass = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const classPhoto = form.classPhoto.value;
        const className = form.className.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const price = parseFloat(form.price.value);
        const availableSeats = parseFloat(form.availableSeats.value);

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
                    form.reset();
                    Swal.fire(
                        'Added!',
                        'Your class has been added.',
                        'success'
                    )
                }
            })

    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col ">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleAddClass} className="card-body p-12 pb-0 mb-6 sm:w-[600px]">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Add a Class</h1>
                            <hr className='mt-5' />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Name</span>
                                </label>
                                <input type="text" name='className' placeholder="title" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Class Photo</span>
                                </label>
                                <input type="text" name='classPhoto' placeholder="url" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Name</span>
                                </label>
                                <input type="text" name='instructorName' placeholder="name" className="input input-bordered" required readOnly defaultValue={user ? user.displayName : ''} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Instructor Email</span>
                                </label>
                                <input type="email" name='instructorEmail' placeholder="email" className="input input-bordered" required readOnly defaultValue={user ? user.email : ''} />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available Seats</span>
                                </label>
                                <input type="text" name='availableSeats' placeholder="seats" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control mt-4">
                            <button className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color">Add Class</button>
                        </div>
                        <p className='text-pink-start text-center mt-4'>{error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;