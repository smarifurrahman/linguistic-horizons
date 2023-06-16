import { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner/Spinner";
import PageHeader from "../Shared/PageHeader/PageHeader";
import ClassCard from "./ClassCard/ClassCard";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const Classes = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    useEffect(() => {
        fetch('http://localhost:5000/classes/?status=Approved')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    }, [])

    const handleSelectClass = singleClass => {
        fetch(`http://localhost:5000/classes/selected/${singleClass._id}?email=${user.email}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
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