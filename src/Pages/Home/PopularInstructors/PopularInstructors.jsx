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
        axiosSecure.get('/users/?role=Instructor')
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
        <section className='mt-20 w-[85%] mx-auto'>
            <SectionHeader heading="Popular Classes" subHeading="Explore our popular classes"></SectionHeader>
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