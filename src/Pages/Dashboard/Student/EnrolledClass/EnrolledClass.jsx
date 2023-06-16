import useEnrolledClasses from "../../../../hooks/useEnrolledClasses";
import Spinner from "../../../Shared/Spinner/Spinner";
import EnrolledRow from "./EnrolledRow";


const EnrolledClass = () => {

    const [classes, loading] = useEnrolledClasses();

    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='w-[85%] mx-auto'>
            <div className='text-center py-14'>
                <h2 className='text-dark hover:text-primary-color text-4xl font-bold mb-3'>Enrolled Classes</h2>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Class Information</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map(aClass => <EnrolledRow
                                key={aClass._id}
                                aClass={aClass}
                            ></EnrolledRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default EnrolledClass;