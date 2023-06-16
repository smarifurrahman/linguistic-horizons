import useEnrolledClasses from "../../../../hooks/useEnrolledClasses";
import EnrolledRow from "./EnrolledRow";


const EnrolledClass = () => {

    const [classes] = useEnrolledClasses();

    // useEffect(() => {
    //     if (userInfo.selectedClasses) {
    //         const ids = userInfo.selectedClasses;
    //         console.log(ids);
    //         fetch(`http://localhost:5000/selected-classes`, {
    //             method: 'POST',
    //             headers: { 'content-type': 'application/json' },
    //             body: JSON.stringify(ids)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 setClasses(data);
    //             })
    //     }
    // }, [userInfo.selectedClasses])

    console.log(classes)

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