import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const SignUp = () => {

    const [error, setError] = useState('');
    const { createUser, updateUser, googleSignIn, githubSignIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/';

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                Swal.fire(
                    'Google Login Successful!',
                    'Your have been logged in successfully.',
                    'success'
                )
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                Swal.fire(
                    'GitHub Login Successful!',
                    'Your have been logged in successfully.',
                    'success'
                )
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {
            setError('Password not matched');
            return;
        }
        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);

                updateUser(result.user, data.name, data.photo)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    console.log('profile updated');
                                    reset();
                                    Swal.fire(
                                        'Email Login Successful!',
                                        'Your have been logged in successfully.',
                                        'success'
                                    )
                                    navigate(from, { replace: true })
                                }
                            })
                    })
                    .catch(error => {
                        console.error(error.message);
                        setError(error.message);
                    })
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })

    };

    // const passwordRef = useRef(null);
    // const [disabled, setDisabled] = useState(false);

    // const handleConfirmPassword = (e) => {
    //     const password = e.target.value;
    //     if (password !== passwordRef) {
    //         setDisabled(false);
    //     }
    //     else {
    //         setDisabled(true)
    //     }
    // }

    return (
        <div className="hero min-h-screen">
            <Helmet>
                <title>Linguistic Horizons | Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col ">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body p-12 pb-0 mb-6 sm:w-[400px]">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                            <hr className='mt-5' />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600 text-sm mt-2">Name is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600 text-sm mt-2">Email is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })} name='password' placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600 text-sm mt-2">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600 text-sm mt-2">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600 text-sm mt-2">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600 text-sm mt-2">Password must have one Uppercase and one Special Character</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" {...register("confirmPassword", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                            })} name='confirmPassword' placeholder="confirm password" className="input input-bordered" />
                            {errors.confirmPassword?.type === 'required' && <p className="text-red-600 text-sm mt-2">Confirm Password is required</p>}
                            {errors.confirmPassword?.type === 'minLength' && <p className="text-red-600 text-sm mt-2">Confirm Password must be 6 characters</p>}
                            {errors.confirmPassword?.type === 'maxLength' && <p className="text-red-600 text-sm mt-2">Confirm Password must be less than 20 characters</p>}
                            {errors.confirmPassword?.type === 'pattern' && <p className="text-red-600 text-sm mt-2">Confirm Password must have one Uppercase and one Special Character</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photo", { required: true })} name='photo' placeholder="url" className="input input-bordered" />
                            {errors.photo && <span className="text-red-600 text-sm mt-2">Photo is required</span>}
                        </div>

                        <div className="form-control mt-4">
                            <input disabled={false} className="btn bg-primary-color hover:bg-secondary-color border-primary-color hover:border-secondary-color" type="submit" value="Sign Up" />
                        </div>
                        <p className='text-red-600 text-center mt-4'>{error}</p>
                    </form>
                    <div className='px-12 pb-12'>
                        <hr />
                        <p className='text-center mt-2'>or Continue with</p>
                        <div className='flex gap-3 justify-center'>
                            <div className="form-control mt-4">
                                <button onClick={handleGoogleSignIn} className="btn text-primary-color hover:text-white bg-white hover:bg-primary-color border-primary-color hover:border-primary-color px-6">
                                    <FaGoogle className='text-2xl' />
                                </button>
                            </div>
                            <div className="form-control mt-4">
                                <button onClick={handleGithubSignIn} className="btn text-primary-color hover:text-white bg-white hover:bg-primary-color border-primary-color hover:border-primary-color px-6">
                                    <FaGithub className='text-2xl' />
                                </button>
                            </div>
                        </div>
                        <div>
                            <p className="label-text-alt text-center mt-4">Already have an account ?
                                <span> <Link className="link link-hover text-primary-color font-semibold" to="/login">Login</Link> </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;