import { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner/Spinner";
import Instructor from "./Instructor/Instructor";
import PageHeader from "../Shared/PageHeader/PageHeader";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get(`/instructors`)
            .then(res => res.data)
            .then(data => {
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
            <Helmet>
                <title>Linguistic Horizons | Instructors</title>
            </Helmet>
            <PageHeader title="Instructors"></PageHeader>

            <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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