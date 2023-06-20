import { useEffect, useState } from "react";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import Spinner from "../../Shared/Spinner/Spinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/popular-instructors')
            .then(res => res.data)
            .then(data => {
                if (data.length > 8) {
                    const newData = data.slice(0, 8);
                    setInstructors(newData);
                    setLoading(false)
                }
                else {
                    setInstructors(data);
                    setLoading(false)
                }
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
        <section className='mt-20 w-[85%] mx-auto'>
            <SectionHeader heading="Popular Instructors" subHeading="Explore our popular Instructors"></SectionHeader>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    instructors.map((instructor) => <PopularInstructorsCard
                        key={instructor._id}
                        instructor={instructor}
                    ></PopularInstructorsCard>)
                }
            </div>
        </section>
    );
};

export default PopularInstructors;