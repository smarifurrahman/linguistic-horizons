import { useEffect, useState } from "react";
import Spinner from "../Shared/Spinner/Spinner";
import Instructor from "./Instructor/Instructor";
import PageHeader from "../Shared/PageHeader/PageHeader";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setInstructors(data);
                setLoading(false)
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            })
    }, [])


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