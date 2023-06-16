import { useState } from "react";
import Swal from "sweetalert2";
import Spinner from "../../../Shared/Spinner/Spinner";
import SelectedRow from "./SelectedRow";
import useSelectedClasses from "../../../../hooks/useSelectedClass";

const SelectedClass = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(false);

    const [userInfo, refetch] = useSelectedClasses();

    if (userInfo.selectedClasses) {
        const ids = userInfo.selectedClasses;
        ids.map(async id => {
            // const res = await fetch(`http://localhost:5000/classes/${id}`);
            // const data = await res.json();
            // setClasses([...classes, data]);

            fetch(`http://localhost:5000/classes/${id}`)
                .then(res => res.json())
                .then(data => {
                    setClasses([...classes, data]);
                })
        })
    }

    const handleDelete = id => {
        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.isConfirmed) {

        //         fetch(`http://localhost:5000/seletedClasses/${id}`, {
        //             method: 'DELETE'
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 console.log(data);
        //                 if (data.deletedCount > 0) {
        //                     Swal.fire(
        //                         'Deleted!',
        //                         'this toy has been deleted.',
        //                         'success'
        //                     )
        //                     const remaining = classes.filter(aClass => aClass._id !== id);
        //                     setClasses(remaining);
        //                 }
        //             })
        //     }
        // });
    }

    const handlePay = aClass => {
        console.log(aClass);
    }


    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>Selected Classes</h2>
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(aClass => <SelectedRow
                                key={aClass._id}
                                aClass={aClass}
                                handleDelete={handleDelete}
                                handlePay={handlePay}
                            ></SelectedRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default SelectedClass;