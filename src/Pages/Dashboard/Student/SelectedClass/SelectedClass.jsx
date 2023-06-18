import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import SelectedRow from "./SelectedRow";
import useSelectedClasses from "../../../../hooks/useSelectedClass";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import PageHeader from "../../../Shared/PageHeader/PageHeader";
import Spinner from "../../../Shared/Spinner/Spinner";

const SelectedClass = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const [userInfo, refetch, loading] = useSelectedClasses();

    useEffect(() => {
        if (userInfo.selectedClasses) {
            const ids = userInfo.selectedClasses;
            console.log(ids);
            fetch(`http://localhost:5000/selected-classes`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(ids)
            })
                .then(res => res.json())
                .then(data => {
                    setClasses(data);
                })
        }
    }, [userInfo.selectedClasses])

    console.log(classes)

    const handleDelete = aClass => {
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
                axiosSecure.patch(`/classes/selected/delete/${aClass._id}?email=${user.email}`)
                    .then(res => res.data)
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                            refetch()
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: `${aClass.className} is Deleted!`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            }
        });
    }

    const handlePay = aClass => {
        axiosSecure.patch(`/classes/enrolled/${aClass._id}?email=${user.email}`)
            .then(res => res.data)
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    axiosSecure.patch(`/classes/selected/delete/${aClass._id}?email=${user.email}`)
                        .then(res => res.data)
                        .then(data => {
                            console.log(data)
                            if (data.modifiedCount) {
                                refetch()
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: `${aClass.className} is Enrolled!`,
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                            else {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'warning',
                                    title: `${aClass.className} is Enrolled but Selected Classes Update Failed!`,
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
                else if (data.enrolled) {
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: `${aClass.className} is ${data.message}!`,
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
                <title>Linguistic Horizons | Selected Classes</title>
            </Helmet>
            <PageHeader title="Selected Classes"></PageHeader>

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