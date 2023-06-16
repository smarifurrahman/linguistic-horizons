import { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner/Spinner";
import PageHeader from "../Shared/PageHeader/PageHeader";
import ClassCard from "./ClassCard/ClassCard";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/classes/?status=Approved')
            .then(res => res.data)
            .then(data => {
                console.log(data);
                setClasses(data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    }, [axiosSecure])

    const handleSelectClass = singleClass => {
        axiosSecure.patch(`/classes/selected/${singleClass._id}?email=${user.email}`)
            .then(res => res.data)
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${singleClass.className} is Selected!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else if (data.selected) {
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: `${singleClass.className} is ${data.message}!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className='w-[85%] mx-auto'>
            <PageHeader title="Classes"></PageHeader>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    classes.map((singleClass) => <ClassCard
                        key={singleClass._id}
                        singleClass={singleClass}
                        handleSelectClass={handleSelectClass}
                    ></ClassCard>)
                }
            </div>
        </div >
    );
};

export default Classes;