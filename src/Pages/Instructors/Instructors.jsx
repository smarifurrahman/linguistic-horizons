import { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner/Spinner";
import Instructor from "./Instructor/Instructor";
import PageHeader from "../Shared/PageHeader/PageHeader";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/users')
            .then(res => res.data)
            .then(data => {
                console.log(data);
                setInstructors(data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    }, [axiosSecure])


    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className='w-[85%] mx-auto'>
            <PageHeader title="Instructors"></PageHeader>

            <div className="w-full grid grid-cols-3">
                {
                    instructors.map((instructor) => <Instructor
                        key={instructor._id}
                        instructor={instructor}
                    ></Instructor>)
                }
            </div>
        </div >
    );
};

export default Instructors;