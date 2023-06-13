import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Spinner from "../../../Shared/Spinner/Spinner";
import EnrolledRow from "./EnrolledRow";

const EnrolledClass = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    // const url = `http://localhost:5000/enrolledClasses?email=${user.email}`;
    const url = `http://localhost:5000/classes`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setClasses(data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    }, [url])

    console.log(classes);


    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>Enrolled Class</h2>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class Information</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((aClass, index) => <EnrolledRow
                                key={aClass._id}
                                aClass={aClass}
                                index={index}
                            ></EnrolledRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default EnrolledClass;