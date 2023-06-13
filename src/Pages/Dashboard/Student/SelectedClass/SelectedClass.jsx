import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Spinner from "../../../Shared/Spinner/Spinner";
import ClassRow from "./ClassRow";

const SelectedClass = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    const url = `http://localhost:5000/seletedClasses?email=${user.email}`;
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

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brainwave-world-server.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'this toy has been deleted.',
                                'success'
                            )
                            const remaining = classes.filter(aClass => aClass._id !== id);
                            setClasses(remaining);
                        }
                    })
            }
        });
    }


    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>Selected Class</h2>
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
                            classes.map(aClass => <ClassRow
                                key={aClass._id}
                                aClass={aClass}
                                handleDelete={handleDelete}
                            ></ClassRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default SelectedClass;