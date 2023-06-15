import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

import Swal from "sweetalert2";

const SocialLogin = ({ setError }) => {
    const { googleSignIn, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL, role: 'Student' }
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
                            console.log('New User Registered.');
                        }
                        else {
                            console.log('Registered User.')
                        }
                        Swal.fire(
                            'Google Login Successful!',
                            'Your have been logged in successfully.',
                            'success'
                        )
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
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
                            console.log('New User Registered.');
                        }
                        else {
                            console.log('Registered User.')
                        }
                        Swal.fire(
                            'GitHub Login Successful!',
                            'Your have been logged in successfully.',
                            'success'
                        )
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
            })
    }

    return (
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
    );
};

export default SocialLogin;