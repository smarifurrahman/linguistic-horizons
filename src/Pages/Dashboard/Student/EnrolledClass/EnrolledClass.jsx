import { Helmet } from "react-helmet-async";
import useEnrolledClasses from "../../../../hooks/useEnrolledClasses";
import Spinner from "../../../Shared/Spinner/Spinner";
import EnrolledRow from "./EnrolledRow";
import PageHeader from "../../../Shared/PageHeader/PageHeader";


const EnrolledClass = () => {

    const [classes, loading] = useEnrolledClasses();
    console.log(classes);

    if (loading) {
        return <Spinner></Spinner>
    }

    return (
        <div className='w-[85%] mx-auto'>
            <Helmet>
                <title>Linguistic Horizons | Enrolled Classes</title>
            </Helmet>
            <PageHeader title="Enrolled Classes"></PageHeader>

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
                            classes?.map(aClass => <EnrolledRow
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