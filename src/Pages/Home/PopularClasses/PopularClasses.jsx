import { useEffect, useState } from "react";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import Spinner from "../../Shared/Spinner/Spinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PopularClassCard from "./PopularClassCard";

const PopularClasses = () => {
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/classes/?sort=true')
            .then(res => res.data)
            .then(data => {
                console.log(data);
                if (data.length > 8) {
                    const newData = data.slice(0, 8);
                    setClasses(newData);
                    setLoading(false)
                }
                else {
                    setClasses(data);
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
            <SectionHeader heading="Popular Classes" subHeading="Explore our popular classes"></SectionHeader>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {
                    classes.map((singleClass) => <PopularClassCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></PopularClassCard>)
                }
            </div>
        </section>
    );
};

export default PopularClasses;